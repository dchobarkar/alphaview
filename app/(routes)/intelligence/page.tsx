"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Table from "@/app/components/ui/Table";
import Form from "@/app/components/ui/Form";
import { AlphaVantageService } from "@/app/lib/alpha-vantage/service";
import {
  NewsFeedItem,
  InsiderTransaction,
} from "@/app/lib/alpha-vantage/types";

type TabType = "news" | "gainers-losers" | "insider";

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
      id: "insider" as TabType,
      label: "Insider Transactions",
      description: "Recent insider trading activity for a symbol",
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

  const handleInsiderTransactions = async (
    formData: Record<string, string>
  ) => {
    setIsLoading(true);
    setError(undefined);
    try {
      const response = await AlphaVantageService.getInsiderTransactions(
        formData.symbol
      );
      const insiderArray = response.data;
      if (Array.isArray(insiderArray) && insiderArray.length > 0) {
        const processedData: Record<string, string | number>[] =
          insiderArray.map((item: InsiderTransaction) => ({
            transaction_date: item.transaction_date,
            ticker: item.ticker,
            executive: item.executive,
            executive_title: item.executive_title,
            security_type: item.security_type,
            acquisition_or_disposal: item.acquisition_or_disposal,
            shares: item.shares,
            share_price: item.share_price,
          }));
        setData(processedData);
      } else {
        setError("No insider transaction data found");
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

      case "insider":
        return [
          { header: "Date", accessor: "transaction_date" },
          { header: "Ticker", accessor: "ticker" },
          { header: "Executive", accessor: "executive" },
          { header: "Title", accessor: "executive_title" },
          { header: "Security Type", accessor: "security_type" },
          { header: "Action", accessor: "acquisition_or_disposal" },
          { header: "Shares", accessor: "shares" },
          { header: "Share Price", accessor: "share_price" },
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
      case "insider":
        return [
          {
            name: "symbol",
            label: "Symbol",
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
      case "insider":
        await handleInsiderTransactions(formData);
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
      {(activeTab === "news" || activeTab === "insider") && (
        <Form
          fields={getFormFields()}
          onSubmit={handleSubmit}
          submitLabel={
            activeTab === "news"
              ? "Fetch News Sentiment"
              : "Fetch Insider Transactions"
          }
          isLoading={isLoading}
          error={error}
          className="mb-8"
        />
      )}
      {/* Action buttons for other tabs */}
      {activeTab !== "news" && activeTab !== "insider" && (
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
