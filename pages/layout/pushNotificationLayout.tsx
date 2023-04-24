import React, { useEffect } from "react";
import { getMessaging, onMessage } from "firebase/messaging";
import firebaseInit from "utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

function PushNotificationLayout({ children }: PushNotificationLayoutProperty) {
  const router = useRouter();
  useEffect(() => {
    console.log("Testing token initalization");
    setToken();

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./firebase-messaging-sw.js", { scope: "/notifications" })
        .then((registration) => {
          if (registration.installing) {
            console.log("Service worker installing");
          } else if (registration.waiting) {
            console.log("Service worker installed");
          } else if (registration.active) {
            console.log("Service worker active");
          }
          console.log(registration, "show registration");
          console.log(navigator.serviceWorker.controller);
        });
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
      });
    }

    // Calls the getMessage() function if the token is there
    async function setToken() {
      try {
        const token = await firebaseInit();
        if (token) {
          console.log("token", token);
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (url: string) => {
    router.push(url);
  };

  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    const messaging = getMessaging();
    console.log(messaging, "getMessage is called");

    onMessage(messaging, (payload) => {
      alert(JSON.stringify(payload));
      const { navigator } = window;
      navigator.serviceWorker.getRegistration().then((registration) => {
        const notificationOptions = {
          body: payload.notification?.body,
          icon: payload.notification?.icon,
        };
        //   registration?.showNotification(
        //     payload.notification?.title ?? "",
        //     notificationOptions
        //   );
        // });
        // toast(
        //   <div
        //     onClick={() =>
        //       handleClickPushNotification(`${payload.fcmOptions?.link}`)
        //     }
        //   >
        //     <h5>{payload.data?.title}</h5>
        //     <h6>{payload.data?.body}</h6>
        //   </div>,
        //   {
        //     closeOnClick: false,
      });
    });
    // onBackgroundMessage(messaging, (payload) => {
    //   console.log(
    //     "[firebase-messaging-sw.js] Received background message ",
    //     payload
    //   );
    //   // Customize notification here
    //   const notificationTitle = "Background Message Title";
    //   const notificationOptions = {
    //     body: "Background Message body.",
    //     icon: "/firebase-logo.png",
    //   };

    //   const { navigator } = window;
    //   navigator.serviceWorker.getRegistration().then((registration) => {
    //     registration?.showNotification(notificationTitle, notificationOptions);
    //   });
    // });
  }

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}

interface PushNotificationLayoutProperty {
  children: JSX.Element | JSX.Element[];
}
export default PushNotificationLayout;
