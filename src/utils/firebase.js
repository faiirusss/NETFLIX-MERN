// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNlOyK6pz9hMX4H86Nmg_SMOH9jiNBeEk",
  authDomain: "netflix-clone-c3c3c.firebaseapp.com",
  projectId: "netflix-clone-c3c3c",
  storageBucket: "netflix-clone-c3c3c.firebasestorage.app",
  messagingSenderId: "603335628515",
  appId: "1:603335628515:web:2d5b6b525c5f9d1b00d7d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
