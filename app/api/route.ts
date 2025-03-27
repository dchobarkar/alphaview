const BaseURL =
  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=RIBXT3XYLI69PC0Q";

export const FetchStockData = async () => {
  const response = await fetch(BaseURL);
  const data = await response.json();

  return data;
};
