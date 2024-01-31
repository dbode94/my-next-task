//TODO: Use onAuthStateChange to manage the data from the user once logged in & to manage the navigation

import { initializeApp } from "firebase/app";
import { 
  onSnapshot, //This is a real time listener, which requires a collection ref and the callback functon. This a the way to a have all the collection data on realtime
  doc,
  getDoc,
  setDoc,
  getFirestore
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'


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
const auth = getAuth();
const db = getFirestore();
const googleProvider = new GoogleAuthProvider();


//Helper function for registering using email and password 
export const registerNewUser =  async (displayName, email, password, additionalInformatinon = {}) =>{
  createUserWithEmailAndPassword(auth, email,password)
    .then(({user}) =>{
      console.log('registered user', user.uid)
      createUserDocument(user.uid, displayName, email, additionalInformatinon)
        .then(() => user)
    })
    .catch((err) => console.log('error handled', err.message))
}

//stores the user related data into the data base
const createUserDocument = async (userID, displayName, email, additionalInformatinon = {}) => {
  console.log('creating the document')
  const newUserDocRef = doc(db, 'users', userID);
  const newUserDocSnapshot = await getDoc(newUserDocRef);

  if(!newUserDocSnapshot.exists()){
    const createdAt = new Date();
    try{  
      await setDoc(newUserDocRef, {displayName, email, createdAt, ...additionalInformatinon})
    }catch(err){
      console.log('error while creating user document', err.message)
    }
  } else 
  return newUserDocRef;
}

//Helper function for signing in with email and password
export const regularSignIn = (email, password) =>{
  return signInWithEmailAndPassword(auth, email, password)
}

//Helper function for singing in the user using Google Popout
export const singInWithGooglePopOut = async (additionalinformation = {}) =>{
  signInWithPopup(auth, googleProvider)
}

//helper function for loging out the user
export const signUserOut = async () => await signOut(auth);
