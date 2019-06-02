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

setTimeout(() => {
  console.log('This is executed nce the timer is done!');
}, 3000);

console.log('This is executed rigth after setTimeout()');