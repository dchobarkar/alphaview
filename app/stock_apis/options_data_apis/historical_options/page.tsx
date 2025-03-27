<<<<<<< HEAD
import InputBox from "@/app/ui/components/InputBox/InputBox";
import { optionsDataAPIsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Historical Options</h1>
      <p>
        This API returns the full historical options chain for a specific symbol
        on a specific date, covering 15+ years of history. Implied volatility
        (IV) and common Greeks (e.g., delta, gamma, theta, vega, rho) are also
        returned. Option chains are sorted by expiration dates in chronological
        order. Within the same expiration date, contracts are sorted by strike
        prices from low to high.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={optionsDataAPIsInputs.historicalOptions} />

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
