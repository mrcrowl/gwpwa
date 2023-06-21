import "./AppPush.css";
import output from "./sw";

function App(props: { output: typeof output }) {
  async function handleReqPerms() {
    const permission = await Notification.requestPermission();
    alert(permission);
    if (permission === "granted") {
      // You can now use the Badging API
    }
  }

  function handleSetBadgeCount() {
    (navigator as any).setAppBadge(10);
  }

  function testRegistration() {
    alert(props.output.registration ? "Registration" : "No registration");
  }

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-5xl">Givenwell</h1>
      <Button onClick={handleReqPerms}>Request permissions</Button>
      <Button onClick={testRegistration}>Test SW Registration</Button>
      <Button onClick={subscribeUserToPush}>Subscribe to push</Button>
      <Button onClick={handleSetBadgeCount}>Set badge count</Button>
      <footer></footer>
    </div>
  );
}

export default App;

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      {...props}
    >
      {props.children}
    </button>
  );
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = `${base64String}${padding}`.replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
  return outputArray;
}

function subscribeUserToPush() {
  return navigator.serviceWorker
    .register("/service-worker.js")
    .then(function (registration) {
      const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          "BBm-C-5RmB2yNXUZZcIDxQ6YaFKcGZTSuKmP2KIhCUbSFSBe2Ga8p3-hVsVHa13T0MSDMR-KuGMOw3PBt26NZW4"
        ),
      };

      return registration.pushManager.subscribe(subscribeOptions);
    })
    .then(function (pushSubscription) {
      alert("Received PushSubscription: " + JSON.stringify(pushSubscription));
      return pushSubscription;
    });
}
