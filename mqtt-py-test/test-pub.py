import paho.mqtt.client as PahoMQTT

def myOnConnect(mqtt, userdata, flags, rc):
	print ("Connected to MQTT with result code: %d" % (rc))
	mqtt.publish("house/bubl1", "Hello -------- World!")

clientID = "test-pub"
mqtt = PahoMQTT.Client(client_id="web_cli", clean_session=True,
                                         protocol=PahoMQTT.MQTTv311, transport='websockets')
mqtt.on_connect = myOnConnect

print ("Connecting to MQTT...")
mqtt.connect("91.107.231.166", 9001, 60)

print ("Publishing...")
mqtt.loop_forever()

