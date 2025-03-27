import InputBox from "@/app/ui/components/InputBox/InputBox";
import { economicIndicatorsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Treasury Yield</h1>
      <p>
        This API returns the daily, weekly, and monthly US treasury yield of a
        given maturity timeline (e.g., 5 year, 30 year, etc).
        <br />
        Source: Board of Governors of the Federal Reserve System (US), Market
        Yield on U.S. Treasury Securities at 3-month, 2-year, 5-year, 7-year,
        10-year, and 30-year Constant Maturities, Quoted on an Investment Basis,
        retrieved from FRED, Federal Reserve Bank of St. Louis. This data feed
        uses the FRED® API but is not endorsed or certified by the Federal
        Reserve Bank of St. Louis. By using this data feed, you agree to be
        bound by the FRED® API Terms of Use.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={economicIndicatorsInputs.treasuryYield} />

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
