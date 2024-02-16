import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constants';
import { addRecentMovies } from '../utils/movieSlice';
// static custom hook
const useRecentMovies = () => {

    //fetch recent movies from Api and update the store
  const dispatch = useDispatch();
  const recentMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addRecentMovies(json.results));
  };

  useEffect(() => {
    recentMovies();
  }, []);
};

export default useRecentMovies;

