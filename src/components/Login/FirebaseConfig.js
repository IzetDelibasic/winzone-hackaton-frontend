import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOXIF-wmb5B9ZVCO-Bvqis6rYwlFQhYXE",
  authDomain: "winzone-84a23.firebaseapp.com",
  projectId: "winzone-84a23",
  storageBucket: "winzone-84a23.appspot.com",
  messagingSenderId: "816871522872",
  appId: "1:816871522872:web:7f0295f060ed1af60edccd"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
