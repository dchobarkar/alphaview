import LinkButtonBox from "@/app/ui/components/LinkButtonBox/LinkButtonBox";
import { technicalIndicatorsList } from "@/app/ui/utils/constants/apiLists";

const Page = () => {
  return (
    <div>
      <h1>Technical Indicators</h1>
      <p>
        Technical indicator APIs for a given equity or currency exchange pair,
        derived from the underlying time series based stock API and forex data.
        All indicators are calculated from adjusted time series data to
        eliminate artificial price/volume perturbations from historical split
        and dividend events.
      </p>
      <LinkButtonBox links={technicalIndicatorsList} />
    </div>
  );
};

export default Page;
