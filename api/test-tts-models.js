// Deeper test for the two viable TTS models
export default async function handler(req, res) {
  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) return res.status(500).json({ error: 'No key' });

  const results = {};

  // Test 1: gemini-2.5-flash-preview-tts with "Say" prefix
  try {
    const url1 = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=' + apiKey;
    const r1 = await fetch(url1, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Say the following text clearly: Hello, how are you doing today?' }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } },
        },
      }),
    });
    const d1 = await r1.json().catch(() => ({}));
    if (r1.ok && d1.candidates) {
      const part = d1.candidates[0]?.content?.parts?.[0];
      const hasAudio = !!(part?.inlineData?.data);
      const dataLen = part?.inlineData?.data?.length || 0;
      results['gemini-2.5-flash-preview-tts (say prefix)'] = 'OK - has audio: ' + hasAudio + ', data length: ' + dataLen;
    } else {
      results['gemini-2.5-flash-preview-tts (say prefix)'] = 'FAIL ' + r1.status + ': ' + (d1?.error?.message || JSON.stringify(d1).substring(0, 200));
    }
  } catch (e) {
    results['gemini-2.5-flash-preview-tts (say prefix)'] = 'ERROR: ' + e.message;
  }

  // Test 2: gemini-3.5-flash with audio
  try {
    const url2 = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=' + apiKey;
    const r2 = await fetch(url2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Hello, how are you doing today?' }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } },
        },
      }),
    });
    const d2 = await r2.json().catch(() => ({}));
    if (r2.ok && d2.candidates) {
      const part = d2.candidates[0]?.content?.parts?.[0];
      const hasAudio = !!(part?.inlineData?.data);
      const dataLen = part?.inlineData?.data?.length || 0;
      const mime = part?.inlineData?.mimeType || 'none';
      results['gemini-3.5-flash'] = 'OK - has audio: ' + hasAudio + ', data length: ' + dataLen + ', mime: ' + mime;
    } else {
      results['gemini-3.5-flash'] = 'FAIL ' + r2.status + ': ' + (d2?.error?.message || JSON.stringify(d2).substring(0, 200));
    }
  } catch (e) {
    results['gemini-3.5-flash'] = 'ERROR: ' + e.message;
  }

  return res.status(200).json(results);
}
