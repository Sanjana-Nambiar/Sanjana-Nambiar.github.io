(function () {
  const onReady = (fn) =>
    document.readyState !== 'loading'
      ? fn()
      : document.addEventListener('DOMContentLoaded', fn);

  onReady(() => {
    // ===== Role rotator =====
    const rotatorEl = document.querySelector('.role-rotator');
    const textEl = rotatorEl?.querySelector('.role-rotator__text');
    let roles = [];

    if (rotatorEl) {
      const raw = rotatorEl.getAttribute('data-roles') || '[]';
      try { roles = JSON.parse(raw); }
      catch (e) { console.warn('role-rotator: JSON parse failed:', raw, e); }
    }

    if (
      textEl &&
      roles.length > 1 &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      let i = 0;
      setInterval(() => {
        i = (i + 1) % roles.length;
        textEl.classList.add('fade-out');
        setTimeout(() => {
          textEl.textContent = roles[i];
          textEl.classList.remove('fade-out');
        }, 220);
      }, 1600);
    }

    // ===== Stat counters =====
    const counters = Array.from(document.querySelectorAll('.stat .count'));
    if (counters.length) {
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      function animate(el, target) {
        target = Number(target) || 0;
        const start = performance.now(), duration = 1200;
        function tick(now) {
          const p = Math.min(1, (now - start) / duration);
          el.textContent = Math.round(target * ease(p));
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }

      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            io.unobserve(e.target);
            animate(e.target, e.target.dataset.target);
          });
        }, { threshold: 0.3 });
        counters.forEach((c) => io.observe(c));
      } else {
        counters.forEach((c) => animate(c, c.dataset.target));
      }
    }
  });
})();
