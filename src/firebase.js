import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyID-6MZy9DIFhGQ_ldPAn-Q0AV6ZuFJM",
    authDomain: "instagram-clone-9a893.firebaseapp.com",
    databaseURL: "https://instagram-clone-9a893-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-9a893",
    storageBucket: "instagram-clone-9a893.appspot.com",
    messagingSenderId: "470473864921",
    appId: "1:470473864921:web:3cde9d5fda7e05f4b270c8",
    measurementId: "G-5RVMDWZGLM"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();



export { db, auth, storage}