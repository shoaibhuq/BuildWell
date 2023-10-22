// Import the functions you need from the SDKs you need
import * as firebase from "firebase"; 
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup #available-libraries

// Your web app's Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyA1uP7GYZ7GQjLqmEgy1416yGhBrJ1vXZg", 
    authDomain: "buildwell-362bf.firebaseapp.com", 
    projectId: "buildwell-362bf",
    storageBucket: "buildwell-362bf.appspot.com", 
    messagingSenderId: "266859321423", 
    appId: "1:266059321423:",
    web: "f44e81fa32c189bbb19a3a"
  };
  // Initialize Firebase
  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const auth = firebase.auth();

  export { auth };