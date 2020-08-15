import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "reactpizza.firebaseapp.com",
  databaseURL: "https://reactpizza.firebaseio.com",
  projectId: "reactpizza",
  storageBucket: "reactpizza.appspot.com",
  messagingSenderId: "1088082537524",
  appId: "1:1088082537524:web:a71c476a8a796e49c92e61"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db };
