import PageLayout from '@/app/ui/components/PageLayout';
import SectionHeader from '@/app/ui/components/SectionHeader';
import BackButton from '@/app/ui/components/BackButton';
import InputBox from '@/app/ui/components/InputBox/InputBox';
import { coreStockAPIsInputs } from '@/app/ui/utils/constants/inputLists';

const Page = () => {
  return (
    <PageLayout>
      <BackButton
        href="/stock_apis/core_stock_apis"
        label="Back to Stock API List"
      />

      <SectionHeader
        as="h2"
        title="Time Series Intraday"
        description="Query pre-market and post-market intraday OHLCV stock data with options for raw or adjusted values. Covers up to 20+ years of history."
      />

      <form className="p-6 space-y-6 bg-gray-50 rounded-lg shadow max-w-lg mx-auto border">
        <InputBox inputList={coreStockAPIsInputs.intraday} />

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
        >
          Get Data
        </button>
      </form>
    </PageLayout>
  );
};

export default Page;
