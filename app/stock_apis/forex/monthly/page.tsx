import InputBox from "@/app/ui/components/InputBox/InputBox";
import { forextInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>FX Monthly</h1>
      <p>
        This API returns the monthly time series (timestamp, open, high, low,
        close) of the FX currency pair specified, updated realtime. The latest
        data point is the prices information for the month (or partial month)
        containing the current trading day, updated realtime.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={forextInputs.monthly} />

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
