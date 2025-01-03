import { Layout } from "../components";

const PoweredByPositivity = () => {
  return (
    <Layout className="bg-lightGreen">
      <div className="max-container flex justify-between items-center w-full max-lg:text-center max-lg:flex-col lg:px-4">
        <article>
          <h2 className="text-[12vw] lg:text-[5vw] leading-none text-darkGreen font-extrabold tracking-tighter font-rubix mb-12">
            <span>POWERED BY</span> <br />
            <span>POSITIVITY</span>
          </h2>
          <div className="flex flex-center lg:hidden px-10 mb-10">
            <img
              src="src/assets/Images/curious/home-3.svg"
              alt="Curious Chef Image"
            />
          </div>
          <p className="font-narrow text-xl sm:text-2xl font-thin leading-7 sm:leading-8 text-darkGreen tracking-normal">
            We’re not crusading or going up against an industry. <br /> We’re
            for; for flavour, for fun, for what’s possible.
          </p>
        </article>
        <aside className="hidden lg:flex">
          <img
            src="src/assets/Images/curious/home-3.svg"
            alt="Curious Chef Image"
          />
        </aside>
      </div>
    </Layout>
  );
};

export default PoweredByPositivity;
