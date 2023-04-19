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
        .register("./firebase-messaging-sw.js")
        .then((registration) => {
          console.log(
            "Service worker registration successfully with scope: ",
            registration.scope
          );
          console.log(navigator.serviceWorker, "stevensogood");
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
    console.log(messaging);

    onMessage(messaging, (payload) => {
      alert(payload)
      toast(
        <div
          onClick={() =>
            handleClickPushNotification(`${payload.fcmOptions?.link}`)
          }
        >
          <h5>{payload.data?.title}</h5>
          <h6>{payload.data?.body}</h6>
        </div>,
        {
          closeOnClick: false,
        }
      );
    });
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
