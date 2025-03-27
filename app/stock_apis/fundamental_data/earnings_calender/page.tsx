import InputBox from "@/app/ui/components/InputBox/InputBox";
import { fundamentalDataInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Earnings Calendar</h1>
      <p>
        This API returns a list of company earnings expected in the next 3, 6,
        or 12 months.
      </p>
      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={fundamentalDataInputs.earningsCalender} />

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
