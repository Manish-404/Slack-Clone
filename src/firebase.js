import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAmg1NlbG1vba26lKdhFKv9IvZ97hOVN2g",
    authDomain: "slack-clone-6c68a.firebaseapp.com",
    projectId: "slack-clone-6c68a",
    storageBucket: "slack-clone-6c68a.appspot.com",
    messagingSenderId: "402779647168",
    appId: "1:402779647168:web:1941a01fc55febeb59d125"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;

