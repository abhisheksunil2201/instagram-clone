import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbmKMajwhSSCf4WFVA9KopNKr2GKRQVEo",
    authDomain: "instagram-clone-b61af.firebaseapp.com",
    databaseURL: "https://instagram-clone-b61af.firebaseio.com",
    projectId: "instagram-clone-b61af",
    storageBucket: "instagram-clone-b61af.appspot.com",
    messagingSenderId: "103044058789",
    appId: "1:103044058789:web:db3d38ebfe1dd9d7e9074c",
    measurementId: "G-KPWDBMSQQZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};