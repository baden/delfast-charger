import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, } from "firebase/auth"
import { getMessaging, getToken, onMessage} from "firebase/messaging"
import firebaseConfig from './firebase-config.js'

// Your web app's Firebase configuration


const app = initializeApp(firebaseConfig);
// console.log("firebase app=", app);
const auth = getAuth(app);

const messaging = getMessaging(app);
// console.log("firebase messaging=", messaging);
onMessage(messaging, (payload) => {
  console.log('>>>> Message received. ', payload);
  // ...
});

// Add the public key generated from the console here.

// console.log("firebase auth=", auth);
const googleProvider = new GoogleAuthProvider();
// console.log("firebase provider=", googleProvider);

export default class Auth {
    constructor() {
        this.auth = auth;
        this.googleProvider = googleProvider;
        this.token = null;
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

    requestPermission() {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
                // TODO(developer): Retrieve a registration token for use with FCM.
                // ...

                getToken(messaging, {vapidKey: "BAk7JkHVy1Kwi5p_a-bYZCWE6YQYfJKBEpoYJJBTa5QAw4lxfbnLYkNRZMagQOMqukAkmEumO8-VR9sNGOAmtZs"})
                .then((currentToken) => {
                    if (currentToken) {
                        console.log("currentToken=", currentToken);
                        // Send the token to your server and update the UI if necessary
                        // ...
                        this.token = currentToken;
                    } else {
                        // Show permission request UI
                        console.error("No registration token available. Request permission to generate one.");
                        // ...
                    }
                })
                .catch((err) => {
                    console.error("An error occurred while retrieving token. ", err);
                });
            

            } else {
                console.log('Unable to get permission to notify.');
                // alert("Unable to get permission to notify. Please allow notifications in your browser settings.");
            }
        });
    }

}

