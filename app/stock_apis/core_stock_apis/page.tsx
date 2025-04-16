import PageLayout from '@/app/ui/components/PageLayout';
import SectionHeader from '@/app/ui/components/SectionHeader';
import LinkButtonBox from '@/app/ui/components/LinkButtonBox/LinkButtonBox';
import { coreStockAPIList } from '@/app/ui/utils/constants/apiLists';

const Page = () => {
  return (
    <PageLayout>
      <SectionHeader
        as="h2"
        title="Time Series Stock Data APIs"
        description="Explore daily, weekly, monthly, and intraday equity data with 20+ years of historical depth. Includes ticker quotes, search, and market open/close status utilities."
      />

      <LinkButtonBox links={coreStockAPIList} />
    </PageLayout>
  );
};

export default Page;
