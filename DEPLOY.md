# Deploying The Empathy Practice to Vercel

This project is a **static site + one serverless function**. No build step.

- The course: `ui_kits/empathy-elearning/index-story.html` (root `/` redirects to it).
- The AI roleplays call `window.claude.complete()`. On Vercel that is provided by
  `ui_kits/empathy-elearning/ai-backend.js`, which POSTs to the serverless function
  `api/complete.js`. That function calls **Google Gemini** using a server-side key.
- If the AI call ever fails, the roleplay automatically falls back to the built-in
  offline scripted engine (`scripted-engine.js`) so the course never breaks.

## What you need
- A **Gemini API key** (Google AI Studio → https://aistudio.google.com/apikey).
- A Vercel account (free tier is fine).

## Deploy — Option A: Vercel dashboard (no CLI)
1. Push this folder to a GitHub/GitLab repo (or drag-and-drop the folder in the
   Vercel dashboard → **Add New… → Project**).
2. Framework preset: **Other** (there is no build step; leave Build Command empty).
3. Before/after the first deploy, add the environment variable:
   - **Settings → Environment Variables**
   - Name: `GEMINI_API_KEY`  Value: *your key*  (Environments: Production + Preview)
   - Optional: `GEMINI_MODEL` (chat model; defaults to `gemini-2.0-flash`; e.g. `gemini-2.5-flash`).
   - Optional: `GEMINI_TTS_MODEL` (voice model; defaults to `gemini-2.5-flash-preview-tts`).
   - The same `GEMINI_API_KEY` powers both the roleplay text **and** the spoken voices.
4. **Deploy** (or **Redeploy** if you added the key after the first deploy — env vars
   only take effect on a new deployment).
5. Open the site. The root URL redirects into the course. Play a roleplay to confirm
   the partner replies with live AI (not the `[scripted]` fallback).

## Deploy — Option B: CLI
```bash
npx vercel            # first run links/creates the project
npx vercel env add GEMINI_API_KEY production   # paste your key when prompted
npx vercel --prod     # deploy to production
```

## Local testing with real AI
```bash
npx vercel dev        # serves the site AND runs api/complete.js locally
# set GEMINI_API_KEY first: create a .env file with GEMINI_API_KEY=... , or
# run: npx vercel env pull   (after adding it in the dashboard)
```
Opening the HTML as a plain `file://` will **not** use AI (there is no server there) —
it intentionally uses the offline scripted engine instead. Use `vercel dev` or the
deployed URL to exercise the real AI path.

## Security notes
- `GEMINI_API_KEY` lives only in the Vercel server environment. It is never sent to
  the browser — the page only ever talks to your own `/api/complete`.
- Do **not** commit your key. Keep it in Vercel env vars (and a local `.env` that is
  git-ignored) only.

## Cost / quotas
Each roleplay turn and each grade is one Gemini call. On busy classes, watch your
Gemini quota; consider a paid tier if you expect heavy use. The scripted fallback
means the course still works if you hit a limit.

## Voices (Gemini TTS)
Both the **story narration** and the **roleplay replies** are spoken with
**Gemini TTS** via `api/tts.js`. The narrator has one warm voice; each roleplay
character has a distinct one:

| Speaker | Gemini voice | Where to change it |
|---|---|---|
| Narrator (story) | Sulafat | `NARRATOR_VOICE` in `index-story.html` |
| Maya | Aoede | `GEMINI_VOICES` in `roleplay.jsx` |
| Devon | Charon | `GEMINI_VOICES` in `roleplay.jsx` |
| Priya | Kore | `GEMINI_VOICES` in `roleplay.jsx` |
| Theo | Iapetus | `GEMINI_VOICES` in `roleplay.jsx` |
| Riley | Leda | `GEMINI_VOICES` in `roleplay.jsx` |

Any prebuilt Gemini voice name works (e.g. Puck, Zephyr, Fenrir, Vindemiatrix).
If a TTS call ever fails, narration and roleplay both fall back to the browser's
built-in voice, so audio never goes silent. Opening the course as a `file://`
(no server) also uses the browser voice.

**Note on cost:** every narrated slide is now one Gemini TTS call, and each
roleplay reply is a text call plus a TTS call. On large cohorts this adds up —
watch your Gemini quota. The mute button (top bar) skips narration audio entirely.
