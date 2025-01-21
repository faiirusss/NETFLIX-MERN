import BrowseLayout from "../../../src/components/Layouts/BrowseLayout";
import Jumbotron from "../../components/Modules/BrowsePage/Jumbotron";
import MovieList from "../../components/Modules/BrowsePage/MovieList";
import Modal from "../../components/Modules/BrowsePage/Modal";
import { useAtom } from "jotai";
import { searchMoviesAtom } from "../../jotai/atoms";
import SearchMovies from "../../components/Modules/BrowsePage/SearchMovies";

function Browse() {
  const [searchQuery] = useAtom(searchMoviesAtom);
  return (
    <BrowseLayout>
      {searchQuery ? (
        <SearchMovies />
      ) : (
        <>
          <Jumbotron />
          <MovieList title={"Now Playing"} moviesType={"now_playing"} />
          <MovieList title={"Popular Movies"} moviesType={"popular"} />
          <MovieList title={"Top Rated Movies"} moviesType={"top_rated"} />
        </>
      )}

      <Modal />
    </BrowseLayout>
  );
}

export default Browse;
