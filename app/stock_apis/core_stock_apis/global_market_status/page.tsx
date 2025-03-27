import InputBox from "@/app/ui/components/InputBox/InputBox";
import { coreStockAPIsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Global Market Open & Close Status</h1>
      <p>
        This endpoint returns the current market status (open vs. closed) of
        major trading venues for equities, forex, and cryptocurrencies around
        the world.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={coreStockAPIsInputs.globalMarketStatus} />

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
