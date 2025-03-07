import CarouselLayout from "@/components/Layouts/CarouselLayout";
import ExploreLayout from "@/components/Layouts/ExploreLayout";
import MovieCard from "@/components/Modules/BrowsePage/MovieCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { JUMBOTRON_VIDEO, LIST_VIDEOS } from "@/constants/dummyVideo";
import EachUtils from "@/utils/EachUtils";
import { ArrowDownToLine, Play, Star } from "lucide-react";

const MainExplorePage = () => {
  return (
    <ExploreLayout>
      <div className="grid grid-cols-1 gap-8">
        <div className="w-full relative h-[380px]">
          <EachUtils
            of={JUMBOTRON_VIDEO}
            render={(item, index) => (
              <div key={index} className="">
                <img
                  src={item.image}
                  alt="jumbotron"
                  className="object-cover w-full h-full absolute top-0 left-0 rounded-xl"
                />
                <div className="absolute left-8 top-8 max-w-3xl">
                  <div className="bg-background/30 backdrop-blur-sm text-sm rounded-lg px-2 py-1 text-white flex items-center max-w-40">
                    <img src="/flame.png" alt="flame" className="w-6 h-6" />
                    Popular Movie #1
                  </div>
                </div>
                <div className="absolute left-0 bottom-10 flex flex-col justify-between w-full gap-y-4">
                  <div className="flex flex-col gap-y-2 px-8">
                    <p className="text-red-500 font-bold">{item.genre}</p>
                    <h1 className="text-3xl text-white font-black">
                      {item.title} ({item.release_date})
                    </h1>
                  </div>
                  <div className="flex justify-between px-8">
                    <p className="max-w-md xl:max-w-xl text-background/70 lg:block hidden">
                      {item.desc}
                    </p>
                    <div className="space-x-2 flex">
                      <Button variant="outline">
                        <Play fill="" /> Watch Now
                      </Button>
                      <Button>
                        <ArrowDownToLine />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        <div className="">
          <div className="flex gap-4 items-center">
            <h1 className="text-xl font-semibold">Continue Watch</h1>{" "}
            <Separator orientation="vertical" className="h-4 w-px bg-border" />
            <span>6 Remaining</span>
          </div>

          <div className="relative py-4">
            <CarouselLayout>
              <EachUtils
                of={LIST_VIDEOS}
                render={(item, index) => (
                  <div
                    className="w-1/2 md:w-1/4 xl:w-52 carousel-item"
                    key={index}
                  >
                    <MovieCard data={item} />
                  </div>
                )}
              />
            </CarouselLayout>
          </div>
        </div>

        <div className="">
          <h1 className="text-xl font-semibold">Popular Movie</h1>{" "}
          <div className="relative py-4">
            <CarouselLayout>
              <EachUtils
                of={LIST_VIDEOS}
                render={(item, index) => (
                  <div
                    className="w-1/2 md:w-1/4 xl:w-52 carousel-item"
                    key={index}
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt="poster"
                        className="object-cover w-full cursor-pointer h-80 rounded-md "
                      />
                      <button className="absolute bg-white/30 backdrop-blur-sm px-3 py-1 text-xs top-2 left-2 rounded-lg text-white">
                        <div className="flex items-center gap-1 justify-center">
                          <Star fill="orange" strokeWidth={0} size={13} />
                          <span>8.4</span>
                        </div>
                      </button>
                      <h1 className="font-bold items-center gap-1 text-sm flex mt-2">
                        <div className="h-3 w-3 rounded-full bg-lime-400"></div>
                        {item.title}
                      </h1>
                    </div>
                  </div>
                )}
              />
            </CarouselLayout>
          </div>
        </div>
      </div>
    </ExploreLayout>
  );
};

export default MainExplorePage;
