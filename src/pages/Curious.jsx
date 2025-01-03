const Curious = () => {
  return (
    <section className="min-h-screen flex-center max-lg:text-center max-lg:flex-col gap-10 w-full bg-pink lg:px-10">
      <article>
        <h2 className="text-[8vw] lg:text-[5vw] leading-none text-darkGreen font-extrabold tracking-tighter font-rubix mb-12">
          <span>CURIOUS... BY NAME,</span> <br />
          <span>BY NATURE</span>
        </h2>
        <div className="flex flex-center lg:hidden px-10">
          <img
            src="src/assets/Images/curious/home-1.svg"
            alt="Curious Chef Image"
          />
        </div>
        <p className="font-narrow text-xl sm:text-2xl font-thin leading-7 sm:leading-8 text-darkGreen tracking-normal">
          It’s what inspires us to whip up, throw <br /> together, tear, shake,
          and break the rules – <br /> on a mission to redefine food for a new{" "}
          <br /> generation.
        </p>
      </article>
      <aside className="hidden lg:flex">
        <img
          src="src/assets/Images/curious/home-1.svg"
          alt="Curious Chef Image"
        />
      </aside>
    </section>
  );
};

export default Curious;
