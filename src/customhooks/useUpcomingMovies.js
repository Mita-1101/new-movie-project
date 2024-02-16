import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constants';
import { addComingMovies } from '../utils/movieSlice';
// static custom hook
const useUpcomingMovies = () => {

    //fetch popular movies from Api and update the store
  const dispatch = useDispatch();
  const upcomingMovies = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const json = await data.json();
  //  console.log(json.results)
    dispatch(addComingMovies(json.results));
  };

  useEffect(() => {
    upcomingMovies();
  }, []);
};

export default useUpcomingMovies;

