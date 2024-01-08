
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBv4F65TjY9CTTkrf-whXN24Cxeh_ttxXk",
  authDomain: "fire-base-withwifi.firebaseapp.com",
  projectId: "fire-base-withwifi",
  storageBucket: "fire-base-withwifi.appspot.com",
  messagingSenderId: "745396742149",
  appId: "1:745396742149:web:812f65cc91ff268ff5546c",
  measurementId: "G-QSKHHJB8DV"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
