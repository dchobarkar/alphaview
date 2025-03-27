import InputBox from "@/app/ui/components/InputBox/InputBox";
import { coreStockAPIsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Time Series Monthly Adjusted</h1>
      <p>
        This API returns monthly adjusted time series (last trading day of each
        month, monthly open, monthly high, monthly low, monthly close, monthly
        adjusted close, monthly volume, monthly dividend) of the equity
        specified, covering 20+ years of historical data.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={coreStockAPIsInputs.monthlyAdjusted} />

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
