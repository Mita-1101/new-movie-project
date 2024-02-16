import React, { useState, useRef } from "react";
import { BG_IMAGE, USER_AVATAR } from "../utils/constants";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () =>{
    const message = checkValidate(email.current.value, password.current.value)
    setErrorMessage(message);
    if(message) return;
    if(!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;        
        updateProfile(user, {
          displayName: name.current.value , photoURL: USER_AVATAR
        }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            })
          );
          navigate("/browse");
        }).catch((error) => {
         // console.log(error)
         setErrorMessage(error.message)
        });
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +  "  "  + errorMessage)
        navigate("/");
      });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
       // console.log(user)
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +  "  "  + errorMessage)
        navigate("/");
      });
    }
      
  }

  return (
    <div className="relative">
      <Header />
      <div className="">
        <img className="h-screen object-fill  md:w-screen " src={BG_IMAGE} alt="Banner" />
      </div>

      <div className="top-1/3 md:top-1/4 left-7 md:left-1/3 absolute  md:w-4/12 transform translate-x-8">
        <form className="bg-black bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-blue-500 text-3xl mb-4 text-center font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

        {!isSignIn && (
          <div className="mb-4">
            <input ref={name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
            />
          </div>
        )}
          
          <div className="mb-4">
            <input ref={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <input ref={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
            />
          </div>
        {/*   {!isSignIn && (
            <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          )} */}
           <p className="text-red-700 text-lg py-2 font-bold">
            {errorMessage}
          </p>
          <div className="mb-6">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button" onClick={handleButtonClick}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <p className="text-blue-500 text-xs italic cursor-pointer" onClick={handleToggle}>
            {isSignIn ? "New to MovieApp ? Sign Up Now" : "Already Registered ? Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
