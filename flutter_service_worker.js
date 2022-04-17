'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1e608a04629dafd8e2e0e432023482b4",
"assets/assets/images/ab_crunches.webp": "33a9a6b057eff61fd52153dc02e7eb20",
"assets/assets/images/ab_crunchs.jpg": "e278e1d8c36ad9ab78a6b83530f36832",
"assets/assets/images/adho_mukha_shvanasana.jpg": "da8b345be54a99d56392eb1d93c1529b",
"assets/assets/images/adho_mukha_svana_asana.jpg": "fba1962447ad984d6cce985a91054f4e",
"assets/assets/images/anjaney_asana.jpg": "a6d4388c3e0574af08adc6b92572da70",
"assets/assets/images/ardha_matsyendra_asana.webp": "4710c2a9dea8fe4e74941e810215caf6",
"assets/assets/images/arm_raise_situps.webp": "02393c302607da76f909a89cc2fefecf",
"assets/assets/images/ashtanga_namaskara.jpg": "9ec0c6a5f96febd2640765f41cd01990",
"assets/assets/images/ashtanga_namaskara1.jpg": "b6427c548e4c84c4e568da3653909f85",
"assets/assets/images/ashwa_sanchalana_asana.jpg": "a2b8fd83186b29e90d70ed3f8b477564",
"assets/assets/images/bear_hug.jpg": "be6148f7e28f8d3aeec903a35299db1e",
"assets/assets/images/bhujanga_asana.jpg": "92ea6db50b55b3519a5cc858305582d1",
"assets/assets/images/bodyweight_squat.jpg": "75485436d0b7fce8352e2c77517788db",
"assets/assets/images/butterfly_asana.jpg": "e9fb358285dbd19174cef077fa092e2e",
"assets/assets/images/chakra_asana.png": "420a1e885d9f2aee91df6664c838fb25",
"assets/assets/images/child_pose.png": "da1c9c4790fe47448bd0a01c9c48efe8",
"assets/assets/images/danda_asana.jpg": "36b77191ac9aba078b729139b7637d01",
"assets/assets/images/exercise_abcrunch.xml": "df285ab5cf397528a593671b4ab41ca8",
"assets/assets/images/exercise_highknees.xml": "513d2b149a640e5b53a5f2cffa0b7b19",
"assets/assets/images/exercise_jumpingjacks.xml": "63ea6cbfdf4f779092d246b5cdd56479",
"assets/assets/images/exercise_lunge.xml": "965ba7005ee1cde573fb05ec25c47872",
"assets/assets/images/exercise_plank.xml": "e54e699ad25769eb891d25bcd7323207",
"assets/assets/images/exercise_pushup.xml": "5f290a718e4ada16934fd446c15fdfcb",
"assets/assets/images/exercise_pushuprotation.xml": "ccf207167a753b48c92a0342ff9902bf",
"assets/assets/images/exercise_sideplank.xml": "c9fe5d536b549110f860fc9d9cb1f2aa",
"assets/assets/images/exercise_squat.xml": "2907efd86d8656bcc5998991658d34e8",
"assets/assets/images/exercise_stepup.xml": "2449207b4b430e9534fbb5c70c16d0c5",
"assets/assets/images/exercise_tricepsdip.xml": "7418dfe0db61a708729ccb75f94b0a43",
"assets/assets/images/exercise_wallsit.xml": "bda65e0f2765e31395354593e0fca499",
"assets/assets/images/garuda_asana.jpg": "e154cc541e8ac7fcb277463a13d8d728",
"assets/assets/images/hala_asana.jpg": "93ecddf54686379bf2d2f6e7b87787da",
"assets/assets/images/hastapada_asana.jpg": "f1f02c1a08916df8e48a1fd80f58e8f0",
"assets/assets/images/hastauttana_asana.jpg": "f1d9e16cbf23366861ff7ec60942f0c9",
"assets/assets/images/hasta_uttana_asana.jpg": "eae398c53e434a59ee939f1116386b5d",
"assets/assets/images/high_kicks.webp": "ca6cd93a95c71cf2b54c835209a620f7",
"assets/assets/images/hip_thrust.jpg": "3b5f4dc7dd0ae825d397a91dff2315fc",
"assets/assets/images/incline_push_up.jpg": "04dd6931f078932f25b1756a4110f14a",
"assets/assets/images/kneeling_lat_stretch.jpg": "f87380308d30492d30bc6b2b53b1c6a4",
"assets/assets/images/knee_to_chest.gif": "8bac5f51ed4c7078d05259f078c94728",
"assets/assets/images/legs_up_the_wall_pose.png": "4c90cf02cf67f855e753ee013c0bfd94",
"assets/assets/images/lower_back_twist.jpg": "036fa09a2501d6b852aa0e401b210645",
"assets/assets/images/low_lunge.png": "6bba07689b72b2d99e81ef31301c708d",
"assets/assets/images/naga_asana.jpg": "6ad2eaa672a28e0a123b0440d48a8eca",
"assets/assets/images/neck_stretch.jpg": "cf35d9278f2782109afb523a1051341b",
"assets/assets/images/pascimottana_asana.png": "e6cc1f655cecd1d1a730b0027849e2aa",
"assets/assets/images/pranama_asana.jpg": "afac3c2bed04078c2f6860b5bb523fb4",
"assets/assets/images/pranam_asana.jpg": "2ffafd1ffa1177b7806ab7ee6e756da4",
"assets/assets/images/push_ups.webp": "fa63c2ec0ff2fd9424368e929473a86a",
"assets/assets/images/reclining_bound_angle_pose.jpg": "7b0b24c59532112f0fb676773d439538",
"assets/assets/images/rotate_head.jpg": "8eb7ab3ef0d56debaeb8994772357528",
"assets/assets/images/rotate_shoulders.jpg": "d493e43a9aca68d6a10b1c43dfc7c897",
"assets/assets/images/rotate_wrist.jpg": "d5a668198180c605dca4eceef1135515",
"assets/assets/images/seated_forward_bend.jpg": "f43b2933c39c30b99b7c25e295340571",
"assets/assets/images/sleep_time_stretches.jpg": "6e3eff3f81a68781988ae14e0787e1d6",
"assets/assets/images/urdhva_mukha_shvanasana.jpg": "93c8aaca4380e7e48417d545559a82b5",
"assets/assets/images/uttana_asana.jpg": "32b9f463c6a9e10402a3ed94b820f4fa",
"assets/assets/images/walking_lunges.png": "02509bce45e6ba7c9fbbdf5b1f5b0226",
"assets/assets/workouts.json": "20afe5882c200bb71a086bd5d238b6fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "c2bebe3641b7e93a9faa1770aa3e45ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0169bc923228ff34f792cbe52731128",
"/": "a0169bc923228ff34f792cbe52731128",
"main.dart.js": "3596b2802ebc3aa5a9c2b2ad74c1717e",
"manifest.json": "5d5f4635ec993d8cf9c2ab30a7daa959",
"version.json": "7194fe0c8f13037a5afc46a6e8eb8b14"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
