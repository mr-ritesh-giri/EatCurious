const Hero = ({ className }) => {
  return (
    <section
      className={`w-full min-h-screen mx-auto md:py-16 font-rubix flex flex-col items-center justify-center ${className}`}
    >
      <h1 className="heading-classes relative z-10 top-40 text-center">
        MEAT
        <span className="max-lg:hidden">-</span>
        <br className="flex lg:hidden" />
        FREE
      </h1>

      <div className="relative mt-40 z-20">
        <img
          className="md:h-[500px] lg:h-[650px]"
          src="src/assets/Images/bowls/home-bowl.png"
          alt="Hero Bowl"
        />
      </div>

      <h1 className="heading-classes relative z-30 bottom-10 text-center">
        YOUR <br className="flex lg:hidden" /> <span> MIND</span>
      </h1>
    </section>
  );
};

export default Hero;
