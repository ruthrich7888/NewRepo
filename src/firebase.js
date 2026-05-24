import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCkTcqeldliqo21O-ZeM86y5uCNPPhFVsE",
  authDomain: "works-56394.firebaseapp.com",
  projectId: "works-56394",
  storageBucket: "works-56394.firebasestorage.app",
  messagingSenderId: "563434123131",
  appId: "1:563434123131:web:4b04ba28bc8c8ad26a57de",
  measurementId: "G-KXW60HC7DJ",
};
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
