import CarouselLayout from "@/components/Layouts/CarouselLayout";
import { LIST_VIDEOS } from "@/constants/dummyVideo";
import EachUtils from "@/utils/EachUtils";
import { Star } from "lucide-react";

const VerticalCard = (props) => {
  return (
    <div>
      <h1
        className={`${
          props.jumbotron ? "px-2" : ""
        } text-xl font-semibold text-background text-${props.textColor}`}
      >
        Popular Movie
      </h1>
      <div className="relative py-4">
        <CarouselLayout>
          <EachUtils
            of={LIST_VIDEOS}
            render={(item, index) => (
              <div className="w-1/2 md:w-1/4 xl:w-52 carousel-item" key={index}>
                <div className="relative">
                  <img
                    src="/mostview.jpg"
                    alt="poster"
                    className="object-cover w-full rounded-md cursor-pointer h-80 "
                  />
                  <button className="absolute px-3 py-1 text-xs text-white rounded-lg bg-white/30 backdrop-blur-sm top-2 left-2">
                    <div className="flex items-center justify-center gap-1">
                      <Star fill="orange" strokeWidth={0} size={13} />
                      <span>8.4</span>
                    </div>
                  </button>
                  <h1 className="flex items-center gap-1 mt-2 text-sm font-bold">
                    <div className="w-3 h-3 rounded-full bg-lime-400"></div>
                    {item.title}
                  </h1>
                </div>
              </div>
            )}
          />
        </CarouselLayout>
      </div>
    </div>
  );
};

export default VerticalCard;
