import InputBox from "@/app/ui/components/InputBox/InputBox";
import { coreStockAPIsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Realtime Bulk Quotes</h1>
      <p>
        This API returns realtime quotes for US-traded symbols in bulk,
        accepting up to 100 symbols per API request and covering both regular
        and extended (pre-market and post-market) trading hours. You can use
        this endpoint as a high-throughput alternative to the Global Quote API,
        which accepts one symbol per API request.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={coreStockAPIsInputs.realtimeBulkQuotes} />

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
