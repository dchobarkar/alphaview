"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Table from "@/app/components/ui/Table";
import Form from "@/app/components/ui/Form";
import { AlphaVantageService } from "@/app/lib/alpha-vantage/service";
import { NewsFeedItem } from "@/app/lib/alpha-vantage/types";

type TabType =
  | "news"
  | "gainers-losers"
  | "treasury"
  | "federal-funds"
  | "cpi"
  | "inflation";

interface StockItem {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
  volume: string;
}

const Page = () => {
  const [activeTab, setActiveTab] = useState<TabType>("news");
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const tabs = [
    {
      id: "news" as TabType,
      label: "News Sentiment",
      description: "Market sentiment analysis from news",
    },
    {
      id: "gainers-losers" as TabType,
      label: "Top Gainers/Losers",
      description: "Most active US stocks",
    },
    {
      id: "treasury" as TabType,
      label: "Treasury Yields",
      description: "US Treasury yield rates",
    },
    {
      id: "federal-funds" as TabType,
      label: "Federal Funds Rate",
      description: "Federal funds rate data",
    },
    {
      id: "cpi" as TabType,
      label: "CPI",
      description: "Consumer Price Index data",
    },
    {
      id: "inflation" as TabType,
      label: "Inflation Expectations",
      description: "Inflation expectation data",
    },
  ];

  const handleNewsSentiment = async (formData: Record<string, string>) => {
    setIsLoading(true);
    setError(undefined);
    try {
      const response = await AlphaVantageService.getNewsSentiment(
        formData.keywords
      );
      const newsArray = response.feed;
      if (Array.isArray(newsArray) && newsArray.length > 0) {
        const processedData: Record<string, string | number>[] = newsArray.map(
          (item: NewsFeedItem) => ({
            ...item,
            authors: Array.isArray(item.authors)
              ? item.authors.join(", ")
              : item.authors ?? "",
            topics: Array.isArray(item.topics)
              ? item.topics.map((t: { topic: string }) => t.topic).join(", ")
              : item.topics ?? "",
            ticker_sentiment: Array.isArray(item.ticker_sentiment)
              ? item.ticker_sentiment
                  .map(
                    (t: { ticker: string; ticker_sentiment_label: string }) =>
                      `${t.ticker}: ${t.ticker_sentiment_label}`
                  )
                  .join(", ")
              : item.ticker_sentiment ?? "",
          })
        );
        setData(processedData);
      } else {
        setError("No news data found in the response");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTopGainersLosers = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const response = await AlphaVantageService.getTopGainersLosers();
      const processedData: Record<string, string | number>[] = [];

      if (response.top_gainers) {
        response.top_gainers.forEach((item: StockItem) => {
          processedData.push({
            type: "Top Gainer",
            ticker: item.ticker,
            price: item.price,
            change_amount: item.change_amount,
            change_percentage: item.change_percentage,
            volume: item.volume,
          });
        });
      }

      if (response.top_losers) {
        response.top_losers.forEach((item: StockItem) => {
          processedData.push({
            type: "Top Loser",
            ticker: item.ticker,
            price: item.price,
            change_amount: item.change_amount,
            change_percentage: item.change_percentage,
            volume: item.volume,
          });
        });
      }

      if (response.most_actively_traded) {
        response.most_actively_traded.forEach((item: StockItem) => {
          processedData.push({
            type: "Most Active",
            ticker: item.ticker,
            price: item.price,
            change_amount: item.change_amount,
            change_percentage: item.change_percentage,
            volume: item.volume,
          });
        });
      }

      setData(processedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTreasuryYield = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const response = await AlphaVantageService.getTreasuryYield();
      const treasuryData = response["Treasury Yield"];
      if (treasuryData) {
        const processedData: Record<string, string | number>[] = Object.entries(
          treasuryData
        ).map(([date, rates]) => {
          const rateData = rates as {
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
          return {
            date,
            "1_month": rateData["1 month"],
            "2_month": rateData["2 month"],
            "3_month": rateData["3 month"],
            "6_month": rateData["6 month"],
            "1_year": rateData["1 year"],
            "2_year": rateData["2 year"],
            "3_year": rateData["3 year"],
            "5_year": rateData["5 year"],
            "7_year": rateData["7 year"],
            "10_year": rateData["10 year"],
            "20_year": rateData["20 year"],
            "30_year": rateData["30 year"],
          };
        });
        setData(processedData);
      } else {
        setError("No treasury yield data found");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFederalFundsRate = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const response = await AlphaVantageService.getFederalFundsRate();
      const fedData = response["Federal Funds Rate"];
      if (fedData) {
        const processedData: Record<string, string | number>[] = Object.entries(
          fedData
        ).map(([date, rate]) => {
          const rateData = rate as { "federal funds rate": string };
          return {
            date,
            federal_funds_rate: rateData["federal funds rate"],
          };
        });
        setData(processedData);
      } else {
        setError("No federal funds rate data found");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCPI = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const response = await AlphaVantageService.getCPI();
      const cpiData = response["CPI"];
      if (cpiData) {
        const processedData: Record<string, string | number>[] = Object.entries(
          cpiData
        ).map(([date, cpi]) => {
          const cpiData = cpi as { CPI: string };
          return {
            date,
            cpi: cpiData["CPI"],
          };
        });
        setData(processedData);
      } else {
        setError("No CPI data found");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInflationExpectation = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const response = await AlphaVantageService.getInflationExpectation();
      const inflationData = response["Inflation Expectation"];
      if (inflationData) {
        const processedData: Record<string, string | number>[] = Object.entries(
          inflationData
        ).map(([date, expectation]) => {
          const expectationData = expectation as {
            "inflation expectation": string;
          };
          return {
            date,
            inflation_expectation: expectationData["inflation expectation"],
          };
        });
        setData(processedData);
      } else {
        setError("No inflation expectation data found");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const getColumns = () => {
    switch (activeTab) {
      case "news":
        return [
          { header: "Title", accessor: "title" },
          { header: "Time Published", accessor: "time_published" },
          { header: "Source", accessor: "source" },
          { header: "Sentiment Score", accessor: "overall_sentiment_score" },
          { header: "Sentiment Label", accessor: "overall_sentiment_label" },
          { header: "Summary", accessor: "summary" },
        ];

      case "gainers-losers":
        return [
          { header: "Type", accessor: "type" },
          { header: "Ticker", accessor: "ticker" },
          { header: "Price", accessor: "price" },
          { header: "Change Amount", accessor: "change_amount" },
          { header: "Change %", accessor: "change_percentage" },
          { header: "Volume", accessor: "volume" },
        ];
      case "treasury":
        return [
          { header: "Date", accessor: "date" },
          { header: "1 Month", accessor: "1_month" },
          { header: "3 Month", accessor: "3_month" },
          { header: "6 Month", accessor: "6_month" },
          { header: "1 Year", accessor: "1_year" },
          { header: "2 Year", accessor: "2_year" },
          { header: "5 Year", accessor: "5_year" },
          { header: "10 Year", accessor: "10_year" },
          { header: "30 Year", accessor: "30_year" },
        ];
      case "federal-funds":
        return [
          { header: "Date", accessor: "date" },
          { header: "Federal Funds Rate", accessor: "federal_funds_rate" },
        ];
      case "cpi":
        return [
          { header: "Date", accessor: "date" },
          { header: "CPI", accessor: "cpi" },
        ];
      case "inflation":
        return [
          { header: "Date", accessor: "date" },
          {
            header: "Inflation Expectation",
            accessor: "inflation_expectation",
          },
        ];
      default:
        return [];
    }
  };

  const getFormFields = () => {
    switch (activeTab) {
      case "news":
        return [
          {
            name: "keywords",
            label: "Keywords",
            type: "text" as const,
            placeholder: "e.g., AAPL",
            required: true,
          },
        ];
      default:
        return [];
    }
  };

  const handleSubmit = async (formData: Record<string, string>) => {
    switch (activeTab) {
      case "news":
        await handleNewsSentiment(formData);
        break;
      case "gainers-losers":
        await handleTopGainersLosers();
        break;
      case "treasury":
        await handleTreasuryYield();
        break;
      case "federal-funds":
        await handleFederalFundsRate();
        break;
      case "cpi":
        await handleCPI();
        break;
      case "inflation":
        await handleInflationExpectation();
        break;
    }
  };

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    setData([]);
    setError(undefined);
  };

  return (
    <PageLayout>
      <SectionHeader
        title="Alpha Intelligence"
        description="Comprehensive market intelligence and sentiment analysis"
      />
      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {tabs.find((tab) => tab.id === activeTab)?.description}
        </p>
      </div>
      {/* Form (only for news sentiment) */}
      {activeTab === "news" && (
        <Form
          fields={getFormFields()}
          onSubmit={handleSubmit}
          submitLabel="Fetch News Sentiment"
          isLoading={isLoading}
          error={error}
          className="mb-8"
        />
      )}
      {/* Action buttons for other tabs */}
      {activeTab !== "news" && (
        <div className="mb-8">
          <button
            onClick={() => handleSubmit({})}
            disabled={isLoading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading
              ? "Loading..."
              : `Fetch ${tabs.find((tab) => tab.id === activeTab)?.label}`}
          </button>
        </div>
      )}
      {/* Data Table */}
      <Table
        columns={getColumns()}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </PageLayout>
  );
};

export default Page;
