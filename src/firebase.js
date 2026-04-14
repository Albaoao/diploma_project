import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCnVN3xpwERgPODX1dDG8CWdKsfSKpaEUo",
    authDomain: "bloomy-422bb.firebaseapp.com",
    projectId: "bloomy-422bb",
    storageBucket: "bloomy-422bb.firebasestorage.app",
    messagingSenderId: "164708785724",
    appId: "1:164708785724:web:4cd79be3811e1f96752d39",
    measurementId: "G-NZSB43563G"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
