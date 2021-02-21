import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE_29_85cSXY3cYjXYzDuBcWIFIh__gQA",
    authDomain: "netflix-clone-by-saeed.firebaseapp.com",
    projectId: "netflix-clone-by-saeed",
    storageBucket: "netflix-clone-by-saeed.appspot.com",
    messagingSenderId: "1057788774932",
    appId: "1:1057788774932:web:06a0f84ff3f8933d00b501",
    measurementId: "G-CFDLVQ8L1D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;
