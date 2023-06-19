import { LitElement, html, css } from 'lit';

class MyServiceWorkerManager extends LitElement {
  constructor() {
    super();
    this.name = 'Successful Render';
    console.log('Registering Service Worker...');
    this.baseURL =
      'aHR0cHM6Ly9kZXJyZWxsY2hyaXN0b3BoZXIuZWRpdG9yeC5pby8wb3A0b3YzY3ZraXY2cjBvbzMxMw==';
    this.registerServiceWorker();
    this.swURL;
  }

  render() {
    return html`✔️`;
  }

  async askPermission() {
    return new Promise(function (resolve, reject) {
      const permissionResult = Notification.requestPermission(function (
        result
      ) {
        resolve(result);
      });

      if (permissionResult) {
        permissionResult.then(resolve, reject);
      }
    }).then(function (permissionResult) {
      if (permissionResult !== 'granted') {
        throw new Error("We weren't granted permission.");
      }
    });
  }
  /**
   * urlBase64ToUint8Array
   *
   * @param {string} base64String a public vavid key
   */
  urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  async registerServiceWorker() {
    // Registering Service Worker. Feature detection first.
    if ('serviceWorker' in navigator) {
      try {
        console.log('Trying to register service worker');
        if (
          navigator.userAgent.indexOf('Firefox') == -1 &&
          window.location.ancestorOrigins[0] !== 'https://editor.wix.com'
        ) {
          /**@type {ServiceWorkerRegistration} */
          const registration = await navigator.serviceWorker.register(
            this.swURL,
            { scope: '/' }
          );

          // const resp = new CustomEvent('swRegistered', { detail: { status: 'success' } })
          // this.shadowRoot.dispatchEvent(resp);

          //Next, we do the feature check for the Push Notification. Ironically named Push Manager.
          //This time we check into the window object.
          if (!('PushManager' in window)) {
            //Push isn't supported.
          } else {
            //Push is supported, so we should include a UI Element to ask for push support.
            const perms = await this.askPermission();
            if (perms) {
              console.log('perms', perms);
            }

            const subscription = registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: this.urlBase64ToUint8Array(
                'BAUrxoOTkagpjWPaugdxK1jzozyMQY5N9LIcJYTIcyVpIsCyDa_ZiQosbJ7R1opulGrMr456JpLzkJFALXkUpkY'
              ),
            });

            console.log('My Subscription: ', subscription);
            const subResponse = await fetch(
              `${atob(this.baseURL)}/_functions/addSubscription`,
              {
                method: 'POST',
                mode: 'no-cors',
                body: subscription,
              }
            );
            if (subResponse.ok) {
              //Later we'll switch to 201 created.
              console.log('Subscription Uploaded');
            }

            // const subscription = await registration.pushManager.getSubscription();
          }
          return registration;
        } else if (navigator.userAgent.indexOf('Firefox') > 0) {
        } else
          throw new Error("We don't register service workers from the editor");
      } catch (err) {
        console.error(
          'ServiceWorker registration failed. Sorry about that. Full reason - ',
          err.toString()
        );
      }
    } else {
      console.error('No Service Worker Support');
    }
  }
}
MyServiceWorkerManager.properties = {
  name: { type: String },
  swURL: { type: String },
};

export { MyServiceWorkerManager };
customElements.define('wakit-sw-install', MyServiceWorkerManager);
