// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW5WKOsq3prYZnchYjBItSWHiHpz5Sli4",
  authDomain: "react-shoppingmall-4c8e9.firebaseapp.com",
  projectId: "react-shoppingmall-4c8e9",
  storageBucket: "react-shoppingmall-4c8e9.appspot.com",
  messagingSenderId: "37490853961",
  appId: "1:37490853961:web:919614707d943203c2d798",
  measurementId: "G-EZ72XX33PP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
