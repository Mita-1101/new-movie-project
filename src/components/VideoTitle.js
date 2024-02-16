import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  const navigate = useNavigate();
  const urlPath = window.location.href.split("/");
  //console.log(urlPath);
  const handleBack = () => {
    navigate("/browse");
  };

  return (
    <div className="aspect-video w-screen pt-[20%] px-20 absolute text-white">
      {urlPath.length > 4 && (
        <HiOutlineChevronLeft
          style={{ color: "red", fontSize: "40px" }}
          onClick={handleBack}
        />
      )}

      <h1 className="text-xl md:text-2xl font-bold md:text-blue-700 ">{title}</h1>
      <p className="hidden md:inline-block w-1/3 py-3 ">{overview}</p>
     {/*  {urlPath.length > 4 ? (
        <div></div>
      ) : (
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
            Play
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  mx-2">
            More Info
          </button>
        </div>
      )} */}
    </div>
  );
};

export default VideoTitle;
