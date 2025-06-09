"use client";

import { useState } from "react";
import { DataTable } from "../components/DataTable";
import { AlphaVantageService } from "../services/alphaVantage";
import PageLayout from "../ui/components/shared/PageLayout";

interface FundamentalData {
  [key: string]: {
    symbol: string;
    name: string;
    description: string;
    exchange: string;
    currency: string;
    sector: string;
    industry: string;
    marketCap: string;
    peRatio: string;
    eps: string;
    dividendYield: string;
  };
}

interface ApiResponse {
  [key: string]: FundamentalData | string;
}

export default function FundamentalPage() {
  const [symbol, setSymbol] = useState("");
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const service = AlphaVantageService.getInstance();
      const response: ApiResponse = await service.getCompanyOverview(symbol);

      // Transform the response data into a format suitable for the table
      const fundamentalKey = Object.keys(response).find((key) =>
        key.includes("Overview")
      );
      if (fundamentalKey) {
        const fundamentalData = response[fundamentalKey] as FundamentalData;
        const transformedData = Object.entries(fundamentalData).map(
          ([symbol, values]) => ({
            stockSymbol: symbol,
            ...values,
          })
        );
        setData(transformedData);
      } else {
        setError("No fundamental data found in the response");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { header: "Symbol", accessor: "stockSymbol" },
    { header: "Name", accessor: "name" },
    { header: "Description", accessor: "description" },
    { header: "Exchange", accessor: "exchange" },
    { header: "Currency", accessor: "currency" },
    { header: "Sector", accessor: "sector" },
    { header: "Industry", accessor: "industry" },
    { header: "Market Cap", accessor: "marketCap" },
    { header: "P/E Ratio", accessor: "peRatio" },
    { header: "EPS", accessor: "eps" },
    { header: "Dividend Yield", accessor: "dividendYield" },
  ];

  return (
    <PageLayout className="min-h-svh">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Fundamental Data</h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4 items-end">
            <div>
              <label
                htmlFor="symbol"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Stock Symbol
              </label>
              <input
                type="text"
                id="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
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
