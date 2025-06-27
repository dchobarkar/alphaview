import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

const fetchData = async (params: Record<string, string>) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        ...params,
        apikey: API_KEY,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AlphaVantageService = {
  // Core Stock APIs
  async getIntraday(symbol: string, interval: string = "5min") {
    return fetchData({
      function: "TIME_SERIES_INTRADAY",
      symbol,
      interval,
    });
  },
  async getDaily(symbol: string) {
    return fetchData({
      function: "TIME_SERIES_DAILY",
      symbol,
    });
  },
  async getWeekly(symbol: string) {
    return fetchData({
      function: "TIME_SERIES_WEEKLY",
      symbol,
    });
  },
  async getMonthly(symbol: string) {
    return fetchData({
      function: "TIME_SERIES_MONTHLY",
      symbol,
    });
  },

  // Options Data APIs
  async getOptions(symbol: string) {
    return fetchData({
      function: "HISTORICAL_OPTIONS",
      symbol,
    });
  },

  // Alpha Intelligence
  async getNewsSentiment(keywords: string) {
    return fetchData({
      function: "NEWS_SENTIMENT",
      keywords,
    });
  },
  async getTopGainersLosers() {
    return fetchData({
      function: "TOP_GAINERS_LOSERS",
    });
  },
  async getInsiderTransactions(symbol: string) {
    return fetchData({
      function: "INSIDER_TRANSACTIONS",
      symbol,
    });
  },

  // Fundamental Data
  async getCompanyOverview(symbol: string) {
    return fetchData({ function: "OVERVIEW", symbol });
  },
  async getETFOverview(symbol: string) {
    return fetchData({ function: "ETF_PROFILE", symbol });
  },
  async getDividendHistory(symbol: string) {
    return fetchData({ function: "DIVIDENDS", symbol });
  },
  async getSplitHistory(symbol: string) {
    return fetchData({ function: "SPLITS", symbol });
  },
  async getIncomeStatement(symbol: string) {
    return fetchData({ function: "INCOME_STATEMENT", symbol });
  },
  async getBalanceSheet(symbol: string) {
    return fetchData({ function: "BALANCE_SHEET", symbol });
  },
  async getCashFlow(symbol: string) {
    return fetchData({ function: "CASH_FLOW", symbol });
  },
  async getEarnings(symbol: string) {
    return fetchData({ function: "EARNINGS", symbol });
  },

  // Forex (FX)
  async getForexExchangeRate(fromCurrency: string, toCurrency: string) {
    return fetchData({
      function: "CURRENCY_EXCHANGE_RATE",
      from_currency: fromCurrency,
      to_currency: toCurrency,
    });
  },
  async getForexDaily(fromSymbol: string, toSymbol: string) {
    return fetchData({
      function: "FX_DAILY",
      from_symbol: fromSymbol,
      to_symbol: toSymbol,
      outputsize: "compact",
    });
  },
  async getForexWeekly(fromSymbol: string, toSymbol: string) {
    return fetchData({
      function: "FX_WEEKLY",
      from_symbol: fromSymbol,
      to_symbol: toSymbol,
    });
  },
  async getForexMonthly(fromSymbol: string, toSymbol: string) {
    return fetchData({
      function: "FX_MONTHLY",
      from_symbol: fromSymbol,
      to_symbol: toSymbol,
    });
  },

  // Cryptocurrencies
  async getCryptoExchangeRate(fromCurrency: string, toCurrency: string) {
    return fetchData({
      function: "CURRENCY_EXCHANGE_RATE",
      from_currency: fromCurrency,
      to_currency: toCurrency,
    });
  },
  // Commodities
  async getCommodityPrice(symbol: string) {
    return fetchData({
      function: "CURRENCY_EXCHANGE_RATE",
      from_currency: symbol,
      to_currency: "USD",
    });
  },
  // Economic Indicators
  async getRealGDP(interval: string = "quarterly") {
    return fetchData({
      function: "REAL_GDP",
      interval,
    });
  },
  async getInflation() {
    return fetchData({
      function: "INFLATION",
    });
  },
  // Technical Indicators
  async getSMA(
    symbol: string,
    interval: string = "daily",
    timePeriod: number = 20
  ) {
    return fetchData({
      function: "SMA",
      symbol,
      interval,
      time_period: timePeriod.toString(),
      series_type: "close",
    });
  },
  async getRSI(
    symbol: string,
    interval: string = "daily",
    timePeriod: number = 14
  ) {
    return fetchData({
      function: "RSI",
      symbol,
      interval,
      time_period: timePeriod.toString(),
      series_type: "close",
    });
  },
  async getEconomicIndicator(indicator: string) {
    return fetchData({
      function: indicator,
    });
  },

  async getGlobalQuote(symbol: string) {
    return fetchData({
      function: "GLOBAL_QUOTE",
      symbol,
    });
  },
};
