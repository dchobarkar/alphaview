"use client";

import { useState } from "react";
import { DataTable } from "../components/DataTable";
import { AlphaVantageService } from "../services/alphaVantage";
import PageLayout from "../ui/components/shared/PageLayout";

interface NewsData {
  [key: string]: {
    title: string;
    url: string;
    time_published: string;
    summary: string;
    sentiment: string;
  };
}

interface ApiResponse {
  [key: string]: NewsData | string;
}

export default function IntelligencePage() {
  const [keywords, setKeywords] = useState("");
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const service = AlphaVantageService.getInstance();
      const response: ApiResponse = await service.getNewsSentiment(keywords);

      // Transform the response data into a format suitable for the table
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
    <PageLayout className="min-h-svh">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Alpha Intelligence</h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4 items-end">
            <div>
              <label
                htmlFor="keywords"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Keywords
              </label>
              <input
                type="text"
                id="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., AAPL"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Fetch Data
            </button>
          </div>
        </form>

        <DataTable
          columns={columns}
          data={data}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </PageLayout>
  );
}
