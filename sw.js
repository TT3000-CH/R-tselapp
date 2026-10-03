/* Raetselwelt 5.4: scoped cache, fresh online shell, offline fallback. */
const BUILD='5.4-worlds-challenge-timer-1';
const ROOT=new URL('./',self.location.href);
const PREFIX='raetselwelt:'+encodeURIComponent(ROOT.pathname)+':';
const CACHE=PREFIX+BUILD;
const FILES=['index.html','logo.svg','manifest.webmanifest'];
const URLS=FILES.map(name=>new URL(name,ROOT).href);
const INDEX=URLS[0];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await Promise.all(URLS.map(async url=>{
      const response=await fetch(new Request(url,{cache:'reload'}));
      if(!response.ok)throw new Error('Required app file unavailable: '+url);
      await cache.put(url,response);
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));
    // Never erase localStorage or caches belonging to another Pages application.
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const request=event.request;if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;
  const canonical=url.origin+url.pathname;
  const isHome=request.mode==='navigate'&&(url.pathname===ROOT.pathname||canonical===INDEX);
  if(!isHome&&!URLS.includes(canonical))return;
  const key=isHome?INDEX:canonical;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    try{
      const response=await fetch(new Request(request,{cache:'no-cache'}));
      if(response.ok)await cache.put(key,response.clone());
      return response;
    }catch(error){
      const cached=await cache.match(key);
      return cached||new Response('Offline: Bitte die App einmal mit Internetverbindung oeffnen.',{
        status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}
      });
    }
  })());
});
