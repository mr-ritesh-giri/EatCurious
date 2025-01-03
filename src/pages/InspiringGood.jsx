const InspiringGood = () => {
  return (
    <section className="min-h-screen w-full flex-center max-lg:text-center gap-14 py-10">
      {/* Aside section for desktop-only image */}
      <aside className="hidden lg:flex">
        <img
          className="w-full h-full"
          src="src/assets/Images/curious/home-5.svg"
          alt="Inspiring Good SVG"
        />
      </aside>

      <article>
        {/* Heading section with large text for inspiration */}
        <h2 className="text-[12vw] sm:text-[9vw] lg:text-[5vw] sm:leading-[70px] text-darkGreen font-extrabold tracking-tighter font-rubix mb-12">
          <span>INSPIRING GOOD </span>
          <br />
          <span>THROUGH TASTY</span>
          <br />
          <span>GOODNESS</span>
        </h2>

        {/* Aside section for mobile-only image */}
        <aside className="flex lg:hidden max-lg:mb-12">
          <img
            className="w-full h-full"
            src="src/assets/Images/curious/home-5.svg"
            alt="Inspiring Good SVG"
          />
        </aside>

        {/* Paragraph with text explaining the mission */}
        <p className="font-narrow text-xl sm:text-2xl font-thin leading-7 sm:leading-8 text-darkGreen tracking-widest">
          We’re here to inspire discovery and tempt everyone to <br /> eat more
          plants. Because we care about the future – <br /> yours, ours and the
          planet’s.
        </p>
      </article>
    </section>
  );
};

export default InspiringGood;
