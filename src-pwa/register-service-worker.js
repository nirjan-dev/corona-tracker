import { register } from 'register-service-worker'
import { Notify } from 'quasar'
// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready (/* registration */) {
    // console.log('Service worker is active.')
  },

  registered (/* registration */) {
    // console.log('Service worker has been registered.')
  },

  cached (/* registration */) {
    // console.log('Content has been cached for offline use.')
  },

  updatefound (/* registration */) {
    // console.log('New content is downloading.')
  },

  updated (/* registration */) {
    const dismiss = Notify.create({
      message: 'A new verison of the app is available, would you like to update?',
      timeout: 10000,
      position: 'top',
      multiLine: true,
      actions: [
        {
          label: 'Update app',
          color: 'white',
          handler: () => {
            window.location.reload();
          }
        },
        {
          label: 'No, thanks',
          color: 'grey',
          handler: () => {
            dismiss();
          }
        }
      ]
    });
  },

  offline () {
    Notify.create({
      message: 'App is offline, please go back online to view the latest covid-19 info',
      timeout: 10000,
      color: 'secondary',
      position: 'top',
      multiLine: false
    })
   
  },

  error (/* err */) {
    // console.error('Error during service worker registration:', err)
  }
})
