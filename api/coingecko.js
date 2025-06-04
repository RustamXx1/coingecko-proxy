export default async function handler(req, res) {
  const { ids = "bitcoin", vs = "usd" } = req.query;

  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs}`;
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from CoinGecko" });
  }
}
