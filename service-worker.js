
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('bicaramudah-v1').then(function(cache) {
      return cache.addAll([
        '.',
        'index.html',
        'manifest.json',
        'img/makan.png',
        'img/minum.png',
        'img/toilet.png',
        'img/senang.png',
        'img/sedih.png',
        'img/marah.png',
        'img/hallo.png',
        'img/terimakasih.png',
        'img/icon-192.png',
        'img/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
