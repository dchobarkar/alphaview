import axios from "axios";

const BASE_URL = "https://www.alphavantage.co/query";
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

const fetchFromAlphVantage = async (
  fun: string,
  params: Record<string, string>
) => {
  console.log(fun, params);
  const query = {
    function: fun,
    ...params,
    ...(API_KEY ? { apikey: API_KEY } : {}),
  };
  const url = `${BASE_URL}?${new URLSearchParams(query).toString()}`;
  const { data } = await axios.get(url);

  return data;
};

export default fetchFromAlphVantage;
