import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useRecentMovies from "../customhooks/useRecentMovies";
import usePopularMovies from "../customhooks/usePopularMovies";
import useUpcomingMovies from "../customhooks/useUpcomingMovies";
import VideoContainer from "./VideoContainer";
import MovieContainer from "./MovieContainer";
import Search from "./Search";

const Browse = () => {
  useRecentMovies();
  usePopularMovies();
  useUpcomingMovies();
  const showSearch = useSelector((store) => store.searchToggle.showSearch);
  return (
    <div>
      <Header />
      {showSearch ? (
        <Search />
      ) : (
        <>
          
          <VideoContainer />
          <MovieContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
