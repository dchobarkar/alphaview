import LinkButtonBox from "@/app/ui/components/LinkButtonBox/LinkButtonBox";
import { fundamentalDataList } from "@/app/ui/utils/constants/apiLists";

const Page = () => {
  return (
    <div>
      <h1>Fundamental Data</h1>
      <p>
        We offer the following set of fundamental data APIs in various temporal
        dimensions covering key financial metrics, income statements, balance
        sheets, cash flow, and other fundamental data points.
      </p>

      <LinkButtonBox links={fundamentalDataList} />
    </div>
  );
};

export default Page;
