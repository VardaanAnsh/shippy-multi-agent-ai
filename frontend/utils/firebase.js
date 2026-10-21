import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shippyai.firebaseapp.com",
  projectId: "shippyai",
  storageBucket: "shippyai.firebasestorage.app",
  messagingSenderId: "885095140282",
  appId: "1:885095140282:web:5f71c9cf3f19fbb3baeb83"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth , googleProvider };