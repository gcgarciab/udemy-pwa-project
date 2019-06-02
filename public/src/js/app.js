var deferredPrompt

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log('Service worker registered'); 
  })
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

// promise.then((text) => text, (err) => console.log(err.code, err.message))
//   .then((newText) => console.log(newText))
promise.then((text) => text)
  .then((newText) => console.log(newText))
  .catch((err) => console.log(err.code, err.message))


console.log('This is executed rigth after setTimeout()');