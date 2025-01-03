import { Layout } from "../components";

const Curious = () => {
  return (
    <Layout className="bg-pink">
      <div className="max-container flex justify-between items-center lg:px-4 w-full max-lg:text-center max-lg:flex-col">
        <article>
          <h2 className="text-[10vw] lg:text-[5vw] leading-none text-darkGreen font-extrabold tracking-tighter font-rubix mb-12">
            <span>CURIOUS... BY NAME,</span> <br />
            <span>BY NATURE</span>
          </h2>
          <div className="flex flex-center lg:hidden mb-10">
            <img
              className="px-10"
              src="src/assets/Images/curious/home-1.svg"
              alt="Curious Chef Image"
            />
          </div>
          <p className="font-narrow text-xl sm:text-2xl font-thin leading-7 sm:leading-8 text-darkGreen tracking-normal">
            It’s what inspires us to whip up, throw <br /> together, tear,
            shake, and break the rules – <br /> on a mission to redefine food
            for a new <br /> generation.
          </p>
        </article>
        <aside className="hidden lg:flex">
          <img
            src="src/assets/Images/curious/home-1.svg"
            alt="Curious Chef Image"
          />
        </aside>
      </div>
    </Layout>
  );
};

export default Curious;
