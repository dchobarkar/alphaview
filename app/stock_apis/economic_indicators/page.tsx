import LinkButtonBox from "@/app/ui/components/LinkButtonBox/LinkButtonBox";
import { economicIndicatorsList } from "@/app/ui/utils/constants/apiLists";

const Page = () => {
  return (
    <div>
      <h1>Economic Indicators</h1>
      <p>
        APIs under this section provide key US economic indicators frequently
        used for investment strategy formulation and application development.
      </p>
      <LinkButtonBox links={economicIndicatorsList} />
    </div>
  );
};

export default Page;
