import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice';
// static custom hook
const usePopularMovies = () => {

    //fetch popular movies from Api and update the store
  const dispatch = useDispatch();
  const popularMovies = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );
    
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;

