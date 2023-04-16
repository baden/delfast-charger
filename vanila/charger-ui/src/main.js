import './styles/style.css'
import viteLogo from '/vite.svg'
import { setupCounter } from './components/counter.js'
import Auth from './auth.js'
import MQTTClient from '../MQTTClient'

const document_root = document.getElementById('app');

const id = window.location.hash.slice(1);
console.log("id=", id);
window.onhashchange = function() {
  window.location.reload();
}


const setupApp = (element) => {
  console.log("App:element", element);

  if(!id) {
    element.innerHTML = `
      <div>
        Error. Wrong URL. Rescan the QR code.
      </div>
    `;
    return;
  }
  const auth = new Auth();
  
  const mqttClient = new MQTTClient("charger_" + id);
  mqttClient.onMQTTConnect = () => {
    console.log("onMQTTConnect");
    //mqttClient.subscribe("charger/" + id + "/#");
    mqttClient.subscribe("charger/" + id + "/status");
    mqttClient.subscribe("charger/" + id + "/data");
    const user = auth.getCurrentUser();
    if(user) {
      mqttClient.publish("charger/" + id + "/commands", `hello:${user.uid}`);
    }
  } 
  mqttClient.onMQTTLost = () => {
    console.log("onMQTTLost");
  }
  mqttClient.onMessageArrived = (data) => {
    console.log("onMessageArrived", data);
  }
  

  auth.onAuthStateChanged((user) => {
    console.log("user=", user);
    if (user) {
      mqttClient.connect();
      // if(mqttClient.isConnected()) {
      //   mqttClient.publish("charger/" + id + "/commands", user.uid + ":hello");
      // }

      const setupSignOut = (element) => {
        element.addEventListener('click', () => {
          console.log("logout clicked");
          auth.signOut().then(() => {
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
      element.innerHTML = `
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
      mqttClient.disconnect();
      const setupGoogleAuth = (element) => {
        element.addEventListener('click', () => {
          console.log("login clicked");
          // signInWithGoogle();
          auth.signInWithGoogle().then((result) => {
            console.log(  "result=", result);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            // ...
          }
          );
        })
      }
    
      // User is signed out
      // ...
      element.innerHTML = `
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

}

setupApp(document_root);