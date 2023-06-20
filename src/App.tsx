import "./App.css";

function App() {
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

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-5xl">Givenwell</h1>
      <Button onClick={handleReqPerms}>Request permissions</Button>
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
