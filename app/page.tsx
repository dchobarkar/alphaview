import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Alpha Vantage Dashboard</h1>
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
    </div>
  );
}
