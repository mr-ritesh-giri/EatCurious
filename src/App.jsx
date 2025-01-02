import {
  Curious,
  Home,
  InspiringGood,
  PoweredByPositivity,
  Flavoursome,
  FeatureBenefits,
  DroolingYet,
  WeareGrowing,
  Intrigued,
  FeedMe,
} from "./pages";

export default function App() {
  return (
    <>
      <Home />
      <div className="font-rubik text-2xl">This is using the Rubik font</div>
      <div className="font-narrow text-2xl">
        This is using the Obviously Narrow font
      </div>
      <Curious />
      <InspiringGood />
      <PoweredByPositivity />
      <Flavoursome />
      <FeatureBenefits />
      <DroolingYet />
      <WeareGrowing />
      <Intrigued />
      <FeedMe />
    </>
  );
}
