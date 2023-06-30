import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASW-jb499A001Hzl7ibhYp4UvQLxJt-Eo",
  authDomain: "externatic-81b31.firebaseapp.com",
  projectId: "externatic-81b31",
  storageBucket: "externatic-81b31.appspot.com",
  messagingSenderId: "637668167630",
  appId: "1:637668167630:web:73e276d71ce6695210659f",
  // measurementId: "G-4HYNS5T6LB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();