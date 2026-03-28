export default async function handler(req, res) {
  try {
    const r = await fetch('https://weao.xyz/api/versions/current', {
      headers: { 'User-Agent': 'WEAO-3PService' }
    });
    if (!r.ok) throw new Error();
    const data = await r.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(data);
  } catch(e) {
    res.status(502).json({ error: 'failed' });
  }
}