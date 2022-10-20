// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvagAoTyvm1F5knurKWLb-kgaIsQt5RPc",
  authDomain: "dragon-news-client-2c07f.firebaseapp.com",
  projectId: "dragon-news-client-2c07f",
  storageBucket: "dragon-news-client-2c07f.appspot.com",
  messagingSenderId: "249051182719",
  appId: "1:249051182719:web:15d94df43c2d63e079b14a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;