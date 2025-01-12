// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTGtdDYDfsr1wBc4KaPAgP8j6y_Mzn4H8",
  authDomain: "to-do-app-3fa85.firebaseapp.com",
  projectId: "to-do-app-3fa85",
  storageBucket: "to-do-app-3fa85.firebasestorage.app",
  messagingSenderId: "324820059482",
  appId: "1:324820059482:web:684cbf822aa24f1665df63",
  measurementId: "G-9WTMBNQK3X",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
