import CarouselLayout from "@/components/Layouts/CarouselLayout";
import MovieCard from "@/components/Modules/BrowsePage/MovieCard";
import { LIST_VIDEOS } from "@/constants/dummyVideo";
import EachUtils from "@/utils/EachUtils";

const HorizontalCard = () => {
  return (
    <div className="mt-44">
      <div className="">
        <h1 className="text-xl font-semibold">Continue Watch</h1>{" "}
      </div>

      <div className="relative py-4">
        <CarouselLayout>
          <EachUtils
            of={LIST_VIDEOS}
            render={(item, index) => (
              <div
                className="w-1/2 md:w-1/4 xl:w-1/6 carousel-item"
                key={index}
              >
                <MovieCard data={item} />
              </div>
            )}
          />
        </CarouselLayout>
      </div>
    </div>
  );
};

export default HorizontalCard;
