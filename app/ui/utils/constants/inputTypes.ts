import {
  currencyInputOptions,
  digitalCurrencyOptions,
  physicalCurrencyOptions,
} from "./optionsList";

const symbolInput = {
  label: "Symbol",
  value: "symbol",
  required: true,
  options: [
    { name: "IBM", value: "IBM" },
    { name: "AAPL", value: "AAPL" },
    { name: "MSFT", value: "MSFT" },
  ],
};

const timeIntervalInput = {
  label: "Interval",
  value: "interval",
  required: true,
  options: [
    { name: "1min", value: "1min" },
    { name: "5min", value: "5min" },
    { name: "15min", value: "15min" },
    { name: "30min", value: "30min" },
    { name: "60min", value: "60min" },
  ],
};

const adjustedInput = {
  label: "Adjusted",
  value: "adjusted",
  required: false,
  options: [
    { name: "True", value: "true" },
    { name: "False", value: "false" },
  ],
};

const extendedHoursInput = {
  label: "Extended Hours",
  value: "extended_hours",
  required: false,
  options: [
    { name: "True", value: "true" },
    { name: "False", value: "false" },
  ],
};

const monthInput = {
  label: "Month",
  value: "month",
  required: false,
  options: [
    { name: "2024-12", value: "2024-12" },
    { name: "2024-11", value: "2024-11" },
    { name: "2024-10", value: "2024-10" },
    { name: "2024-09", value: "2024-09" },
  ],
};

const outputSizeInput = {
  label: "Output Size",
  value: "outputsize",
  required: false,
  options: [
    { name: "Compact", value: "compact" },
    { name: "Full", value: "full" },
  ],
};

const requireGreeksInput = {
  label: "Required Greeks",
  value: "require_greeks",
  required: false,
  options: [
    { name: "True", value: "true" },
    { name: "False", value: "false" },
  ],
};

const topicsInput = {
  label: "Topics",
  value: "topics",
  required: false,
  options: [
    { name: "Blockchain", value: "blockchain" },
    { name: "Earnings", value: "earnings" },
    { name: "IPO", value: "ipo" },
    { name: "Mergers & Acquisitions", value: "mergers_and_acquisitions" },
    { name: "Financial Markets", value: "financial_markets" },
    {
      name: "Economy - Fiscal Policy (e.g., tax reform, government spending)",
      value: "economy_fiscal",
    },
    {
      name: "Economy - Monetary Policy (e.g., interest rates, inflation)",
      value: "economy_monetary",
    },
    { name: "Economy - Macro/Overall", value: "economy_macro" },
    { name: "Energy & Transportation", value: "energy_transportation" },
    { name: "Finance", value: "finance" },
    { name: "Life Sciences", value: "life_sciences" },
    { name: "Manufacturing", value: "manufacturing" },
    { name: "Real Estate & Construction", value: "real_estate" },
    { name: "Retail & Wholesale", value: "retail_wholesale" },
    { name: "Technology", value: "technology" },
  ],
};

const sortInput = {
  label: "Sort",
  value: "sort",
  required: false,
  options: [
    { name: "Latest", value: "LATEST" },
    { name: "Earliest", value: "EARLIEST" },
    { name: "Relevance", value: "RELEVANCE" },
  ],
};

const limitInput = {
  label: "Limit",
  value: "limit",
  required: false,
  options: [
    { name: "50", value: "50" },
    { name: "1000", value: "1000" },
  ],
};

const rangeInput = {
  label: "Range",
  value: "range",
  required: true,
  options: [{ name: "Full", value: "full" }],
};

const ohlcInput = {
  label: "OHLC",
  value: "OHLC",
  required: false,
  options: [
    { name: "Close", value: "close" },
    { name: "Open", value: "open" },
    { name: "High", value: "high" },
    { name: "Low", value: "low" },
  ],
};

const calculationsInput = {
  label: "Calculations",
  value: "CALCULATIONS",
  required: true,
  options: [
    { name: "Min", value: "MIN" },
    { name: "Max", value: "MAX" },
    { name: "Mean", value: "MEAN" },
    { name: "Median", value: "MEDIAN" },
    { name: "Cumulative Return", value: "CUMULATIVE_RETURN" },
    { name: "Variance", value: "VARIANCE" },
    { name: "STDDEV", value: "STDDEV" },
    { name: "Max Drawdown", value: "MAX_DRAWDOWN" },
    { name: "Histogram", value: "HISTOGRAM" },
    { name: "Autocorrelation", value: "AUTOCORRELATION" },
    { name: "Covariance", value: "COVARIANCE" },
    { name: "Correlation", value: "CORRELATION" },
  ],
};

