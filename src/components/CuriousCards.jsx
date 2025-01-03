import { curiousCardsDetails } from "../constants/constants";

const CuriousCards = ({ className }) => {
  return (
    <div className={`max-container grid grid-cols-3 gap-5 ${className}`}>
      {curiousCardsDetails.map((curiousCardsDetail, index) => {
        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-md max-w-[500px] h-[420px] w-full p-4 bg-${curiousCardsDetail.className}`}
          >
            <p className="font-narrowHelvetica font-black text-[80px] leading-[70px] text-darkGreen text-center tracking-tighter">
              {curiousCardsDetail.title.split(" ").map((word, idx) => (
                <span key={idx} className="block">
                  {word}
                </span>
              ))}
            </p>
            <div className="absolute -bottom-28 h-[300px] w-[300px] left-1/2 transform -translate-x-1/2">
              <img
                src={curiousCardsDetail.imgSrc}
                alt={curiousCardsDetail.title}
                className="w-full"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CuriousCards;
