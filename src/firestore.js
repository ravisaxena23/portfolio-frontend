// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5QiJ9ckYTKHkzrpzFF_cJH4pHqC39rg",
  authDomain: "portfolio-9be96.firebaseapp.com",
  projectId: "portfolio-9be96",
  storageBucket: "portfolio-9be96.appspot.com",
  messagingSenderId: "214053245974",
  appId: "1:214053245974:web:e854ebd96e2f21dc399137",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
