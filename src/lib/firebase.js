import {initializeApp} from "firebase/app";
import { getAuth , signOut, signInWithEmailAndPassword , updateProfile, signInAnonymously, onAuthStateChanged} from "firebase/auth";
import {getFirestore, updateDoc, arrayUnion, arrayRemove, FieldValue, query, limit, collection, doc, getDocs,setDoc, addDoc, where} from "firebase/firestore";
import "firebase/firestore";
import "firebase/auth";

// here i want to import the seed file 
// import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyD6FwkAg0UspwweRA8xOiYV82iLK9_RMZ8",
    authDomain: "instagram-3bdd0.firebaseapp.com",
    projectId: "instagram-3bdd0",
    storageBucket: "instagram-3bdd0.appspot.com",
    messagingSenderId: "596739941101",
    appId: "1:596739941101:web:fa19999fda9e357f97e2e4",
    measurementId: "G-F1QSBKFW3V"
};

const firebase = initializeApp(config);
const db = getFirestore();
const auth = getAuth(firebase);

// here is where u want to call the seed file (Only once) // it as for adding data once to firestore to work with
// seedDatabase(firebase);
// seedDatabase({collection, addDoc, db});

export {onAuthStateChanged,signOut, arrayUnion, arrayRemove, firebase, db, updateDoc, limit, collection, signInAnonymously, updateProfile, query, where, setDoc, addDoc, doc, getDocs ,auth, signInWithEmailAndPassword, FieldValue};


