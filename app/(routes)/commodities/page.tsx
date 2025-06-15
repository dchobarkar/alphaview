"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Table from "@/app/components/ui/Table";
import { fetchAlphaVantageData } from "@/app/lib/alpha-vantage/api";

interface CommodityData {
  [key: string]: {
    symbol: string;
    price: string;
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
      const response = await fetchAlphaVantageData("CURRENCY_EXCHANGE_RATE", {
        from_currency: symbol,
        to_currency: "USD",
      });

      const commodityKey = Object.keys(response).find((key) =>
        key.includes("Price")
      );
      if (commodityKey) {
        const commodityData = response[commodityKey] as CommodityData;
        const transformedData = Object.entries(commodityData).map(
          ([symbol, values]) => ({
            commoditySymbol: symbol,
            ...values,
          })
        );
        setData(transformedData);
      } else {
        setError("No commodity data found in the response");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { header: "Symbol", accessor: "commoditySymbol" },
    { header: "Price", accessor: "price" },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Commodities Data"
        description="Access real-time commodity prices"
      />

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4 items-end">
          <Input
            label="Commodity Symbol"
            id="symbol"
            value={symbol}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSymbol(e.target.value.toUpperCase())
            }
            placeholder="e.g., GOLD"
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
