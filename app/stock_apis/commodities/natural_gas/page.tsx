import InputBox from "@/app/ui/components/InputBox/InputBox";
import { commoditiesInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Natural Gas</h1>
      <p>
        This API returns the Henry Hub natural gas spot prices in daily, weekly,
        and monthly horizons.
        <br /> SSource: U.S. Energy Information Administration, Henry Hub
        Natural Gas Spot Price, retrieved from FRED, Federal Reserve Bank of St.
        Louis. This data feed uses the FRED® API but is not endorsed or
        certified by the Federal Reserve Bank of St. Louis. By using this data
        feed, you agree to be bound by the FRED® API Terms of Use.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={commoditiesInputs.naturalGas} />

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
