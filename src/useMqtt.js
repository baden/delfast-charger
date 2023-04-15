import { useState, useEffect } from 'react';
// import { PahoMQTT } from '../assets/js/mqtt'
import PahoMQTT from 'paho-mqtt';

// console.log("PahoMQTT", PahoMQTT);

function useMqtt() {
    const [data, setData] = useState({});
    const [connectStatus, setConnectStatus] = useState('Connecting...');

    const client = new PahoMQTT.Client(
        "91.107.231.166", // host
        9001, // port  (or 8083 for websockets)
        "web_cli" // client id  
    );

    //const gateway = localStorage.getItem('gateway')

    useEffect(() => {
        client.onConnectionLost = responseObject => {
            setConnectStatus('Disconnected');
            if (responseObject.errorCode !== 0) {
                console.log('onConnectionLost:' + responseObject.errorMessage)
            }
        }
        client.onMessageArrived = message => {
            console.log("onMessageArrived", message.payloadString);
            // setData(JSON.parse(message.payloadString))
            try {
                setData(JSON.parse(message.payloadString))
            } catch (error) {
                console.log("error", error);
            }
            //setData(message.payloadString)
        }

        console.log("Connecting....");
        client.connect({
            onSuccess: () => {
                console.log('Connected')
                setConnectStatus('Connected');
                client.subscribe(`house/#`);
                //client.subscribe(`device_data_${gateway}`);
                //client.subscribe(`card_data_${gateway}`);
                if(0) {
                    const message = new PahoMQTT.Message('Hello!!!!!!!!!!!');
                    message.destinationName = 'house/bubl1';
                    client.send(message);
                }
            },
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        data,
        connectStatus
    }
}

export default useMqtt;