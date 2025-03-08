import { Button } from "@/components/ui/button";
import { JUMBOTRON_VIDEO } from "@/constants/dummyVideo";
import EachUtils from "@/utils/EachUtils";
import { ArrowDownToLine, Play } from "lucide-react";

const BannerCard = () => {
  return (
    <div className="w-full relative h-[500px]">
      <EachUtils
        of={JUMBOTRON_VIDEO}
        render={(item, index) => (
          <div key={index} className="">
            <img
              src="/favorites.webp"
              alt="jumbotron"
              className="absolute object-cover w-full h-full rounded-xl object-[center_24%]"
            />
            <div className="absolute max-w-3xl left-8 top-8">
              <div className="flex items-center px-2 py-1 text-sm text-white rounded-lg bg-background/30 backdrop-blur-sm max-w-40">
                <img src="/flame.png" alt="flame" className="w-6 h-6" />
                Popular Movie #1
              </div>
            </div>
            <div className="absolute left-0 flex flex-col justify-between w-full -translate-y-1/2 top-1/2 gap-y-4">
              <div className="flex flex-col px-8 gap-y-2">
                <h1 className="font-black text-white text-7xl">
                  {item.title} ({item.release_date})
                </h1>
                <p className="font-bold text-red-500">{item.genre}</p>
                <p className="hidden max-w-md xl:max-w-xl text-background/70 lg:block">
                  {item.desc}
                </p>
              </div>
              <div className="flex justify-between px-8">
                <div className="flex space-x-2">
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
  );
};

export default BannerCard;
