// Temporary test endpoint to find which TTS model works with this API key
export default async function handler(req, res) {
  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) return res.status(500).json({ error: 'No key' });

  const models = [
    'gemini-2.5-flash-preview-tts',
    'gemini-2.5-flash-tts',
    'gemini-2.5-pro-tts',
    'gemini-2.0-flash',
    'gemini-2.0-flash-lite',
    'gemini-3.5-flash',
    'gemini-3.0-flash',
  ];

  const results = {};
  await Promise.all(models.map(async (m) => {
    try {
      const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + m + ':generateContent?key=' + apiKey;
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: 'Hello' }] }],
          generationConfig: {
            responseModalities: ['AUDIO'],
            speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } },
          },
        }),
      });
      const d = await r.json().catch(() => ({}));
      if (r.ok && d.candidates) {
        const part = d.candidates[0]?.content?.parts?.[0];
        results[m] = 'OK - has audio: ' + !!(part?.inlineData?.data);
      } else {
        results[m] = 'FAIL ' + r.status + ': ' + (d?.error?.message || '').substring(0, 100);
      }
    } catch (e) {
      results[m] = 'ERROR: ' + e.message;
    }
  }));

  return res.status(200).json(results);
}
