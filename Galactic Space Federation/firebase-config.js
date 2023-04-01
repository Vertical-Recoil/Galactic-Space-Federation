// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKQ5ipDBCsyx4H0SkLMV7RaMNjXXSt00o",
    authDomain: "galactic-space-federation.firebaseapp.com",
    projectId: "galactic-space-federation",
    storageBucket: "galactic-space-federation.appspot.com",
    messagingSenderId: "1006285148519",
    appId: "1:1006285148519:web:f0ffb11524a38df0839fc2",
    measurementId: "G-DWMZXZ7F9N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, getDocs, Timestamp, addDoc };

//you might not even need this. you can delete this line once you are sure
export { query, orderBy, limit, where, onSnapshot };
