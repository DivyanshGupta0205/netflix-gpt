// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDopZ3LwUSKh69rL3Lf-L0AFysDZ9Tm99U",
  authDomain: "netflixgpt-4748d.firebaseapp.com",
  projectId: "netflixgpt-4748d",
  storageBucket: "netflixgpt-4748d.appspot.com",
  messagingSenderId: "148271150631",
  appId: "1:148271150631:web:4c0e82f020544544028002",
  measurementId: "G-X0TL47HY9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);