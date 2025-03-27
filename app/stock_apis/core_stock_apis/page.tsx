import LinkButtonBox from "@/app/ui/components/LinkButtonBox/LinkButtonBox";
import { coreStockAPIList } from "@/app/ui/utils/constants/apiLists";

const Page = () => {
  return (
    <div>
      <h1>Time Series Stock Data APIs</h1>

      <p>
        This suite of APIs provide global equity data in 4 different temporal
        resolutions: (1) daily, (2) weekly, (3) monthly, and (4) intraday, with
        20+ years of historical depth. A lightweight ticker quote endpoint and
        several utility functions such as ticker search and market open/closure
        status are also included for your convenience.
      </p>

      <LinkButtonBox links={coreStockAPIList} />
    </div>
  );
};

export default Page;
