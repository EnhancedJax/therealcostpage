export async function fetchExchangeRates() {
  const response = await fetch("https://open.er-api.com/v6/latest/USD", {
    next: { revalidate: 3600 }, // Cache for 1 hour (3600 seconds)
  });

  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }

  const data = await response.json();
  return data.rates;
}
