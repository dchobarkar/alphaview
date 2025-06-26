export interface TimeSeriesData {
  [date: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
}

export interface GlobalQuote {
  "01. symbol": string;
  "02. open": string;
  "03. high": string;
  "04. low": string;
  "05. price": string;
  "06. volume": string;
  "07. latest trading day": string;
  "08. previous close": string;
  "09. change": string;
  "10. change percent": string;
}

export interface SearchResult {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": string;
}

export interface TopGainersLosers {
  top_gainers: Array<{
    ticker: string;
    price: string;
    change_amount: string;
    change_percentage: string;
    volume: string;
  }>;
  top_losers: Array<{
    ticker: string;
    price: string;
    change_amount: string;
    change_percentage: string;
    volume: string;
  }>;
  most_actively_traded: Array<{
    ticker: string;
    price: string;
    change_amount: string;
    change_percentage: string;
    volume: string;
  }>;
}

export interface TreasuryYield {
  [date: string]: {
    "1 month": string;
    "2 month": string;
    "3 month": string;
    "6 month": string;
    "1 year": string;
    "2 year": string;
    "3 year": string;
    "5 year": string;
    "7 year": string;
    "10 year": string;
    "20 year": string;
    "30 year": string;
  };
}

export interface FederalFundsRate {
  [date: string]: {
    "federal funds rate": string;
  };
}

export interface CPIData {
  [date: string]: {
    CPI: string;
  };
}

export interface InflationExpectation {
  [date: string]: {
    "inflation expectation": string;
  };
}

export interface AlphaVantageResponse {
  [key: string]:
    | string
    | TimeSeriesData
    | GlobalQuote
    | SearchResult[]
    | TopGainersLosers
    | TreasuryYield
    | FederalFundsRate
    | CPIData
    | InflationExpectation
    | TopGainersLosers["top_gainers"]
    | TopGainersLosers["top_losers"]
    | TopGainersLosers["most_actively_traded"]
    | { [key: string]: string }
    | undefined;
  "Meta Data"?: {
    [key: string]: string;
  };
  "Time Series (Daily)"?: TimeSeriesData;
  "Global Quote"?: GlobalQuote;
  bestMatches?: SearchResult[];
  "Top Gainers"?: TopGainersLosers["top_gainers"];
  "Top Losers"?: TopGainersLosers["top_losers"];
  "Most Actively Traded"?: TopGainersLosers["most_actively_traded"];
  "Treasury Yield"?: TreasuryYield;
  "Federal Funds Rate"?: FederalFundsRate;
  CPI?: CPIData;
  "Inflation Expectation"?: InflationExpectation;
}

export type NewsFeedItem = {
  title: string;
  url: string;
  time_published: string;
  authors: string[] | string;
  summary: string;
  banner_image: string;
  source: string;
  category_within_source: string;
  source_domain: string;
  topics: { topic: string }[] | string;
  overall_sentiment_score: number | string;
  overall_sentiment_label: string;
  ticker_sentiment:
    | { ticker: string; ticker_sentiment_label: string }[]
    | string;
  [key: string]: unknown;
};

export interface InsiderTransaction {
  transaction_date: string;
  ticker: string;
  executive: string;
  executive_title: string;
  security_type: string;
  acquisition_or_disposal: string;
  shares: string;
  share_price: string;
  [key: string]: unknown;
}

export interface CompanyOverview {
  Symbol: string;
  AssetType: string;
  Name: string;
  Description: string;
  CIK: string;
  Exchange: string;
  Currency: string;
  Country: string;
  Sector: string;
  Industry: string;
  Address: string;
  FiscalYearEnd: string;
  LatestQuarter: string;
  MarketCapitalization: string;
  EBITDA: string;
  PERatio: string;
  PEGRatio: string;
  BookValue: string;
  DividendPerShare: string;
  DividendYield: string;
  EPS: string;
  RevenuePerShareTTM: string;
  ProfitMargin: string;
  OperatingMarginTTM: string;
  ReturnOnAssetsTTM: string;
  ReturnOnEquityTTM: string;
  RevenueTTM: string;
  GrossProfitTTM: string;
  DilutedEPSTTM: string;
  QuarterlyEarningsGrowthYOY: string;
  QuarterlyRevenueGrowthYOY: string;
  AnalystTargetPrice: string;
  TrailingPE: string;
  ForwardPE: string;
  PriceToSalesRatioTTM: string;
  PriceToBookRatio: string;
  EVToRevenue: string;
  EVToEBITDA: string;
  Beta: string;
  "52WeekHigh": string;
  "52WeekLow": string;
  "50DayMovingAverage": string;
  "200DayMovingAverage": string;
  SharesOutstanding: string;
  DividendDate: string;
  ExDividendDate: string;
  [key: string]: string;
}

export interface ETFOverview {
  Symbol: string;
  Name: string;
  Description: string;
  Exchange: string;
  Currency: string;
  Country: string;
  Sector: string;
  Industry: string;
  Address: string;
  FiscalYearEnd: string;
  LatestQuarter: string;
  MarketCapitalization: string;
  NetAssetValue: string;
  TotalAssets: string;
  SharesOutstanding: string;
  DividendDate: string;
  ExDividendDate: string;
  [key: string]: string;
}

export interface DividendHistoryItem {
  symbol: string;
  dividend: string;
  recordDate: string;
  paymentDate: string;
  declarationDate: string;
  [key: string]: string;
}

export interface SplitHistoryItem {
  symbol: string;
  splitRatio: string;
  splitDate: string;
  [key: string]: string;
}

export interface IncomeStatement {
  symbol: string;
  annualReports: Array<{ [key: string]: string }>;
  quarterlyReports: Array<{ [key: string]: string }>;
}

export interface BalanceSheet {
  symbol: string;
  annualReports: Array<{ [key: string]: string }>;
  quarterlyReports: Array<{ [key: string]: string }>;
}

export interface CashFlow {
  symbol: string;
  annualReports: Array<{ [key: string]: string }>;
  quarterlyReports: Array<{ [key: string]: string }>;
}

export interface Earnings {
  symbol: string;
  annualEarnings: Array<{ [key: string]: string }>;
  quarterlyEarnings: Array<{ [key: string]: string }>;
}

export interface ListingStatusItem {
  symbol: string;
  name: string;
  exchange: string;
  assetType: string;
  ipoDate: string;
  delistingDate: string;
  status: string;
  [key: string]: string;
}

export interface EarningsCalendarItem {
  symbol: string;
  name: string;
  reportDate: string;
  fiscalDateEnding: string;
  estimate: string;
  currency: string;
  [key: string]: string;
}

export interface IPOCalendarItem {
  symbol: string;
  name: string;
  ipoDate: string;
  priceRangeLow: string;
  priceRangeHigh: string;
  currency: string;
  exchange: string;
  [key: string]: string;
}
