"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Table from "@/app/components/ui/Table";
import Form from "@/app/components/ui/Form";
import { AlphaVantageService } from "@/app/lib/alpha-vantage/service";
import { EconomicIndicatorResponse } from "@/app/lib/alpha-vantage/types";

const ECONOMIC_APIS = [
  {
    id: "REAL_GDP",
    label: "Real GDP",
    service: "getRealGDP",
    intervals: ["annual", "quarterly"],
  },
  {
    id: "REAL_GDP_PER_CAPITA",
    label: "Real GDP per Capita",
    service: "getRealGDPPerCapita",
    intervals: ["annual", "quarterly"],
  },
  {
    id: "TREASURY_YIELD",
    label: "Treasury Yield",
    service: "getTreasuryYield",
    intervals: ["daily", "weekly", "monthly"],
  },
  {
    id: "FEDERAL_FUNDS_RATE",
    label: "Federal Funds Rate",
    service: "getFederalFundsRate",
    intervals: [],
  },
  {
    id: "CPI",
    label: "Consumer Price Index (CPI)",
    service: "getCPI",
    intervals: ["monthly"],
  },
  {
    id: "INFLATION",
    label: "Inflation",
    service: "getInflation",
    intervals: [],
  },
  {
    id: "RETAIL_SALES",
    label: "Retail Sales",
    service: "getRetailSales",
    intervals: ["monthly"],
  },
  {
    id: "DURABLES",
    label: "Durable Goods Orders",
    service: "getDurableGoods",
    intervals: ["monthly"],
  },
  {
    id: "UNEMPLOYMENT",
    label: "Unemployment Rate",
    service: "getUnemployment",
    intervals: ["monthly"],
  },
  {
    id: "NONFARM_PAYROLL",
    label: "Nonfarm Payroll",
    service: "getNonfarmPayroll",
    intervals: ["monthly"],
  },
];

const INTERVAL_OPTIONS = [
  { value: "annual", label: "Annual" },
  { value: "quarterly", label: "Quarterly" },
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState(ECONOMIC_APIS[0].id);
  const [interval, setInterval] = useState(ECONOMIC_APIS[0].intervals[0] || "");
  const [data, setData] = useState<{ date: string; value: string }[]>([]);
  const [meta, setMeta] = useState<{
    name: string;
    interval: string;
    unit: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const api = ECONOMIC_APIS.find((a) => a.id === tabId);
    setInterval(api?.intervals[0] || "");
    setData([]);
    setMeta(null);
    setError(undefined);
  };

  const selectedApi = ECONOMIC_APIS.find((a) => a.id === activeTab);

  const formFields = selectedApi?.intervals.length
    ? [
        {
          name: "interval",
          label: "Interval",
          type: "select" as const,
          required: true,
          options: INTERVAL_OPTIONS.filter((opt) =>
            selectedApi.intervals.includes(opt.value)
          ),
        },
      ]
    : [];

  // Map service names to actual methods for type safety
  const economicServiceMap = {
    getRealGDP: AlphaVantageService.getRealGDP,
    getRealGDPPerCapita: AlphaVantageService.getRealGDPPerCapita,
    getTreasuryYield: AlphaVantageService.getTreasuryYield,
    getFederalFundsRate: AlphaVantageService.getFederalFundsRate,
    getCPI: AlphaVantageService.getCPI,
    getInflation: AlphaVantageService.getInflation,
    getRetailSales: AlphaVantageService.getRetailSales,
    getDurableGoods: AlphaVantageService.getDurableGoods,
    getUnemployment: AlphaVantageService.getUnemployment,
    getNonfarmPayroll: AlphaVantageService.getNonfarmPayroll,
  };

  const handleFormSubmit = async (formData: Record<string, string>) => {
    setIsLoading(true);
    setError(undefined);
    setData([]);
    setMeta(null);
    try {
      if (!selectedApi) throw new Error("No indicator selected");
      const serviceFn =
        economicServiceMap[
          selectedApi.service as keyof typeof economicServiceMap
        ];
      if (!serviceFn) throw new Error("Service not found");
      const response: EconomicIndicatorResponse = selectedApi.intervals.length
        ? await serviceFn(formData.interval)
        : await serviceFn();
      if (response && response.data && Array.isArray(response.data)) {
        setMeta({
          name: response.name,
          interval: response.interval,
          unit: response.unit,
        });
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
        title="Economic Indicators Data"
        description="Access key economic indicators from Alpha Vantage."
      />
      {/* Tab Navigation */}
      <div className="mb-6 flex flex-wrap gap-2 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-200">
        {ECONOMIC_APIS.map((tab) => (
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
      {formFields.length > 0 && (
        <Form
          fields={formFields}
          onSubmit={handleFormSubmit}
          submitLabel="Fetch Data"
          isLoading={isLoading}
          error={error}
          className="mb-2 w-full"
          initialValues={interval ? { interval } : {}}
        />
      )}
      {formFields.length === 0 && (
        <button
          onClick={() => handleFormSubmit({})}
          className="mb-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Fetch Data"}
        </button>
      )}

      {meta && (
        <div className="mb-4 p-4 bg-gray-50 rounded border border-gray-200">
          <div className="font-semibold text-lg">{meta.name}</div>
          <div className="text-sm text-gray-600">
            Interval: {meta.interval} | Unit: {meta.unit}
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
