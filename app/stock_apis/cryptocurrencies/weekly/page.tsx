import InputBox from "@/app/ui/components/InputBox/InputBox";
import { cryptocurrenciesInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Digital Currency Weekly</h1>
      <p>
        This API returns the weekly historical time series for a digital
        currency (e.g., BTC) traded on a specific market (e.g., EUR/Euro),
        refreshed daily at midnight (UTC). Prices and volumes are quoted in both
        the market-specific currency and USD.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={cryptocurrenciesInputs.weekly} />

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
