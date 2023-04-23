import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";
import firebaseConfig from './firebase-config.js'

try {
  console.log("Firebase service worker init", self);

  const firebaseApp = initializeApp(firebaseConfig);

  // const messaging = getMessaging();
  const messaging = getMessaging(firebaseApp, {
    serviceWorkerRegistration: self.registration,
  });

  onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Charge completed';
    const notificationOptions = {
      body: 'Your device is fully charged.',
      icon: 'charged.png',
      data: {
        url: payload.data.url
      }
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
  });

  self.addEventListener('notificationclick', function (event) {
    let url = event.notification.data.url;
    console.log("notificationclick", event);
    event.notification.close();
    event.waitUntil(
      self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
        // Check if there is already a window/tab open with the target URL
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];
          console.log("client", client);
          // If so, just focus it.
          if (client.url === url && 'focus' in client)  
            return client.focus();
        }
        // If not, then open the target URL in a new window/tab.
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
     
    );
  });

} catch (error) {
  console.log("firebase-messaging-sw.js error: ", error);
}