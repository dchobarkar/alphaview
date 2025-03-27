import LinkButtonBox from "@/app/ui/components/LinkButtonBox/LinkButtonBox";
import { cryptocurrenciesList } from "@/app/ui/utils/constants/apiLists";

const Page = () => {
  return (
    <div>
      <h1>Digital & Crypto Currencies</h1>
      <p>
        APIs under this section provide a wide range of data feed for digital
        and crypto currencies such as Bitcoin.
      </p>
      <LinkButtonBox links={cryptocurrenciesList} />
    </div>
  );
};

export default Page;
