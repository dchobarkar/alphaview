<<<<<<< HEAD
import InputBox from "@/app/ui/components/InputBox/InputBox";
import { forextInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>FX Weekly</h1>
      <p>
        This API returns the weekly time series (timestamp, open, high, low,
        close) of the FX currency pair specified, updated realtime. The latest
        data point is the price information for the week (or partial week)
        containing the current trading day, updated realtime.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={forextInputs.weekly} />

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
=======
const Page = () => {
  return <div>This is core stock api</div>;
>>>>>>> main
};

export default Page;
