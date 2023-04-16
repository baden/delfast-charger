import { useState, useEffect } from 'react';
// import { PahoMQTT } from '../assets/js/mqtt'
import PahoMQTT from 'paho-mqtt';

// console.log("PahoMQTT", PahoMQTT);

class MQTTClient {
    constructor(id) {
        this.id = id;
        this.client = null;
        this.connectStatus = 'Disconnected';
        this.onMQTTConnect = null;
        this.onMQTTLost = null;
        this.onMessageArrived = null;
        this.data = {};
    }

    onConnectionLost = (responseObject) => {     
        console.log("onConnectionLost (TODO: reconnect?)", responseObject);
        this.connectStatus = 'Disconnected';
        if (responseObject.errorCode !== 0) {
            console.log('onConnectionLost:' + responseObject.errorMessage)
        }
        // TODO: reconnect?
        if(this.onMQTTLost) {
            this.onMQTTLost(responseObject);
        }
    };

    connect = () => {
        const host = "charger.navi.cc";
        const port = 443;
        const clientId = "web_" + this.id;
        const useSSL = true;
        const timeout = 3;

        this.client = new PahoMQTT.Client(host, port, clientId);
        this.client.onConnectionLost = this.onConnectionLost;

        this.client.onMessageArrived = (message) => {
            console.log("onMessageArrived", message);
            try {
                this.data = JSON.parse(message.payloadString)
                if(this.onMessageArrived) {
                    this.onMessageArrived(this.data);
                }
            } catch (error) {
                console.log("error", error);
            }
        }

        console.log("Connecting....");
        this.client.connect({
            useSSL: useSSL,
            onSuccess: () => {
                console.log("Connected");
                this.connectStatus = 'Connected';
                this.client.subscribe("charger/" + this.id + "/status");
                if(this.onMQTTConnect) {    
                    this.onMQTTConnect();
                }
            },
            onFailure: (message) => {
                console.log("Connection failed", message);
                this.connectStatus = 'Connection failed';
            },
            timeout: timeout
        });
    };

    subscribe = (topic, qos = 0) => {
        if(!this.client) {
            console.log("client is not connected");
            return;
        }
        this.client.subscribe(topic, {qos: qos});
    };

    publish = (topic, payload, qos = 0, retain = false) => {
        if(!this.client) {
            console.log("client is not connected");
            return;
        }
        console.log("publish", topic, payload, qos, retain);
        const message = new PahoMQTT.Message(payload);
        message.destinationName = topic;
        message.qos = qos;
        message.retained = retain;
        this.client.send(message);
    };

    disconnect = () => {
        if(!this.client) {
            console.log("client is not connected");
            return;
        }
        this.client.disconnect();
        this.client = null;
    }

    isConnected = () => {
        return this.client && this.client.isConnected();
    }
}

export default MQTTClient;

// function useMqtt() {
//     const [data, setData] = useState({});
//     const [connectStatus, setConnectStatus] = useState('Connecting...');

//     const client = new PahoMQTT.Client(
//         "charger.navi.cc", // host
//         443, // port  (or 8083 for websockets)
//         "web_cli" // client id  
//     );

//     useEffect(() => {
//         client.onConnectionLost = responseObject => {
//             setConnectStatus('Disconnected');
//             if (responseObject.errorCode !== 0) {
//                 console.log('onConnectionLost:' + responseObject.errorMessage)
//             }
//         }
//         client.onMessageArrived = message => {
//             // console.log("onMessageArrived", message.payloadString);
//             // setData(JSON.parse(message.payloadString))
//             try {
//                 setData(JSON.parse(message.payloadString))
//             } catch (error) {
//                 console.log("error", error);
//             }
//             //setData(message.payloadString)
//         }

//         console.log("Connecting....");
//         client.connect({
//             useSSL: true,
//             onSuccess: () => {
//                 console.log('Connected')
//                 setConnectStatus('Connected');
//                 client.subscribe(`delfast_charger/id001`);
//                 //client.subscribe(`device_data_${gateway}`);
//                 //client.subscribe(`card_data_${gateway}`);
//                 if(0) {
//                     const message = new PahoMQTT.Message('Hello!!!!!!!!!!!');
//                     message.destinationName = 'house/bubl1';
//                     client.send(message);
//                 }
//             },
//         })
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     const publish = (topic, payload) => {
//         console.log("publish", topic, payload, client);
//         if(!client.isConnected()) {
//             console.log("client is not connected");
//             return;
//         }
//         const message = new PahoMQTT.Message(payload);
//         message.destinationName = topic;
//         client.send(message);
//     }

//     return {
//         data,
//         connectStatus,
//         publish,
//     }
// }

// export default useMqtt;