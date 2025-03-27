import LinkButtonBox from "@/app/ui/components/LinkButtonBox/LinkButtonBox";
import { commoditiesList } from "@/app/ui/utils/constants/apiLists";

const Page = () => {
  return (
    <div>
      <h1>Commodities</h1>
      <p>
        APIs under this section provide historical data for major commodities
        such as crude oil, natural gas, copper, wheat, etc., spanning across
        various temporal horizons (daily, weekly, monthly, quarterly, etc.)
      </p>
      <LinkButtonBox links={commoditiesList} />
    </div>
  );
};

export default Page;
