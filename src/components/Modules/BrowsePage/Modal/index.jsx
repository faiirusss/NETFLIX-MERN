import { useAtom } from "jotai";
import Recommendation from "./Recommendation";
import { idMovieAtom, isOpenModalAtom } from "../../../../jotai/atoms";
import ReactPlayer from "react-player";

import { MdClose } from "react-icons/md";
import { GoPlay, GoPlusCircle } from "react-icons/go";
import { useEffect, useState } from "react";
import { getVideoUrl } from "../../../../utils/getVideoUrl";
import { getMovieDetail } from "../../../../utils/getMovieDetail";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom);
  const [idMovie, setIdMovie] = useAtom(idMovieAtom);
  const [movieDetail, setMovieDetail] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    if (idMovie && isOpenModal) {
      getMovieDetail({ movie_id: idMovie }).then((result) =>
        setMovieDetail(result)
      );
      getVideoUrl({ movie_id: idMovie }).then((result) => setVideoUrl(result));
    }
  }, [idMovie, isOpenModal]);
  const genreMapping = (genres) => {
    let result = "";

    if (genres) {
      genres.map((genre, index) => {
        if (index === genres.length - 1) {
          result += genre.name;
        } else {
          result += genre.name + ",";
        }
      });
      return result;
    }
  };
  return (
    <dialog className={`modal ${isOpenModal ? "modal-open" : ""}`}>
      <div className="w-full max-w-screen-md p-0 modal-box">
        <div className="relative">
          <div className="h-[450px] w-full">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              playing={true}
              muted={false}
              loop={true}
              url={`https://youtube.com/watch?v=${videoUrl}`}
            />
          </div>
          <button
            onClick={() => setIsOpenModal(false)}
            className="absolute p-1 border rounded-full top-2 right-2"
          >
            <MdClose />
          </button>
          <div className="absolute bottom-1/2 left-10">
            <h2 className="text-4xl font-black text-white">
              {movieDetail?.title}
            </h2>
          </div>
          <div className="absolute translate-y-14 bottom-1/2 left-10">
            <div className="flex gap-4">
              <button
                onClick={() => {
                  navigate("/watch/" + videoUrl);
                  setIsOpenModal(false);
                  setVideoUrl(null);
                  setMovieDetail([]);
                  setIdMovie(null);
                }}
                className="flex items-center justify-center w-32 gap-1 p-1 text-xl font-bold text-black rounded-md bg-slate-50"
              >
                <GoPlay size={32} /> Play
              </button>
              <button className="text-slate-200 hover:text-white">
                <GoPlusCircle size={44} />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 px-4 py-2 text-white">
          <div>
            <div className="flex gap-2">
              <p>{movieDetail?.release_date}</p>
              <p className="text-green-400/90">
                {movieDetail?.runtime} Minutes
              </p>
            </div>
            <p className="mt-4">{movieDetail.overview}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Genre: {genreMapping(movieDetail?.genres)}</p>

            <p>Popularity: {movieDetail?.popularity}</p>
          </div>
        </div>
        <Recommendation />
      </div>
    </dialog>
  );
};

export default Modal;
