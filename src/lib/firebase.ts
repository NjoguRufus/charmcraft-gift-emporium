import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJvCWeHgm5lKwi0tc6lrCGto6yp9vPsH0",
  authDomain: "charmcraft-5b8b1.firebaseapp.com",
  projectId: "charmcraft-5b8b1",
  storageBucket: "charmcraft-5b8b1.firebasestorage.app",
  messagingSenderId: "518500322999",
  appId: "1:518500322999:web:eec7e1dcf2b975b6bf4732",
  measurementId: "G-R72W712LSN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const analytics = getAnalytics(app); 