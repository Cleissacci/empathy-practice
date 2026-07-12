// ════════════════════════════════════════════════════════════════
// Vercel serverless function — Gemini proxy for the empathy roleplays.
//
// The e-learning's roleplay engine calls window.claude.complete(prompt).
// In Claude's preview environment that function is injected for you; on
// Vercel it does not exist, so ui_kits/empathy-elearning/ai-backend.js
// defines it to POST the prompt here. This function forwards the prompt to
// Google Gemini using GEMINI_API_KEY, which lives ONLY in the server
// environment and is never exposed to the browser.
//
// Request:  POST { "prompt": "<string>" }
// Response: 200 { "text": "<model completion>" }  |  4xx/5xx { "error": "..." }
//
// Env vars (set in Vercel → Project → Settings → Environment Variables):
//   GEMINI_API_KEY  (required)  your Google AI Studio / Gemini API key
//   GEMINI_MODEL    (optional)  defaults to "gemini-3.5-flash"
// ════════════════════════════════════════════════════════════════

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY is not set on the server. Add it in Vercel → Settings → Environment Variables.',
    });
  }

  // Parse the prompt from the JSON body (Vercel usually parses it for us).
  let prompt = '';
  let bodyModel = '';
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    prompt = String(body.prompt == null ? '' : body.prompt);
    if (body.model && /^gemini-/.test(String(body.model))) bodyModel = String(body.model); // TEMP: benchmarking override
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON body.' });
  }
  if (!prompt.trim()) return res.status(400).json({ error: 'Missing "prompt".' });

  const model = (bodyModel || process.env.GEMINI_MODEL || 'gemini-2.5-flash').trim();
  const url =
    'https://generativelanguage.googleapis.com/v1beta/models/' +
    encodeURIComponent(model) +
    ':generateContent?key=' +
    encodeURIComponent(apiKey);

  // Relax safety thresholds: the scenarios are benign empathy-training
  // roleplays, but emotional language can otherwise trip false positives.
  const safetySettings = [
    'HARM_CATEGORY_HARASSMENT',
    'HARM_CATEGORY_HATE_SPEECH',
    'HARM_CATEGORY_SEXUALLY_EXPLICIT',
    'HARM_CATEGORY_DANGEROUS_CONTENT',
  ].map((category) => ({ category, threshold: 'BLOCK_ONLY_HIGH' }));

  const jsonMode = prompt.includes('JSON');

  // Disable "thinking" — for short roleplay replies and grading JSON it adds
  // latency (the ~3s the user saw) and, worse, consumes the output-token budget,
  // which truncated replies mid-sentence and cut grading JSON off (causing the
  // "Unexpected end of JSON input" feedback error). Grading needs a larger budget
  // than a chat reply, so size it by mode.
  const genConfig = {
    temperature: 0.7,
    maxOutputTokens: jsonMode ? 2048 : 512,
    thinkingConfig: { thinkingBudget: 0 },
  };
  if (jsonMode) genConfig.responseMimeType = 'application/json';

  // One transient-failure retry: a rapid burst of narration/reply/grading calls
  // can trip Gemini's per-minute rate limit (429/503), which surfaced as 502s.
  async function callGemini() {
    let last = null;
    for (let attempt = 0; attempt < 2; attempt++) {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: genConfig,
          safetySettings,
        }),
      });
      if (r.ok || (r.status !== 429 && r.status !== 503 && r.status !== 500)) return r;
      last = r;
      await new Promise((res) => setTimeout(res, 700)); // brief backoff, then retry once
    }
    return last;
  }

  try {
    const upstream = await callGemini();

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      const msg = (data && data.error && data.error.message) || ('Gemini error ' + upstream.status);
      return res.status(upstream.status || 502).json({ error: msg });
    }

    const cand = data.candidates && data.candidates[0];
    const parts = cand && cand.content && cand.content.parts;
    const text = Array.isArray(parts) ? parts.map((p) => (p && p.text) || '').join('') : '';

    if (!text.trim()) {
      // Empty completion (e.g. safety block or truncation) — signal failure so the
      // front-end falls back to its offline scripted engine for grading.
      const reason = (cand && cand.finishReason) || 'empty response';
      return res.status(502).json({ error: 'No text returned (' + reason + ').' });
    }

    return res.status(200).json({ text });
  } catch (e) {
    return res.status(502).json({ error: 'Upstream request failed: ' + ((e && e.message) || String(e)) });
  }
}
