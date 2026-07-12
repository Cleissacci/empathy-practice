// TEMP diagnostic — lists the Gemini models available to this key. Remove after use.
export default async function handler(req, res) {
  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY not set' });
  try {
    const r = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000&key=' + encodeURIComponent(apiKey)
    );
    const d = await r.json();
    const models = (d.models || []).map((m) => ({
      name: m.name,
      methods: m.supportedGenerationMethods,
    }));
    return res.status(200).json({ count: models.length, models });
  } catch (e) {
    return res.status(502).json({ error: String((e && e.message) || e) });
  }
}
