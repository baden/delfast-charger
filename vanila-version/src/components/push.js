export const pushComponent = (element) => {
    const push = document.createElement('div');
    push.setAttribute('class', 'push');
    push.innerHTML = `
        <div class="push__content">
        <div class="push__title">Push</div>
        <div class="push__subtitle">Push the button to start charging</div>
        <div class="push__button">Push</div>
        </div>
    `;
    element.appendChild(push);
}