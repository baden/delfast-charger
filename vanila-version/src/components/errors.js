import viteLogo from '/vite.svg'

export const page_lost_connection = (element) => {
element.innerHTML = `
  <div class="charger">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    <div>Втрачено зв'язок з сервером.</div>
    <div>Намагаємось перепідключитись...</div>
    <div>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    <div>Якщо це не виправить проблему, перезавантажте сторінку.</div>
  </div>
`;
};

