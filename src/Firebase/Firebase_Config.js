// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgiJp-1KIouF3fxK1eUiGMBIIJe4LJPoM",
  authDomain: "coffee-store-bd.firebaseapp.com",
  projectId: "coffee-store-bd",
  storageBucket: "coffee-store-bd.appspot.com",
  messagingSenderId: "312006075304",
  appId: "1:312006075304:web:c670d96658af536ed3f39d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;