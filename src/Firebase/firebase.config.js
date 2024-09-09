// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVXPktwbZ_dZOzrcEne2IyM3rYB5vAxQc",
  authDomain: "creative-event-solutions-react.firebaseapp.com",
  projectId: "creative-event-solutions-react",
  storageBucket: "creative-event-solutions-react.appspot.com",
  messagingSenderId: "1070385547957",
  appId: "1:1070385547957:web:153aa6ae9d1fbada944cfc",
  measurementId: "G-ZTM7CEBWJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;