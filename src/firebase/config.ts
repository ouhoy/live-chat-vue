// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "live-chat-app-3271d.firebaseapp.com",
    projectId: "live-chat-app-3271d",
    storageBucket: "live-chat-app-3271d.appspot.com",
    messagingSenderId: "707726429108",
    appId: import.meta.env.VITE_APP_ID,
    measurementId: "G-VK7G7TSELM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, timestamp}



