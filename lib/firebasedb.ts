// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhIiacZT2CWFA7Tjoj_xd6xiQXplGH1LQ",
  authDomain: "ethio-exams-store.firebaseapp.com",
  projectId: "ethio-exams-store",
  storageBucket: "ethio-exams-store.appspot.com",
  messagingSenderId: "947394994996",
  appId: "1:947394994996:web:aff72252d0881e76e0bb61",
  measurementId: "G-ED38M4QLSL"
};



const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;