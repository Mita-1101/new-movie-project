import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground'

const MovieDetails = () => {
  

  const { movieId, title } = useParams();
 let movieArray = []
  const movie = useSelector((store) => store.movie?.[title]);
  const movieResult = useSelector((store) => store.searchToggle.movieResult);
//  if (!movie || !movieResult) return null;
  if(title === 'movieResult') {
    movieArray = movieResult
  } else {
    movieArray = movie
  }
  const existingMovie = movieArray.filter((res) => res.id == movieId);
  const { overview, original_title, id } =
    existingMovie[0];

  return (
    <div className="">
      <Header />
      <div >
      <VideoTitle title={ original_title } overview={ overview }/>
      <VideoBackground movieId={ id }/>
      </div>
      
    </div>
  );
};

export default MovieDetails;
