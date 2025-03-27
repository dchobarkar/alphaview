import InputBox from "@/app/ui/components/InputBox/InputBox";
import { cryptocurrenciesInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Currency Exchange Rate</h1>
      <p>
        This API returns the realtime exchange rate for any pair of digital
        currency (e.g., Bitcoin) or physical currency (e.g., USD).
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={cryptocurrenciesInputs.exchangeRate} />

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
