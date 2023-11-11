// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup #available-libraries
// Your web app's Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyA1uP7GYZ7GQjLqmEgyi416yGhBrJlvXZg",
    authDomain: "buildwell-362bf.firebaseapp.com",
    projectId: "buildwell-362bf",
    storageBucket: "buildwell-362bf.appspot.com",
    messagingSenderId: "266059321423",
    appId: "1:266059321423:web:f44e81fa32c109bbb19a3a"
  };
  // Initialize Firebase
 
  const app = initializeApp(firebaseConfig);
  
    const auth = getAuth(app);

  export { auth, app };