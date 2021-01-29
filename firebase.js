import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxZ6r7gqKfAQE9ppG2b-d4ELw7pLeq63Q",
  authDomain: "signal-clone-216f1.firebaseapp.com",
  projectId: "signal-clone-216f1",
  storageBucket: "signal-clone-216f1.appspot.com",
  messagingSenderId: "396850199902",
  appId: "1:396850199902:web:24e5b505961b5ac24fe3cf",
  measurementId: "G-YTY93ZLNXY",
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
