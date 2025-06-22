"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Table from "@/app/components/ui/Table";
import Form from "@/app/components/ui/Form";
import { AlphaVantageService } from "@/app/lib/alpha-vantage/service";
import { NewsFeedItem } from "@/app/lib/alpha-vantage/types";

const Page = () => {
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (formData: Record<string, string>) => {
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

  const columns = [
    { header: "Title", accessor: "title" },
    { header: "URL", accessor: "url" },
    { header: "Time Published", accessor: "time_published" },
    { header: "Authors", accessor: "authors" },
    { header: "Summary", accessor: "summary" },
    { header: "Banner Image", accessor: "banner_image" },
    { header: "Source", accessor: "source" },
    { header: "Category", accessor: "category_within_source" },
    { header: "Source Domain", accessor: "source_domain" },
    { header: "Topics", accessor: "topics" },
    { header: "Overall Sentiment Score", accessor: "overall_sentiment_score" },
    { header: "Overall Sentiment Label", accessor: "overall_sentiment_label" },
    { header: "Ticker Sentiment", accessor: "ticker_sentiment" },
  ];

  const formFields = [
    {
      name: "keywords",
      label: "Keywords",
      type: "text" as const,
      placeholder: "e.g., AAPL",
      required: true,
    },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Alpha Intelligence"
        description="Get market sentiment and news analysis"
      />
      <Form
        fields={formFields}
        onSubmit={handleSubmit}
        submitLabel="Fetch Data"
        isLoading={isLoading}
        error={error}
        className="mb-8"
      />
      <Table
        columns={columns}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </PageLayout>
  );
};

export default Page;
