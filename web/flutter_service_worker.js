'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "15f73b7e8a8209c2206210b3ac8dea1b",
"assets/AssetManifest.json": "7bfacaa05531933270ee9d77489b9f8b",
"assets/assets/widgets/issue_24.json": "ce819747a12097fcf29f1d6545ae5a61",
"assets/assets/images/visa.svg": "45180370eb48dfdbdf59b3be4a3c0b59",
"assets/assets/images/image11.jpg": "7cc720ee31b70b43b17bc85c8925ba78",
"assets/assets/images/image14.jpg": "1cabc1330ae62e177103c9afe088277a",
"assets/assets/images/image5.jpg": "8d9babc0336b7855a0e32ddb04974793",
"assets/assets/images/image13.jpg": "447faeebf8c418128e7837f0c7771aa3",
"assets/assets/images/image17.jpg": "9a5ceb6a65fc25de9b997bb2d9e12013",
"assets/assets/images/image12.jpg": "fc5f5ce6cc1839caceba61dea24dfd97",
"assets/assets/images/image3.jpg": "c82a612fb7053c3036dfb31160a69d44",
"assets/assets/images/image16.jpg": "2453145aa04982321678b360448a7224",
"assets/assets/images/image7.jpg": "e17532bdf7cfbb7c7def0aa13732d1d7",
"assets/assets/images/image9.jpg": "d4bca3468f462344ec7848569d428f6f",
"assets/assets/images/image8.jpg": "143b8d86b86c4e9a9d534a2571644c9c",
"assets/assets/images/image10.jpg": "182da97ea5d0f162c77919451e1adc34",
"assets/assets/images/image4.jpg": "534ce2f5ff5e40e97adee7e8b64d1f49",
"assets/assets/images/image2.jpg": "359677aebb7126b359c557a38a45f2df",
"assets/assets/images/image15.jpg": "62265d6c8a5c180b5f8d8fd38778d4dd",
"assets/assets/images/profile.jpg": "0a07fd15b5f822a326230c211451f611",
"assets/assets/images/image6.jpg": "35041a1b17ba4dc6e39be43a192068db",
"assets/assets/images/image1.jpg": "c746344e7d2dccea6d4b7138de5317f3",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/MetalMania-Regular.ttf": "925d9f3005602e32f9ad6ccbabb730a1",
"assets/assets/pages/for_each.json": "3878e88fedd47156969d8e8e3c41c6f0",
"assets/assets/pages/list_view.json": "ffc64a252307dd45c79d9c9c6bb61eaa",
"assets/assets/pages/issue_12.json": "dbeb3dfda2da7418710ae5b6af35e66c",
"assets/assets/pages/intrinsic_height.json": "ec2247d1c677996d7c2b77c71135c404",
"assets/assets/pages/simple_page.json": "218a96e4287cb0ac7b31fc5769013697",
"assets/assets/pages/placeholder.json": "17c389915fdc7caf0a565a7176dae1d9",
"assets/assets/pages/animated_physical_model.json": "26e2f8eaa971f3cbd38fd71205315fe6",
"assets/assets/pages/slivers.json": "a2ff3ce26a79f06c5404fe70c6fd0ece",
"assets/assets/pages/fractionally_sized_box.json": "ac4c7ae9ff95d797918016e57515d595",
"assets/assets/pages/animated_align.json": "d038e95eabaa8646a8ca732a64a24eb0",
"assets/assets/pages/animated_container.json": "c78b2e16ecb0841b15ce8430da6ddcf4",
"assets/assets/pages/popup_menu_button.json": "12a875f9c7aa3569e1bb2b1f515d6cb1",
"assets/assets/pages/indexed_stack.json": "2ecc71bf0d7222826abd018119a64428",
"assets/assets/pages/buttons.json": "a84f60b56aceab20f5e69cae5425d29a",
"assets/assets/pages/switch.json": "769aeaf2027194176f82e5c4b973903d",
"assets/assets/pages/aspect_ratio.json": "1a48ae48bf258aaf4d0fbfb21d9a67f8",
"assets/assets/pages/animated_switcher.json": "f9be46c7952e9e2cc320f1dfc9cbb8fa",
"assets/assets/pages/circular_progress_indicator.json": "4f696c1ada9aae3eef306dca0274a0dd",
"assets/assets/pages/gestures.json": "3323d8abcf022fc28584227db8cbb937",
"assets/assets/pages/form.json": "f8aebc1453c20acaa72fd78a7a5e89b1",
"assets/assets/pages/animated_cross_fade.json": "7fff44f9a330e062c3380bce6a73773a",
"assets/assets/pages/animated_padding.json": "162843eb88d0bcb7f5222ff8e3f07bc4",
"assets/assets/pages/animated_size.json": "0b3213b706bab20dae079cce215fe245",
"assets/assets/pages/conditional.json": "9e08ac72862b218e019e70c31e464712",
"assets/assets/pages/align.json": "b485f4a4f73d9326d3c001ecd391febe",
"assets/assets/pages/length.json": "56960f54e47b1fbd7d13a65b6d469160",
"assets/assets/pages/animated_default_text_style.json": "5decf6e3f7407bc0d4250fb6e97d8c2c",
"assets/assets/pages/cupertino_switch.json": "6b66e7e2e55beefb09d9929406ee5db1",
"assets/assets/pages/card.json": "bcc0bdee15e86e0b3db7536fc6ef2336",
"assets/assets/pages/tween_animation.json": "4b0e7efb6c633c58e9177d9a513d4618",
"assets/assets/pages/issue_10.json": "d9eeb00702bbfd5caffce11e4587d968",
"assets/assets/pages/semantics.json": "96271c9683196d70a34948f2d9c33eb1",
"assets/assets/pages/overflow_box.json": "fb08fc868d15965009f4820335484c44",
"assets/assets/pages/issue_30.json": "9c5b3a03d237b9cd08f852205f74f23c",
"assets/assets/pages/measured.json": "1bd9ca64c33eac6250edec1ec285b527",
"assets/assets/pages/fitted_box.json": "99c069d207b4253f3193e5365b8d32ed",
"assets/assets/pages/issue_20_list.json": "a3dad9cf46904eb0f4d7a7a5abbe3367",
"assets/assets/pages/checkbox.json": "178ec66d1d4f5af1dcca14da46a1e3f4",
"assets/assets/pages/tooltip.json": "202ac79237a2da9c91f44fe5020d929e",
"assets/assets/pages/interactive_viewer.json": "14e65ff967c97908bb9ee30130c6e078",
"assets/assets/pages/center.json": "b9fae0ffc52b196ed2a8107113d2e794",
"assets/assets/pages/opacity.json": "03db9231df110e1534e83cd0759cbc94",
"assets/assets/pages/variables.json": "4f1afb40667296ae0deb48bd8e32975b",
"assets/assets/pages/asset_images.json": "39a8f965d7439e229de7731893dc54de",
"assets/assets/pages/issue_11.json": "314308857d863065aed0aebb2907e4e8",
"assets/assets/pages/dynamic.json": "70a11bf3e8ad6940e6c972b86c527a8e",
"assets/assets/pages/limited_box.json": "d789904eeeb04a93ddd1f916b8e6cfcf",
"assets/assets/pages/baseline.json": "3fe9abf09a5af2695fd73c3692113a22",
"assets/assets/pages/linear_progress_indicator.json": "aa27d81870d32a4170afcf0143d841d5",
"assets/assets/pages/bank_example.json": "115d08071a934c2e118ca367bbb19e5c",
"assets/assets/pages/layout_builder.json": "97c0aa35bd8535d7ce784401db87d687",
"assets/assets/pages/intrinsic_width.json": "b2bd3074dd64f3840eee72211a6476cf",
"assets/assets/pages/scroll_view.json": "3e4ab9f1ab4e4c5299ea45a4e084ffd8",
"assets/assets/pages/image_page.json": "72142c752c014a6c0ef5f241ab3f80f2",
"assets/assets/pages/decorated_box.json": "bc51bd8f7facba4ee026d88a9e19af75",
"assets/assets/pages/animated_positioned.json": "dcb6519bb9c3b6933cb2356bfa3dbdcb",
"assets/assets/pages/offstage.json": "98f245ed0cb1a3f861a9b96d65a6ba24",
"assets/assets/pages/directionality.json": "6835c8e2dd7c38f2851732b53e51c6ec",
"assets/assets/pages/animated_opacity.json": "11a223d39638c417e3da84e02e82d4b3",
"assets/assets/pages/input_error.json": "0c2394bf170ae3e93fd44a7bf1975d4b",
"assets/assets/pages/issue_20_single.json": "31d96ed15fca633d7aa220197c102060",
"assets/assets/pages/set_default_value.json": "0d43bbd4b6676d2cefad47c4e26403d7",
"assets/assets/pages/grid_view.json": "2fdcbba74b73d46bc9aedcac67bcf17b",
"assets/assets/pages/clips.json": "6825da65d4813ac561b0f6487a9a5e05",
"assets/assets/pages/fractional_translation.json": "bd3b6afe62d8f9ce632ced50c5a4e52c",
"assets/assets/pages/animated_positioned_directional.json": "e694404c903e38a2b5691f511a3b95c5",
"assets/assets/pages/images.json": "a1d2f8925f0a6b26dbe1478deaee9eca",
"assets/assets/pages/theme.json": "69b78a1a8b08216167ad76957cbb38e2",
"assets/assets/pages/wrap.json": "6ac47e1a63fc1d34575d9ebfd7aac835",
"assets/assets/pages/animated_theme.json": "b1691a72dfba17e1dfcad52bb25d68a7",
"assets/NOTICES": "4f30b64fd4c4a70eb42cb576c7036f23",
"assets/FontManifest.json": "b7320a7ef5ad634fc22b163a16c8a309",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"index.html": "f044a5dc98ca1457e673ed213258b2ac",
"/": "f044a5dc98ca1457e673ed213258b2ac",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "6a0049a6cb24fc2a1fa9e212036d8104",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
