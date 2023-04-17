// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0UMDhVLTX_lhPBdqU3BnHSg6z126F-_o",
  authDomain: "delfast-chargger-auth.firebaseapp.com",
  projectId: "delfast-chargger-auth",
  storageBucket: "delfast-chargger-auth.appspot.com",
  messagingSenderId: "146029576932",
  appId: "1:146029576932:web:ed75929b80ef941c11e2f1"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const googleProvider = new GoogleAuthProvider();

class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    this.googleProvider = new GoogleAuthProvider();
  }

  signInWithGoogle() {
    return signInWithPopup(this.auth, this.googleProvider);
  }

  signOut() {
    return this.auth.signOut();
  }

  onAuthStateChanged(callback) {
    return this.auth.onAuthStateChanged(callback);
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

const firebase = new Firebase();

export default firebase;