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
    "revision": "640b6cdaac176b3340bb2a896cb32e1d"
  },
  {
    "url": "About/about.html",
    "revision": "95e1d128f0cea938695aedc5b166f004"
  },
  {
    "url": "About/index.html",
    "revision": "e3de3e2cfd3188ca00329660fe480373"
  },
  {
    "url": "assets/css/0.styles.c7120718.css",
    "revision": "471c8ee65dc80d7a42e53b8b56e49a56"
  },
  {
    "url": "assets/img/doudou.png",
    "revision": "d679bedefaf5e2e2398503441ed2a5db"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "c6a069741931a20497c6c275917058e7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ea714737.js",
    "revision": "ca11374cfafd9ba24fa6af5260b03931"
  },
  {
    "url": "assets/js/11.229f0623.js",
    "revision": "3e2ad728fec6d13a5d4298f3c9c34209"
  },
  {
    "url": "assets/js/12.ba875af6.js",
    "revision": "844a41345a6f5bb318d1ef91bc32c954"
  },
  {
    "url": "assets/js/13.07bd397e.js",
    "revision": "69e43562f77f9ce325c17b34a55b491c"
  },
  {
    "url": "assets/js/14.34f779a1.js",
    "revision": "6409893a325a5f14158a202b3db8a5a7"
  },
  {
    "url": "assets/js/15.5a4ee0bd.js",
    "revision": "4d439e69d0f4eefe6df215b0d29a8e46"
  },
  {
    "url": "assets/js/16.6ac8aaa1.js",
    "revision": "512fa6bc3171df685341299cca31a86f"
  },
  {
    "url": "assets/js/2.b25b2163.js",
    "revision": "eacda780834523fbdd773297fb7f3737"
  },
  {
    "url": "assets/js/3.31a95120.js",
    "revision": "bfbf57cd1dadb30fc1d0e14c813cb7e9"
  },
  {
    "url": "assets/js/4.c5f07560.js",
    "revision": "3aa137cafa7d153a5cf1e42e5243bc89"
  },
  {
    "url": "assets/js/5.a26d7ad6.js",
    "revision": "fec62a6b00e74418c7cf3ceac785e1ab"
  },
  {
    "url": "assets/js/6.93e0032a.js",
    "revision": "34c71b23bb55b59383760c643e212601"
  },
  {
    "url": "assets/js/7.c276544a.js",
    "revision": "9c8939f6b72f6cea850345a784bf4b2b"
  },
  {
    "url": "assets/js/8.0704ca3d.js",
    "revision": "cf295ab13aac42d27e3e974fe439c5c0"
  },
  {
    "url": "assets/js/9.77f622bc.js",
    "revision": "0459310c3be85ce9052289e0148939ef"
  },
  {
    "url": "assets/js/app.727647c9.js",
    "revision": "b726da492db0a576e7dbe917a39d0f76"
  },
  {
    "url": "ctf-pwn/堆栈对齐.html",
    "revision": "4e6afcac8b96501f7779c00d6b072e87"
  },
  {
    "url": "icons/t1-1.jpg",
    "revision": "e4ad0b4e0cd13b177890a365b4ddb854"
  },
  {
    "url": "icons/t1-2.jpg",
    "revision": "9ada6161399140f4faee4e1f9bcc8bd4"
  },
  {
    "url": "icons/t1-3.jpg",
    "revision": "2d983b66f74f7036c514aa00ce7f0572"
  },
  {
    "url": "icons/ts1.svg",
    "revision": "f96152140fe7897e7e9e4f96947f9d3e"
  },
  {
    "url": "index.html",
    "revision": "d6e3aecebd2b9e0dcd8c9dfce5432315"
  },
  {
    "url": "Java/java.html",
    "revision": "48a191e2030de30e578bd82a619f5db9"
  },
  {
    "url": "视觉/软件安装.html",
    "revision": "98d9aa44a307954e9afe2fca93b6372c"
  },
  {
    "url": "计算机组成原理/装机方案.html",
    "revision": "f6920533856fa35baa4b7dd915a5292f"
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
