"use client";

import { useState } from "react";
import PageLayout from "@/app/components/shared/PageLayout";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Table from "@/app/components/ui/Table";
import Form from "@/app/components/ui/Form";
import { AlphaVantageService } from "@/app/lib/alpha-vantage/service";

const CRYPTO_APIS = [
  {
    id: "CURRENCY_EXCHANGE_RATE",
    label: "Realtime Crypto Exchange Rate",
    description:
      "Get the realtime exchange rate for any pair of digital/physical currencies.",
  },
  {
    id: "DIGITAL_CURRENCY_DAILY",
    label: "Crypto Daily (Open, High, Low, Close, Volume)",
    description: "Get daily historical crypto prices (OHLCV).",
  },
  {
    id: "DIGITAL_CURRENCY_WEEKLY",
    label: "Crypto Weekly (Open, High, Low, Close, Volume)",
    description: "Get weekly historical crypto prices (OHLCV).",
  },
  {
    id: "DIGITAL_CURRENCY_MONTHLY",
    label: "Crypto Monthly (Open, High, Low, Close, Volume)",
    description: "Get monthly historical crypto prices (OHLCV).",
  },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState(CRYPTO_APIS[0].id);
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
      name: "fromCurrency",
      label: "Crypto Symbol",
      type: "text" as const,
      placeholder: "e.g., BTC",
      required: true,
      validation: {
        pattern: /^[A-Z0-9]{2,10}$/,
        message: "Enter a valid crypto symbol (e.g., BTC)",
      },
    },
    {
      name: "toCurrency",
      label: "Market Currency",
      type: "text" as const,
      placeholder: "e.g., USD",
      required: true,
      validation: {
        pattern: /^[A-Z]{3,5}$/,
        message: "Enter a valid market code (e.g., USD)",
      },
    },
  ];

  const handleFormSubmit = async (formData: Record<string, string>) => {
    setIsLoading(true);
    setError(undefined);
    setData([]);
    const fromCurrency = formData.fromCurrency.toUpperCase();
    const toCurrency = formData.toCurrency.toUpperCase();
    try {
      let response;
      switch (activeTab) {
        case "CURRENCY_EXCHANGE_RATE":
          response = await AlphaVantageService.getCryptoExchangeRate(
            fromCurrency,
            toCurrency
          );
          {
            const key = Object.keys(response).find((k) =>
              k.includes("Exchange Rate")
            );
            if (key) {
              const fx = response[key];
              setData([
                {
                  fromCurrencyCode: fx["1. From_Currency Code"],
                  fromCurrencyName: fx["2. From_Currency Name"],
                  toCurrencyCode: fx["3. To_Currency Code"],
                  toCurrencyName: fx["4. To_Currency Name"],
                  exchangeRate: fx["5. Exchange Rate"],
                  lastRefreshed: fx["6. Last Refreshed"],
                  timeZone: fx["7. Time Zone"],
                  bidPrice: fx["8. Bid Price"],
                  askPrice: fx["9. Ask Price"],
                },
              ]);
            } else {
              setError("No crypto data found in the response");
            }
          }
          break;
        case "DIGITAL_CURRENCY_DAILY":
          response = await AlphaVantageService.getCryptoDaily(
            fromCurrency,
            toCurrency
          );
          break;
        case "DIGITAL_CURRENCY_WEEKLY":
          response = await AlphaVantageService.getCryptoWeekly(
            fromCurrency,
            toCurrency
          );
          break;
        case "DIGITAL_CURRENCY_MONTHLY":
          response = await AlphaVantageService.getCryptoMonthly(
            fromCurrency,
            toCurrency
          );
          break;
        default:
          response = null;
      }

      if (activeTab !== "CURRENCY_EXCHANGE_RATE" && response) {
        const seriesKey = Object.keys(response).find((k) =>
          k.toLowerCase().includes("series")
        );
        if (seriesKey && response[seriesKey]) {
          const series = response[seriesKey] as Record<
            string,
            Record<string, string>
          >;
          const rows = Object.entries(series).map(([date, values]) => ({
            date,
            open: values["1. open"],
            high: values["2. high"],
            low: values["3. low"],
            close: values["4. close"],
            volume: values["5. volume"],
          }));
          setData(rows);
        } else {
          setError("No time series data found in the response");
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Dynamic columns based on API
  let columns;
  if (activeTab === "CURRENCY_EXCHANGE_RATE") {
    columns = [
      { header: "From Currency Code", accessor: "fromCurrencyCode" },
      { header: "From Currency Name", accessor: "fromCurrencyName" },
      { header: "To Currency Code", accessor: "toCurrencyCode" },
      { header: "To Currency Name", accessor: "toCurrencyName" },
      { header: "Exchange Rate", accessor: "exchangeRate" },
      { header: "Last Refreshed", accessor: "lastRefreshed" },
      { header: "Time Zone", accessor: "timeZone" },
      { header: "Bid Price", accessor: "bidPrice" },
      { header: "Ask Price", accessor: "askPrice" },
    ];
  } else {
    columns = [
      { header: "Date", accessor: "date" },
      { header: "Open", accessor: "open" },
      { header: "High", accessor: "high" },
      { header: "Low", accessor: "low" },
      { header: "Close", accessor: "close" },
      { header: "Volume", accessor: "volume" },
    ];
  }

  return (
    <PageLayout>
      <SectionHeader
        title="Cryptocurrencies Data"
        description="Access real-time and historical cryptocurrency data"
      />
      {/* Tab Navigation */}
      <div className="mb-6 flex flex-wrap gap-2 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-200">
        {CRYPTO_APIS.map((tab) => (
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
      <p className="mt-2 text-sm text-gray-600 mb-4">
        {CRYPTO_APIS.find((tab) => tab.id === activeTab)?.description}
      </p>
      <Form
        fields={formFields}
        onSubmit={handleFormSubmit}
        submitLabel="Fetch Data"
        isLoading={isLoading}
        error={error}
        className="mb-8 w-full"
      />
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
