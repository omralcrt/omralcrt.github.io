'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "082a1a8d9f3b2cd6ec9e24024c66ed7c",
"index.html": "571ef70dc3e70b8e6c1bb22c2828904d",
"/": "571ef70dc3e70b8e6c1bb22c2828904d",
"main.dart.js": "a95db71238d36da254cea1ce8f0bcc60",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "18b3cd900558fbfc7046b908a8bd7e51",
"assets/images/pointcycover.png": "de3b9ccca7973d339777452cbcd1707e",
"assets/images/moneypaycover.png": "3db04a83031c7ccf86d0cebf300c05ca",
"assets/images/oldubilcover.png": "60bb06b30065e3aa1da4b0fe20eaf2f8",
"assets/images/falbellacover.png": "3838c08d7228c439ffd76b93d8f55de3",
"assets/images/pakettaxicover.png": "08b56d7dd004da636c9e6ebbc2362779",
"assets/images/bmwonlinecover.png": "e9e44125d707a3d619ebb14dc4c7c601",
"assets/images/coinyprocover.png": "46077d333112d1aaa1ed28f2e2bcec7b",
"assets/images/malloftheemiratescover.png": "37808070065675c884c9a44f61b3ef29",
"assets/images/jetfixcover.png": "29e3724c0646eb67897a137571b9747f",
"assets/images/doctorturkeycover.png": "52c02f30acd0aa31014ddefe1663d36e",
"assets/images/profile.jpg": "370bc39b26ea46085e0051a345b30305",
"assets/images/sahacover.png": "a6d19d526d1561586f449b814db10f0f",
"assets/images/turkiyepetrollericover.png": "c4f430109530050747a49817517e6ad6",
"assets/images/coinycover.png": "d26d77d71b46dca3390597b16139a351",
"assets/images/colendicover.png": "0cccd1ac6924f513ed1e8e261c5a12b0",
"assets/AssetManifest.json": "f8a07ff48409b5f12355e85a1337cd36",
"assets/NOTICES": "7efa4d5ba07c19fc9ed15152aed20b76",
"assets/FontManifest.json": "f73c9846014b53816c82915496b218dd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/fonts/Roboto_Slab/RobotoSlab-Medium.ttf": "8d557a38334591a1b4d6c12e3874346e",
"assets/fonts/Roboto_Slab/RobotoSlab-SemiBold.ttf": "c0c8f9633f1894907dcbbfd4fc9b5f6e",
"assets/fonts/Roboto_Slab/RobotoSlab-Bold.ttf": "b3954db228ca7701bf36469cf6c31c57",
"assets/fonts/Roboto_Slab/RobotoSlab-Light.ttf": "07d63b4d0376fca3bbedc274d9dd9233",
"assets/fonts/Roboto_Slab/RobotoSlab-Regular.ttf": "2e935203e7200edebf345ee19a80f435",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
