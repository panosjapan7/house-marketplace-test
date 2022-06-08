import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUvGehrJl_Y52im9jcbl43ds1I2RPXBuk",
  authDomain: "house-marketplace-app-2616a.firebaseapp.com",
  projectId: "house-marketplace-app-2616a",
  storageBucket: "house-marketplace-app-2616a.appspot.com",
  messagingSenderId: "757217660080",
  appId: "1:757217660080:web:c65a450458c42656c8ff75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
