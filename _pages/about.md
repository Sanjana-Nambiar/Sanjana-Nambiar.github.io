---
permalink: /
title: "Hi! 👋🏼"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="role-rotator" data-roles='["AI/ML Researcher","Product Manager","Data Scientist","AI Security Engineer"]'>
  <span class="role-rotator__text">AI/ML Researcher</span>
</div>

<div class="stats">
  <div class="stat">
    <div class="stat__num"><span class="count" data-target="6">0</span><span class="unit">+</span></div>
    <div class="stat__label">Research projects</div>
  </div>
  <div class="stat">
    <div class="stat__num"><span class="count" data-target="2">0</span></div>
    <div class="stat__label">Peer‑reviewed papers</div>
  </div>
  <div class="stat">
    <div class="stat__num"><span class="count" data-target="3">0</span></div>
    <div class="stat__label">Hackathon awards</div>
  </div>
  <div class="stat">
    <div class="stat__num">2025</div>
    <div class="stat__label">Graduated</div>
  </div>
</div>

I’m **Sanjana Nambiar**, a Computer Science graduate from NYU Abu Dhabi with minors in Applied Mathematics and Engineering. My interests lie in **AI/ML security**, **privacy in AI systems**, **AI alignment**, and **optimization** techniques for building robust and ethical models. I’m also passionate about **product development** and **AI workflow optimization**, with hands‑on experience bridging research and real‑world impact.

In June 2025, I presented my bachelor thesis at the Security in Machine Learning and its Applications (SiMLA 2025), co‑located with ACNS 2025 in Munich. You can view the [slides](https://docs.google.com/presentation/d/1YXF5duFIcuPsV7E2arLNwX-EGhgvRXhgTqOktDS_XZE/edit?usp=sharing) and the [paper](https://sanjana-nambiar.github.io/files/SiMLA-2-main.pdf) *(to appear in Springer LNCS post‑proceedings).*

For more, check out **[Publications](/publications/)**, **[Projects](/projects/)** or **[CV](/cv/)**.

{% raw %}
<script>
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

    // ===== Stat counters (fire once when visible) =====
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
</script>
{% endraw %}
