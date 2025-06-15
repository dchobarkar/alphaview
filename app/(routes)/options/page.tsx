"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Table from "@/app/components/ui/Table";
import { fetchAlphaVantageData } from "@/app/lib/alpha-vantage/api";

interface OptionsData {
  [key: string]: {
    strike: string;
    lastPrice: string;
    bid: string;
    ask: string;
    volume: string;
    openInterest: string;
  };
}

const Page = () => {
  const [symbol, setSymbol] = useState("");
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await fetchAlphaVantageData("OPTIONS", {
        symbol,
      });

      const optionsKey = Object.keys(response).find((key) =>
        key.includes("Options")
      );
      if (optionsKey) {
        const optionsData = response[optionsKey] as OptionsData;
        const transformedData = Object.entries(optionsData).map(
          ([strike, values]) => ({
            ...values,
            strike,
          })
        );
        setData(transformedData);
      } else {
        setError("No options data found in the response");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { header: "Strike", accessor: "strike" },
    { header: "Last Price", accessor: "lastPrice" },
    { header: "Bid", accessor: "bid" },
    { header: "Ask", accessor: "ask" },
    { header: "Volume", accessor: "volume" },
    { header: "Open Interest", accessor: "openInterest" },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Options Data APIs"
        description="View options chain data and volatility metrics"
      />

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4 items-end">
          <Input
            label="Stock Symbol"
            id="symbol"
            value={symbol}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSymbol(e.target.value.toUpperCase())
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
