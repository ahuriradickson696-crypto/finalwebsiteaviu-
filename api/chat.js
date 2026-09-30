// Vercel serverless function: keeps the Gemini API key on the server.
// Set GEMINI_API_KEY in Vercel → Settings → Environment Variables.
const MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash'];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: 'Chat is not configured' });
    return;
  }

  const { system, contents } = req.body || {};
  if (
    typeof system !== 'string' || system.length > 20000 ||
    !Array.isArray(contents) || contents.length === 0 || contents.length > 30 ||
    JSON.stringify(contents).length > 12000
  ) {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }

  const body = {
    system_instruction: { parts: [{ text: system }] },
    contents,
    generationConfig: { temperature: 0.4, maxOutputTokens: 1024 },
  };

  let lastErr = 'No response from Gemini';
  for (const model of MODELS) {
    try {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
          body: JSON.stringify(body),
        }
      );
      if (!r.ok) {
        lastErr = `Gemini error ${r.status}`;
        continue;
      }
      const data = await r.json();
      const text = (data?.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('');
      if (text) {
        res.status(200).json({ text });
        return;
      }
    } catch {
      lastErr = 'Network error';
    }
  }
  res.status(502).json({ error: lastErr });
}
