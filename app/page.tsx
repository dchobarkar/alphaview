import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Welcome to our AlphaView app.</h1>
      <p>blahh blahhh blahh</p>
      <Link href="/stock_apis">Stock APIs</Link>
    </div>
  );
};

export default Page;
