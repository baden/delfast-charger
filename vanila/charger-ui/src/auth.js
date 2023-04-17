import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0UMDhVLTX_lhPBdqU3BnHSg6z126F-_o",
    authDomain: "delfast-chargger-auth.firebaseapp.com",
    projectId: "delfast-chargger-auth",
    storageBucket: "delfast-chargger-auth.appspot.com",
    messagingSenderId: "146029576932",
    appId: "1:146029576932:web:ed75929b80ef941c11e2f1"
  };

const app = initializeApp(firebaseConfig);
// console.log("firebase app=", app);
const auth = getAuth(app);
// console.log("firebase auth=", auth);
const googleProvider = new GoogleAuthProvider();
// console.log("firebase provider=", googleProvider);

export default class Auth {
    constructor() {
        this.auth = auth;
        this.googleProvider = googleProvider;
    }

    signInWithGoogle() {
        return signInWithPopup(this.auth, this.googleProvider);
    }

    signOut() {
        return this.auth.signOut();
    }

    onAuthStateChanged(callback) {
        return onAuthStateChanged(this.auth, callback);
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    getCurrentUser() {
        return this.auth.currentUser;
        // return null;
    }
}

