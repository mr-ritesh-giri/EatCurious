import { Header } from "./components";
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
    <section className="relative">
      <Header className={"absolute top-0 z-50"} />
      <Home />
      <Curious />
      <InspiringGood />
      <PoweredByPositivity />
      <Flavoursome />
      <FeatureBenefits />
      <DroolingYet />
      <WeareGrowing />
      <Intrigued />
      <FeedMe />
    </section>
  );
}
