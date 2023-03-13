import { app, db, collection, getDocs, Timestamp, addDoc  } from './firebase-config.js';

// Get a list of stats from your database. Pass in db as the only argument when calling
async function getStats(db, index) {
  const statsCol = collection(db, 'stats');
  const statSnapshot = await getDocs(statsCol);
  const statList = statSnapshot.docs.map(doc => {
    const data = doc.data();
    const { name, score } = data; // Replace variable1 and variable2 with the actual variable names in your data
    return { id: doc.id, name, score }; // Replace id with the actual ID property name in your data
  });
  
  if (index !== undefined) {
    return statList[index]; // Return the element at the specified index
  } else {
    return statList; // Return the entire array
  }
}

//console.log(getStats(db));


async function addStat(db, name, score){
  try {
    const docRef = await addDoc(collection(db, "stats"), {
      name: name,
      score: score
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//example call of addStat function. Pass in db as 1st argument, (string) name as 2nd, and (number) score as 3rd 
// addStat(db, "Alan", 1999);

export {getStats, addStat, db};



