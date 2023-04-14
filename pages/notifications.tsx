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
const sendNotification = () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      new Notification("steven good", {
        body: "created by steven",
        icon: "https://cdn.pixabay.com/photo/2016/06/23/18/55/apple-1475977_960_720.png",
      });
    }
  });
};

export default Notifications;
