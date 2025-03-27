<<<<<<< HEAD
import InputBox from "@/app/ui/components/InputBox/InputBox";
import { fundamentalDataInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>ETF Profile & Holdings</h1>
      <p>
        This API returns key ETF metrics (e.g., net assets, expense ratio, and
        turnover), along with the corresponding ETF holdings / constituents with
        allocation by asset types and sectors.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={fundamentalDataInputs.etfProfileAndHoldings} />

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
