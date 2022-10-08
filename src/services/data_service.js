import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  collectionGroup
}
from 'firebase/firestore';

class DataService {
  constructor(){
    this.fireStore = getFirestore();
  }

  async readData(uid, collectionName){
    const querySnapshot = await getDocs(collection(this.fireStore, 'assets'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    })
  }

}

export default DataService;