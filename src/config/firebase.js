import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDSkSz3THSxSkoakxOE-kiIpzHEilkxRRQ",
    authDomain: "discord-clone-yt-be051.firebaseapp.com",
    projectId: "discord-clone-yt-be051",
    storageBucket: "discord-clone-yt-be051.appspot.com",
    messagingSenderId: "861511920395",
    appId: "1:861511920395:web:8a9d10c9684758ca31900e",
    measurementId: "G-KRZLHXT2CJ"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebaseapp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {provider,auth};
  
  export default db;
