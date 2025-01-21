import { GoPlay } from "react-icons/go";
import EachUtils from "../../../../utils/EachUtils";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { idMovieAtom, isOpenModalAtom } from "../../../../jotai/atoms";
import { getMoviesRecommendation } from "../../../../utils/getMoviesRecommendation";
import { getVideoUrl } from "../../../../utils/getVideoUrl";
import { useNavigate } from "react-router-dom";
const Recommendation = () => {
  const navigate = useNavigate();

  const [moviesRecommendation, setMoviesRecommendation] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);

  const [, setIsOpenModal] = useAtom(isOpenModalAtom);
  const [idMovie, setIdMovie] = useAtom(idMovieAtom);

  useEffect(() => {
    if (idMovie) {
      getMoviesRecommendation({ movie_id: idMovie }).then((result) =>
        setMoviesRecommendation(result)
      );
    }
  }, [idMovie]);
  return (
    <div className="px-4 py-2">
      <h2 className="mt-4 text-2xl font-bold">Movies Recommendations</h2>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <EachUtils
          of={moviesRecommendation}
          render={(item, index) => (
            <div
              key={index}
              className="w-full h-auto cursor-pointer rounded-md bg-[#141414]"
              onMouseEnter={() => {
                getVideoUrl({ movie_id: item.id }).then((result) =>
                  setVideoUrl(result)
                );
              }}
            >
              <div className="relative">
                <img
                  src={
                    import.meta.env.VITE_BASE_URL_TMDB_IMAGE + item.poster_path
                  }
                  className="w-full h-48 rounded-t-md"
                />
                <button
                  onClick={() => {
                    setIdMovie(null);
                    navigate("/watch/" + videoUrl);
                    setIsOpenModal(false);
                  }}
                  className="absolute text-white -translate-x-1/2 top-10 left-1/2"
                >
                  <GoPlay size={44} />
                </button>
              </div>
              <div className="p-2">
                <div className="flex gap-2">
                  <p>{item.release_date}</p>
                  <p className="text-green-400/90">{item.vote_average}</p>
                </div>
                <p className="pt-2 text-wrap max-h-32 line-clamp-6">
                  {item.overview}
                </p>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Recommendation;
