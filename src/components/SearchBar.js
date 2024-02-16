import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieResult, deleteMovieResult } from "../utils/searchToggleSlice";
import { checkEmptyField } from "../utils/validate";
import SearchMovieList from "./SearchMovieList";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [activeFlag, setActiveFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)

  const handleChange = (e) => {
    setSearchText(e.target.value);
    setErrorMessage("")
  };
  const handleCancel = () => {
    setSearchText("");
    dispatch(deleteMovieResult());
    setActiveFlag(false)
  };

  const handleSearch = async () => { 
    if(searchText.trim() === '') {
      setErrorMessage("Input is empty")
      return true;
    }    
    setActiveFlag(true)
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          searchText +
          "&include_adult=false&page=1",
        API_OPTION
      );
      const json = await data.json();     
      dispatch(addMovieResult(json.results));
  };

  return (
    <>
    <div className="">
      <form className="w-1/2 mx-auto my-64">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search movies by Keyword"
            aria-label="Full name"
            onChange={handleChange}
            value={searchText}
          />
          
          <HiOutlineSearch
            style={{ color: "teal", fontSize: "40px" }}
            onClick={handleSearch}
          />
          <HiX
            style={{ color: "teal", fontSize: "40px" }}
            onClick={handleCancel}
          />        
        </div>  
        <p className="text-red-700  text-lg py-2 font-bold ">
            {errorMessage}
          </p>    
      </form>
    </div>
    <SearchMovieList searchKey={searchText} flag={activeFlag} />
    </>
    
  );
};

export default SearchBar;
