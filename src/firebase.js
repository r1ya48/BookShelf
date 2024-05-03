// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBInVUL4upytrofQRr34jH2DVYbGb6a8Aw",
  authDomain: "bookstore-c6892.firebaseapp.com",
  projectId: "bookstore-c6892",
  storageBucket: "bookstore-c6892.appspot.com",
  messagingSenderId: "223787271762",
  appId: "1:223787271762:web:f8f662f7b626578c85c18b",
  measurementId: "G-ML320GVBVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app