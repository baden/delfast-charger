import viteLogo from '/vite.svg'

export const offPage = (element, off_reason) => {
  let text_reason = off_reason;
  if(off_reason === "fwupdate") {
    text_reason = "Перезавантаження для оновлення ПЗ";
  }

  element.innerHTML = `
    <div class="charger">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      <h2>Вибачте, але зарядна вимкнена.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
      <br/>
      <div style="text-align: left">
        <div>Причина: <b>${text_reason}</b></div>
      </div>
    </div>
  `;
};

