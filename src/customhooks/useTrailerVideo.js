import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constants';
// dynamic custom hook
const useTrailerVideo = (movieId) =>{
    
    const dispatch = useDispatch();
    
    const getMovieVideo = async () => {
        const data =  await fetch(
          "https://api.themoviedb.org/3/movie/" +
          movieId +
            "/videos?language=en-US",
          API_OPTION
        );
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
      };

      useEffect(() => {
        getMovieVideo();
      }, []);
}

export default useTrailerVideo;