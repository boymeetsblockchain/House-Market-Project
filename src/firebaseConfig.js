import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA5nwcrJYCjYT2LohzlhHqXlwt1ig2azEA",
  authDomain: "house-market-e9b25.firebaseapp.com",
  projectId: "house-market-e9b25",
  storageBucket: "house-market-e9b25.appspot.com",
  messagingSenderId: "631402215924",
  appId: "1:631402215924:web:9f012ee4bcee81a642a1a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore() 