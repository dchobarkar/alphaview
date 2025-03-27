import InputBox from "@/app/ui/components/InputBox/InputBox";
import { alphaIntelligenceInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Advanced Analytics (Fixed Window)</h1>
      <p>
        This endpoint returns a rich set of advanced analytics metrics (e.g.,
        total return, variance, auto-correlation, etc.) for a given time series
        over a fixed temporal window.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={alphaIntelligenceInputs.analyticsFixedWindow} />

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
