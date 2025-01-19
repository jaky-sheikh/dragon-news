// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc3C51s6gT2TV_bED8_E1xj_L19nbQpGI",
    authDomain: "dragon-news-auth-6a8c7.firebaseapp.com",
    projectId: "dragon-news-auth-6a8c7",
    storageBucket: "dragon-news-auth-6a8c7.firebasestorage.app",
    messagingSenderId: "630597009409",
    appId: "1:630597009409:web:3d0d0a1351a8b6268a4000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;