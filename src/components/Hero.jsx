const Hero = ({ className }) => {
  return (
    <section
      className={`relative w-full min-h-screen mx-auto py-16 font-rubix flex flex-col items-center justify-center ${className}`}
    >
      <h1 className="heading-classes absolute z-10 top-40">
        MEAT
        <span>-</span>
        FREE
      </h1>

      <div className="absolute mt-20 z-20">
        <img
          className="h-[40vw]"
          src="src/assets/Images/bowls/home-bowl.png"
          alt="Hero Bowl"
        />
      </div>

      <h1 className="heading-classes absolute z-30 bottom-28 ">YOUR MIND</h1>
    </section>
  );
};

export default Hero;
