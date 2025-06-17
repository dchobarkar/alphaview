import axios from "axios";

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

export class AlphaVantageService {
  private static instance: AlphaVantageService;
  private constructor() {}

  public static getInstance(): AlphaVantageService {
    if (!AlphaVantageService.instance) {
      AlphaVantageService.instance = new AlphaVantageService();
    }
    return AlphaVantageService.instance;
  }

  private async fetchData(params: Record<string, string>) {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          ...params,
          apikey: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Core Stock APIs
  async getIntraday(symbol: string, interval: string = "5min") {
    return this.fetchData({
      function: "TIME_SERIES_INTRADAY",
      symbol,
      interval,
    });
  }

  async getDaily(symbol: string) {
    return this.fetchData({
      function: "TIME_SERIES_DAILY",
      symbol,
    });
  }

  async getWeekly(symbol: string) {
    return this.fetchData({
      function: "TIME_SERIES_WEEKLY",
      symbol,
    });
  }

  async getMonthly(symbol: string) {
    return this.fetchData({
      function: "TIME_SERIES_MONTHLY",
      symbol,
    });
  }

  async getGlobalQuote(symbol: string) {
    return this.fetchData({
      function: "GLOBAL_QUOTE",
      symbol,
    });
  }

  // Alpha Intelligence
  async getNewsSentiment(keywords: string) {
    return this.fetchData({
      function: "NEWS_SENTIMENT",
      keywords,
    });
  }

  // Fundamental Data
  async getCompanyOverview(symbol: string) {
    return this.fetchData({
      function: "OVERVIEW",
      symbol,
    });
  }

  async getIncomeStatement(symbol: string) {
    return this.fetchData({
      function: "INCOME_STATEMENT",
      symbol,
    });
  }

  async getBalanceSheet(symbol: string) {
    return this.fetchData({
      function: "BALANCE_SHEET",
      symbol,
    });
  }

  async getCashFlow(symbol: string) {
    return this.fetchData({
      function: "CASH_FLOW",
      symbol,
    });
  }

  // Forex (FX)
  async getForexExchangeRate(fromCurrency: string, toCurrency: string) {
    return this.fetchData({
      function: "CURRENCY_EXCHANGE_RATE",
      from_currency: fromCurrency,
      to_currency: toCurrency,
    });
  }

  // Cryptocurrencies
  async getCryptoExchangeRate(fromCurrency: string, toCurrency: string) {
    return this.fetchData({
      function: "CURRENCY_EXCHANGE_RATE",
      from_currency: fromCurrency,
      to_currency: toCurrency,
    });
  }

  // Commodities
  async getCommodityPrice(symbol: string) {
    return this.fetchData({
      function: "CURRENCY_EXCHANGE_RATE",
      from_currency: symbol,
      to_currency: "USD",
    });
  }

  // Economic Indicators
  async getRealGDP(interval: string = "quarterly") {
    return this.fetchData({
      function: "REAL_GDP",
      interval,
    });
  }

  async getInflation() {
    return this.fetchData({
      function: "INFLATION",
    });
  }

  // Technical Indicators
  async getSMA(
    symbol: string,
    interval: string = "daily",
    timePeriod: number = 20
  ) {
    return this.fetchData({
      function: "SMA",
      symbol,
      interval,
      time_period: timePeriod.toString(),
      series_type: "close",
    });
  }

  async getRSI(
    symbol: string,
    interval: string = "daily",
    timePeriod: number = 14
  ) {
    return this.fetchData({
      function: "RSI",
      symbol,
      interval,
      time_period: timePeriod.toString(),
      series_type: "close",
    });
  }

  async getEconomicIndicator(indicator: string) {
    return this.fetchData({
      function: indicator,
    });
  }
}
