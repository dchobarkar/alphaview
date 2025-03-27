import InputBox from "@/app/ui/components/InputBox/InputBox";
import { coreStockAPIsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Time Series Daily</h1>
      <p>
        This API returns raw (as-traded) daily time series (date, daily open,
        daily high, daily low, daily close, daily volume) of the global equity
        specified, covering 20+ years of historical data. The OHLCV data is
        sometimes called &quot;candles&quot; in finance literature. If you are
        also interested in split/dividend-adjusted data, please use the Daily
        Adjusted API, which covers adjusted close values and historical split
        and dividend events.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={coreStockAPIsInputs.daily} />

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
