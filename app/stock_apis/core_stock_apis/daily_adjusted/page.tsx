import InputBox from "@/app/ui/components/InputBox/InputBox";
import { coreStockAPIsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Time Series Daily Adjusted</h1>
      <p>
        This API returns raw (as-traded) daily open/high/low/close/volume
        values, adjusted close values, and historical split/dividend events of
        the global equity specified, covering 20+ years of historical data. The
        OHLCV data is sometimes called &quot;candles&quot; in finance
        literature.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={coreStockAPIsInputs.dailyAdjusted} />

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
