import CuriousCards from "../components/CuriousCards";
import "./DroolingYet.css";

const DroolingYet = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center bg-darkGreen">
        <div className="custom-shape-divider-top-1735916689">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <img className="absolute -mt-28" src="src/assets/drooling.svg" alt="" />
      </section>
      <section className="min-h-screen w-full bg-darkGreen">
        <CuriousCards />
        <p className="bg-darkGreen"></p>
        <p className="bg-pink"></p>
        <p className="bg-lightGreen"></p>
        <p className="bg-mediumGreen"></p>
        <p className="bg-yellow"></p>
        <p className="bg-offWhite"></p>
      </section>
    </>
  );
};

export default DroolingYet;
