import InputBox from "@/app/ui/components/InputBox/InputBox";
import { commoditiesInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Global Price of Cotton</h1>
      <p>
        This API returns the global price of cotton in monthly, quarterly, and
        annual horizons.
        <br />
        Source: International Monetary Fund (IMF Terms of Use), Global price of
        Cotton, retrieved from FRED, Federal Reserve Bank of St. Louis. This
        data feed uses the FRED® API but is not endorsed or certified by the
        Federal Reserve Bank of St. Louis. By using this data feed, you agree to
        be bound by the FRED® API Terms of Use.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={commoditiesInputs.cotton} />

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
