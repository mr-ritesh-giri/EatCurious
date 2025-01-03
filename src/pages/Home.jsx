import { Hero } from "../components";

const Home = () => {
  return (
    <section className="relative min-h-screen w-full bg-darkGreen text-white">
      <Hero />
      <div className="absolute bottom-56 lg:bottom-96 -left-5">
        <img
          className="h-[16vw] lg:h-[9vw]"
          src="src/assets/Images/sticker/sticker.svg"
          alt="Sticker"
        />
      </div>
    </section>
  );
};

export default Home;
