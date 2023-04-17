import charger from '../hooks/charger'
import {
  charger_status_initial,
  charger_status_error_timeout,
  charger_status_init,
  charger_status_ready,
  charger_status_busy,
  charger_status_charging,
  charger_status_unknown,
} from '../components/charger'

const chargerPage = (element, id, user, auth, mqttClient) => {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  const uid = user.uid;
  console.log("---- uid=", uid);
  console.log("charger=", charger);

  let initial_timeout = setTimeout(() => {
    charger_status_error_timeout(element, id, user, auth, mqttClient);
  }, 15000);

  mqttClient.onMessageArrived = (data) => {
    console.log("onMessageArrived", data);
    clearTimeout(initial_timeout);
    switch(data.status) {
      case "init":
        charger_status_init(element, id, user, auth, mqttClient);
        break;
      case "ready":
        charger_status_ready(element, id, user, auth, mqttClient);
        break;
      case "busy":
        charger_status_busy(element, id, user, auth, mqttClient, data);
        break;
      case "charging":
        charger_status_charging(element, id, user, auth, mqttClient, data);
        break;
      default:
        charger_status_unknown(element, id, user, auth, mqttClient);
    }
  }

  charger_status_initial(element, id, user, auth, mqttClient);

}

export default chargerPage;
