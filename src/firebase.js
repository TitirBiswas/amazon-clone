import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyASReq0J2pVRk-XhUwC0MVNxz53uU2ivtE",
    authDomain: "clone-fd42d.firebaseapp.com",
    projectId: "clone-fd42d",
    storageBucket: "clone-fd42d.appspot.com",
    messagingSenderId: "272816849565",
    appId: "1:272816849565:web:abd3f6fa71d23d861a4a74",
    measurementId: "G-EQ2MB5MHNN"
  };

  const firebaseapp =firebase.initializeApp(firebaseConfig);
   const db = firebaseapp.firestore();
   const auth=firebase.auth();

   export {db, auth};