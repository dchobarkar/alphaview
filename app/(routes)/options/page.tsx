"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Table from "@/app/components/ui/Table";
import Form from "@/app/components/ui/Form";
import { AlphaVantageService } from "@/app/lib/alpha-vantage/service";

const Page = () => {
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (formData: Record<string, string>) => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await AlphaVantageService.getOptions(formData.symbol);
      const optionsArray = response.data;

      if (Array.isArray(optionsArray) && optionsArray.length > 0) {
        setData(optionsArray);
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
    { header: "Contract ID", accessor: "contractID" },
    { header: "Type", accessor: "type" },
    { header: "Strike", accessor: "strike" },
    { header: "Expiration", accessor: "expiration" },
    { header: "Date", accessor: "date" },
    { header: "Symbol", accessor: "symbol" },
    { header: "Last Price", accessor: "last" },
    { header: "Mark", accessor: "mark" },
    { header: "Bid", accessor: "bid" },
    { header: "Bid Size", accessor: "bid_size" },
    { header: "Ask", accessor: "ask" },
    { header: "Ask Size", accessor: "ask_size" },
    { header: "Volume", accessor: "volume" },
    { header: "Open Interest", accessor: "open_interest" },
    { header: "Implied Volatility", accessor: "implied_volatility" },
    { header: "Delta", accessor: "delta" },
    { header: "Gamma", accessor: "gamma" },
    { header: "Theta", accessor: "theta" },
    { header: "Vega", accessor: "vega" },
    { header: "Rho", accessor: "rho" },
  ];

  const formFields = [
    {
      name: "symbol",
      label: "Stock Symbol",
      type: "text" as const,
      placeholder: "e.g., AAPL",
      required: true,
      validation: {
        pattern: /^[A-Z]{1,5}$/,
        message: "Please enter a valid stock symbol (1-5 uppercase letters)",
      },
    },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Options Data APIs"
        description="View options chain data and volatility metrics"
      />

      <Form
        fields={formFields}
        onSubmit={handleSubmit}
        submitLabel="Fetch Data"
        isLoading={isLoading}
        error={error}
        className="mb-8"
      />

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
