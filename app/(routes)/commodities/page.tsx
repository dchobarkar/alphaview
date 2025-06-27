"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Table from "@/app/components/ui/Table";
import Form from "@/app/components/ui/Form";
import { AlphaVantageService } from "@/app/lib/alpha-vantage/service";

const COMMODITY_APIS = [
  { id: "WTI", label: "Crude Oil (WTI)", service: "getWTI" },
  { id: "BRENT", label: "Crude Oil (Brent)", service: "getBrent" },
  { id: "NATURAL_GAS", label: "Natural Gas", service: "getNaturalGas" },
  { id: "COPPER", label: "Copper", service: "getCopper" },
  { id: "ALUMINUM", label: "Aluminum", service: "getAluminum" },
  { id: "WHEAT", label: "Wheat", service: "getWheat" },
  { id: "CORN", label: "Corn", service: "getCorn" },
  { id: "COTTON", label: "Cotton", service: "getCotton" },
  { id: "SUGAR", label: "Sugar", service: "getSugar" },
  { id: "COFFEE", label: "Coffee", service: "getCoffee" },
  {
    id: "ALL_COMMODITIES",
    label: "Global Commodities Index",
    service: "getAllCommodities",
  },
];

const INTERVAL_OPTIONS = [
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState(COMMODITY_APIS[0].id);
  const [interval] = useState("monthly");
  const [data, setData] = useState<Record<string, string | number>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setData([]);
    setError(undefined);
  };

  const formFields = [
    {
      name: "interval",
      label: "Interval",
      type: "select" as const,
      required: true,
      options: INTERVAL_OPTIONS,
      disabled: true,
    },
  ];

  const handleFormSubmit = async (formData: Record<string, string>) => {
    setIsLoading(true);
    setError(undefined);
    setData([]);
    const interval = formData.interval;

    try {
      const api = COMMODITY_APIS.find((c) => c.id === activeTab);
      if (!api) throw new Error("Invalid commodity API");
      // @ts-expect-error: Dynamic service method call based on tab selection
      const response = await AlphaVantageService[api.service](interval);

      if (response && response.data && Array.isArray(response.data))
        setData(response.data);
      else setError("No data found in the response");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { header: "Date", accessor: "date" },
    { header: "Value", accessor: "value" },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Commodities Data"
        description="Access global and individual commodity price indices"
      />
      {/* Tab Navigation */}
      <div className="mb-6 flex flex-wrap gap-2 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-200">
        {COMMODITY_APIS.map((tab) => (
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
        initialValues={{ interval }}
      />
      <p className="text-sm text-gray-500 mb-6">
        Only monthly data is available for commodity endpoints.
      </p>
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
