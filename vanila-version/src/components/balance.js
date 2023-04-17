import '/styles/balance.css';
import walletLogo from '/wallet.svg';
const balanceElement = (element, auth, mqttClient) => {
    element.innerHTML = `
        <div id="balance">
            <span>Ваш баланс:</span>
            <span id="balance_value">$50</span>
        </div>
        <div>
            <button id="add_balance">
                <img src="${walletLogo}" alt="Wallet logo" />
                <span>Поповнити рахунок</span>
            </button>
        </div>
    `;
}

export default balanceElement;
