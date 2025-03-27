import InputBox from "@/app/ui/components/InputBox/InputBox";
import { technocalIndicatorsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>EMA</h1>
      <p>
        This API returns the exponential moving average (EMA) values. See also:
        EMA explainer and mathematical reference.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={technocalIndicatorsInputs.ema} />

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
