
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBAkufysMDVEE5DKXRRKhsFqITpmA6iZQ0",
    authDomain: "disney-clone-3faa3.firebaseapp.com",
    projectId: "disney-clone-3faa3",
    storageBucket: "disney-clone-3faa3.appspot.com",
    messagingSenderId: "915963065437",
    appId: "1:915963065437:web:d337d8403fba72745a89b4"
};
//   initializes firebase app 
const firebaseApp=firebase.initializeApp(firebaseConfig);

//connect database
const db=firebaseApp.firestore();

//authentication adn provider
const auth= firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

//store images and videos
const storage=firebase.storage();

export{auth,provider,storage};
export default db;