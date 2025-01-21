import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import {
  idMovieAtom,
  isFetchingAtom,
  searchMoviesAtom,
} from "../../../../jotai/atoms";
import { searchMovies } from "../../../../utils/searchMovies";
import EachUtils from "../../../../utils/EachUtils";
import MovieCard from "../MovieCard";

const SearchMovies = () => {
  const [isHover, setIsHover] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const [, setIdMovie] = useAtom(idMovieAtom);
  const [searchQuery] = useAtom(searchMoviesAtom);
  const [, setIsFetching] = useAtom(isFetchingAtom);

  useEffect(() => {
    if (searchQuery) {
      searchMovies({ query: searchQuery })
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
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-4 p-8 mt-10 gap-4">
      <EachUtils
        of={movieList}
        render={(item, index) => (
          <div
            className="mt-4 h-72"
            key={index}
            onMouseLeave={() => {
              setIsHover(false);
              setIdMovie(null);
            }}
          >
            <MovieCard data={item} isHover={isHover} setIsHover={setIsHover} />
          </div>
        )}
      />
    </div>
  );
};

export default SearchMovies;
