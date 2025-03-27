import InputBox from "@/app/ui/components/InputBox/InputBox";
import { economicIndicatorsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Real GDP per Capita</h1>
      <p>
        This API returns the quarterly Real GDP per Capita data of the United
        States.
        <br />
        Source: U.S. Bureau of Economic Analysis, Real gross domestic product
        per capita, retrieved from FRED, Federal Reserve Bank of St. Louis. This
        data feed uses the FRED® API but is not endorsed or certified by the
        Federal Reserve Bank of St. Louis. By using this data feed, you agree to
        be bound by the FRED® API Terms of Use.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={economicIndicatorsInputs.realGDPPerCapita} />

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
