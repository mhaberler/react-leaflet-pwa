if(!self.define){let e,r={};const i=(i,n)=>(i=new URL(i+".js",n).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let c={};const d=e=>i(e,o),f={module:{uri:o},exports:c,require:d};r[o]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CJetfA0Y.js",revision:null},{url:"assets/index-t0NhmD5A.css",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"f9a1f925712cff9db1eead1fe9251db6"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"img/favicon.ico",revision:"34b03499fc7a3d16153e6b9e5b9513e2"},{url:"markers/marker-icon-2x.png",revision:"401d815dc206b8dc1b17cd0e37695975"},{url:"markers/marker-icon.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"markers/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"markers/pin-icon-end.png",revision:"7c3af6415ad2c1c03bc501ef0db430fd"},{url:"markers/pin-icon-start.png",revision:"03e932422ce5f6ce1be68aada0557424"},{url:"markers/pin-icon-wpt.png",revision:"0c6faef174039bf253be61e5cf380e45"},{url:"markers/pin-shadow.png",revision:"5094ae9c7e31b81ee102cd92d6f80187"},{url:"icons/android-chrome-192x192.png",revision:"3213d32b33a7cd2a3f85e98a8f463dba"},{url:"icons/android-chrome-512x512.png",revision:"079078c2c09c3f9f3001c2698603bf07"},{url:"icons/apple-touch-icon.png",revision:"9c6993839be5f04990f00cb294dd1e88"},{url:"manifest.webmanifest",revision:"4d3f98f7fe68cb3f8ea3af3445c32154"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
