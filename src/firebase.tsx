// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdDn6T7tnoJo8SaOBtNHfoIaTwukE_R6k",
  authDomain: "ng-website-8b830.firebaseapp.com",
  projectId: "ng-website-8b830",
  storageBucket: "ng-website-8b830.appspot.com",
  messagingSenderId: "78200845306",
  appId: "1:78200845306:web:711dd1612e8fe190feea43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage, ref, getDownloadURL };
