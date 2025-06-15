"use client";

import { useState } from "react";
import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Table from "@/app/components/ui/Table";
import { fetchAlphaVantageData } from "@/app/lib/alpha-vantage/api";

interface CryptoData {
  [key: string]: {
    fromCurrency: string;
    toCurrency: string;
    exchangeRate: string;
  };
}

const Page = () => {
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
      const response = await fetchAlphaVantageData("CURRENCY_EXCHANGE_RATE", {
        from_currency: fromCurrency,
        to_currency: toCurrency,
      });

      const cryptoKey = Object.keys(response).find((key) =>
        key.includes("Exchange Rate")
      );
      if (cryptoKey) {
        const cryptoData = response[cryptoKey] as CryptoData;
        const transformedData = Object.entries(cryptoData).map(
          ([fromCurrency, values]) => ({
            cryptoFromCurrency: fromCurrency,
            ...values,
          })
        );
        setData(transformedData);
      } else {
        setError("No cryptocurrency data found in the response");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { header: "From Currency", accessor: "cryptoFromCurrency" },
    { header: "To Currency", accessor: "toCurrency" },
    { header: "Exchange Rate", accessor: "exchangeRate" },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Cryptocurrencies Data"
        description="Access real-time cryptocurrency exchange rates"
      />

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4 items-end">
          <Input
            label="From Currency"
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFromCurrency(e.target.value.toUpperCase())
            }
            placeholder="e.g., BTC"
            required
          />

          <Input
            label="To Currency"
            id="toCurrency"
            value={toCurrency}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setToCurrency(e.target.value.toUpperCase())
            }
            placeholder="e.g., USD"
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
