import InputBox from "@/app/ui/components/InputBox/InputBox";
import { forextInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>FX Daily</h1>
      <p>
        This API returns the daily time series (timestamp, open, high, low,
        close) of the FX currency pair specified, updated realtime.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={forextInputs.daily} />

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
