import InputBox from "@/app/ui/components/InputBox/InputBox";
import { fundamentalDataInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Balance Sheet</h1>
      <p>
        This API returns the annual and quarterly balance sheets for the company
        of interest, with normalized fields mapped to GAAP and IFRS taxonomies
        of the SEC. Data is generally refreshed on the same day a company
        reports its latest earnings and financials.
      </p>
      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={fundamentalDataInputs.balanceSheet} />

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>{" "}
    </div>
  );
};

export default Page;