const windowSizeInput = {
  label: "Window Size",
  value: "window_size",
  required: true,
  options: [
    { name: "10", value: "10" },
    { name: "20", value: "20" },
    { name: "30", value: "30" },
    { name: "40", value: "40" },
    { name: "50", value: "50" },
  ],
};

const dateInput = {
  label: "Date",
  value: "date",
  required: false,
  options: [
    { name: "2025-03-01", value: "2025-03-01" },
    { name: "2025-03-02", value: "2025-03-02" },
    { name: "2025-03-03", value: "2025-03-03" },
    { name: "2025-03-04", value: "2025-03-04" },
    { name: "2025-03-05", value: "2025-03-05" },
    { name: "2025-03-06", value: "2025-03-06" },
  ],
};

const stateInput = {
  label: "State",
  value: "state",
  required: false,
  options: [
    { name: "Active", value: "active" },
    { name: "Delisted", value: "delisted" },
  ],
};

const horizonInput = {
  label: "Horizon",
  value: "horizon",
  required: false,
  options: [
    { name: "3 Month", value: "3month" },
    { name: "6 Month", value: "6month" },
    { name: "12 Month", value: "12month" },
  ],
};

const fromCurrencyInput = {
  label: "From Currency",
  value: "from_currency",
  required: true,
  options: [...currencyInputOptions],
};

const toCurrencyInput = {
  label: "To Currency",
  value: "to_currency",
  required: true,
  options: [...currencyInputOptions],
};

const fromSymbolInput = {
  label: "From Symbol",
  value: "from_symbol",
  required: true,
  options: [...physicalCurrencyOptions],
};

const toSymbolInput = {
  label: "To Symbol",
  value: "to_symbol",
  required: true,
  options: [...physicalCurrencyOptions],
};

const digitalSymbolInput = {
  label: "Symbol",
  value: "symbol",
  required: true,
  options: [...digitalCurrencyOptions],
};

const marketInput = {
  label: "Market",
  value: "market",
  required: true,
  options: [...physicalCurrencyOptions],
};

const longIntervalInput = {
  label: "Interval",
  value: "interval",
  required: false,
  options: [
    { name: "Monthly", value: "monthly" },
    { name: "Daily", value: "daily" },
    { name: "Weekly", value: "weekly" },
  ],
};

const doubleLongIntervalInput = {
  label: "Interval",
  value: "interval",
  required: false,
  options: [
    { name: "Annual", value: "annual" },
    { name: "Quarterly", value: "quarterly" },
  ],
};

const maturityInput = {
  label: "Maturity",
  value: "maturity",
  required: false,
  options: [
    { name: "10 Year", value: "10year" },
    { name: "3 Month", value: "3month" },
    { name: "2 Year", value: "2year" },
    { name: "5 Year", value: "5year" },
    { name: "7 Year", value: "7year" },
    { name: "30 Year", value: "30year" },
  ],
};

const timePeriodInput = {
  label: "Time Period",
  value: "time_period",
  required: true,
  options: [
    { name: "10", value: "10" },
    { name: "3", value: "3" },
    { name: "2", value: "2" },
    { name: "5", value: "5" },
    { name: "7", value: "7" },
    { name: "30", value: "30" },
  ],
};

const seriesTypeInput = {
  label: "Series Type Input",
  value: "series_type",
  required: false,
  options: [
    { name: "Close", value: "close" },
    { name: "Open", value: "open" },
    { name: "High", value: "high" },
    { name: "Low", value: "low" },
  ],
};

export {
  symbolInput,
  timeIntervalInput,
  adjustedInput,
  extendedHoursInput,
  monthInput,
  outputSizeInput,
  requireGreeksInput,
  topicsInput,
  sortInput,
  limitInput,
  rangeInput,
  ohlcInput,
  calculationsInput,
  windowSizeInput,
  dateInput,
  stateInput,
  horizonInput,
  fromCurrencyInput,
  toCurrencyInput,
  fromSymbolInput,
  toSymbolInput,
  digitalSymbolInput,
  marketInput,
  longIntervalInput,
  doubleLongIntervalInput,
  maturityInput,
  timePeriodInput,
  seriesTypeInput,
};
