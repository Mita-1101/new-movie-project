import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const MovieCard = ({ posterPath, movieId, title }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  if (!posterPath) return null;

  return (
    <div
      className="w-36 pr-4 relative rounded-full"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Link key={movieId} to={"/browse/" + title + "/" + movieId}>
        <img
          className="cursor-pointer  hover:scale-90 rounded-lg"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Poster"
        />
      </Link>
      {isHovering && (
        <Link key={movieId} to={"/browse/" + title + "/" + movieId}>
          <FaPlay
            className="absolute bottom-4 left-3"
            style={{ color: "red", fontSize: "15px" }}
          />
        </Link>
      )}
    </div>
  );
};

export default MovieCard;
