import firebase from "firebase/app";
import "firebase/firestore";

import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "@env"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID || "cogny-shoes",
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
