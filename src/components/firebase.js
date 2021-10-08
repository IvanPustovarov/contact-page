// Initialize Cloud Firestore through Firebase
import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD0EGZ7Rz3RciHWo_bKAUv8rgrRJCM9MK8",
  authDomain: "contact-page-a42f9.firebaseapp.com",
  databaseURL: "https://contact-page-a42f9-default-rtdb.firebaseio.com",
  projectId: "contact-page-a42f9",
  storageBucket: "contact-page-a42f9.appspot.com",
  messagingSenderId: "35801327677",
  appId: "1:35801327677:web:2dc6090d7816dc248ba254",
});

const db = firebase.firestore();

export { db };
