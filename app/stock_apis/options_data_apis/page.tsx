import LinkButtonBox from "@/app/ui/components/LinkButtonBox/LinkButtonBox";
import { optionsDataAPIList } from "@/app/ui/utils/constants/apiLists";

const Page = () => {
  return (
    <div>
      <h1>Options Data APIs</h1>
      <p>
        This suite of APIs provide realtime and historical US options data,
        spanning 15+ years of history with full market/volume coverage.
      </p>

      <LinkButtonBox links={optionsDataAPIList} />
    </div>
  );
};

export default Page;
