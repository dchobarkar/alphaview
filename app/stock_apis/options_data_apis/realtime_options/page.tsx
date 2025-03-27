<<<<<<< HEAD
import InputBox from "@/app/ui/components/InputBox/InputBox";
import { optionsDataAPIsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Realtime Options</h1>
      <p>
        This API returns realtime US options data with full market coverage.
        Option chains are sorted by expiration dates in chronological order.
        Within the same expiration date, contracts are sorted by strike prices
        from low to high.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={optionsDataAPIsInputs.realtimeOptions} />

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
