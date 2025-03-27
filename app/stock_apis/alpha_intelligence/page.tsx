import LinkButtonBox from "@/app/ui/components/LinkButtonBox/LinkButtonBox";
import { alphaIntelligenceList } from "@/app/ui/utils/constants/apiLists";

const Page = () => {
  return (
    <div>
      <h1>Alpha Intelligence™</h1>
      <p>
        The APIs in this section contain advanced market intelligence built with
        our decades of expertise in AI, machine learning, and quantitative
        finance. We hope these highly differentiated alternative datasets can
        help turbocharge your trading strategy, market research, and financial
        software application to the next level.
      </p>

      <LinkButtonBox links={alphaIntelligenceList} />
    </div>
  );
};

export default Page;
