import { db } from "./firebase-config.js";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

const statsCollectionRef = collection(db, "stats");

async function getStats() {
    const data = await getDocs(statsCollectionRef);
    console.log(data);
  }
  
  getStats();
