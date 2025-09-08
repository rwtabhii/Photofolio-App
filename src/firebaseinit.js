// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO-2HdMeCBe9t8YNnbtIyZsfdJK2AhWJM",
  authDomain: "photofolio-app-12406.firebaseapp.com",
  projectId: "photofolio-app-12406",
  storageBucket: "photofolio-app-12406.firebasestorage.app",
  messagingSenderId: "60357879633",
  appId: "1:60357879633:web:b19f563869419ab65d5570"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// get Database as a service form the firebase firestore DB 
export const db = getFirestore(app);