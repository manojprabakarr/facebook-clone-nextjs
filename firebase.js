import 'firebase/storage';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDkYs0CKjfIpvC2afjQt9y7AXvqrOxS4gk",
  authDomain: "nextjsfacebookclone.firebaseapp.com",
  projectId: "nextjsfacebookclone",
  storageBucket: "nextjsfacebookclone.appspot.com",
  messagingSenderId: "585861129201",
  appId: "1:585861129201:web:6b6e101fbe8185b7a51a50",
  measurementId: "G-LM9XZYD92W"
};


const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
:firebase.app();


const db = firebase.firestore();
const storage = firebase.storage();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export { auth, db, provider, storage };