import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyDTnX-NSLjtoprXpf_K8ctKkByrcRYElKY",
  authDomain: "vestore-credit.firebaseapp.com",
  projectId: "vestore-credit",
  storageBucket: "vestore-credit.appspot.com",
  messagingSenderId: "264214933460",
  appId: "1:264214933460:web:b8aa23dcaef0c3e314f041"
};

firebase.initializeApp(firebaseConfig);
export default firebase;