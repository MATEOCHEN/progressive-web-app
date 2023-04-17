import { handleClientScriptLoad } from "next/script";
import { useEffect, useState } from "react";

interface DeferredPrompt extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}
const Install = () => {
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);
  const [buttonDisplay, setDisplay] = useState("block");
  const [defferedPrompt, setDefferredPrompt] = useState<DeferredPrompt | null>(
    null
  );

  const handleBeforeInstallPrompt = (event: Event) => {
    alert("You can install app!")
    event.preventDefault();
    setDefferredPrompt(event as DeferredPrompt);
  };

  const handleInstallClick = () => {
    if (defferedPrompt) {
      defferedPrompt.prompt();
      defferedPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome);
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
          setDisplay("none");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDefferredPrompt(null);
      });
    }
  };
  return (
    <>
      <button
        id="install-btn"
        style={{
          display: buttonDisplay,
          marginTop: "100px",
          marginLeft: "30px",
        }}
        onClick={handleInstallClick}
      >
        Install
      </button>
    </>
  );
};

export default Install;
