// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore   } from "firebase/firestore"





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDndjn9u5LsNAS7_nctTFmuDCEp7jv2hbA",
  authDomain: "fraganc-store-react43565.firebaseapp.com",
  projectId: "fraganc-store-react43565",
  storageBucket: "fraganc-store-react43565.appspot.com",
  messagingSenderId: "318685534366",
  appId: "1:318685534366:web:28e546377b4d530cf4c38f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)