import React, { useEffect, useState } from "react";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {
  toggleSearchView,
  deleteMovieResult,
} from "../utils/searchToggleSlice";
import { HiOutlineSearch } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.searchToggle.showSearch);
  const [dropdownShow, setDropdownShow] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate form onAuthStatechanged function
      })
      .catch((error) => {
        // built a error page
      });
  };

  const handleSearchClick = () => {
    navigate("/browse");
    dispatch(toggleSearchView());
    dispatch(deleteMovieResult());
  };

  const handleDropdown = () => {
    setDropdownShow(!dropdownShow);
  };

  return (
    <div className=" relative w-screen h-12 px-8  bg-gradient-to-b from-black z-10 bg-violet-950 flex flex-col md:flex-row justify-between">
      <img className="mt-2 w-20 h-8 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex items-center">
          <ul className="flex m-4 p-4">
            <li className="px-5 cursor-pointer">
              <Link to="/about">
                <SiAboutdotme style={{ color: "red", fontSize: "30px" }} />
              </Link>
            </li>
            <li className="px-5 cursor-pointer">
              <Link to="/privacy">
                <MdPrivacyTip style={{ color: "red", fontSize: "20px" }} />
              </Link>
            </li>
            <li className="px-5 cursor-pointer" onClick={handleSearchClick}>
              {showSearch ? (
                <FaHome style={{ color: "red", fontSize: "30px" }} />
              ) : (
                <HiOutlineSearch style={{ color: "red", fontSize: "30px" }} />
              )}
            </li>
            <li className="px-5 cursor-pointer">
              <FaUserCircle
                style={{ color: "red", fontSize: "20px" }}
                onClick={handleDropdown}
              />
            </li>
            
          </ul>
          
        </div>
      )}

{dropdownShow && (
              <div className="absolute bg-violet-800 w-40 py-2 rounded-lg top-12 right-5 ">
                <Link to="/contact" className="block px-5 cursor-pointer text-blue-400 hover:text-blue-700 font-bold hover:bg-white">
                  Contact
                </Link>
              
                <p
                  className="block px-5 text-blue-400 hover:text-blue-700 font-bold hover:bg-white"
                  onClick={handleSignOut}
                >
                  Log out
                </p>
              </div>
            )}
    </div>
  );
};

export default Header;
