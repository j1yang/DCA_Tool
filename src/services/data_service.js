import {
  getFirestore,
  doc,
  collection,
  addDoc,
  setDoc,
  getDoc,
  collectionGroup
}
from 'firebase/firestore';


class DataService {
  constructor(){
    this.db = getFirestore();
  }

  async setData(uid, collectionName, assetList, assetRecords){
    // const citiesRef = collection(this.db, "cities");

    // await setDoc(doc(citiesRef, "LA"), {
    // name: "Los Angeles", state: "CA", country: "USA",
    // capital: false, population: 3900000,
    // regions: ["west_coast", "socal"] });
    const assetRef = collection(this.db, collectionName);
    await setDoc(doc(assetRef, uid), {assetList, assetRecords});
  }

  async readData(uid, collectionName){
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }

    const docRef = doc(this.db, collectionName, uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }
}

export default DataService;