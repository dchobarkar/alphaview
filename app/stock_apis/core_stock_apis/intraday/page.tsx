import InputBox from "@/app/ui/components/InputBox/InputBox";
import { coreStockAPIsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Time Series Intraday</h1>
      <p>
        This API returns current and 20+ years of historical intraday OHLCV time
        series of the equity specified, covering pre-market and post-market
        hours where applicable (e.g., 4:00am to 8:00pm Eastern Time for the US
        market). You can query both raw (as-traded) and split/dividend-adjusted
        intraday data from this endpoint. The OHLCV data is sometimes called
        &quot;candles&quot; in finance literature.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={coreStockAPIsInputs.intraday} />

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
