var deferredPrompt

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => console.log('Service worker registered'))
    .catch((err) => console.log(err))
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('BeforeInstallPrompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is executed nce the timer is done!');
    reject({ code: 500, message: 'An error occurred!' })
    // console.log('This is executed nce the timer is done!');
  }, 3000);
})

fetch('https://httpbin.org/ips')
  .then((response) => { 
    console.log(response)
    return response.json()
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

// promise.then((text) => text, (err) => console.log(err.code, err.message))
//   .then((newText) => console.log(newText))
promise.then((text) => text)
  .then((newText) => console.log(newText))
  .catch((err) => console.log(err.code, err.message))


console.log('This is executed rigth after setTimeout()');