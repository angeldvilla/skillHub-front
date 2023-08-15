import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvksPhNfQCNUfd__8MlKseKjmvF8p5pVM",
  authDomain: "skillhudd.firebaseapp.com",
  projectId: "skillhudd",
  storageBucket: "skillhudd.appspot.com",
  messagingSenderId: "370183322312",
  appId: "1:370183322312:web:c882da73a9c7a8fac903fd",
  measurementId: "G-Z344SKDDB0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
