import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-UtZxW7r4U20cd95zGOe9VjUdkFJAKdY",
    authDomain: "crwn-db-a2a55.firebaseapp.com",
    projectId: "crwn-db-a2a55",
    storageBucket: "crwn-db-a2a55.appspot.com",
    messagingSenderId: "892648465929",
    appId: "1:892648465929:web:db717ca66fc2a22b8abad8",
    measurementId: "G-NY1LWR0KEM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;