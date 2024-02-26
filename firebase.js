// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4sSBefvZNQCdEHAqHnsr5NQE7zjmRDDQ",
  authDomain: "fir-signin-4afb5.firebaseapp.com",
  projectId: "fir-signin-4afb5",
  storageBucket: "fir-signin-4afb5.appspot.com",
  messagingSenderId: "793381554332",
  appId: "1:793381554332:web:67f68aa028d014d5a94559",
  measurementId: "G-NY7F3XD4WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();