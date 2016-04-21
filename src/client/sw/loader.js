if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw/offline.js', {
    scope: './'
  }).then(function(registration) {
    console.log('service worker registered');
  }).catch(function(error) {
    console.error('service worker not registered', error);
  });
}
