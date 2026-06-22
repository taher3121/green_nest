// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNbChgh-K-NbcXib8npr8bWfPbqR_6ww4",
  authDomain: "green-nest-3cb87.firebaseapp.com",
  projectId: "green-nest-3cb87",
  storageBucket: "green-nest-3cb87.firebasestorage.app",
  messagingSenderId: "594164041681",
  appId: "1:594164041681:web:5a93f6be195cff58e2c2f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);