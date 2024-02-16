// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZeQHREHOIlLYXmp9VK10kaLikCHbi7dM",
  authDomain: "hoichoi-a610d.firebaseapp.com",
  projectId: "hoichoi-a610d",
  storageBucket: "hoichoi-a610d.appspot.com",
  messagingSenderId: "638217356234",
  appId: "1:638217356234:web:f998e5b9bf999c7b9c8533",
  measurementId: "G-K36T99G9EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();