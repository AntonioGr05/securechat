import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBS7vDfWln_FS7DILZego9JEfyIAJtlK1g",
    authDomain: "chat-e3d22.firebaseapp.com",
    projectId: "chat-e3d22",
    storageBucket: "chat-e3d22.appspot.com",
    messagingSenderId: "69719031644",
    appId: "1:69719031644:web:75b3ea72abdd720f644b99",
    measurementId: "G-V0338PXRMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

