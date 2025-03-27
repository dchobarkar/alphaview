import InputBox from "@/app/ui/components/InputBox/InputBox";
import { alphaIntelligenceInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Top Gainers, Losers, and Most Actively Traded Tickers (US Market)</h1>
      <p>
        This endpoint returns the top 20 gainers, losers, and the most active
        traded tickers in the US market.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={alphaIntelligenceInputs.topGainersAndLosers} />

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
