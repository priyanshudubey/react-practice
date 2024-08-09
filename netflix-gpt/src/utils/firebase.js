// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4kiaQPSqCt_frVrSDSNyhdbZmG6FA8GE",
  authDomain: "netflix-gpt-47607.firebaseapp.com",
  projectId: "netflix-gpt-47607",
  storageBucket: "netflix-gpt-47607.appspot.com",
  messagingSenderId: "913655040283",
  appId: "1:913655040283:web:0b17799a92400afb0d6bbe",
  measurementId: "G-6BENZVJSW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
