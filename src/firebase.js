import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDTnX-NSLjtoprXpf_K8ctKkByrcRYElKY",
  authDomain: "vestore-credit.firebaseapp.com",
  projectId: "vestore-credit",
  databaseURL: "https://vestore-credit.firebaseio.com/",
  storageBucket: "vestore-credit.appspot.com",
  messagingSenderId: "264214933460",
  appId: "1:264214933460:web:b8aa23dcaef0c3e314f041",
});

const db = getFirestore();
const storage = getStorage(firebaseApp);
export { db, firebaseApp, storage };
