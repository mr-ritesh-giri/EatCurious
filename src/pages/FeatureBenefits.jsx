import { Layout } from "../components";
import FeaturesCard from "../components/FeaturesCard";

const FeatureBenefits = () => {
  return (
    <Layout className="bg-offWhite">
      <div className="flex flex-col px-2">
        <h1 className="text-darkGreen text-5xl md:text-7xl text-center leading-[52px] font-superBold font-rubik mb-14 xl:mb-28">
          Features & <br /> Benefits
        </h1>
        <FeaturesCard className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1" />
      </div>
    </Layout>
  );
};

export default FeatureBenefits;
