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

<!-- <div class="stats">
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
</div> -->

I’m **Sanjana Nambiar**, a Computer Science graduate from NYU Abu Dhabi with minors in Applied Mathematics and Engineering. My interests lie in **AI/ML security**, **privacy in AI systems**, **AI alignment**, and **optimization** techniques for building robust and ethical models. I’m also passionate about **product development** and **AI workflow optimization**, with hands‑on experience bridging research and real‑world impact.

In June 2025, I presented my bachelor thesis at the Security in Machine Learning and its Applications (SiMLA 2025), co‑located with ACNS 2025 in Munich. You can view the [slides](https://docs.google.com/presentation/d/1YXF5duFIcuPsV7E2arLNwX-EGhgvRXhgTqOktDS_XZE/edit?usp=sharing) and the [paper](https://sanjana-nambiar.github.io/files/SiMLA-2-main.pdf) *(to appear in Springer LNCS post‑proceedings).*

For more, check out **[Publications](/publications/)**, **[Projects](/projects/)** or **[CV](/cv/)**.

<script>
document.addEventListener('DOMContentLoaded', function () {
  // ---- Role rotator ----
  const rotator = document.querySelector('.role-rotator');
  if (rotator) {
    const roles = JSON.parse(rotator.getAttribute('data-roles') || '[]');
    const span  = rotator.querySelector('.role-rotator__text');
    let i = 0;
    function nextRole(){
      i = (i + 1) % roles.length;
      span.classList.add('fade-out');
      setTimeout(()=>{ span.textContent = roles[i]; span.classList.remove('fade-out'); }, 220);
    }
    if (roles.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInterval(nextRole, 1600);
    }
  }

  // ---- Stat counters (fire once when visible) ----
  const counters = document.querySelectorAll('.stat .count');
  if (!counters.length) return;

  const ease = t => 1 - Math.pow(1 - t, 3);
  function animate(el, target){
    const start = performance.now(), duration = 1200;
    function tick(now){
      const p = Math.min(1, (now - start)/duration);
      el.textContent = Math.round(target * ease(p));
      if (p < 1) requestAnimationFrame(tick);
      else {
        // append trailing + if present in sibling .unit
        const unit = el.parentElement.querySelector('.unit');
        if (unit && !unit.dataset.locked){ unit.dataset.locked = '1'; }
      }
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        animate(e.target, parseFloat(e.target.dataset.target));
      });
    }, { threshold: 0.3 });
    counters.forEach(c=>io.observe(c));
  } else {
    counters.forEach(c=>animate(c, parseFloat(c.dataset.target)));
  }
});
</script>
