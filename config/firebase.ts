// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyAGY9-EvE9bBvdrJkQffbtjcH0iw6lZjFQ",
  authDomain: "expense-tracker-a00d0.firebaseapp.com",
  projectId: "expense-tracker-a00d0",
  storageBucket: "expense-tracker-a00d0.firebasestorage.app",
  messagingSenderId: "735550608887",
  appId: "1:735550608887:web:5426cf919554d469844af2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

// db
export const firestore = getFirestore(app);