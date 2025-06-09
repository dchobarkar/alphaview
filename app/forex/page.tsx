"use client";

import { useState } from "react";
import { DataTable } from "../components/DataTable";
import { AlphaVantageService } from "../services/alphaVantage";
import PageLayout from "../ui/components/shared/PageLayout";

interface ForexData {
  [key: string]: {
    fromCurrency: string;
    toCurrency: string;
    exchangeRate: string;
  };
}

interface ApiResponse {
  [key: string]: ForexData | string;
}

export default function ForexPage() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const service = AlphaVantageService.getInstance();
      const response: ApiResponse = await service.getForexExchangeRate(
        fromCurrency,
        toCurrency
      );

      // Transform the response data into a format suitable for the table
      const forexKey = Object.keys(response).find((key) =>
        key.includes("Exchange Rate")
      );
      if (forexKey) {
        const forexData = response[forexKey] as ForexData;
        const transformedData = Object.entries(forexData).map(
          ([fromCurrency, values]) => ({
            fromCurrency,
            ...values,
          })
        );
        setData(transformedData);
      } else {
        setError("No forex data found in the response");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { header: "From Currency", accessor: "fromCurrency" },
    { header: "To Currency", accessor: "toCurrency" },
    { header: "Exchange Rate", accessor: "exchangeRate" },
  ];

  return (
    <PageLayout className="min-h-svh">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Forex (FX) Data</h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4 items-end">
            <div>
              <label
                htmlFor="fromCurrency"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                From Currency
              </label>
              <input
                type="text"
                id="fromCurrency"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value.toUpperCase())}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., USD"
                required
              />
            </div>
            <div>
              <label
                htmlFor="toCurrency"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                To Currency
              </label>
              <input
                type="text"
                id="toCurrency"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value.toUpperCase())}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., EUR"
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
