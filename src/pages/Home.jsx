import { Hero } from "../components";

const Home = () => {
  return (
    <section className="relative min-h-screen w-full bg-darkGreen text-white">
      <Hero />
      <div className="absolute bottom-52 -left-3">
        <img
          className="h-[9vw]"
          src="src/assets/Images/sticker/sticker.svg"
          alt="Sticker"
        />
      </div>
    </section>
  );
};

export default Home;
