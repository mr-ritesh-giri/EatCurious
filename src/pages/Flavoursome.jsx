import { Layout } from "../components";

const Flavoursome = () => {
  return (
    <Layout className="bg-darkGreen">
      <div className="max-container flex justify-between items-center w-full max-lg:text-center max-lg:flex-col lg:px-4 gap-5">
        {/* Aside section for desktop-only image */}
        <aside className="hidden lg:flex">
          <img
            className="w-full h-full"
            src="src/assets/Images/curious/home-2.svg"
            alt="Inspiring Good SVG"
          />
        </aside>

        <article>
          {/* Heading section with large text for inspiration */}
          <h2 className="text-[12vw] sm:text-[9vw] lg:text-[5vw] leading-none text-white font-extrabold tracking-tighter font-rubix mb-12">
            FLAVOURSOME
            <br />
            FOOD FOR
            <br />
            EVERYONE
          </h2>

          {/* Aside section for mobile-only image */}
          <img
            className="w-full h-full flex lg:hidden max-lg:mb-12 px-10"
            src="src/assets/Images/curious/home-2.svg"
            alt="Inspiring Good SVG"
          />

          {/* Paragraph with text explaining the mission */}
          <p className="font-narrow text-xl sm:text-2xl font-thin leading-7 sm:leading-8 text-white tracking-widest">
            Our curious creations are made for vegans and meat-eaters alike.{" "}
            <br />
            Because meat-free doesn’t mean flavour free.
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default Flavoursome;
