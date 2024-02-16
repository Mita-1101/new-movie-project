import React from "react";
import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

const SearchMovieList = (searchText) => {
  const movieResult = useSelector((store) => store.searchToggle.movieResult);
  const movies = useSelector((store) => store.movie);
  // console.log(searchText.flag)
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {!searchText.flag ? (
        <MovieLists title={"comingMovies"} movie={movies.comingMovies} />
      ) : movieResult.length > 0 ? (
        <MovieLists title={"movieResult"} movie={movieResult} />
      ) : (
        <>
          <h2 className="py-2">
            Showing result for "{searchText.searchKey}" not found. Some upcoming movies are given as per suggestion.
          </h2>
          <MovieLists
            title={"comingMovies"}
            movie={movies.comingMovies}
          />
        </>
      )}
    </div>
  );
};

export default SearchMovieList;
