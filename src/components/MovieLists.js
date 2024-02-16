import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movie }) => {
  const [movieType, setMovieType] = useState();
  
 // console.log(movie)

  const movieGenre = (title) => {
    switch (title) {
      case "recentMovies":
        setMovieType("Recent Movie");
        break;
      case "popularMovies":
        setMovieType("Popular Movie");
        break;
      case "comingMovies":
        setMovieType("Upcoming Movie");
        break;
        case "movieResult":
          setMovieType("Search Movie");
          break;
      default:
        setMovieType("Suggestion movie");
    }
  };

  useEffect(() => {
    movieGenre(title);
  }, []);

  return (
    <div className="px-6 bg-blue-600">
      <h1 className="text-lg md:text-3xl py-4 text-white">{movieType}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex">
          {movie?.map((res) => (
            <MovieCard
              key={res.id}
              posterPath={res.poster_path}
              movieId={res.id}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
