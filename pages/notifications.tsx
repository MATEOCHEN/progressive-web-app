import Image from "next/image";
const Notifications = () => {
  return (
    <>
      <Image
        style={{ paddingTop: 80 }}
        src={"/icons/icon-144x144.png"}
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
