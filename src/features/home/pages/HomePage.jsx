import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BannerCard from "../components/BannerCard";
import GenreCard from "../components/GenreCard";
import HorizontalBigCard from "../components/HorizontalBigCard";
import HorizontalCard from "../components/HorizontalCard";
import Jumbotron from "../components/Jumbotron";
import VerticalCard from "../components/VerticalCard";

const HomePage = () => {
  return (
    <DefaultLayout>
      {/* jumbotron */}
      <div className="grid grid-cols-1 gap-8">
        <div className="relative w-full h-svh">
          <Jumbotron />
          <div className="absolute left-0 w-full -bottom-52">
            <VerticalCard textColor="background" jumbotron />
          </div>
        </div>
        {/* continue watch */}
        <HorizontalCard />
        {/* new episode */}
        <HorizontalBigCard />
        {/* banner */}
        <BannerCard />
        {/* recently added */}
        <VerticalCard textColor="foreground" />
        <GenreCard />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
