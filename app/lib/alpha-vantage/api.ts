const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

const fetchAlphaVantageData = async (
  functionName: string,
  params: Record<string, string>
) => {
  const queryParams = new URLSearchParams({
    function: functionName,
    apikey: API_KEY || "",
    ...params,
  });

  const response = await fetch(`${BASE_URL}?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`Alpha Vantage API error: ${response.statusText}`);
  }

  const data = await response.json();

  if (data["Error Message"]) {
    throw new Error(data["Error Message"]);
  }

  if (data["Note"]) {
    throw new Error(data["Note"]);
  }

  return data;
};

export { fetchAlphaVantageData };
