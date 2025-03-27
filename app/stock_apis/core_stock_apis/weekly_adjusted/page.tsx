import InputBox from "@/app/ui/components/InputBox/InputBox";
import { coreStockAPIsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Time Series Weekly Adjusted</h1>
      <p>
        This API returns weekly adjusted time series (last trading day of each
        week, weekly open, weekly high, weekly low, weekly close, weekly
        adjusted close, weekly volume, weekly dividend) of the global equity
        specified, covering 20+ years of historical data.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={coreStockAPIsInputs.weeklyAdjusted} />

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
