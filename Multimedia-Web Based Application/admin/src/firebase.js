// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "netflix-cab40.firebaseapp.com",
  projectId: "netflix-cab40",
  storageBucket: "netflix-cab40.appspot.com",
  messagingSenderId: "6052566952",
  appId: "1:6052566952:web:25de549a966f727ebeaf9d",
  measurementId: "G-40EL0016SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);

