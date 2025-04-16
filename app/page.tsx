import PageLayout from './ui/components/PageLayout';
import SectionHeader from './ui/components/SectionHeader';
import LinkButtonBox from './ui/components/LinkButtonBox/LinkButtonBox';
import { stockAPIList } from './ui/utils/constants/apiLists';

const Page = () => {
  return (
    <PageLayout>
      <SectionHeader
        as="h1"
        title="Welcome to AlphaView"
        description=" Our stock APIs © are grouped into eight categories: (1) Core Time
        Series Stock Data APIs, (2) US Options Data APIs, (3) Alpha
        Intelligence™, (4) Fundamental Data, (5) Physical and Digital/Crypto
        Currencies (e.g., Bitcoin), (6) Commodities, (7) Economic Indicators,
        and (8) Technical Indicators - also outlined here. Examples in this
        documentation are for demo purposes. Claim your free API key today to
        explore our full API offerings!"
      />
      <LinkButtonBox links={stockAPIList} />
    </PageLayout>
  );
};

export default Page;
