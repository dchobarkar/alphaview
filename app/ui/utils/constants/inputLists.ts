import {
  adjustedInput,
  calculationsInput,
  dateInput,
  digitalSymbolInput,
  doubleLongIntervalInput,
  extendedHoursInput,
  fromCurrencyInput,
  fromSymbolInput,
  horizonInput,
  limitInput,
  longIntervalInput,
  marketInput,
  maturityInput,
  monthInput,
  ohlcInput,
  outputSizeInput,
  rangeInput,
  requireGreeksInput,
  seriesTypeInput,
  sortInput,
  stateInput,
  symbolInput,
  timeIntervalInput,
  timePeriodInput,
  toCurrencyInput,
  topicsInput,
  toSymbolInput,
  windowSizeInput,
} from "./inputTypes";

const coreStockAPIsInputs = {
  intraday: [
    { ...symbolInput },
    { ...timeIntervalInput },
    { ...adjustedInput },
    { ...extendedHoursInput },
    { ...monthInput },
    { ...outputSizeInput },
  ],
  daily: [{ ...symbolInput }, { ...outputSizeInput }],
  dailyAdjusted: [{ ...symbolInput }, { ...outputSizeInput }],
  weekly: [{ ...symbolInput }],
  weeklyAdjusted: [{ ...symbolInput }],
  monthly: [{ ...symbolInput }],
  monthlyAdjusted: [{ ...symbolInput }],
  quoteEndpoint: [{ ...symbolInput }],
  realtimeBulkQuotes: [{ ...symbolInput }],
  globalMarketStatus: [],
};

const optionsDataAPIsInputs = {
  realtimeOptions: [{ ...symbolInput }, { ...requireGreeksInput }],
  historicalOptions: [{ ...symbolInput }],
};

const alphaIntelligenceInputs = {
  newsAndSentiments: [{ ...topicsInput }, { ...sortInput }, { ...limitInput }],
  topGainersAndLosers: [],
  insiderTransactions: [{ ...symbolInput }],
  analyticsFixedWindow: [
    { ...symbolInput },
    { ...rangeInput },
    { ...ohlcInput },
    { ...timeIntervalInput },
    { ...calculationsInput },
  ],
  analyticsSlidingWindow: [
    { ...symbolInput },
    { ...rangeInput },
    { ...ohlcInput },
    { ...timeIntervalInput },
    { ...windowSizeInput },
    { ...calculationsInput },
  ],
};

const fundamentalDataInputs = {
  companyOverview: [{ ...symbolInput }],
  etfProfileAndHoldings: [{ ...symbolInput }],
  corporateActionDividends: [{ ...symbolInput }],
  corporateActionSplits: [{ ...symbolInput }],
  incomeStatement: [{ ...symbolInput }],
  balanceSheet: [{ ...symbolInput }],
  cashFlow: [{ ...symbolInput }],
  earnings: [{ ...symbolInput }],
  listingAndDelistingStatus: [{ ...dateInput }, { ...stateInput }],
  earningsCalender: [{ ...symbolInput }, { ...horizonInput }],
  ipoCalender: [],
};

const forextInputs = {
  exchangeRates: [{ ...fromCurrencyInput }, { ...toCurrencyInput }],
  intraday: [
    { ...fromSymbolInput },
    { ...toSymbolInput },
    { ...timeIntervalInput },
    { ...outputSizeInput },
  ],
  daily: [{ ...fromSymbolInput }, { ...toSymbolInput }, { ...outputSizeInput }],
  weekly: [{ ...fromSymbolInput }, { ...toSymbolInput }],
  monthly: [{ ...fromSymbolInput }, { ...toSymbolInput }],
};

const cryptocurrenciesInputs = {
  exchangeRate: [{ ...fromCurrencyInput, ...toCurrencyInput }],
  intraday: [
    { ...digitalSymbolInput },
    { ...marketInput },
    { ...timeIntervalInput },
    { ...outputSizeInput },
  ],
  daily: [{ ...digitalSymbolInput }, { ...marketInput }],
  weekly: [{ ...digitalSymbolInput }, { ...marketInput }],
  monthly: [{ ...digitalSymbolInput }, { ...marketInput }],
};

const commoditiesInputs = {
  cruidOilWTI: [{ ...longIntervalInput }],
  cruideOilBrent: [{ ...longIntervalInput }],
  naturalGas: [{ ...longIntervalInput }],
  copper: [{ ...longIntervalInput }],
  aluminium: [{ ...longIntervalInput }],
  wheat: [{ ...longIntervalInput }],
  corn: [{ ...longIntervalInput }],
  cotton: [{ ...longIntervalInput }],
  sugar: [{ ...longIntervalInput }],
  coffee: [{ ...longIntervalInput }],
  globalCommoditiesIndex: [{ ...longIntervalInput }],
};

const economicIndicatorsInputs = {
  realGDP: [{ ...doubleLongIntervalInput }],
  realGDPPerCapita: [],
  treasuryYield: [{ ...longIntervalInput }, { ...maturityInput }],
  federalFundsRate: [{ ...longIntervalInput }],
  cpi: [{ ...longIntervalInput }],
  inflation: [],
  retailSales: [],
  durableGoodsOrders: [],
  unemploymentRate: [],
  nonfarmPayroll: [],
};

const technocalIndicatorsInputs = {
  sma: [
    { ...symbolInput },
    { ...timeIntervalInput },
    { ...monthInput },
    { ...timePeriodInput },
    { ...seriesTypeInput },
  ],
  ema: [
    { ...symbolInput },
    { ...timeIntervalInput },
    { ...monthInput },
    { ...timePeriodInput },
    { ...seriesTypeInput },
  ],
  wma: [
    { ...symbolInput },
    { ...timeIntervalInput },
    { ...monthInput },
    { ...timePeriodInput },
    { ...seriesTypeInput },
  ],
  dema: [
    { ...symbolInput },
    { ...timeIntervalInput },
    { ...monthInput },
    { ...timePeriodInput },
    { ...seriesTypeInput },
  ],
  tema: [
    { ...symbolInput },
    { ...timeIntervalInput },
    { ...monthInput },
    { ...timePeriodInput },
    { ...seriesTypeInput },
  ],
  trima: [
    { ...symbolInput },
    { ...timeIntervalInput },
    { ...monthInput },
    { ...timePeriodInput },
    { ...seriesTypeInput },
  ],
  kama: [
    { ...symbolInput },
    { ...timeIntervalInput },
    { ...monthInput },
    { ...timePeriodInput },
    { ...seriesTypeInput },
  ],
};

export {
  coreStockAPIsInputs,
  optionsDataAPIsInputs,
  alphaIntelligenceInputs,
  fundamentalDataInputs,
  forextInputs,
  cryptocurrenciesInputs,
  commoditiesInputs,
  economicIndicatorsInputs,
  technocalIndicatorsInputs,
};
