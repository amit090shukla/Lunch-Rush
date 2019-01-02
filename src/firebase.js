import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBKWqcAIOkjRD47QaybvEEsPUdAwZuG2Zs",
  authDomain: "lunch-rush-86671.firebaseapp.com",
  databaseURL: "https://lunch-rush-86671.firebaseio.com",
  projectId: "lunch-rush-86671",
  storageBucket: "lunch-rush-86671.appspot.com",
  messagingSenderId: "832284397603"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
