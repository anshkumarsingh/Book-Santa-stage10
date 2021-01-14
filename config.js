import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAED3WYtvLwkhxFurZGK9b4uzXniIWepx4",
  authDomain: "book-santa-app-3965e.firebaseapp.com",
  databaseURL: "https://book-santa-app-3965e-default-rtdb.firebaseio.com",
  projectId: "book-santa-app-3965e",
  storageBucket: "book-santa-app-3965e.appspot.com",
  messagingSenderId: "980553860553",
  appId: "1:980553860553:web:2e0018f88ac004d9e39418"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
