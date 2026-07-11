// ════════════════════════════════════════════════════════════════
// Lumina — AI backend shim for standalone hosting (Vercel, etc.)
//
// The roleplay engine calls window.claude.complete(prompt). Inside Claude's
// preview environment that function already exists, so we DO NOT touch it.
// On any other host it is missing, and the roleplay would silently fall back
// to the offline scripted engine. This shim defines window.claude.complete to
// POST the prompt to our /api/complete serverless function, which forwards it
// to Gemini server-side (the API key never reaches the browser).
//
// Load order: this must run BEFORE roleplay.jsx. It is a plain <script>, so it
// executes immediately — well before Babel compiles and runs the .jsx files.
// ════════════════════════════════════════════════════════════════
(function () {
  'use strict';
  if (typeof window === 'undefined') return;

  // Respect a real host (Claude preview) that already provides the API.
  if (window.claude && typeof window.claude.complete === 'function') return;

  // Only route to /api/complete when the page is actually served over the web
  // (Vercel, or `vercel dev` on http://localhost). Opened as a local file://
  // there is no server, so we leave window.claude undefined and let the roleplay
  // use its built-in offline scripted engine — preserving local preview.
  var proto = (window.location && window.location.protocol) || '';
  if (proto !== 'http:' && proto !== 'https:') return;

  async function complete(prompt) {
    const res = await fetch('/api/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: String(prompt == null ? '' : prompt) }),
    });
    if (!res.ok) {
      let detail = '';
      try { detail = (await res.json()).error || ''; } catch (e) { /* ignore */ }
      throw new Error('complete() failed (' + res.status + '): ' + detail);
    }
    const data = await res.json();
    return data && typeof data.text === 'string' ? data.text : '';
  }

  // Gemini Text-to-Speech. Returns an object URL for a WAV blob the caller can
  // play with `new Audio(url)`; revoke it when playback ends. Throws on failure
  // so the roleplay can fall back to the browser's built-in speechSynthesis.
  async function tts(text, voice) {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: String(text == null ? '' : text), voice: String(voice == null ? '' : voice) }),
    });
    if (!res.ok) {
      let detail = '';
      try { detail = (await res.json()).error || ''; } catch (e) { /* ignore */ }
      throw new Error('tts() failed (' + res.status + '): ' + detail);
    }
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  }

  window.claude = window.claude || {};
  window.claude.complete = complete;
  window.claude.tts = tts;
})();
