import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBtUNZb7MW0FhPk8fM6JDHUgyfLLzn8Nf8",
    authDomain: "clone-6b8c9.firebaseapp.com",
    projectId: "clone-6b8c9",
    storageBucket: "clone-6b8c9.appspot.com",
    messagingSenderId: "756683359600",
    appId: "1:756683359600:web:9f64a5d80f868123f13bb5",
    measurementId: "G-Y25BRXGPQ9"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db,auth};