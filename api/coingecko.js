export default async function handler(req, res) {
  const { ids = "bitcoin", vs = "usd" } = req.query;

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs}`;
  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
