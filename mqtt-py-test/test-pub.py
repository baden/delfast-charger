import paho.mqtt.client as PahoMQTT
from time import sleep
import json

def myOnConnect(mqtt, userdata, flags, rc):
	print ("Connected to MQTT with result code: %d" % (rc))
	# mqtt.publish("house/bubl1", "{foo: 42}")

clientID = "test-pub"
mqtt = PahoMQTT.Client(client_id="bot_charger_id001", clean_session=True,
                                         protocol=PahoMQTT.MQTTv311, transport='websockets')
mqtt.on_connect = myOnConnect

print ("Connecting to MQTT...")
mqtt.connect("91.107.231.166", 9001, 60)
#mqtt.connect("test.mosquitto.org", 8081, 60)

mqtt.loop()
sleep(2)

print ("Publishing...")


json.encoder.FLOAT_REPR = lambda o: format(o, '.2f')

voltage = 220
current = 0.021
power = 2.5
energy = 0
frequency = 50
pf = 0.99

time = 0

while True:
    print("publishing")

    voltage = 222*2 - voltage
    current = 0.022*2 - current
    power = voltage * current * pf
    energy += 1
    frequency = 50.1*2 - frequency
    time += 1

    payload = json.dumps({
        "status": "charging",
        "uid": "lDpl3b3d21Ma0vUBoMYdJuoOsVI3",
        "time": time,
        "voltage": voltage,
        "current": current,
        "power": power,
        "energy": energy,
        "frequency": frequency,
        "pf": pf
    }
    #, parse_float=lambda x: round(float(x), 3)
    )
    #mqtt.publish("house/bubl1", payload)
    mqtt.publish("charger/id001/status", payload)
    mqtt.loop()

    sleep(1)


#mqtt.loop_forever()

