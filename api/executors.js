export default async function handler(req, res) {
  const urls = [
    'https://whatexpsare.online/api/status/exploits',
    'http://farts.fadedis.xyz:25551/api/status/exploits'
  ];
  for (const url of urls) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'WEAO-3PService' } });
      if (!r.ok) continue;
      const data = await r.json();
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(200).json(data);
    } catch(e) {}
  }
  res.status(502).json({ error: 'all upstream urls failed' });
}