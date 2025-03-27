const stockAPIList = [
  { name: "Time Series Stock Data APIs", href: "/stock_apis/core_stock_apis" },
  { name: "Options Data APIs", href: "/stock_apis/options_data_apis" },
  { name: "Alpha Intelligence™", href: "/stock_apis/alpha_intelligence" },
  { name: "Fundamental Data", href: "/stock_apis/fundamental_data" },
  { name: "Foreign Exchange Rates (FX)", href: "/stock_apis/forex" },
  { name: "Digital & Crypto Currencies", href: "/stock_apis/cryptocurrencies" },
  { name: "Commodities", href: "/stock_apis/commodities" },
  { name: "Economic Indicators", href: "/stock_apis/economic_indicators" },
  { name: "Technical Indicators", href: "/stock_apis/technical_indicators" },
];

const coreStockAPIList = [
  {
    name: "Time Series Intraday",
    href: "/stock_apis/core_stock_apis/intraday",
  },
  { name: "Time Series Daily", href: "/stock_apis/core_stock_apis/daily" },
  {
    name: "Time Series Daily Adjusted",
    href: "/stock_apis/core_stock_apis/daily_adjusted",
  },
  { name: "Time Series Weekly", href: "/stock_apis/core_stock_apis/weekly" },
  {
    name: "Time Series Weekly Adjusted",
    href: "/stock_apis/core_stock_apis/weekly_adjusted",
  },
  { name: "Time Series Monthly", href: "/stock_apis/core_stock_apis/monthly" },
  {
    name: "Time Series Monthly Adjusted",
    href: "/stock_apis/core_stock_apis/monthly_adjusted",
  },
  {
    name: "Quote Endpoint",
    href: "/stock_apis/core_stock_apis/quote_endpoint",
  },
  {
    name: "Realtime Bulk Quotes",
    href: "/stock_apis/core_stock_apis/realtime_bulk_quotes",
  },
  { name: "Ticker Search", href: "/stock_apis/core_stock_apis/ticker_search" },
  {
    name: "Global Market Open & Close Status",
    href: "/stock_apis/core_stock_apis/global_market_status",
  },
];

const optionsDataAPIList = [
  {
    name: "Realtime Options",
    href: "/stock_apis/options_data_apis/realtime_options",
  },
  {
    name: "Historical Options",
    href: "/stock_apis/options_data_apis/historical_options",
  },
];

const alphaIntelligenceList = [
  {
    name: "Market News & Sentiment",
    href: "/stock_apis/alpha_intelligence/new_and_sentiments",
  },
  {
    name: "Top Gainers, Losers, and Most Actively Traded Tickers (US Market)",
    href: "/stock_apis/alpha_intelligence/top_gainers_and_losers",
  },
  {
    name: "Insider Transactions",
    href: "/stock_apis/alpha_intelligence/insider_transactions",
  },
  {
    name: "Advanced Analytics (Fixed Window)",
    href: "/stock_apis/alpha_intelligence/analytics_fixed_window",
  },
  {
    name: "Advanced Analytics (Sliding Window)",
    href: "/stock_apis/alpha_intelligence/analytics_sliding_window",
  },
];

const fundamentalDataList = [
  {
    name: "Company Overview",
    href: "/stock_apis/fundamental_data/company_overview",
  },
  {
    name: "ETF Profile & Holdings",
    href: "/stock_apis/fundamental_data/etf_profile_and_holdings",
  },
  {
    name: "Corporate Action - Dividends",
    href: "/stock_apis/fundamental_data/corporate_action_dividends",
  },
  {
    name: "Corporate Action - Splits",
    href: "/stock_apis/fundamental_data/corporate_action_splits",
  },
  {
    name: "Income Statement",
    href: "/stock_apis/fundamental_data/income_statement",
  },
  { name: "Balance Sheet", href: "/stock_apis/fundamental_data/balance_sheet" },
  { name: "Cash Flow", href: "/stock_apis/fundamental_data/cash_flow" },
  { name: "Earnings", href: "/stock_apis/fundamental_data/earnings" },
  {
    name: "Listing & Delisting Status",
    href: "/stock_apis/fundamental_data/listing_and_delisting_status",
  },
  {
    name: "Earnings Calendar",
    href: "/stock_apis/fundamental_data/earnings_calender",
  },
  { name: "IPO Calendar", href: "/stock_apis/fundamental_data/ipo_calender" },
];

