"use client";

import { useState } from "react";
import { DataTable } from "../components/DataTable";
import { AlphaVantageService } from "../services/alphaVantage";
import PageLayout from "../ui/components/shared/PageLayout";

interface TimeSeriesData {
  [key: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
}

interface ApiResponse {
  [key: string]: TimeSeriesData | string;
}

export default function CoreStockPage() {
  const [symbol, setSymbol] = useState("");
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [dataType, setDataType] = useState("daily");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const service = AlphaVantageService.getInstance();
      let response: ApiResponse;

      switch (dataType) {
        case "intraday":
          response = await service.getIntraday(symbol);
          break;
        case "daily":
          response = await service.getDaily(symbol);
          break;
        case "weekly":
          response = await service.getWeekly(symbol);
          break;
        case "monthly":
          response = await service.getMonthly(symbol);
          break;
        default:
          response = await service.getDaily(symbol);
      }

      // Transform the response data into a format suitable for the table
      const timeSeriesKey = Object.keys(response).find((key) =>
        key.includes("Time Series")
      );
      if (timeSeriesKey) {
        const timeSeriesData = response[timeSeriesKey] as TimeSeriesData;
        const transformedData = Object.entries(timeSeriesData).map(
          ([date, values]) => ({
            date,
            ...values,
          })
        );
        setData(transformedData);
      } else {
        setError("No time series data found in the response");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { header: "Date", accessor: "date" },
    { header: "Open", accessor: "1. open" },
    { header: "High", accessor: "2. high" },
    { header: "Low", accessor: "3. low" },
    { header: "Close", accessor: "4. close" },
    { header: "Volume", accessor: "5. volume" },
  ];

  return (
    <PageLayout className="min-h-svh">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Core Stock APIs</h1>

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

            <div>
              <label
                htmlFor="dataType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Data Type
              </label>
              <select
                id="dataType"
                value={dataType}
                onChange={(e) => setDataType(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="intraday">Intraday</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
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
