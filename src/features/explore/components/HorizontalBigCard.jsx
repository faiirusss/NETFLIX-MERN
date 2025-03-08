import CarouselLayout from "@/components/Layouts/CarouselLayout";
import { LIST_VIDEOS } from "@/constants/dummyVideo";
import EachUtils from "@/utils/EachUtils";
import NewEpisodeCard from "./NewEpisodeCard";

const HorizontalBigCard = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">New Episodes</h1>
      </div>

      <div className="relative py-4">
        <CarouselLayout>
          <EachUtils
            of={LIST_VIDEOS}
            render={(item, index) => (
              <div
                className="w-1/2 md:w-1/4 xl:w-1/3 carousel-item"
                key={index}
              >
                <NewEpisodeCard data={item} />
              </div>
            )}
          />
        </CarouselLayout>
      </div>
    </div>
  );
};

export default HorizontalBigCard;
