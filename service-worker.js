/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5b3efd432be08eb1b02675c62ad47a62"
  },
  {
    "url": "about/index.html",
    "revision": "d49597237289ffc63089ca1e73b5f185"
  },
  {
    "url": "assets/css/0.styles.d23d1cb3.css",
    "revision": "047d1232c0d0b95128ebc5b574929f84"
  },
  {
    "url": "assets/img/20210504232903733_21754.154fe2fa.png",
    "revision": "154fe2fa2571f00028ff90e1a370553a"
  },
  {
    "url": "assets/img/20210504232916100_32581.3f3d4455.png",
    "revision": "3f3d4455a008305017b00ac2aeb57218"
  },
  {
    "url": "assets/img/20210504232933620_831.8cd60972.png",
    "revision": "8cd609724c35c0a05c6b5c152d0ef0d6"
  },
  {
    "url": "assets/img/20210504232947150_26226.8a7b9ba1.png",
    "revision": "8a7b9ba10b6fd6b9df3ca478dbd835b8"
  },
  {
    "url": "assets/img/20210504233043285_18531.ad77e986.png",
    "revision": "ad77e98634415b6232528994972e0b0b"
  },
  {
    "url": "assets/img/20210504233111329_13597.e4a58e66.png",
    "revision": "e4a58e664d19a244e8f57bbb4a8a01d3"
  },
  {
    "url": "assets/img/20210504233207196_22456.a39608e3.png",
    "revision": "a39608e3ff105a09a8d3a093d531bf92"
  },
  {
    "url": "assets/img/20210504233348563_5517.98348962.jpg",
    "revision": "983489620dabd58cd11a6785648ccbfb"
  },
  {
    "url": "assets/img/20210504233424425_16675.cb3cbd9e.png",
    "revision": "cb3cbd9ebee2138f38fdd93184dfeecd"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c323c844.js",
    "revision": "7cd60b492b2abed98e0db17d520f315d"
  },
  {
    "url": "assets/js/10.2219a54c.js",
    "revision": "4ef430d2d3bf0f68cf0bc0bd536d6ade"
  },
  {
    "url": "assets/js/11.2f7fb56e.js",
    "revision": "3af573c8a5b64a4bc6648f3e6f04f18b"
  },
  {
    "url": "assets/js/12.7a883269.js",
    "revision": "9922bb75eda202032ca5c0ae64c2bb4c"
  },
  {
    "url": "assets/js/13.f790ec4d.js",
    "revision": "2e09d2c4b1b0052608d5ad6ee1b092bc"
  },
  {
    "url": "assets/js/14.0781c2bd.js",
    "revision": "419abeb5c9b25e8d704ac3b8bc633a4a"
  },
  {
    "url": "assets/js/15.9d58985c.js",
    "revision": "7759b426223beb0291c8e940585511db"
  },
  {
    "url": "assets/js/16.615d6008.js",
    "revision": "1069c1a0e967f06dc9e026c0671495fb"
  },
  {
    "url": "assets/js/17.c26d561f.js",
    "revision": "bebbc400c6cfaf687fd39943d1c54cb1"
  },
  {
    "url": "assets/js/18.2630b6b6.js",
    "revision": "420250187bf165cda2c2c4ccb733bc4f"
  },
  {
    "url": "assets/js/19.ffafd2ec.js",
    "revision": "aad0ed278c28c0d28d91bea50b8445fb"
  },
  {
    "url": "assets/js/20.f8947ea2.js",
    "revision": "acc641d3e99d82ca8f83c9ae287f697b"
  },
  {
    "url": "assets/js/21.c0ee7af2.js",
    "revision": "7d9317833578cafb6751ddd9bcc1ed68"
  },
  {
    "url": "assets/js/3.d8807cbc.js",
    "revision": "25a44b96acdc828d712b6e308dd3af61"
  },
  {
    "url": "assets/js/4.75354658.js",
    "revision": "5ab8bf66aa9f333210798931024affec"
  },
  {
    "url": "assets/js/5.a62847ae.js",
    "revision": "897033eee9ab7b6532b993b75b0edae4"
  },
  {
    "url": "assets/js/6.35e36832.js",
    "revision": "9971030ea62bbf4d53f0a4d2d8c8486c"
  },
  {
    "url": "assets/js/7.7098a551.js",
    "revision": "ca53cd6cbaac91642671d9255bc71e5f"
  },
  {
    "url": "assets/js/8.3114726c.js",
    "revision": "2cba3ad9933f6376a835534d0e572d61"
  },
  {
    "url": "assets/js/9.23793bce.js",
    "revision": "1bd5822f05e2689bab040c71c2c893fe"
  },
  {
    "url": "assets/js/app.0f51556c.js",
    "revision": "32d39da0f3a0b28d4e08d67163ce45ff"
  },
  {
    "url": "avatar.png",
    "revision": "4b75818653c5a055041a037933f299ad"
  },
  {
    "url": "categories/index.html",
    "revision": "1b4461325c9a874c86b3ef5f2e79c031"
  },
  {
    "url": "categories/人生/index.html",
    "revision": "6e564057cfe948417c05546e2a192696"
  },
  {
    "url": "categories/心理学/index.html",
    "revision": "8454696f556b30acdaa18a5074473aa4"
  },
  {
    "url": "categories/折腾/index.html",
    "revision": "cd5fad9dbbd85230ff3a18cced20392f"
  },
  {
    "url": "categories/教程/index.html",
    "revision": "3154ebd361d2f98fe5ea51b2f10f7a40"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "27cbafbab99fb780a8cf55c994d52021"
  },
  {
    "url": "note/c-pointer.html",
    "revision": "6f490d2033478f6e7b957e32c113fd61"
  },
  {
    "url": "note/create-blog.html",
    "revision": "1b2fbedd05d129236c5111f13899827b"
  },
  {
    "url": "note/create-linux-iscsi-server.html",
    "revision": "3ba25b6bf085d189311d28f9bc9f904a"
  },
  {
    "url": "note/markdown-learning.html",
    "revision": "a3d9cb7cd56b5af48a2385e425bd4d5b"
  },
  {
    "url": "note/mount-cifs-in-android.html",
    "revision": "42cda072a4cc7a0d87acb80cf35f50b3"
  },
  {
    "url": "note/my-musical-journey.html",
    "revision": "7fdc26035252d1f758d3fe2f87dd0615"
  },
  {
    "url": "note/psychology-of-music-preference.html",
    "revision": "7751231f491a02867c02726c76649a91"
  },
  {
    "url": "note/something-importent.html",
    "revision": "fb664e3158403908a72845248f4856eb"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/Android/index.html",
    "revision": "b6f72357e2280f374ec6bc5d9ab44b28"
  },
  {
    "url": "tag/C++/C/index.html",
    "revision": "08aa0641f4a35c8e2f40a6d824cdb38b"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "32856771ff11c45028cc9f750f87e149"
  },
  {
    "url": "tag/index.html",
    "revision": "0024d009e8b499036156c16d0632b0e4"
  },
  {
    "url": "tag/ISCSI/index.html",
    "revision": "a3ae5c4b02f171b3d3ce59eec53fb1d6"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "d25999d9553a77b61c5b99e6de37e42c"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "dc1c5791516b816c7a4677cf49c1ede3"
  },
  {
    "url": "tag/心理学/index.html",
    "revision": "5a63d8f48f2b54cef05eabe5ab23ce75"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "6418403ea595bac8869870eaec1171d4"
  },
  {
    "url": "tag/胡思乱想/index.html",
    "revision": "e06033444f206abb8dc3d644baeec06b"
  },
  {
    "url": "tag/记录/index.html",
    "revision": "abbf534656b463daa78c6da086eafbbe"
  },
  {
    "url": "test/test.html",
    "revision": "9feb7db7622a41d31531d001368c558f"
  },
  {
    "url": "timeline/index.html",
    "revision": "4ebe2c87f44ed0a665d1bc5e7ed11e40"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
