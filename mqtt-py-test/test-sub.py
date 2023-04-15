import paho.mqtt.client as PahoMQTT

def myOnConnect(mqtt, userdata, flags, rc):
	print ("Connected to MQTT with result code: %d" % (rc))
	#mqtt.subscribe("$SYS/#")
	mqtt.subscribe("house/bubl1")

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg.topic + " " + str(msg.payload))

clientID = "test-pub"
mqtt = PahoMQTT.Client(clientID, False)
mqtt.on_connect = myOnConnect
mqtt.on_message = on_message

print ("Connecting to MQTT...")
mqtt.connect("91.107.231.166", 1883, 60)

print ("Publishing...")
mqtt.loop_forever()

