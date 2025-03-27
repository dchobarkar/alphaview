import InputBox from "@/app/ui/components/InputBox/InputBox";
import { alphaIntelligenceInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Insider Transactions</h1>
      <p>
        This API returns the latest and historical insider transactions made be
        key stakeholders (e.g., founders, executives, board members, etc.) of a
        specific company.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={alphaIntelligenceInputs.insiderTransactions} />

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
