import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import localForage from "localforage";

const init = async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyA4dEwWoE99DMvQVNo6ffXhX-eRgi6sJtg",
    authDomain: "pwa-notification-4c1e7.firebaseapp.com",
    projectId: "pwa-notification-4c1e7",
    storageBucket: "pwa-notification-4c1e7.appspot.com",
    messagingSenderId: "594899520135",
    appId: "1:594899520135:web:c3070eb60058f1a62f4622",
  };
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);
  try {
    const tokenInLocalForage = await localForage.getItem("fcm_token");

    // Return the token if it is alredy in our local storage
    if (tokenInLocalForage !== null) {
      console.log("Found token in local storage :" + tokenInLocalForage);
      return tokenInLocalForage;
    }
    const permission = await Notification.requestPermission();
    if (permission && permission === "granted") {
      // Get new token from Firebase
      const fcm_token = await getToken(messaging, {
        vapidKey:
          "BBS9-RYIJUMhXUeJhIXPva1EShEn3ORQ9aYM7hcKVdiMSC2G913I5_9f3_hvR0d2dWKN6XYuPodzbzwlkrNcUCE",
      });

      // Set token in our local storage
      if (fcm_token) {
        console.log("fcm token is: " + fcm_token);
        localForage.setItem("fcm_token", fcm_token);
        return fcm_token;
      }
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default init;
