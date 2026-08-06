// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fooddelivery-d866a.firebaseapp.com",
  projectId: "fooddelivery-d866a",
  storageBucket: "fooddelivery-d866a.firebasestorage.app",
  messagingSenderId: "101812298993",
  appId: "1:101812298993:web:626bfdbdb4e58c6c373550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}