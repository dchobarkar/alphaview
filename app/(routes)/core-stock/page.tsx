"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Form from "@/app/components/ui/Form";
import Table from "@/app/components/ui/Table";
import { AlphaVantageService } from "@/app/lib/alpha-vantage/service";
import { TimeSeriesData } from "@/app/lib/alpha-vantage/types";

const Page = () => {
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (formData: Record<string, string>) => {
    setIsLoading(true);
    setError(undefined);

    try {
      let response;

      switch (formData.dataType) {
        case "intraday":
          response = await AlphaVantageService.getIntraday(
            formData.symbol,
            "5min"
          );
          break;
        case "weekly":
          response = await AlphaVantageService.getWeekly(formData.symbol);
          break;
        case "monthly":
          response = await AlphaVantageService.getMonthly(formData.symbol);
          break;
        default:
          response = await AlphaVantageService.getDaily(formData.symbol);
      }

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
    {
      name: "dataType",
      label: "Data Type",
      type: "select" as const,
      required: true,
      options: [
        { value: "intraday", label: "Intraday" },
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "monthly", label: "Monthly" },
      ],
    },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Core Stock APIs"
        description="Access real-time and historical stock data"
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
