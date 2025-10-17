(function () {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(initCarousel);

  function initCarousel(root) {
    const track  = root.querySelector('.carousel-track');
    const slides = Array.from(root.querySelectorAll('.carousel-slide'));
    if (!track || slides.length === 0) return;

    let nav = root.querySelector('.carousel-nav');
    if (!nav) {
      nav = document.createElement('div');
      nav.className = 'carousel-nav';
      root.appendChild(nav);
    }
    nav.innerHTML = '';
    const dots = slides.map((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `Ir a la diapositiva ${i + 1}`);
      nav.appendChild(b);
      return b;
    });

    const count = slides.length;

    // ⬇️ Layout correcto: el track mide 100% * N y cada slide 100% / N
    function layout() {
      track.style.width = `${count * 100}%`;
      slides.forEach(s => (s.style.flex = `0 0 ${100 / count}%`));
    }
    layout();

    let index = 0;

    // ⬇️ Desplazamiento correcto: mover 100/N por slide
    function go(i) {
      index = (i + count) % count;
      track.style.transform = `translateX(-${index * (100 / count)}%)`;
      dots.forEach((d, di) => d.classList.toggle('active', di === index));
    }

    dots.forEach((d, i) => d.addEventListener('click', () => go(i)));

    const ensureFirstPaint = () => requestAnimationFrame(() => go(0));

    const imgs = root.querySelectorAll('img');
    let remaining = imgs.length;
    if (remaining === 0) {
      ensureFirstPaint();
    } else {
      imgs.forEach(img => {
        if (img.complete) {
          if (--remaining === 0) ensureFirstPaint();
        } else {
          img.addEventListener('load',  () => { if (--remaining === 0) ensureFirstPaint(); }, { once:true });
          img.addEventListener('error', () => { if (--remaining === 0) ensureFirstPaint(); }, { once:true });
        }
      });
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) setInterval(() => go(index + 1), 4000);

    window.addEventListener('resize', layout);
  }
})();
