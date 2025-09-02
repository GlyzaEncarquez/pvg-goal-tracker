// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2OITx89_MmXzTAQ5d-W40_ZN_uLoLLyI",
  authDomain: "encarquez-mobile-app---tracker.firebaseapp.com",
  projectId: "encarquez-mobile-app---tracker",
  storageBucket: "encarquez-mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "984223431696",
  appId: "1:984223431696:web:3d58d788fab2cfbfd89e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)