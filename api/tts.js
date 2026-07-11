// ════════════════════════════════════════════════════════════════
// Vercel serverless function — Gemini Text-to-Speech for the roleplays.
//
// The roleplay's speak() calls window.claude.tts(text, voice); ai-backend.js
// routes it here. This function asks Gemini for spoken audio and returns a
// ready-to-play WAV. Gemini returns RAW 16-bit PCM (mono, usually 24 kHz), so
// we prepend a 44-byte WAV header before sending it back.
//
// Request:  POST { "text": "<string>", "voice": "<Gemini prebuilt voice name>" }
// Response: 200 audio/wav  |  4xx/5xx { "error": "..." }
//
// Env vars:
//   GEMINI_API_KEY   (required)  same key as api/complete.js
//   GEMINI_TTS_MODEL (optional)  defaults to "gemini-2.5-flash-preview-tts"
// ════════════════════════════════════════════════════════════════

function pcmToWav(pcm, sampleRate, channels, bitsPerSample) {
  const byteRate = (sampleRate * channels * bitsPerSample) / 8;
  const blockAlign = (channels * bitsPerSample) / 8;
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // PCM fmt chunk size
  header.writeUInt16LE(1, 20); // audio format = PCM
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY is not set on the server.' });

  let text = '';
  let voice = 'Kore';
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    text = String(body.text == null ? '' : body.text).trim();
    if (body.voice) voice = String(body.voice);
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON body.' });
  }
  if (!text) return res.status(400).json({ error: 'Missing "text".' });

  const model = (process.env.GEMINI_TTS_MODEL || 'gemini-2.5-flash-preview-tts').trim();
  const url =
    'https://generativelanguage.googleapis.com/v1beta/models/' +
    encodeURIComponent(model) +
    ':generateContent?key=' +
    encodeURIComponent(apiKey);

  try {
    const upstream = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } },
        },
      }),
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      const msg = (data && data.error && data.error.message) || ('Gemini TTS error ' + upstream.status);
      return res.status(502).json({ error: msg });
    }

    const part =
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0];
    const inline = part && part.inlineData;
    if (!inline || !inline.data) {
      const reason = (data.candidates && data.candidates[0] && data.candidates[0].finishReason) || 'no audio';
      return res.status(502).json({ error: 'No audio returned (' + reason + ').' });
    }

    const pcm = Buffer.from(inline.data, 'base64');
    const rateMatch = /rate=(\d+)/i.exec(inline.mimeType || '');
    const sampleRate = rateMatch ? parseInt(rateMatch[1], 10) : 24000;
    const wav = pcmToWav(pcm, sampleRate, 1, 16);

    res.setHeader('Content-Type', 'audio/wav');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send(wav);
  } catch (e) {
    return res.status(502).json({ error: 'Upstream TTS request failed: ' + ((e && e.message) || String(e)) });
  }
}
