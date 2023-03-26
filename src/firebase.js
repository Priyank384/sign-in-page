import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDFkqbnLGRHVSgX-KQFj0F4CSWoS7uhrL4",
  authDomain: "email-auth-7f43e.firebaseapp.com",
  projectId: "email-auth-7f43e",
  storageBucket: "email-auth-7f43e.appspot.com",
  messagingSenderId: "702067166139",
  appId: "1:702067166139:web:e5dfa58d29c5642d45d29e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app; 