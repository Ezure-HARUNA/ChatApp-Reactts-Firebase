import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrGDq7d2jk6TGynb4muystCNmufZd1vrw",
  authDomain: "chatapp-reactts.firebaseapp.com",
  projectId: "chatapp-reactts",
  storageBucket: "chatapp-reactts.appspot.com",
  messagingSenderId: "138182718646",
  appId: "1:138182718646:web:3d624f3b983069d9a3e217",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
