import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDljqHzyisrEqQRL-FGjiYEJboyU2uedFQ",
  authDomain: "internship-647f0.firebaseapp.com",
  projectId: "internship-647f0",
  storageBucket: "internship-647f0.appspot.com",
  messagingSenderId: "855786999739",
  appId: "1:855786999739:web:14c3b70ca932a1c51dbe9e",
  measurementId: "G-84BWMHJJEB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
