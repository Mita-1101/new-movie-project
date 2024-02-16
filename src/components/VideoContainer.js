import React from 'react';
import {useSelector} from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground'

const VideoContainer = () =>{
  const movie = useSelector((store) => store.movie?.recentMovies)
  
  if(!movie) return;
  const videoMovie = movie[0];
  const { overview, original_title, id } = videoMovie;

  return (
    <div className="pt-[15%] bg-gray-500 md:pt-0">
      <VideoTitle title={ original_title } overview={ overview }/>
      <VideoBackground movieId={ id }/>
    </div>
  )
}

export default VideoContainer