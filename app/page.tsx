import Link from "next/link";

import PageLayout from "./ui/components/shared/PageLayout";

const Page = () => {
  return (
    <>
      <PageLayout className="min-h-svh">
        <ul>
          <li>
            <Link href="/stock/overview">Stock Overview</Link>
          </li>
          <li>
            <Link href="/stock/quote">Stock Quote</Link>
          </li>
          <li>
            <Link href="/forex/exchangeRate">Forex Exchange Rate</Link>
          </li>
          <li>
            <Link href="/crypto/daily">Crypto Daily</Link>
          </li>
        </ul>
      </PageLayout>
    </>
  );
};

export default Page;
