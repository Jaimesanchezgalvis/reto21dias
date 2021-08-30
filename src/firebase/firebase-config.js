import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBSfUpRKMPiE_LzToTeuWoYXm8KeBeTg4U",
    authDomain: "react-app-curso-f3998.firebaseapp.com",
    projectId: "react-app-curso-f3998",
    storageBucket: "react-app-curso-f3998.appspot.com",
    messagingSenderId: "747430515690",
    appId: "1:747430515690:web:e6d745326cbf3f7a249893",
    measurementId: "G-CP8SH6L1T1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}


