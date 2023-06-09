import './styles/style.css'
// import { setupCounter } from './components/counter.js'
import Auth from './auth.js'
import MQTTClient from '../MQTTClient'
import id from './id.js'
import page404 from './components/404'
import loginPage from './components/login'
import chargerPage from './pages/charger'
import {page_lost_connection} from './components/errors'

const document_root = document.getElementById('app');

const setupApp = (element) => {
  console.log("App:element", element);

  if(!id) {
    return page404(element);
  }
  const auth = new Auth();
  auth.requestPermission();
  // auth.getToken();
  
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
    console.log("onMQTTLost. TODO: reconnect");
    return page_lost_connection(element);
  }

  auth.onAuthStateChanged((user) => {
    console.log("user=", user);
    if (user) {
      mqttClient.id = "charger_" + id + "_" + user.uid;
      mqttClient.connect();

      return chargerPage(element, id, user, auth, mqttClient);

      // ...
    } else {
      mqttClient.disconnect();
      return loginPage(element, auth);
    }
  });

}

setupApp(document_root);