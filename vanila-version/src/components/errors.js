import viteLogo from '/vite.svg'

export const page_lost_connection = (element) => {
element.innerHTML = `
  <div class="charger">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    <h2>Втрачено зв'язок з сервером.</h2>
    <div>Намагаємось перепідключитись...</div>
    <div>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    <div>Якщо це не виправить проблему, перезавантажте сторінку.</div>
  </div>
`;
};


export const page_hw_error = (element, error_code, error_reason) => {
  element.innerHTML = `
    <div class="charger">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      <h2>Зарядна станція несправна.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
      <br/>
      <div style="text-align: left">
        <div>Код помилки: <b>${error_code}</b></div>
        <div>Причина: <b>${error_reason}</b></div>
      </div>
    </div>
  `;
};

export const usedByOtherUser = (element) => {
  element.innerHTML = `
    <div class="charger">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      <h2>Зарядна станція використовується іншим користувачем.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
    </div>
  `;
};
