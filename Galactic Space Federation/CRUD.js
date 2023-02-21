import { db } from "index.html";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

const statsCollectionRef = collection(db, "stats");

async function asyncCall() {
    const data = await getDocs(statsCollectionRef);
    console.log(data);
  }
  
  asyncCall();
