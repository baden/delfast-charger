import '../styles/charger.css'
// import charger from '../hooks/charger'
import giphyImage from '/giphy.gif'
import stopImage from '/stop.svg'
import logoutElement from '../components/logout'
import balanceElement from '../components/balance'
import viteLogo from '/vite.svg'
import doorOpenedImage from '/door_opened.svg'
import doorClosedImage from '/door_closed.svg'

const loader = `
  <div>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
`;

const bigWelcomePage = (element, id, user, auth, mqttClient, text) => {
  element.innerHTML = `
    <div class="charger">
        <div class="logout top-right-a"></div>
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
        <h2>Вітаю, ${user.displayName}!</h2>
        <div id="balance">Loading...</div>
        ${text}        
      </div>
  `

  logoutElement(document.querySelector('.logout'), auth);
  balanceElement(document.querySelector('#balance'), auth, mqttClient);
  // chargerElement(document.querySelector('#charger_control'), auth, mqttClient);
}

const workingPage = (element, id, user, auth, mqttClient, text) => {
  element.innerHTML = `
    <div class="header">
      <img src="${viteLogo}" alt="Vite logo" />
      <div class="name">${user.displayName}!</div>
      <div class="balance">$50</div>
      <div class="logout p-6"></div>
    </div>
    <div class="charger">
        ${text}
      </div>
  `

  logoutElement(document.querySelector('.logout'), auth);
  // balanceElement(document.querySelector('#balance'), auth, mqttClient);
  // chargerElement(document.querySelector('#charger_control'), auth, mqttClient);
}


export const charger_status_initial = (element, id, user, auth, mqttClient) => {
  bigWelcomePage(element, id, user, auth, mqttClient,
    `<div>Очікую відповідь від станції заряджання...</div>${loader}`
  );
}

export const charger_status_error_timeout = (element, id, user, auth, mqttClient) => {
  bigWelcomePage(element, id, user, auth, mqttClient,
    "Станція заряджання не відповідає. Зверніться до технічної підтримки. Або скористйтесь іншою станцією заряджання."
  );
}

export const charger_status_init = (element, id, user, auth, mqttClient) => {
  bigWelcomePage(element, id, user, auth, mqttClient, "Станція заряджання завантажується...");
}

export const charger_status_ready = (element, id, user, auth, mqttClient) => {
  const connectUser = (event) => {
    console.log("User connected to charger");
    mqttClient.publish(`charger/${id}/commands`, `connect:${user.uid}`);
  }
  bigWelcomePage(element, id, user, auth, mqttClient, `
    <div>Станція заряджання вільна.</div>
    <button id="start_charging">Розпочати роботу з зарядною станцією</button>
  `);
  element.querySelector('#start_charging').addEventListener('click', connectUser);
}


export const charger_status_busy = (element, id, user, auth, mqttClient, data) => {
  // const connectUser = (event) => {
  //   console.log("User connected to charger");
  //   mqttClient.publish(`charger/${id}/commands`, `connect:${user.uid}`);
  // }
  const stopCharging = (event) => {
    console.log("Stop charging");
    mqttClient.publish(`charger/${id}/commands`, `stop:${user.uid}`);
  };
  // PZEM-004T
  const compact_measures = (data) => {
    const doorIcon = (data?.doors_opened)
      ? `<img src="${doorOpenedImage}" class="small" alt="Door opened" />`
      : `<img src="${doorClosedImage}" class="small" alt="Door closed" />`;
    return `
      <span>U:<b>${(data.voltage||0.0).toFixed(0)}</b>V</span>
      <span>I:<b>${((data.current||0.0)/1000).toFixed(3)}</b>A</span>
      <span>P:<b>${(data.power||0.0).toFixed(0)}</b>W</span>
      <span>E:<b>${(data.energy||0.0).toFixed(0)}</b>Wh</span>
      <span>${doorIcon}</span>
    `;
  };
  workingPage(element, id, user, auth, mqttClient, `
    <div class="compact_measures">${compact_measures(data)}</div>
    <h3>Початок роботи.</h3>
    <ul>
      <li>Відкрийте дверцята</li>
      <li>Підʼєднайте розʼєм зарядки.</li>
      <li>Переконайтесь шо розпочалось заряджання.</li>
      <li>Закрийте дверцята.</li>
      <li>Почекайте, поки зарядка завершиться.</li>
    </ul>
    <div>Ви можете припинити заряджання у будь яку мить.</div>
    <button id="stop_charging">Припинити заряджання</button>
  `);
  element.querySelector('#stop_charging').addEventListener('click', stopCharging);
  // element.querySelector('#start_charging').addEventListener('click', connectUser);
}

export const charger_status_charging = (element, id, user, auth, mqttClient, data) => {
  const stopCharging = (event) => {
    console.log("User connected to charger");
    mqttClient.publish(`charger/${id}/commands`, `stop:${user.uid}`);
  };

  workingPage(element, id, user, auth, mqttClient, `
    <div>
      <img src="${giphyImage}" class="giphy" alt="Giphy logo" />
      <div>Триває заряджання...</div>
    </div>
    <div>
      <div><span>Напруга: </span><span id="voltage">${data.voltage.toFixed(0)}</span> <span>В</span></div>
      <div><span>Струм: </span><span id="current">${data.current?.toFixed(3)}</span> <span>A</span></div>
      <div><span>Потужність: </span><span id="power">${data.power?.toFixed(1)}</span> <span>W</span></div>
      <div><span>pf: </span><span id="pf">${data.pf?.toFixed(2)}</span> <span>%</span></div>
      <div><span>Спожито: </span><span id="energy">${data.energy?.toFixed(0)}</span> <span>Wh</span></div>
    </div>
    <div>
      <div><span>Час заряджання: </span><span id="time">${((data.time||0.0)/60.0).toFixed(0)}</span> <span>хв</span></div>
    </div>
    <div>
      <button id="stop_charging">
        <img src="${stopImage}" class="stop" alt="Stop logo" />
        Припинити заряджання
      </button>
    </div>
  `);

  element.querySelector('#stop_charging').addEventListener('click', stopCharging);
}


export const charger_status_done = (element, id, user, auth, mqttClient, data) => {
  // const stopCharging = (event) => {
  //   console.log("User connected to charger");
  //   mqttClient.publish(`charger/${id}/commands`, `stop:${user.uid}`);
  // };

  workingPage(element, id, user, auth, mqttClient, `
    <div>
      <h2>Заряджання завершено.</h2>
    </div>
    <div>
      <div><span>Спожито: </span><span id="energy">${data.energy?.toFixed(0)}</span> <span>Wh</span></div>
    </div>
    <div>
      <div><span>Час заряджання: </span><span id="time">${((data.time||0.0)/60.0).toFixed(0)}</span> <span>хв</span></div>
    </div>
    <div>
      Закрийте дверцята.
    </div>
  `);

  element.querySelector('#stop_charging').addEventListener('click', stopCharging);
}


export const charger_status_unknown = (element, user, auth, mqttClient) => {
  element.innerHTML = `
    Стан станції заряджання невідомий. Зверніться до технічної підтримки.
  ` 
}


// const chargerElement = (element, auth, mqttClient) => {

//   charger_status_initial(element);

//   // <div>
//   // <button id="start_charging" disabled>Розпочати роботу з зарядною станцією</button>
//   // </div>

// }

const chargerElement = {
  charger_status_initial,
  charger_status_error_timeout,
  charger_status_init,
  charger_status_charging,
  charger_status_ready,
  charger_status_unknown,
};

export default chargerElement;