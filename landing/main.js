// Mesa landing: scroll-linked parallax, sticky-phone steps, nav state.
// data-speed  = vertical parallax. Positive = farther (lags behind the page), negative = nearer (moves faster).
// data-xspeed = horizontal drift tied to scroll (category band).
// A layer's host is its closest [data-host] ancestor (or its parent); offset is measured from the host's center to the viewport's center.
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const nav = document.querySelector('.nav');
  const layers = [...document.querySelectorAll('[data-speed], [data-xspeed]')];
  const hosts = new Map(layers.map(el => [el, el.closest('[data-host]') || el.parentElement]));
  let raf = 0;

  function paint() {
    raf = 0;
    const vh = window.innerHeight;
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
    if (reduce.matches) return;
    for (const el of layers) {
      const r = hosts.get(el).getBoundingClientRect();
      if (r.bottom < -300 || r.top > vh + 300) continue;
      const c = r.top + r.height / 2 - vh / 2;
      if (el.dataset.speed) el.style.setProperty('--py', (-c * parseFloat(el.dataset.speed)).toFixed(1) + 'px');
      if (el.dataset.xspeed) el.style.setProperty('--px', (c * parseFloat(el.dataset.xspeed)).toFixed(1) + 'px');
    }
  }
  const request = () => { if (!raf) raf = requestAnimationFrame(paint); };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  reduce.addEventListener?.('change', () => { layers.forEach(el => { el.style.removeProperty('--py'); el.style.removeProperty('--px'); }); request(); });
  paint();

  // "How it works": the pinned phone follows the active step.
  const steps = [...document.querySelectorAll('.step')];
  const shots = [...document.querySelectorAll('#phone .screen img')];
  const fill = document.getElementById('rail-fill');
  const rail = document.getElementById('steps');
  function activate(i) {
    steps.forEach((s, k) => s.classList.toggle('is-on', k === i));
    shots.forEach((img, k) => img.classList.toggle('is-on', k === i));
    if (fill && rail) {
      const target = steps[i].offsetTop + steps[i].offsetHeight / 2;
      fill.style.height = Math.max(0, target - 18) + 'px';
    }
  }
  if ('IntersectionObserver' in window && steps.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) activate(steps.indexOf(e.target)); });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    steps.forEach(s => io.observe(s));
    activate(0);
  }
})();
