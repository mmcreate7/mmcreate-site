/* Cloudflare Web Analytics。自分の閲覧は ?mmc-internal=1 を一度開くと、そのブラウザでは数えない（?mmc-internal=0 で解除） */
(function(){
  var KEY = "mmc-internal";
  try {
    var q = new URLSearchParams(location.search).get(KEY);
    if (q === "1") localStorage.setItem(KEY, "1");
    if (q === "0") localStorage.removeItem(KEY);
    if (localStorage.getItem(KEY) === "1") return;
  } catch (e) {}
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", '{"token": "e55a5ba713c8410a937f899c57e3e167"}');
  document.head.appendChild(s);
})();
