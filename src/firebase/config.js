// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUZcJ6uI5AeRBZln7ryn7AaYRVvLd7LLQ",
  authDomain: "react-56e13.firebaseapp.com",
  projectId: "react-56e13",
  storageBucket: "react-56e13.firebasestorage.app",
  messagingSenderId: "536198215896",
  appId: "1:536198215896:web:ad7342ac749dfa2e01ffad",
  measurementId: "G-1WNRPQB6K9"
};
// cambiar a variables de entorno
// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );

const analytics = getAnalytics(FirebaseApp);