"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Table from "@/app/components/ui/Table";
import { fetchAlphaVantageData } from "@/app/lib/alpha-vantage/api";

interface NewsData {
  [key: string]: {
    title: string;
    url: string;
    time_published: string;
    summary: string;
    sentiment: string;
  };
}

const Page = () => {
  const [keywords, setKeywords] = useState("");
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await fetchAlphaVantageData("NEWS_SENTIMENT", {
        keywords,
      });

      const newsKey = Object.keys(response).find((key) => key.includes("News"));
      if (newsKey) {
        const newsData = response[newsKey] as NewsData;
        const transformedData = Object.entries(newsData).map(
          ([title, values]) => ({
            newsTitle: title,
            ...values,
          })
        );
        setData(transformedData);
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
    { header: "Title", accessor: "newsTitle" },
    { header: "URL", accessor: "url" },
    { header: "Time Published", accessor: "time_published" },
    { header: "Summary", accessor: "summary" },
    { header: "Sentiment", accessor: "sentiment" },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Alpha Intelligence"
        description="Get market sentiment and news analysis"
      />

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4 items-end">
          <Input
            label="Keywords"
            id="keywords"
            value={keywords}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setKeywords(e.target.value)
            }
            placeholder="e.g., AAPL"
            required
          />

          <Button type="submit" isLoading={isLoading}>
            Fetch Data
          </Button>
        </div>
      </form>

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
