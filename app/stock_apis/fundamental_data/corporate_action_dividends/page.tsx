<<<<<<< HEAD
import InputBox from "@/app/ui/components/InputBox/InputBox";
import { fundamentalDataInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Corporate Action - Dividends</h1>
      <p>
        This API returns historical and future (declared) dividend
        distributions.
      </p>
      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={fundamentalDataInputs.companyOverview} />

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
