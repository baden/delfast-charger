import viteLogo from '/vite.svg'

export const maintenancePage = (element, event, message) => {
  let event_text = "Інше";
  if(event === "fwupdate") {
    event_text = "Оновлення ПЗ";
  }
  element.innerHTML = `
    <div class="charger">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      <h2>Вибачте, але зарядна станція на технічному обслуговані.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
      <br/>
      <div style="text-align: left">
        <div>Причина: <b>${event_text}</b></div>
        <div><b>${message}</b></div>
      </div>
      <div>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
      </div>
</div>
  `;
};

