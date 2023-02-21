// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getFirestore } from "../@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDKQ5ipDBCsyx4H0SkLMV7RaMNjXXSt00o",
    authDomain: "galactic-space-federation.firebaseapp.com",
    projectId: "galactic-space-federation",
    storageBucket: "galactic-space-federation.appspot.com",
    messagingSenderId: "1006285148519",
    appId: "1:1006285148519:web:f0ffb11524a38df0839fc2",
    measurementId: "G-DWMZXZ7F9N"

});


  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebaseApp.firestore();