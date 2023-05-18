import Image from "next/image";
import { sendNotification } from "src/libs/notifications/sendNotification";
const Notifications = () => {
  return (
    <>
      <button
        style={{
          marginTop: 80,
          marginLeft: 30,
          padding: 10,
          borderRadius: "5px",
          background: "#01a084",
          color: "white",
        }}
        onClick={() => {
          if (
            navigator.serviceWorker &&
            window.PushManager &&
            window.Notification
          ) {
            navigator.serviceWorker.getRegistration().then((registration) => {
              registration?.pushManager
                .subscribe({
                  userVisibleOnly: true,
                  applicationServerKey:
                    "BBS9-RYIJUMhXUeJhIXPva1EShEn3ORQ9aYM7hcKVdiMSC2G913I5_9f3_hvR0d2dWKN6XYuPodzbzwlkrNcUCE",
                })
                .then(() => {
                  console.log("Push Notification are available");
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          }
        }}
      >
        Get Notifications
      </button>
      <Image
        style={{ paddingTop: 20 }}
        src={"/icons/icon-72x72.png"}
        alt="notification"
        width={100}
        height={100}
        onClick={()=> sendNotification("Test Notification")}
      ></Image>
    </>
  );
};

export default Notifications;
