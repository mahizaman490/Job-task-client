// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA46K3O9_gGIJL65s1YPBD4iKuDgs2DTiM",
  authDomain: "job-task-ec7d9.firebaseapp.com",
  projectId: "job-task-ec7d9",
  storageBucket: "job-task-ec7d9.appspot.com",
  messagingSenderId: "855771300496",
  appId: "1:855771300496:web:57212a63fff6af3a4ece15",
  measurementId: "G-XG2VCVCTKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;