const forexList = [
  { name: "Currency Exchange Rate", href: "/stock_apis/forex/exchange_rates" },
  { name: "FX Intraday", href: "/stock_apis/forex/intraday" },
  { name: "FX Daily", href: "/stock_apis/forex/daily" },
  { name: "FX Weekly", href: "/stock_apis/forex/weekly" },
  { name: "FX Monthly", href: "/stock_apis/forex/monthly" },
];

const cryptocurrenciesList = [
  {
    name: "Currency Exchange Rate",
    href: "/stock_apis/cryptocurrencies/exchange_rates",
  },
  { name: "Crypto Intraday", href: "/stock_apis/cryptocurrencies/intraday" },
  {
    name: "Digital Currency Daily",
    href: "/stock_apis/cryptocurrencies/daily",
  },
  {
    name: "Digital Currency Weekly",
    href: "/stock_apis/cryptocurrencies/weekly",
  },
  {
    name: "Digital Currency Monthly",
    href: "/stock_apis/cryptocurrencies/monthly",
  },
];

const commoditiesList = [
  {
    name: "Crude Oil Prices: West Texas Intermediate (WTI)",
    href: "/stock_apis/commodities/crude_oil_wti",
  },
  {
    name: "Crude Oil Prices (Brent) ",
    href: "/stock_apis/commodities/crude_oil_brent",
  },
  { name: "Natural Gas", href: "/stock_apis/commodities/natural_gas" },
  { name: "Global Price of Copper", href: "/stock_apis/commodities/copper" },
  {
    name: "Global Price of Aluminum",
    href: "/stock_apis/commodities/aluminium",
  },
  { name: "Global Price of Wheat", href: "/stock_apis/commodities/wheat" },
  { name: "Global Price of Corn", href: "/stock_apis/commodities/corn" },
  { name: "Global Price of Cotton", href: "/stock_apis/commodities/cotton" },
  { name: "Global Price of Sugar", href: "/stock_apis/commodities/sugar" },
  { name: "Global Price of Coffee", href: "/stock_apis/commodities/coffee" },
  {
    name: "Global Price Index of All Commodities",
    href: "/stock_apis/commodities/global_commodities_index",
  },
];

const economicIndicatorsList = [
  { name: "Real GDP", href: "/stock_apis/economic_indicators/real_gdp" },
  {
    name: "Real GDP per Capita",
    href: "/stock_apis/economic_indicators/real_gdp_per_capita",
  },
  {
    name: "Treasury Yield",
    href: "/stock_apis/economic_indicators/treasury_yeild",
  },
  {
    name: "Federal Funds Rate",
    href: "/stock_apis/economic_indicators/federal_funds_rate",
  },
  { name: "CPI", href: "/stock_apis/economic_indicators/cpi" },
  { name: "Inflation", href: "/stock_apis/economic_indicators/inflation" },
  {
    name: "Retail Sales",
    href: "/stock_apis/economic_indicators/retail_sales",
  },
  {
    name: "Durables",
    href: "/stock_apis/economic_indicators/durable_goods_orders",
  },
  {
    name: "Unemployment",
    href: "/stock_apis/economic_indicators/unemployment_rate",
  },
  {
    name: "Nonfarm Payroll",
    href: "/stock_apis/economic_indicators/nonfarm_payroll",
  },
];

const technicalIndicatorsList = [
  { name: "SMA ", href: "/stock_apis/technical_indicators/sma" },
  { name: "EMA", href: "/stock_apis/technical_indicators/ema" },
  { name: "WMA", href: "/stock_apis/technical_indicators/wma" },
  { name: "DEMA", href: "/stock_apis/technical_indicators/dema" },
  { name: "TEMA", href: "/stock_apis/technical_indicators/tema" },
  { name: "TRIMA", href: "/stock_apis/technical_indicators/trima" },
  { name: "KAMA", href: "/stock_apis/technical_indicators/kama" },
];

export {
  stockAPIList,
  coreStockAPIList,
  optionsDataAPIList,
  alphaIntelligenceList,
  fundamentalDataList,
  forexList,
  cryptocurrenciesList,
  commoditiesList,
  economicIndicatorsList,
  technicalIndicatorsList,
};
