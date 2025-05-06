import axios from "axios";

const BASE_URL = "https://www.alphavantage.co/query";
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

export const fetchFromAlphaVantage = async (
  func: string,
  params: Record<string, string>
) => {
  const query = {
    function: func,
    apikey: API_KEY,
    ...params,
  };

  const url = `${BASE_URL}?${new URLSearchParams(query).toString()}`;
  const { data } = await axios.get(url);
  return data;
};
