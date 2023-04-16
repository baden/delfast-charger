import '../styles/charger.css'
import charger from '../hooks/charger'
import giphyImage from '/giphy.gif'

const charger_status_initial = (element) => {
  element.innerHTML = `
    <div>
      Очікую відповідь від станції заряджання...
    </div>
    <div>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  `
}

const charger_status_error_timeout = (element) => {
  element.innerHTML = `
    <div>
      Cтанція заряджання не відповідає. Зверніться до технічної підтримки.
      Або скористйтесь іншою станцією заряджання.
    </div>
    <div>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  `
}

const charger_status_init = (element) => {
  element.innerHTML = `
    <div>
      Станція заряджання завантажується...
    </div>
    <div>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  `
}

const charger_status_charging = (element) => {
  element.innerHTML = `
    <img src="${giphyImage}" class="giphy" alt="Giphy logo" />
    <div>
      Триває заряджання...
    </div>
  `
}

const charger_status_ready = (element) => {
  element.innerHTML = `
      <button id="start_charging">Розпочати роботу з зарядною станцією</button>
  ` 
}

const charger_status_unknown = (element) => {
  element.innerHTML = `
    Стан станції заряджання невідомий. Зверніться до технічної підтримки.
  ` 
}


const chargerElement = (element, auth, mqttClient) => {

  let initial_timeout = setTimeout(() => {
    charger_status_error_timeout(element);
  }, 15000);

  console.log("charger=", charger);

  charger_status_initial(element);

  mqttClient.onMessageArrived = (data) => {
    console.log("onMessageArrived", data);
    clearTimeout(initial_timeout);
    switch(data.status) {
      case "init":
        charger_status_init(element);
        break;
      case "ready":
        charger_status_ready(element);
        break;
      case "charging":
        charger_status_charging(element);
        break;
      default:
        charger_status_unknown(element);
    }
  }
  // <div>
  // <button id="start_charging" disabled>Розпочати роботу з зарядною станцією</button>
  // </div>

}

export default chargerElement;