import React from "react";
import { useSelector } from 'react-redux';
import useTrailerVideo from "../customhooks/useTrailerVideo";
import { useNavigate } from "react-router-dom";
import {useParam} from 'react-router-dom';

const VideoBackground = ({movieId}) => {
  const navigate = useNavigate();
  const urlPath = window.location.href.split("/");
  // we can update trailer key by 2 ways.(1) using useState (2) using redux store.
  // Using useState we maintain state in component level & using redux store we can implement in dynamic custom hook.
  // const [trailerId, setTrailerId] = useState(null);
  const movieTrailer = useSelector((store) => store.movie?.movieTrailer);
  useTrailerVideo(movieId);
  return (
    <div>
      {(urlPath.length > 4)? (
      <iframe className="w-screen aspect-video"     
        src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?&autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>):
      (
        <iframe className="w-screen aspect-video"     
        src={"https://www.youtube.com/embed/" + movieTrailer?.key }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;

