import { initializeApp } from "firebase/app";
import { getFirestore}  from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBkN6oyrGsRfXcgx5lNocFGbtGL8TLsQY",
  authDomain: "sportnew-react.firebaseapp.com",
  projectId: "sportnew-react",
  storageBucket: "sportnew-react.appspot.com",
  messagingSenderId: "776591720375",
  appId: "1:776591720375:web:92c6e78fe6eec9ecc17232"
};

const app = initializeApp(firebaseConfig);
export const baseDatos = getFirestore(app);