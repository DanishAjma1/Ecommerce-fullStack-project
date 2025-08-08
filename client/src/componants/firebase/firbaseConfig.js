import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFYdd5tvuJgZ18ERWd1CJma3Woisz411c",
  authDomain: "e-commerce-web-4d688.firebaseapp.com",
  projectId: "e-commerce-web-4d688",
  storageBucket: "e-commerce-web-4d688.firebasestorage.app",
  messagingSenderId: "712465659071",
  appId: "1:712465659071:web:6fdc95c5f2ad3237c6820a",
  measurementId: "G-B9EH1YX8G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
