"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Table from "@/app/components/ui/Table";
import { fetchAlphaVantageData } from "@/app/lib/alpha-vantage/api";

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
      const response = await fetchAlphaVantageData("OVERVIEW", {
        symbol,
      });

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
    <PageLayout>
      <SectionHeader
        title="Fundamental Data"
        description="Access company financials and earnings data"
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
