// Create reactive charger object

class Charger {
    
    constructor() {
        this.charger = null;
    }
    
    setCharger(charger) {
        this.charger = charger;
    }
    
    getCharger() {
        return this.charger;
    }

    getChargerStatus() {
        return this.charger.status;
    }

    addEventListener(event, callback) {
        this.charger.addEventListener(event, callback);
    }
}

const charger = new Charger();

export default charger;