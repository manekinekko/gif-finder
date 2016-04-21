if ('serviceWorker' in navigator) {
  (<any>navigator).serviceWorker.register('sw/offline.js')
  .then((registration) => console.log('service worker registered'))
  .catch((error) => console.error('service worker not registered', error));
}
