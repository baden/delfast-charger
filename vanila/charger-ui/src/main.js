import './styles/style.css'
// import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './components/counter.js'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"

const id = window.location.hash.slice(1);
console.log("id=", id);

window.onhashchange = function() {
  window.location.reload();
}


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
// console.log("firebase provider=", provider);

onAuthStateChanged(auth, (user) => {
  console.log("user=", user);
  if (user) {
    const setupSignOut = (element) => {
      element.addEventListener('click', () => {
        console.log("logout clicked");
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log("signout successful");
          //window.location.reload();
        }).catch((error) => {
          // An error happened.
          console.log("signout error=", error);
        });
      });
    }
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("uid=", uid);
    document.querySelector('#app').innerHTML = `
      <div>
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
        <h1>Hello, ${user.displayName}!</h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
        <div class="card">
          <button id="logout" type="button">Logout</button>
        </div>
      </div>
    `;
    setupSignOut(document.querySelector('#logout'));
    setupCounter(document.querySelector('#counter'));

    // ...
  } else {
    const setupGoogleAuth = (element) => {
      element.addEventListener('click', () => {
        console.log("login clicked");
        // signInWithGoogle();
        signInWithPopup(auth, googleProvider).then((result) => {
          console.log(  "result=", result);
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }
        );
      })
    }
  
    // User is signed out
    // ...
    document.querySelector('#app').innerHTML = `
      <div>
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
        <h1>Wellcome to Charger!</h1>
        <div class="card">
          You must be logged in to use this app.
          <button id="login" type="button">Login with Google</button>
        </div>
      </div>
    `;
    setupGoogleAuth(document.querySelector('#login'))
  }
});

const document_root = document.getElementById('app');

if(!id) {
  document_root.innerHTML = `
    <div>
      Error. Wrong URL. Rescan the QR code.
    </div>
 `;
}

