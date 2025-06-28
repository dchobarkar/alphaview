import axios from "axios";

import { EconomicIndicatorResponse, TechnicalIndicatorResponse } from "./types";

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
  async getCryptoDaily(symbol: string, market: string) {
    return fetchData({
      function: "DIGITAL_CURRENCY_DAILY",
      symbol,
      market,
    });
  },
  async getCryptoWeekly(symbol: string, market: string) {
    return fetchData({
      function: "DIGITAL_CURRENCY_WEEKLY",
      symbol,
      market,
    });
  },
  async getCryptoMonthly(symbol: string, market: string) {
    return fetchData({
      function: "DIGITAL_CURRENCY_MONTHLY",
      symbol,
      market,
    });
  },

  // Commodities
  async getWTI(interval: string = "monthly") {
    return fetchData({
      function: "WTI",
      interval,
    });
  },
  async getBrent(interval: string = "monthly") {
    return fetchData({
      function: "BRENT",
      interval,
    });
  },
  async getNaturalGas(interval: string = "monthly") {
    return fetchData({
      function: "NATURAL_GAS",
      interval,
    });
  },
  async getCopper(interval: string = "monthly") {
    return fetchData({
      function: "COPPER",
      interval,
    });
  },
  async getAluminum(interval: string = "monthly") {
    return fetchData({
      function: "ALUMINUM",
      interval,
    });
  },
  async getWheat(interval: string = "monthly") {
    return fetchData({
      function: "WHEAT",
      interval,
    });
  },
  async getCorn(interval: string = "monthly") {
    return fetchData({
      function: "CORN",
      interval,
    });
  },
  async getCotton(interval: string = "monthly") {
    return fetchData({
      function: "COTTON",
      interval,
    });
  },
  async getSugar(interval: string = "monthly") {
    return fetchData({
      function: "SUGAR",
      interval,
    });
  },
  async getCoffee(interval: string = "monthly") {
    return fetchData({
      function: "COFFEE",
      interval,
    });
  },
  async getAllCommodities(interval: string = "monthly") {
    return fetchData({
      function: "ALL_COMMODITIES",
      interval,
    });
  },

  // Economic Indicators
  async getRealGDP(
    interval: string = "annual"
  ): Promise<EconomicIndicatorResponse> {
    return fetchData({ function: "REAL_GDP", interval });
  },
  async getRealGDPPerCapita(
    interval: string = "annual"
  ): Promise<EconomicIndicatorResponse> {
    return fetchData({ function: "REAL_GDP_PER_CAPITA", interval });
  },
  async getTreasuryYield(
    interval: string = "monthly"
  ): Promise<EconomicIndicatorResponse> {
    return fetchData({ function: "TREASURY_YIELD", interval });
  },
  async getFederalFundsRate(): Promise<EconomicIndicatorResponse> {
    return fetchData({ function: "FEDERAL_FUNDS_RATE" });
  },
  async getCPI(
    interval: string = "monthly"
  ): Promise<EconomicIndicatorResponse> {
    return fetchData({ function: "CPI", interval });
  },
  async getInflation(): Promise<EconomicIndicatorResponse> {
    return fetchData({ function: "INFLATION" });
  },
  async getRetailSales(
    interval: string = "monthly"
  ): Promise<EconomicIndicatorResponse> {
    return fetchData({ function: "RETAIL_SALES", interval });
  },
  async getDurableGoods(
    interval: string = "monthly"
  ): Promise<EconomicIndicatorResponse> {
    return fetchData({ function: "DURABLES", interval });
  },
  async getUnemployment(
    interval: string = "monthly"
  ): Promise<EconomicIndicatorResponse> {
    return fetchData({ function: "UNEMPLOYMENT", interval });
  },
  async getNonfarmPayroll(
    interval: string = "monthly"
  ): Promise<EconomicIndicatorResponse> {
    return fetchData({ function: "NONFARM_PAYROLL", interval });
  },

  // Technical Indicators
  async getSMA(
    symbol: string,
    interval: string,
    timePeriod: number,
    seriesType: string
  ): Promise<TechnicalIndicatorResponse> {
    const raw = await fetchData({
      function: "SMA",
      symbol,
      interval,
      time_period: String(timePeriod),
      series_type: seriesType,
    });
    return parseTechnicalIndicatorResponse(raw, "SMA");
  },
  async getEMA(
    symbol: string,
    interval: string,
    timePeriod: number,
    seriesType: string
  ): Promise<TechnicalIndicatorResponse> {
    const raw = await fetchData({
      function: "EMA",
      symbol,
      interval,
      time_period: String(timePeriod),
      series_type: seriesType,
    });
    return parseTechnicalIndicatorResponse(raw, "EMA");
  },
  async getWMA(
    symbol: string,
    interval: string,
    timePeriod: number,
    seriesType: string
  ): Promise<TechnicalIndicatorResponse> {
    const raw = await fetchData({
      function: "WMA",
      symbol,
      interval,
      time_period: String(timePeriod),
      series_type: seriesType,
    });
    return parseTechnicalIndicatorResponse(raw, "WMA");
  },
  async getDEMA(
    symbol: string,
    interval: string,
    timePeriod: number,
    seriesType: string
  ): Promise<TechnicalIndicatorResponse> {
    const raw = await fetchData({
      function: "DEMA",
      symbol,
      interval,
      time_period: String(timePeriod),
      series_type: seriesType,
    });
    return parseTechnicalIndicatorResponse(raw, "DEMA");
  },
  async getTEMA(
    symbol: string,
    interval: string,
    timePeriod: number,
    seriesType: string
  ): Promise<TechnicalIndicatorResponse> {
    const raw = await fetchData({
      function: "TEMA",
      symbol,
      interval,
      time_period: String(timePeriod),
      series_type: seriesType,
    });
    return parseTechnicalIndicatorResponse(raw, "TEMA");
  },

  async getGlobalQuote(symbol: string) {
    return fetchData({
      function: "GLOBAL_QUOTE",
      symbol,
    });
  },
};

// Helper to parse technical indicator response
function parseTechnicalIndicatorResponse(
  raw: Record<string, any>,
  key: string
): TechnicalIndicatorResponse {
  const metaRaw = raw["Meta Data"] || {};
  const meta = {
    symbol: metaRaw["1: Symbol"] || metaRaw["1. Symbol"] || "",
    indicator: metaRaw["2: Indicator"] || metaRaw["2. Indicator"] || key,
    lastRefreshed:
      metaRaw["3: Last Refreshed"] || metaRaw["3. Last Refreshed"] || "",
    interval: metaRaw["4: Interval"] || metaRaw["4. Interval"] || "",
    timePeriod: metaRaw["5: Time Period"] || metaRaw["5. Time Period"] || "",
    seriesType: metaRaw["6: Series Type"] || metaRaw["6. Series Type"] || "",
    timeZone: metaRaw["7: Time Zone"] || metaRaw["7. Time Zone"] || "",
  };
  const dataRaw: Record<string, { [key: string]: string }> =
    raw[`Technical Analysis: ${key}`] || {};
  const data = Object.entries(dataRaw).map(([date, obj]) => ({
    date,
    value: obj[key] || Object.values(obj)[0] || "",
  }));
  return { meta, data };
}
