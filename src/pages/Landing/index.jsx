import Jumbotron from "../../components/Modules/LandingPage/Jumbotron";
import SectionFirst from "../../components/Modules/LandingPage/SectionContens/SectionFirst";
import SectionSecond from "../../components/Modules/LandingPage/SectionContens/SectionSecond";
import SectionThird from "../../components/Modules/LandingPage/SectionContens/SectionThird";
import SectionFourth from "../../components/Modules/LandingPage/SectionContens/SectionFourth";
import SectionFAQ from "../../components/Modules/LandingPage/SectionContens/SectionFAQ";
import SectionFooter from "../../components/Modules/LandingPage/SectionContens/SectionFooter";
import Navbar from "./Navbar";
function Landing() {
  return (
    <>
      <Navbar/>
      <Jumbotron />
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
      <SectionFAQ />
      <SectionFooter />
    </>
  );
}

export default Landing;
              