// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2HJRZVEylVeDXVZkyuDtElxXXVAqBHdY",
  authDomain: "realtor-clone-react-fffff.firebaseapp.com",
  projectId: "realtor-clone-react-fffff",
  storageBucket: "realtor-clone-react-fffff.appspot.com",
  messagingSenderId: "220781013068",
  appId: "1:220781013068:web:827dc8c23cccb5707b6ce9",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
