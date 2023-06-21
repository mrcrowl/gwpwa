type Output = {
  registration?: ServiceWorkerRegistration;
};

const output: Output = {};

async function registerServiceWorker() {
  output.registration = await navigator.serviceWorker.register("service-worker.js", {
    scope: "./",
  });
}

void registerServiceWorker();

export default output;
