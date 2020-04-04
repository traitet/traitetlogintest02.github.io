'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "4b09a5b193fded1b7c05065b0ab5a4c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "391d4d7720a1ece9b691b96949d6abac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5feab9754d96a02f11c5251d14590906",
".git/logs/refs/heads/master": "5feab9754d96a02f11c5251d14590906",
".git/logs/refs/remotes/origin/master": "04cb48fec87945ec0a7af89eb91cf434",
".git/objects/03/c2c4ec6330763254e4f9ee819d900a4d371be1": "2ec382cfbe1af12603321c6dabb7e29a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/8a9bf018df5bbebf1d16ce8441f8f5296d5ef2": "55125b5cdeb5dd41650410d7ca516a20",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/6bead5e723f49e674dd2aad7d09fe36045f91f": "e7200d0e70169aa9b82ceb9d2a1a9b85",
".git/objects/1d/2c0157cdb3837d88fe6fae13e36ad56ba9bdee": "3a42a7b1f6fa6c7d3f8c721f814b52dc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4d/5c1d0273db712ac36d904b31cfcc229acafd3b": "a74b6c3c134fdee4176801369039cd6a",
".git/objects/6d/795e10fa7f910ee09ecbf8f6a13bbd203c1dd5": "c0374b4abb5b0695faf9b70dbd984a55",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5e7653476bf2b7ebfeb775e858154b8c488731": "ca6f9497559e4a6972b32020e1def768",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a9/bae2ddc9a5e8055761f16b39ec293a6677dbcf": "8e8ee4dad7940aab316149cbce137843",
".git/objects/af/192d4d79d7fe298017ae236fbd2f5510cdc45d": "1fb9c05dcd0f239f82923aa5714b975e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/af912ec8babf082107fc0747d3ae1331b857ed": "33c6dde577def8912a9415d40dc972be",
".git/objects/cb/e16d2b0abde94e03964cd0641a76515eaf9ec6": "22239ee0b4e0f190361c9c23ef09f4e3",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e4/3b71c1f207491ace58e7be71e0b3bb6bb79de9": "8817365e2b57e0893f56fc532048776a",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "75078cbe21615948b2a361e3c063e723",
".git/refs/remotes/origin/master": "75078cbe21615948b2a361e3c063e723",
"assets/AssetManifest.json": "a922892ea989fdcb43c16552dd3c5e83",
"assets/assets/CustomIcons.ttf": "64caf37b7f49a015d499d4b2832df9d8",
"assets/assets/images/bg01.jpg": "e613b9de2ebcbc6368328d1f9a0d20b7",
"assets/assets/images/bg02.jpg": "ecfab4a3a31b6e75bd8990775e0e5a10",
"assets/assets/images/bg_login.jpg": "4c17edf78a83ce7d542a80cfc31d0fbf",
"assets/assets/Poppins-Bold.ttf": "2f55e0d4b3f9eb3ffaefdac379fa3f8b",
"assets/assets/Poppins-Medium.ttf": "5bfdccef795165b1f9ab9a3193b2aca1",
"assets/FontManifest.json": "0094952eba8c7c945e4220a155078bae",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "14d4b25f874c2a5e70f1f822895c70ae",
"main.dart.js": "287410fe5a16147e49567139fedf961d",
"manifest.json": "88fceb9fa3f83ff723cd3edac4d0269c",
"README.md": "53bc50a1befd4519a216b793dfc1456e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
