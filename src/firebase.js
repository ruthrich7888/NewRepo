import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkTcqeldliqo21O-ZeM86y5uCNPPhFVsE",
  authDomain: "works-56394.firebaseapp.com",
  projectId: "works-56394",
  storageBucket: "works-56394.firebasestorage.app",
  messagingSenderId: "563434123131",
  appId: "1:563434123131:web:4b04ba28bc8c8ad26a57de",
  measurementId: "G-KXW60HC7DJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
