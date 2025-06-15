"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Table from "@/app/components/ui/Table";
import { fetchAlphaVantageData } from "@/app/lib/alpha-vantage/api";

interface TechnicalData {
  [key: string]: {
    symbol: string;
    value: string;
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
      const response = await fetchAlphaVantageData("SMA", {
        symbol,
        interval: "daily",
        time_period: "20",
        series_type: "close",
      });

      const technicalKey = Object.keys(response).find((key) =>
        key.includes("SMA")
      );
      if (technicalKey) {
        const technicalData = response[technicalKey] as TechnicalData;
        const transformedData = Object.entries(technicalData).map(
          ([symbol, values]) => ({
            technicalSymbol: symbol,
            ...values,
          })
        );
        setData(transformedData);
      } else {
        setError("No technical indicator data found in the response");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { header: "Symbol", accessor: "technicalSymbol" },
    { header: "Value", accessor: "value" },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Technical Indicators Data"
        description="Access technical analysis indicators"
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
