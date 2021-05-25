// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB24KXmnqKQ6P-21dW-IsZ_DZUd-JiLqOQ",
  authDomain: "chitstorm-d6bd1.firebaseapp.com",
  projectId: "chitstorm-d6bd1",
  storageBucket: "chitstorm-d6bd1.appspot.com",
  messagingSenderId: "886497070978",
  appId: "1:886497070978:web:9e2e6a1253c4dca6fc099b",
  measurementId: "G-L63V9EF9RB"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;