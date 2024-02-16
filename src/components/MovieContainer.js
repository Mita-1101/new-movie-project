import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movies = useSelector((store) => store.movie);
  const movieResult = useSelector((store) => store.searchToggle.movieResult);
  const showSearch = useSelector((store) => store.searchToggle.showSearch);
  return (
    movies.recentMovies && (
      <div classname=" mt-0 md:-mt-52">
        <MovieLists title={"recentMovies"} movie={movies.recentMovies} />
        <MovieLists title={"popularMovies"} movie={movies.popularMovies} />
        <MovieLists title={"comingMovies"} movie={movies.comingMovies} />
        {showSearch && <MovieLists title={"movieResult"} movie={movieResult} />}
      </div>
    )
  );
};

export default MovieContainer;
