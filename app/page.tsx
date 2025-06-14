import Link from "next/link";

import PageLayout from "./ui/components/shared/PageLayout";

const categories = [
  { name: "Core Stock APIs", path: "/core-stock" },
  { name: "Options Data", path: "/options" },
  { name: "Alpha Intelligence", path: "/intelligence" },
  { name: "Fundamental Data", path: "/fundamental" },
  { name: "Forex (FX)", path: "/forex" },
  { name: "Cryptocurrencies", path: "/crypto" },
  { name: "Commodities", path: "/commodities" },
  { name: "Economic Indicators", path: "/economic" },
  { name: "Technical Indicators", path: "/technical" },
];

const Page = () => {
  return (
    <>
      <PageLayout className="min-h-svh">
        <h1 className="text-4xl font-bold mb-8">Alpha Vantage Data Viewer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.path}
              href={category.path}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {category.name}
              </h2>
            </Link>
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
