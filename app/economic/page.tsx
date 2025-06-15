"use client";

import { useState } from "react";

import { DataTable } from "../components/DataTable";
import PageLayout from "../ui/components/shared/PageLayout";
import { AlphaVantageService } from "../services/alphaVantage";

interface EconomicData {
  [key: string]: {
    indicator: string;
    value: string;
  };
}

interface ApiResponse {
  [key: string]: EconomicData | string;
}

export default function EconomicPage() {
  const [indicator, setIndicator] = useState("");
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const service = AlphaVantageService.getInstance();
      const response: ApiResponse = await service.getEconomicIndicator(
        indicator
      );

      const economicKey = Object.keys(response).find((key) =>
        key.includes("Indicator")
      );
      if (economicKey) {
        const economicData = response[economicKey] as EconomicData;
        const transformedData = Object.entries(economicData).map(
          ([indicator, values]) => ({
            economicIndicator: indicator,
            ...values,
          })
        );
        setData(transformedData);
      } else {
        setError("No economic indicator data found in the response");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { header: "Indicator", accessor: "economicIndicator" },
    { header: "Value", accessor: "value" },
  ];

  return (
    <PageLayout className="min-h-svh">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Economic Indicators Data</h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4 items-end">
            <div>
              <label
                htmlFor="indicator"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Economic Indicator
              </label>
              <input
                type="text"
                id="indicator"
                value={indicator}
                onChange={(e) => setIndicator(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., GDP"
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
