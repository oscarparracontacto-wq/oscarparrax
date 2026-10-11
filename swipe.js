/* Móvil, páginas de proyecto: deslizar el dedo a la derecha lleva al proyecto anterior y a la izquierda al siguiente
   (misma función que las flechas laterales). No actúa sobre los carruseles ni la tira de años, que ya se deslizan solos. */
(function () {
  var prev = document.querySelector('.pnav.prev'), next = document.querySelector('.pnav.next');
  if (!prev && !next) return;
  var mq = window.matchMedia('(max-width:760px)');
  var sx = 0, sy = 0, st = 0, ok = false, going = false;
  var BLOCK = '.gallery-viewport, .rw-time, .vs-ctrl, .video-zoom-backdrop, .video-expand, input, textarea, select';
  function reset() { document.body.style.opacity = ''; document.body.style.transition = ''; going = false; }
  window.addEventListener('pageshow', reset);
  document.addEventListener('touchstart', function (e) {
    ok = false;
    if (!mq.matches || going || e.touches.length !== 1) return;
    if (document.body.classList.contains('video-open')) return;      // con el vídeo ampliado no se navega
    var t = e.touches[0], W = window.innerWidth;
    if (t.clientX < 24 || t.clientX > W - 24) return;                // los bordes son del gesto "atrás" del navegador
    if (e.target.closest && e.target.closest(BLOCK)) return;
    sx = t.clientX; sy = t.clientY; st = Date.now(); ok = true;
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (!ok) return; ok = false;
    var t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (Date.now() - st > 800 || Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.8) return;
    var a = dx > 0 ? prev : next;                                     // dedo a la derecha = anterior
    if (!a || !a.href) return;
    going = true;
    document.body.style.transition = 'opacity .16s ease';
    document.body.style.opacity = '0';
    setTimeout(function () { location.href = a.href; }, 150);
  }, { passive: true });
  document.addEventListener('touchcancel', function () { ok = false; }, { passive: true });
})();
