import { useEffect, useState } from "react";
import EachUtils from "../../../../utils/EachUtils";
import MovieCard from "../MovieCard";
import CarouselLayout from "../../../Layouts/CarouselLayout";

import { useAtom } from "jotai";
import { idMovieAtom, isFetchingAtom } from "../../../../jotai/atoms";
import { getMoviesByType } from "../../../../utils/getMoviesByType";

const MovieList = ({ title, moviesType }) => {
  const [isHover, setIsHover] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const [, setIdMovie] = useAtom(idMovieAtom);
  const [, setIsFetching] = useAtom(isFetchingAtom);

  useEffect(() => {
    if (moviesType) {
      getMoviesByType({ moviesType })
        .then((result) => {
          setIsFetching(true);
          setMovieList(result);
        })
        .finally(() => {
          setTimeout(() => {
            setIsFetching(false);
          }, 500);
        });
    }
  }, [moviesType]);

  return (
    <section className="relative px-8 py-4">
      <h3 className="mb-2 text-3xl font-semibold text-white">{title}</h3>
      <CarouselLayout>
        <EachUtils
          of={movieList}
          render={(item, index) => (
            <div
              className="w-1/2 md:w-1/4 xl:w-1/6 carousel-item"
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
      </CarouselLayout>
    </section>
  );
};

export default MovieList;
