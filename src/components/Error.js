import React from "react";
import { ERROR_IMAGE } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Error = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleError = () => {
    if (user) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="flex relative">
      <img className="object-cover w-screen" src={ERROR_IMAGE} alt="404 page" />

      <button
        className="absolute bg-blue-500 hover:bg-blue-700 text-white font-bold w-60 h-20 top-3/4 right-10"
        onClick={handleError}
      >
        {user ? "GO TO HOME" : "GO TO LOGIN"}
      </button>
    </div>
  );
};

export default Error;
