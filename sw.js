const CACHE_NAME = 'omral-portfolio-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/favicon.png',
    '/assets/images/profile.jpg',
    // Add other critical assets
    '/assets/images/bmwonlinecover.png',
    '/assets/images/coinycover.png',
    '/assets/images/coinyprocover.png',
    '/assets/images/colendicover.png',
    '/assets/images/doctorturkeycover.png',
    '/assets/images/falbellacover.png',
    '/assets/images/jetfixcover.png',
    '/assets/images/malloftheemiratescover.png',
    '/assets/images/moneypaycover.png',
    '/assets/images/oldubilcover.png',
    '/assets/images/pakettaxicover.png',
    '/assets/images/pointcycover.png',
    '/assets/images/sahacover.png',
    '/assets/images/turkiyepetrollericover.png',
    '/assets/images/webrazzicover.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            }
        )
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});