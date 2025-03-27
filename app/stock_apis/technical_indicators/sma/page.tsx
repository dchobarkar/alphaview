import InputBox from "@/app/ui/components/InputBox/InputBox";
import { technocalIndicatorsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>SMA</h1>
      <p>
        Technical indicator APIs for a given equity or currency exchange pair,
        derived from the underlying time series based stock API and forex data.
        All indicators are calculated from adjusted time series data to
        eliminate artificial price/volume perturbations from historical split
        and dividend events.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={technocalIndicatorsInputs.sma} />

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
