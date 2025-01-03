import { Hero } from "../components";

const Home = () => {
  return (
    <section className="relative h-[120vh] w-full bg-darkGreen text-white">
      <Hero />
      <div className="absolute bottom-56 lg:bottom-96 -left-5">
        <img
          className="h-[16vw] lg:h-[9vw]"
          src="src/assets/Images/sticker/sticker.svg"
          alt="Sticker"
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <img
          src="src/assets/Images/simliFigures/download (1).svg"
          alt="Cloudy SVG"
        />
      </div>
    </section>
  );
};

export default Home;
