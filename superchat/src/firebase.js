
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUFDIWlQnQOd2RqR0639TVhvWp1AaK4o8",
    authDomain: "super-chat-48a7b.firebaseapp.com",
    databaseURL: "https://super-chat-48a7b.firebaseio.com",
    projectId: "super-chat-48a7b",
    storageBucket: "super-chat-48a7b.appspot.com",
    messagingSenderId: "261062728936",
    appId: "1:261062728936:web:a002afdb01583fa340bd5d",
    measurementId: "G-49SSWS5C17"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;