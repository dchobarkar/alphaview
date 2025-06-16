import Link from "next/link";

import PageLayout from "./components/shared/PageLayout";
import SectionHeader from "./components/shared/SectionHeader";

const Page = () => {
  const sections = [
    {
      title: "Core Stock",
      description: "Access real-time and historical stock data",
      href: "/core-stock",
    },
    {
      title: "Options Data",
      description: "View options chain data and volatility metrics",
      href: "/options",
    },
    {
      title: "Alpha Intelligence",
      description: "Get market sentiment and news analysis",
      href: "/intelligence",
    },
    {
      title: "Fundamental Data",
      description: "Access company financials and earnings data",
      href: "/fundamental",
    },
    {
      title: "Forex",
      description: "View foreign exchange rates and currency data",
      href: "/forex",
    },
    {
      title: "Cryptocurrencies",
      description: "Access cryptocurrency prices and market data",
      href: "/crypto",
    },
    {
      title: "Commodities",
      description: "View commodity prices and market data",
      href: "/commodities",
    },
    {
      title: "Economic Indicators",
      description: "View economic indicators and market data",
      href: "/economic",
    },
    {
      title: "Technical Indicators",
      description: "Access technical indicators and analysis",
      href: "/technical",
    },
  ];

  return (
    <PageLayout>
      <SectionHeader
        title="Welcome to AlphaView"
        description="Explore financial data from Alpha Vantage APIs"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-lg border border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
              {section.title}
            </h3>
            <p className="mt-2 text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default Page;
