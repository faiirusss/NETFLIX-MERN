import ReactPlayer from "react-player";
import { GoPlay, GoPlusCircle, GoChevronDown } from "react-icons/go";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import {
  idMovieAtom,
  isFetchingAtom,
  isOpenModalAtom,
  searchMoviesAtom,
} from "../../../../jotai/atoms";
import {  useState } from "react";
import { getVideoUrl } from "../../../../utils/getVideoUrl";
import Skeleton from "./Skeleton";
import { useNavigate } from "react-router-dom";
import {
  LIST_VIDEO_RECOMMENDATION,
} from "../../../../constants/dummyVideo";

const MovieCard = ({ data, isHover, setIsHover }) => {
  const navigate = useNavigate();

  const [videoUrl, setVideoUrl] = useState([null]);

  const [idMovie, setIdMovie] = useAtom(idMovieAtom);
  const [, setIsOpenModal] = useAtom(isOpenModalAtom);
  const [isFetching] = useAtom(isFetchingAtom);
  const [, setSearchMovies] = useAtom(searchMoviesAtom);

  if (isFetching) return <Skeleton />;

  return (
    <>
      {isHover && idMovie == data.id ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0, ease: "easeInOut" }}
          className="relative w-full transition-all shadow-md cursor-pointer"
        >
          <ReactPlayer
            url={`https://youtube.com/watch?v=${videoUrl}`}
            playing={true}
            loop={true}
            muted={true}
            width={"100%"}
            height={"180px"}
            controls={false}
          />
          <div className="bg-[#141414] flex flex-col gap-1.5 p-2 h-auto rounded-b-xl">
            <section className="flex justify-between mt-1">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSearchMovies(null);
                    navigate("/watch/" + videoUrl);
                  }}
                >
                  <GoPlay size={32} />
                </button>
                <button>
                  <GoPlusCircle size={32} />
                </button>
              </div>
              <div>
                <button
                  className="p-1 border rounded-full"
                  onClick={() => setIsOpenModal(true)}
                >
                  <GoChevronDown size={20} />
                </button>
              </div>
            </section>
            <section className="text-left">
              <h2 className="font-semibold">{data.title}</h2>
              <p className="text-green-400">Popularity: {data.popularity}</p>
            </section>
          </div>
        </motion.div>
      ) : (
        <img
          onMouseEnter={() => {
            setIsHover(true);
            setIdMovie(data.id);
            getVideoUrl({ movie_id: data.id }).then((result) =>
              setVideoUrl(result)
            );
          }}
          src={
            !data.poster_path
              ? LIST_VIDEO_RECOMMENDATION[0].image
              : `${import.meta.env.VITE_BASE_URL_TMDB_IMAGE}${data.poster_path}`
          }
          className="object-cover w-full cursor-pointer max-h-72 rounded-md"
        />
      )}
    </>
  );
};
export default MovieCard;
