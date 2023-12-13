import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDdA7sRcJ7eDCvf6LzX2PXtsiP1Df9xLc",
  authDomain: "signal-c4079.firebaseapp.com",
  projectId: "signal-c4079",
  storageBucket: "signal-c4079.appspot.com",
  messagingSenderId: "209841731179",
  appId: "1:209841731179:web:98c55f2439b94bf538632e",
  measurementId: "G-GDC7SELKG1"
};

let app;

// Only initialize app if not already exists
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
