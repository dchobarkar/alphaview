import InputBox from "@/app/ui/components/InputBox/InputBox";
import { alphaIntelligenceInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Market News & Sentiment</h1>
      <p>
        Looking for market news data to train your LLM models or to augment your
        trading strategy? You have just found it. This API returns live and
        historical market news & sentiment data from a large & growing selection
        of premier news outlets around the world, covering stocks,
        cryptocurrencies, forex, and a wide range of topics such as fiscal
        policy, mergers & acquisitions, IPOs, etc. This API, combined with our
        core stock API, fundamental data, and technical indicator APIs, can
        provide you with a 360-degree view of the financial market and the
        broader economy.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={alphaIntelligenceInputs.newsAndSentiments} />

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
