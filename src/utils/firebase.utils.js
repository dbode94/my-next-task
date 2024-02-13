//TODO: Use onAuthStateChange to manage the data from the user once logged in & to manage the navigation

import { initializeApp } from "firebase/app";
import { 
  onSnapshot, //This is a real time listener, which requires a collection ref and the callback functon. This a the way to a have all the collection data on realtime
  collection,
  doc,
  getDoc,
  getFirestore,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc
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

//#region Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const googleProvider = new GoogleAuthProvider();
//#endregion

//#region USER AUTH & PROFILE RELATED FUNCTIONS

//Helper function for registering using email and password 
export const registerNewUser = (displayName, email, password, additionalInformatinon = {}) =>{
  return createUserWithEmailAndPassword(auth, email,password)
    .then(async ({user}) =>{
      await createUserDocument(user.uid, displayName, email, additionalInformatinon)
      return user;
    })
    .catch((err) => console.log('error handled', err.message))
}

//stores the user related data into the data base
const createUserDocument = async (userID, displayName, email, additionalInformatinon = {}) => {
  const newUserDocRef = doc(db, 'users', userID);
  const newUserDocSnapshot = await getDoc(newUserDocRef);

  if(!newUserDocSnapshot.exists()){
    const createdAt = new Date();
    try{  
      await setDoc(newUserDocRef, {displayName, email, createdAt, ...additionalInformatinon})
    }catch(err){
      console.log('error while creating user document', err.message)
    }
  }
}

//Helper function for signing in with email and password
export const regularSignIn = async (email, password) => await signInWithEmailAndPassword(auth, email, password);

//Helper function for singing in the user using Google Popout
export const singInWithGooglePopOut = async (additionalinformation = {}) =>{
  return signInWithPopup(auth, googleProvider)
    .then( async ({user}) =>{
      await createUserDocument(user.uid, user.displayName, user.email, additionalinformation);
      return user;
    })
    .catch((err) => console.log(err.message))
}

//helper function for loging out the user
export const signUserOut = async () => await signOut(auth);

//#endregion



//#region USER NOTES RELATED FUNCTIONS

//load user notes from the database
export const loadNotes = async (userId) => {
  if(userId){
    const userNotesCollectionRef = collection(db,'users',userId,'notes');
    const userQueryNotesSnapshot = (await getDocs(userNotesCollectionRef)).docs;
    const userNotesDocs = userQueryNotesSnapshot.map((doc) => doc.data());
    return userNotesDocs;
  }
}

//add notes to the database
export const saveNote = async (userId,userNote) =>{
  const newNoteDocRef = doc(db, 'users',userId,'notes', userNote.noteId);
  const newNoteDoc = await getDoc(newNoteDocRef);

  if(!newNoteDoc.exists()){
    const createdAt = new Date();
    try{  
      await setDoc(newNoteDocRef, {...userNote, createdAt})
    }catch(err){
      console.log('error while creating user document', err.message)
    }
  }
}

//update a note
export const saveNoteChanges = async (userId,userNote) =>{
  const noteDocRef = doc(db, 'users',userId,'notes', userNote.noteId);
  try {
    await updateDoc(noteDocRef,{...userNote})
  } catch (error) {
    console.log('error while saving note changes', error.message)
  }
}

//delete a note

export const deleteNote = async (userId, userNoteId) =>{
  const noteDocRef = doc(db, 'users',userId,'notes', userNoteId);

  try {
    await deleteDoc(noteDocRef)
  } catch (error) {
    console.log('error while deleting note', error.message)
  }
}

//#endregion