const sendNotification = async (message: string) => {
  if (Notification.permission === "granted") {
    showNotification(message);
  } else {
    if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();

      if (permission === "granted") {
        await showNotification(message);
      }
    }
  }
};
const showNotification = async (body: string) => {
  const { navigator } = window;
  const registration = await navigator.serviceWorker.getRegistration();
  const title = "蘋果商城";
  const payload = {
    body,
  };

  if (registration) {
    registration.showNotification(title, payload);
  }
};

export { sendNotification };
