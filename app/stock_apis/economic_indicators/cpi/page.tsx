import InputBox from "@/app/ui/components/InputBox/InputBox";
import { economicIndicatorsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>CPI</h1>
      <p>
        This API returns the monthly and semiannual consumer price index (CPI)
        of the United States. CPI is widely regarded as the barometer of
        inflation levels in the broader economy.
        <br />
        Source: U.S. Bureau of Labor Statistics, Consumer Price Index for All
        Urban Consumers: All Items in U.S. City Average, retrieved from FRED,
        Federal Reserve Bank of St. Louis. This data feed uses the FRED® API but
        is not endorsed or certified by the Federal Reserve Bank of St. Louis.
        By using this data feed, you agree to be bound by the FRED® API Terms of
        Use.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={economicIndicatorsInputs.cpi} />

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
