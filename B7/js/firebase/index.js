const firebaseConfig = {
  apiKey: "AIzaSyAeRQrlGpQWT4ZuclaZOL0kMb89YN21MWE",
  authDomain: "chat-app-1d487.firebaseapp.com",
  projectId: "chat-app-1d487",
  storageBucket: "chat-app-1d487.appspot.com",
  messagingSenderId: "736888500099",
  appId: "1:736888500099:web:bb6f56b270c8947198d0b6",
  measurementId: "G-0E44WF51PE" ,
};

const appFb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
