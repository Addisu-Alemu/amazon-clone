import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmxx5f4NmP-Tgt2dH5_pJ56z8_1ICh05c",
  authDomain: "clone-30e4b.firebaseapp.com",
  projectId: "clone-30e4b",
  storageBucket: "clone-30e4b.appspot.com",
  messagingSenderId: "374047305001",
  appId: "1:374047305001:web:acbd95622ec641376a1b38",
};
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const fs = firebase.firestore();
// const storage = firebase.storage();

// export { auth, fs, storage };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
