// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-db-ygKTT2O365b2CNOnZXoWpQlu7RuU",
  authDomain: "netflix-6137c.firebaseapp.com",
  projectId: "netflix-6137c",
  storageBucket: "netflix-6137c.appspot.com",
  messagingSenderId: "484619654096",
  appId: "1:484619654096:web:7e5b9f7d62b83a24891fd5",
  measurementId: "G-EDSQQMMG22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);