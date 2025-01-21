import BrowseLayout from "../../components/Layouts/BrowseLayout";
import MovieCard from "../../components/Modules/BrowsePage/MovieCard";
import EachUtils from "../../utils/EachUtils";

import { LIST_VIDEO_RECOMMENDATION } from "../../constants/dummyVideo";
import { useState } from "react";
import { useAtom } from "jotai";
import { idMovieAtom } from "../../jotai/atoms";

const Favorite = () => {
  const [isHover, setIsHover] = useState(false);
  const [, setIdMovie] = useAtom(idMovieAtom);

  return (
    <BrowseLayout>
      <div className="px-8 mt-20">
        <h3 className="text-2xl font-bold text-white">My Favorite Movies</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 px-8 sm:grid-cols-4">
        <EachUtils
          of={LIST_VIDEO_RECOMMENDATION}
          render={(item, index) => (
            <div
              className="mt-4 h-72"
              key={index}
              onMouseLeave={() => {
                setIsHover(false);
                setIdMovie(null);
              }}
            >
              <MovieCard
                data={item}
                isHover={isHover}
                setIsHover={setIsHover}
              />
            </div>
          )}
        />
      </div>
    </BrowseLayout>
  );
};

export default Favorite;
