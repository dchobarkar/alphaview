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

export interface AlphaVantageResponse {
  [key: string]:
    | string
    | TimeSeriesData
    | GlobalQuote
    | SearchResult[]
    | { [key: string]: string }
    | undefined;
  "Meta Data"?: {
    [key: string]: string;
  };
  "Time Series (Daily)"?: TimeSeriesData;
  "Global Quote"?: GlobalQuote;
  bestMatches?: SearchResult[];
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
