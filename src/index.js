import './wdyr';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from "./context/firebase";
import {createUserWithEmailAndPassword, firebase, FieldValue, doc, arrayRemove, arrayUnion, updateDoc, limit, signOut, setDoc, addDoc, onAuthStateChanged, updateProfile, db, auth, signInWithEmailAndPassword, collection} from "./lib/firebase";
import "./styles/app.css";
// import { FieldValue } from "firebase/firestore";

ReactDOM.render(
  <FirebaseContext.Provider value={{createUserWithEmailAndPassword, doc, onAuthStateChanged, arrayRemove, arrayUnion, updateDoc,signOut, limit, firebase, setDoc, addDoc, updateProfile, collection, db, FieldValue, auth, signInWithEmailAndPassword}} >
    <App />
  </FirebaseContext.Provider>, 
  document.getElementById('root')
);


// libs
// react-loading-skeleton 
// tailwind

// folder structure
  // src
  // components , constants, context, helpers, lib, 
  // (firebase), servises (firebase functions)

