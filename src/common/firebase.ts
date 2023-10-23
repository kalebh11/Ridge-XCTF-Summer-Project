import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0ao2imRtQ-hi2kc6XsugIGfc1aXTA7g0",
    authDomain: "track-app-49793.firebaseapp.com",
    projectId: "track-app-49793",
    storageBucket: "track-app-49793.appspot.com",
    messagingSenderId: "713239875011",
    appId: "1:713239875011:web:04f51cf11b3b2eafff4176",
    measurementId: "G-YT820FDWF5",
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);