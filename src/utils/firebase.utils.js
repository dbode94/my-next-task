// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBtyZIHbP-PrjQCcsQrYhD_Vdip7clefsc",
  authDomain: "my-next-task.firebaseapp.com",
  projectId: "my-next-task",
  storageBucket: "my-next-task.appspot.com",
  messagingSenderId: "991862209712",
  appId: "1:991862209712:web:3e350f3656711da0088f75",
  measurementId: "G-3E8XCS2RJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);