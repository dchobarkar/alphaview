import LinkButtonBox from "@/app/ui/components/LinkButtonBox/LinkButtonBox";
import { forexList } from "@/app/ui/utils/constants/apiLists";

const Page = () => {
  return (
    <div>
      <h1>Foreign Exchange Rates (FX)</h1>
      <p>
        APIs under this section provide a wide range of data feed for realtime
        and historical forex (FX) rates.
      </p>

      <LinkButtonBox links={forexList} />
    </div>
  );
};

export default Page;
