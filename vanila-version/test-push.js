#!/usr/bin/env node
// Testing Google Cloud Messaging (GCM) push notifications

console.log("Hallo");

const NOTIFICATION_KEY = "AAAAIgAKguQ:APA91bHBBIfosx3AiF6kIVaV1hTgvgGB5ePRbTWgDjBylkR4ThoZ55GUG75k5BfLUXAWpbIjDMspAGCabU1hdsgDENwn92GRSb11AlC54EoErsuh-zTrqqhunA6OAvfDK3Mro3ehgcvG";


const send = (target) => {
    fetch("https://fcm.googleapis.com/fcm/send", {
        method: 'POST',
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json",
            Authorization: `key=${NOTIFICATION_KEY}`,
        },
        body: JSON.stringify({
            to: target,
            // notification: {
            //     title: "Charger",
            //     body: "Your device is fully charged!",
            //     icon: "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
            //     click_action: "https://charger.navi.cc/#868822042309565"
            // }
        }),
    }).then((response) => {
        // console.log("response", response);
    }).catch((error) => {
        console.log("error", error);
    });
};

send("eyIRIBFE9Xqhx1JrXhMAWD:APA91bEBQnuFlM03rjHmqsBa9UlB0BfdEm8tvjqHqGESwKHMgMyNAoOV4tQ0rrIGx8AIcSLPw7q4ToJVydK6CgexySkmmUpDkeCs0pjEPRfXIyALyJBRar8oYpxXBaypZbIMOBhX8ML8");
//send("ciaupLmE84-PZpfDdWgRSD:APA91bGv2pF9CVS6Y-xbeH1nohT8bbXuatZyDJhlCfADBgMGI123PYOrQ_m7iNf3uxWaZHKpdhz60YjadB5bC3B6c6DmtOaqO37CJkWff9BMzdyIxrU3X2Yp-fMIliMCvnhE9GUHQg9l");