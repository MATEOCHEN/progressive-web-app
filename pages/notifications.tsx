import Image from "next/image";
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
                .subscribe({ userVisibleOnly: true })
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
        onClick={sendNotification}
      ></Image>
    </>
  );
};

const sendNotification = async () => {
  if (Notification.permission === "granted") {
    showNotification("Steven so goood!");
  } else {
    if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();

      if (permission === "granted") {
        await showNotification("Steven so goood!");
      }
    }
  }
};
const showNotification = async (body: string) => {
  const { navigator } = window;
  const registration = await navigator.serviceWorker.getRegistration();
  const title = "What PWA Can Do Today";
  const payload = {
    body,
  };

  if (registration) {
    registration.showNotification(title, payload);
  }
};

export default Notifications;
