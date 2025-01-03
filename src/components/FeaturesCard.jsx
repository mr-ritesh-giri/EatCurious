import { featuresCardDetails } from "../constants/constants";

const FeaturesCard = ({ className }) => {
  return (
    <div className={className}>
      {featuresCardDetails.map((featuresCardDetail, _) => {
        return (
          <div
            key={featuresCardDetail.id}
            className="flex justify-center items-center flex-col py-8 md:p-10"
          >
            <img
              className="mb-14 md:mb-24"
              src={featuresCardDetail.imgSrc}
              alt={featuresCardDetail.altText}
            />
            <h2 className="text-3xl font-rubik mb-4 text-center">
              {featuresCardDetail.title}
            </h2>
            <p className="text-base font-rubik text-center">
              {featuresCardDetail.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesCard;
