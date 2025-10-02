// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Added for Realtime Database access
import { getAuth } from "firebase/auth"; // Added for Authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsCJvG5zAbKUfFAGvKaD8BhQxTt_Qe-TI",
  authDomain: "potfoliov2.firebaseapp.com",
  databaseURL: "https://potfoliov2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "potfoliov2",
  storageBucket: "potfoliov2.firebasestorage.app",
  messagingSenderId: "293326108703",
  appId: "1:293326108703:web:ce9123944396f95b0c7d2a",
  measurementId: "G-FDZBN77ZJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only on the client side (to avoid SSR issues)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Realtime Database
const database = getDatabase(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, analytics, database, auth };