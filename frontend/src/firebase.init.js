// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAar6_js-y3oUO_hbV2ZSYQVkv241dnsP0",
  authDomain: "food-deleviry-app.firebaseapp.com",
  projectId: "food-deleviry-app",
  storageBucket: "food-deleviry-app.appspot.com",
  messagingSenderId: "376308438017",
  appId: "1:376308438017:web:3842aa0b375c4670471c00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
