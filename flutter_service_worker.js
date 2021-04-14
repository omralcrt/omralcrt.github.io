'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "082a1a8d9f3b2cd6ec9e24024c66ed7c",
"index.html": "8f638e053560e19673b1b08fffaf9b52",
"/": "8f638e053560e19673b1b08fffaf9b52",
"main.dart.js": "92f61b4bc023e733cc32ee48bf07254a",
"favicon.png": "02e420057b8cb3bc791094e7baa73c9a",
"icons/Icon-192.png": "56c34683cbb83b9101ae47dda139fd1e",
"icons/Icon-512.png": "06b8aad98a4c632c7d2827cb7992568d",
"manifest.json": "18b3cd900558fbfc7046b908a8bd7e51",
".git/config": "2affc4c0dfdadb50d0a748ff45a7e284",
".git/objects/50/cb0afcc19d2d2e4f878f410b6683ed0aff1451": "7156c965870fed99aa7cca8dc29c252e",
".git/objects/57/9bb31bb4fade05969a474db2a816d28011de51": "df6afaf0f7c65c31a4ecb7285b3c197a",
".git/objects/6f/0b8e2eb1213acc1cf80069fe4ed62d6e95ce07": "e339030408e7c2ddf57d2d5543c96eb6",
".git/objects/03/a96c37c041f6054479f7e5c6cb37fd0d2ad51e": "42b460ef6d7ccb93ebea94b4a89083ce",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/34/41fb941ccce267036b8c17ba89f38ee8081a5a": "69165efa9fd733289c661d10acd241aa",
".git/objects/34/4a3aeae20ea0d1405d9ef105697fd604bacfb3": "e95a9f8e19431f3a1f8ce2a47478c474",
".git/objects/33/d098bef0f5105b50776ce2befc7b82ba1c7be4": "64c6784de93d48359eb3a9c9478b67ba",
".git/objects/9d/5846e37d6690e754ea542f251da45d08e1d78f": "efcd19a6ebd4b08d406183399aafd3f1",
".git/objects/9d/a708f40a7922966817988b52e172a7da9a729f": "38d9f94f801d5e9c6993a1071c7f4292",
".git/objects/9d/58588a6cbc7b0c7b97200a55c0cbea3daf8244": "b1fb3ba33f4c7a5ce847a99360ba87de",
".git/objects/a4/ea5ebb023ed76fc3f7baef01ef81ec11563cd0": "b50fe383a07541a432a3b6a10fc4afda",
".git/objects/b5/999e6ca414b0e29e833690519f1995045d11af": "46186d3a57f324376e4c0d2194b630cb",
".git/objects/b2/440305294bcdf4de7f47bb45271860a253a8db": "63ff98419b675cf153717b96ad181a5d",
".git/objects/d9/66038b76170b0ebeb0f0b6b906107874353739": "a9f9b5c24074edbdecd05d1c8bec6b72",
".git/objects/ac/ba1b72d85aecd207da7e63f747fdc8388939c8": "6ca075321a3488387b77b58a12c8dbe4",
".git/objects/df/372dfe405b8885a5f58567dc12d503eef3f95d": "3e382994291cdd212b60563f43ed66a6",
".git/objects/b4/2a82fd0882fc3c72b4c676410b9ff2ef6b1166": "18930ad6faa10a4c32e7b30b420d8f2c",
".git/objects/ae/894f2aca02fe7af83028b38ee09c7326efeb91": "d793f8f4965edc39907d82cc8ec28e00",
".git/objects/e5/6478db77e9fc2d739780f76449e99b0afa7a03": "37a8c9bd9c06c3cd9ec6e1d35a8cf230",
".git/objects/f5/dd492008336b04263b9c28ce9aafc399e7f217": "810826da2fa281f77503b82920606eae",
".git/objects/cf/eae5922b7be02b01b89b59e8f0de22cd2eb9b5": "9c95de2510c441b127e922d785f1c9ec",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/e4/0c1b6ea31b15ddfbef9d7b728aecf61fb026a3": "8de276f74fe4883206fd75d3d98eb2fa",
".git/objects/c6/9822158af1d35213a13a0b5c034b4a43dc7788": "97273cf1f46353128f7f9e4883e30a85",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/ec/dcc670aa1cdaccce4414a8403cb7742cc42604": "79e8a505e7fcb29a496eb93ee24fe0a8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/13281166ad4e997411ba8146bae1d439ad043e": "e23eb745bbec5398bbb44d2f946de524",
".git/objects/1f/60ef4a32cf4c4cd63ff050f8974fdcd944e9e0": "7adaa56486646f9b25e1fccce24b97f9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/a23020f5219bacb9317d8ab0f7f1521b00488b": "a277b040d4ca03de967b7970cd6f9dd3",
".git/objects/26/d060847c3a0d9ae0f167da01c8813854bb0691": "e09574a3b78ce5b7c928ab662158a92d",
".git/objects/4d/86366324dd0a488ed8175a885b13cae35e6f33": "45254e4c4cadb7bbbaea5bfdafaa7b4b",
".git/objects/75/746ce70bfccabfb28da0d4904d3d435bf61cda": "9f8acbbf9bbb59e203de066281f566ed",
".git/objects/81/f85713560dbc9542a33ffdd2b05807e87b54f7": "add377f88ac912a0149bf844261b7a7b",
".git/objects/44/b3154946ae373845544704405dd5cf0ae18bda": "dbe1920c22cd7999eca9e013ffdd055e",
".git/objects/2a/c152e0cc608d2792fefcf02f4c0645c60eda75": "364b9bcda605a73c12f2905e50fcfe89",
".git/objects/43/221434670cb5c80105469a6ff149fc2750cee2": "cc78c40f358b17ea6942530b6f245e34",
".git/objects/43/6fdd2fbbd3c361f3d8f140ec496443c7eebee5": "5876ee950190d8eb9934789ee6a68f8e",
".git/objects/43/f99a3d2e241a8f67399441c0902bdce2a39a8b": "90269d67f94049e7dbd2eabf8f58087c",
".git/objects/43/528a709c23b554bf2c77beec596efdb1489e75": "3a738a7ac455e465cd083eba5fe31edd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/7afeb2a4ff24440acb76ddfe1392f1baf7be4b": "286a6667ae7044ff8b3df0f1b14714a2",
".git/objects/38/e3073c58d48f1476bf3129f66d82dff5f504f5": "e0b578c87beb2ed23db401aba4a41437",
".git/objects/6e/bdd7df4fead48aea782587b7f91e9e3cc313ff": "51fc840a2caec7efe98ccf0b9ee6334c",
".git/objects/9a/03931760a168f8bf193a629b758f0ef5465791": "75e486c4ebba1ae98b5334db367dcfb2",
".git/objects/5c/7d7ef4f6921f65c5f0f39d2d28efbaf377530a": "bae8c55220542a75a11470b580d895f6",
".git/objects/5d/6f5a65e01d5ece34334bd9d14a48b8b44e1660": "6eb243cfa5adf5a6edf54cbd989d16b3",
".git/objects/54/f162037108f4313490b48510b944a144452a3d": "5c3cc61c2ac19169342d92c2a3095c9d",
".git/objects/53/ed0c9817acd85bce6f3ffe1d9ddcd1fd93c09a": "3911b8f1c9c710f3d6adb431450152f7",
".git/objects/5b/6d01a129ee5e80b5308586db1e170c0f55cd65": "31209dd6f629eaef01bf17f360f60281",
".git/objects/37/680a004297139b62d00f1f92d64584d31db5db": "be17572567594473af7003bd5589b22f",
".git/objects/52/2d92c35d6254b72fdaa1ea3a53332463a537b2": "39095e9ec5f75b8d647d8afcfe36710c",
".git/objects/64/0ae7ef6965a2aa5bc8a4ad1044971d652730ad": "2a91b4051f5b909198f5b5ed3e773751",
".git/objects/bf/5a86bc99d695979cba88af3e7ec147135d5152": "47c1c220f779e2211279e1d89de8e3a1",
".git/objects/d3/f8ee83894e145c9bb183a0e023680c9abd6710": "53a4acb97c08f61a5b0518b1cb6584c4",
".git/objects/ba/db87b1cb78d720b0f6ebcf4de3dfa4257f64a9": "c3533d1db7c6be69e381de8f28b0c3c8",
".git/objects/a7/a89718a5d98a3cf59fdfebb3a626d21d869f77": "1be660f826cb36e282498a30e88ffb0e",
".git/objects/b1/2a3ac0a48fb1b37f7eac97bcccba0c104e0498": "921754a5f8abfea4793db0d69a4eb141",
".git/objects/b1/11e1677620be237c7218bcd7334402a381a0e1": "62c82d83dffdcfcd77c2c6ef92934bbc",
".git/objects/a9/7374622cdc59a3e74802eb259806a0b2343569": "7683114cf40e286d2a349eae059df0c2",
".git/objects/aa/3237140b6215a332568d505568d158e00ea992": "66d5de0c1865243a3a8eedb625bfa446",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/6328ff4b70a231f6d18d115a4333ac97ab2b61": "293490db910798cc07398a6078c606b5",
".git/objects/b0/99172cca0f97317e6b7f7a4332396a61c97349": "e8a6d1e9aae768a5cf61b9a10341a765",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/c4/45ffedafa916e7ef16b0ba8166b9b9ca9de997": "fe1cccbd5e5a5f490050b9b8b6415ed7",
".git/objects/e1/6c469960a87e322255eee0cb1554cb6060bd59": "964936992c57bea51a09adee1dd1830e",
".git/objects/cc/04d6abafa5756abe1affab816717887bd37bed": "e32f42cd962e0b28282733c7f73b0dfd",
".git/objects/f9/5eea305f38cc97c6ce341174a4ce4c31320e9f": "bd3d480edc9e9564088716e0c0ae3c71",
".git/objects/f7/1cc56303c2ad7402051e4d93096c5dce3b58d0": "aec32ab460345a8d7fb71d3c4af41bcb",
".git/objects/e0/0b51bfe863a77d71bf8fb3a3d1788225b45c69": "ede163efb9854b9b75e83a4d6537f3cf",
".git/objects/46/f7ed56987313fb0b8f574066ac8a962a794f2b": "3b85c233a996c2bdd07f8458231846e3",
".git/objects/46/3db3ba0cbeb99c579da9533818ecfa7487fffe": "f2b361658729d758bc6ed6fb1eb3af90",
".git/objects/46/3745ace343f55b3c7e8b9caebf2cd8e8e1933e": "4fa330abf70ac816f324a5530b27a1fa",
".git/objects/2c/575622a85f0821845d78983957cf4714520bb9": "18f52aa5b0686dc324f7ebd4b3c95be4",
".git/objects/79/24bc8dce9e073828a44b686e26eed3572aa01e": "d3838e332c175926bde6888952194781",
".git/objects/79/89f071e2623515594ec1df5f0f180ae44287fd": "ca6af27d879203ec3d8b445e3ef36642",
".git/objects/1b/2ca4b80178e7d25b0d524bc57732e0b4b8b4bd": "28d3116fa93f0ec51c0bb740b241cf9e",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/82/bb128dab5b96ae6754671ce9c25b697428e851": "d944b44d7e4034ed186e20672ea82ce7",
".git/objects/49/400373e4a41ef2d751af91895c39c740d97b4d": "5c12605f8fe640b76118684a1dc24592",
".git/objects/40/3c4b48a53f686a85a853fb3be135c7834b901a": "4b22d510e608323168439c14ddd04df5",
".git/objects/2b/f649962bca56ccee7ac6e4d22d5ae286f7cb75": "42100441e14853e837c85013b78b00a4",
".git/objects/7a/58669d38ec556820cdf2a975d4891efb558cc1": "577834cda7c4a31aac8b101691a14f7f",
".git/objects/22/e415b4ec32cccd7bc18e267cd7e8014a8667dd": "d3fa8c8bd68da1df62fefd4e04b12ac3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "afeaf454ed0656fb9c4bb3ac54ea5dcc",
".git/logs/refs/heads/master": "afeaf454ed0656fb9c4bb3ac54ea5dcc",
".git/logs/refs/remotes/origin/master": "b90c2d0c458d1eb24e9525a719abb485",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "6dec59ce2dafe0252f852265a63926be",
".git/refs/remotes/origin/master": "6dec59ce2dafe0252f852265a63926be",
".git/index": "8b2eaf962d8563665c87b3690c99d2d7",
".git/COMMIT_EDITMSG": "3cd132638bdd53d3b1811ec03fe01a5f",
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
"assets/images/webrazzicover.png": "cd57764355ecdd7422e8a33390e94241",
"assets/images/turkiyepetrollericover.png": "c4f430109530050747a49817517e6ad6",
"assets/images/coinycover.png": "d26d77d71b46dca3390597b16139a351",
"assets/images/colendicover.png": "0cccd1ac6924f513ed1e8e261c5a12b0",
"assets/AssetManifest.json": "3b69140657d9888ad1798de0dbc4f2d6",
"assets/NOTICES": "56af1de051e607d7ed9a1409502636c8",
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
