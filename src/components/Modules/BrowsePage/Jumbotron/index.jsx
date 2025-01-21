import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { GoMute, GoPlay, GoUnmute } from "react-icons/go";
import { useAtom } from "jotai";
import { idMovieAtom, isOpenModalAtom } from "../../../../jotai/atoms";
import { getVideoUrl } from "../../../../utils/getVideoUrl";
import { getMoviesByType } from "../../../../utils/getMoviesByType";
import { useNavigate } from "react-router-dom";

const Jumbotron = () => {
  const navigate = useNavigate();

  const [isMute, setIsMute] = useState(true);
  const [topMovies, setTopMovies] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [idMovie, setIdMovie] = useState(null);

  const [, setIdMovieAtom] = useAtom(idMovieAtom);
  const [, setIsOpenModal] = useAtom(isOpenModalAtom);

  useEffect(() => {
    getMoviesByType({ moviesType: "top_rated" })
      .then((result) => {
        setTopMovies(result[0]);
        setIdMovie(result[0].id);
      })
      .finally(() =>
        getVideoUrl({ movie_id: idMovie }).then((result) => setVideoUrl(result))
      );
  }, [idMovie]);

  return (
    <div className="relative h-[500px] w-full">
      <ReactPlayer
        url={"https://youtube.com/watch?v=" + videoUrl}
        width={"100%"}
        height={"700px"}
        playing={true}
        muted={isMute}
        controls={false}
      />
      <div className="absolute left-0 max-w-md p-8 -translate-y-1/2 top-1/2">
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-5xl font-black">{topMovies.title}</h1>
          <p>{topMovies.overview}</p>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => {
              navigate("/watch/" + videoUrl);
              setIsMute(true);
            }}
            className="flex items-center gap-1 px-8 py-2 text-xl font-bold text-black bg-gray-200 rounded"
          >
            <GoPlay />
            Play
          </button>
          <button
            onClick={() => {
              setIsOpenModal(true);
              setIdMovieAtom(idMovie);
            }}
            className="px-8 py-2 text-white rounded-md bg-stone-600/80"
          >
            More Detail
          </button>
        </div>
      </div>
      <div className="absolute text-white -translate-y-1/2 right-6 bottom-1/2">
        <div
          className="p-2 border rounded-full cursor-pointer"
          onClick={() => setIsMute(!isMute)}
        >
          {isMute ? <GoMute size={24} /> : <GoUnmute size={24} />}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
