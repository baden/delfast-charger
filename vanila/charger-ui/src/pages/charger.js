import viteLogo from '/vite.svg'
import logoutElement from '../components/logout'
import balanceElement from '../components/balance'
import chargerElement from '../components/charger'
import charger from '../hooks/charger'


const chargerPage = (element, user, auth, mqttClient) => {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  const uid = user.uid;
  console.log("uid=", uid);
  console.log("charger=", charger);
  
  element.innerHTML = `
  <div class="charger">
      <div id="logout"></div>
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      <h2>Вітаю, ${user.displayName}!</h2>
      <div id="balance">Loading...</div>
      <div id="charger_control">Loading...</div>
  </div>
  `;
  logoutElement(document.querySelector('#logout'), auth);
  balanceElement(document.querySelector('#balance'), auth, mqttClient);
  chargerElement(document.querySelector('#charger_control'), auth, mqttClient);

}

export default chargerPage;
