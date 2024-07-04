export async function fetchExchangeRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour (3600 seconds)
    });

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }

    const text = await response.text();
    const match = text.match(
      /{"result":"success","provider":"https:\/\/www.exc.*}/
    );
    if (match) {
      const data = JSON.parse(match[0]);
      return data.rates;
    } else {
      throw new Error("Failed to parse exchange rates");
    }
  } catch (error) {
    console.error(error.message);
    return {
      USD: 1,
    };
  }
}
