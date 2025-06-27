"use client";

import { useState } from "react";

import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Table from "@/app/components/ui/Table";
import { AlphaVantageService } from "@/app/lib/alpha-vantage/service";

const TABS = [
  { id: "company", label: "Company Overview" },
  { id: "etf", label: "ETF Profile & Holdings" },
  { id: "dividends", label: "Dividends" },
  { id: "splits", label: "Splits" },
  { id: "income", label: "Income Statement" },
  { id: "balance", label: "Balance Sheet" },
  { id: "cashflow", label: "Cash Flow" },
  { id: "earnings", label: "Earnings" },
];

type TabId = (typeof TABS)[number]["id"];

const Page = () => {
  const [activeTab, setActiveTab] = useState<TabId>("company");
  const [symbol, setSymbol] = useState("");
  const [data, setData] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      let response;
      switch (activeTab) {
        case "company":
          response = await AlphaVantageService.getCompanyOverview(symbol);
          setData(response);
          break;
        case "etf":
          response = await AlphaVantageService.getETFOverview(symbol);
          setData(response);
          break;
        case "dividends":
          response = await AlphaVantageService.getDividendHistory(symbol);
          setData(response.data);
          break;
        case "splits":
          response = await AlphaVantageService.getSplitHistory(symbol);
          setData(response.data || response);
          break;
        case "income":
          response = await AlphaVantageService.getIncomeStatement(symbol);
          setData(response);
          break;
        case "balance":
          response = await AlphaVantageService.getBalanceSheet(symbol);
          setData(response);
          break;
        case "cashflow":
          response = await AlphaVantageService.getCashFlow(symbol);
          setData(response);
          break;
        case "earnings":
          response = await AlphaVantageService.getEarnings(symbol);
          setData(response);
          break;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Define columns for each table as needed
  const getColumns = () => {
    switch (activeTab) {
      case "company":
        return data && typeof data === "object"
          ? Object.keys(data).map((key) => ({ header: key, accessor: key }))
          : [];
      case "etf":
        if (data && typeof data === "object") {
          return Object.keys(data).map((key) => ({
            header: key,
            accessor: key,
          }));
        }
        return [];
      case "dividends":
        return [
          { header: "Amount", accessor: "amount" },
          { header: "Declaration Date", accessor: "declaration_date" },
          { header: "Ex-Dividend Date", accessor: "ex_dividend_date" },
          { header: "Record Date", accessor: "record_date" },
          { header: "Payment Date", accessor: "payment_date" },
        ];
      case "splits":
        return [
          { header: "Effective Date", accessor: "effective_date" },
          { header: "Split Factor", accessor: "split_factor" },
        ];
      case "income":
      case "balance":
      case "cashflow":
        if (
          data &&
          typeof data === "object" &&
          "annualReports" in data &&
          Array.isArray((data as Record<string, unknown>).annualReports)
        ) {
          return (
            (data as Record<string, unknown>).annualReports as unknown[]
          ).map((item) => {
            const rec = item as Record<string, unknown>;
            return Object.keys(rec).reduce((acc, key) => {
              acc[key] = rec[key];
              return acc;
            }, {} as Record<string, unknown>);
          }).length > 0
            ? Object.keys(
                (
                  (data as Record<string, unknown>).annualReports as Record<
                    string,
                    unknown
                  >[]
                )[0]
              ).map((key) => ({ header: key, accessor: key }))
            : [];
        }
        return [];
      case "earnings":
        if (
          data &&
          typeof data === "object" &&
          "annualEarnings" in data &&
          Array.isArray((data as Record<string, unknown>).annualEarnings)
        ) {
          return (
            (data as Record<string, unknown>).annualEarnings as unknown[]
          ).map((item) => {
            const rec = item as Record<string, unknown>;
            return Object.keys(rec).reduce((acc, key) => {
              acc[key] = rec[key];
              return acc;
            }, {} as Record<string, unknown>);
          }).length > 0
            ? Object.keys(
                (
                  (data as Record<string, unknown>).annualEarnings as Record<
                    string,
                    unknown
                  >[]
                )[0]
              ).map((key) => ({ header: key, accessor: key }))
            : [];
        }
        return [];
      default:
        return [];
    }
  };

  // Prepare data for table
  const getTableData = () => {
    switch (activeTab) {
      case "company":
        return data && typeof data === "object" ? [data] : [];
      case "etf":
        if (data && typeof data === "object") {
          const flat: Record<string, string | number>[] = [
            Object.fromEntries(
              Object.entries(data).map(([key, value]) => {
                if (Array.isArray(value)) {
                  if (key === "holdings")
                    return [key, `${value.length} holdings`];
                  if (key === "sectors")
                    return [key, `${value.length} sectors`];
                  return [key, `${value.length} items`];
                }
                if (typeof value === "object" && value !== null) {
                  return [key, "object"];
                }
                return [key, value];
              })
            ),
          ];
          return flat;
        }
        return [];
      case "dividends":
        if (data && Array.isArray(data)) {
          return data;
        }
        return [];
      case "splits":
        if (data && Array.isArray(data)) {
          return data;
        }
        return [];
      case "income":
      case "balance":
      case "cashflow":
        if (
          data &&
          typeof data === "object" &&
          "annualReports" in data &&
          Array.isArray((data as Record<string, unknown>).annualReports)
        ) {
          return (data as Record<string, unknown>).annualReports as Record<
            string,
            unknown
          >[];
        }
        return [];
      case "earnings":
        if (
          data &&
          typeof data === "object" &&
          "annualEarnings" in data &&
          Array.isArray((data as Record<string, unknown>).annualEarnings)
        ) {
          return (data as Record<string, unknown>).annualEarnings as Record<
            string,
            unknown
          >[];
        }
        return [];
      default:
        return [];
    }
  };

  // Render form fields based on tab
  const renderFormFields = () => {
    switch (activeTab) {
      case "company":
      case "etf":
      case "dividends":
      case "splits":
      case "income":
      case "balance":
      case "cashflow":
      case "earnings":
        return (
          <Input
            label="Symbol"
            id="symbol"
            value={symbol}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSymbol(e.target.value.toUpperCase())
            }
            placeholder="e.g., AAPL"
            required
          />
        );

      default:
        return null;
    }
  };

  return (
    <PageLayout>
      <SectionHeader
        title="Fundamental Data"
        description="Access company financials and earnings data"
      />
      <div className="mb-6 flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as TabId);
              setData(null);
              setError(undefined);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mb-8 flex gap-4 items-end">
        {renderFormFields()}
        <Button type="submit" isLoading={isLoading}>
          Fetch Data
        </Button>
      </form>
      <Table
        columns={getColumns()}
        data={getTableData()}
        isLoading={isLoading}
        error={error}
      />
    </PageLayout>
  );
};

export default Page;
