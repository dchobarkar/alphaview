"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Table from "@/app/components/ui/Table";
import Form from "@/app/components/ui/Form";
import { AlphaVantageService } from "@/app/lib/alpha-vantage/service";
import { TechnicalIndicatorResponse } from "@/app/lib/alpha-vantage/types";

const TECHNICAL_APIS = [
  { id: "SMA", label: "Simple Moving Average (SMA)", service: "getSMA" },
  { id: "EMA", label: "Exponential Moving Average (EMA)", service: "getEMA" },
  { id: "WMA", label: "Weighted Moving Average (WMA)", service: "getWMA" },
  {
    id: "DEMA",
    label: "Double Exponential Moving Average (DEMA)",
    service: "getDEMA",
  },
  {
    id: "TEMA",
    label: "Triple Exponential Moving Average (TEMA)",
    service: "getTEMA",
  },
];

const INTERVAL_OPTIONS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
];

const SERIES_TYPE_OPTIONS = [
  { value: "close", label: "Close" },
  { value: "open", label: "Open" },
  { value: "high", label: "High" },
  { value: "low", label: "Low" },
];

const DEFAULTS = {
  symbol: "IBM",
  interval: "weekly",
  timePeriod: "10",
  seriesType: "open",
};

const technicalServiceMap = {
  getSMA: AlphaVantageService.getSMA,
  getEMA: AlphaVantageService.getEMA,
  getWMA: AlphaVantageService.getWMA,
  getDEMA: AlphaVantageService.getDEMA,
  getTEMA: AlphaVantageService.getTEMA,
};

const Page = () => {
  const [activeTab, setActiveTab] = useState(TECHNICAL_APIS[0].id);
  const [data, setData] = useState<{ date: string; value: string }[]>([]);
  const [meta, setMeta] = useState<null | TechnicalIndicatorResponse["meta"]>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setData([]);
    setMeta(null);
    setError(undefined);
  };

  const selectedApi = TECHNICAL_APIS.find((a) => a.id === activeTab);

  const formFields = [
    {
      name: "symbol",
      label: "Stock Symbol",
      type: "text" as const,
      required: true,
      placeholder: "e.g., IBM",
    },
    {
      name: "interval",
      label: "Interval",
      type: "select" as const,
      required: true,
      options: INTERVAL_OPTIONS,
    },
    {
      name: "timePeriod",
      label: "Time Period",
      type: "number" as const,
      required: true,
      placeholder: "e.g., 10",
    },
    {
      name: "seriesType",
      label: "Series Type",
      type: "select" as const,
      required: true,
      options: SERIES_TYPE_OPTIONS,
    },
  ];

  const handleFormSubmit = async (formData: Record<string, string>) => {
    setIsLoading(true);
    setError(undefined);
    setData([]);
    setMeta(null);
    try {
      if (!selectedApi) throw new Error("No indicator selected");
      const serviceFn =
        technicalServiceMap[
          selectedApi.service as keyof typeof technicalServiceMap
        ];
      if (!serviceFn) throw new Error("Service not found");
      const response: TechnicalIndicatorResponse = await serviceFn(
        formData.symbol,
        formData.interval,
        Number(formData.timePeriod),
        formData.seriesType
      );
      if (response && response.data && Array.isArray(response.data)) {
        setMeta(response.meta);
        setData(response.data);
      } else {
        setError("No data found in the response");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns: { header: string; accessor: "date" | "value" }[] = [
    { header: "Date", accessor: "date" },
    { header: "Value", accessor: "value" },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Technical Indicators Data"
        description="Access technical analysis indicators"
      />
      {/* Tab Navigation */}
      <div className="mb-6 flex flex-wrap gap-2 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-200">
        {TECHNICAL_APIS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`min-w-max px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Form
        fields={formFields}
        onSubmit={handleFormSubmit}
        submitLabel="Fetch Data"
        isLoading={isLoading}
        error={error}
        className="mb-2 w-full"
        initialValues={DEFAULTS}
      />
      {meta && (
        <div className="mb-4 p-4 bg-gray-50 rounded border border-gray-200">
          <div className="font-semibold text-lg">{meta.indicator}</div>
          <div className="text-sm text-gray-600">
            Symbol: {meta.symbol} | Interval: {meta.interval} | Time Period:{" "}
            {meta.timePeriod} | Series Type: {meta.seriesType} | Last Refreshed:{" "}
            {meta.lastRefreshed} | Time Zone: {meta.timeZone}
          </div>
        </div>
      )}
      <Table
        columns={columns}
        data={data}
        isLoading={isLoading}
        error={error}
        className="w-full"
      />
    </PageLayout>
  );
};

export default Page;
