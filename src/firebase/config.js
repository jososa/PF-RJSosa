// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPBE0qP79IW5xn8fBbGsFtwc4iwQSV2Q8",
  authDomain: "pf-rjsosa.firebaseapp.com",
  projectId: "pf-rjsosa",
  storageBucket: "pf-rjsosa.appspot.com",
  messagingSenderId: "220479775823",
  appId: "1:220479775823:web:cc1b1e136544fc24ab763a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);