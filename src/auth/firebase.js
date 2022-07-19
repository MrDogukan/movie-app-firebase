import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al

const firebaseConfig = {
  apiKey: "AIzaSyA2Fh6RKFfvrI2t2-aWqTeJbr8J0uIO2WA",
  authDomain: "movie-app-250a8.firebaseapp.com",
  projectId: "movie-app-250a8",
  storageBucket: "movie-app-250a8.appspot.com",
  messagingSenderId: "536644250647",
  appId: "1:536644250647:web:30c019ff08082397a4c052",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
