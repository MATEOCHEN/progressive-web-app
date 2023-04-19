importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Replace the values with yours
const firebaseConfig = {
  apiKey: "AIzaSyA4dEwWoE99DMvQVNo6ffXhX-eRgi6sJtg",
  authDomain: "pwa-notification-4c1e7.firebaseapp.com",
  projectId: "pwa-notification-4c1e7",
  storageBucket: "pwa-notification-4c1e7.appspot.com",
  messagingSenderId: "594899520135",
  appId: "1:594899520135:web:c3070eb60058f1a62f4622",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
