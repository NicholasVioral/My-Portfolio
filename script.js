/* ─────────────────────────────────────────
   script.js – Portfolio interactions
───────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Hamburger / mobile nav ── */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('nav-links--open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
  }

  /* ── Close mobile nav when a link is clicked ── */
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('nav-links--open');
    });
  });

  /* ── Marquee: dynamically clone tracks to guarantee seamless loop
        even after viewport resizes. The CSS animation handles the
        visual scrolling; this JS simply ensures there is always
        enough content to fill 2× the track width.
  ── */
  function ensureMarqueeSeamless() {
    document.querySelectorAll('.marquee-track').forEach(track => {
      const items = Array.from(track.children);
      if (items.length === 0) return;

      // Remove any previously JS-added clones to avoid runaway growth
      track.querySelectorAll('[data-clone]').forEach(el => el.remove());

      const trackWidth  = track.scrollWidth;
      const parentWidth = track.parentElement.offsetWidth;

      // We need at least 2× track width to scroll seamlessly
      // The HTML already has a manual duplicate; this adds more if needed
      if (trackWidth < parentWidth * 2) {
        const fragment = document.createDocumentFragment();
        items.forEach(item => {
          const clone = item.cloneNode(true);
          clone.setAttribute('data-clone', 'true');
          clone.setAttribute('aria-hidden', 'true');
          fragment.appendChild(clone);
        });
        track.appendChild(fragment);
      }
    });
  }

  /* ── Scroll-triggered fade-in for cards ── */
  function initScrollReveal() {
    const targets = document.querySelectorAll(
      '.exp-card, .project-card, .section-title'
    );

    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything
      targets.forEach(el => el.classList.add('revealed'));
      return;
    }

    targets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach(el => observer.observe(el));
  }

  /* ── Sticky navbar shadow on scroll ── */
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 10);
    }, { passive: true });
  }


  /* ── Animated background: particle constellation ──
        Dots drift slowly, link up with thin lines when close,
        and lean toward the cursor. Pauses when the tab is hidden.
  ── */
  function initBackgroundCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const LINK_DIST   = 145;   // px between dots before a line is drawn
    const MOUSE_DIST  = 180;   // px radius of cursor influence
    const ACCENT      = '74, 222, 128';

    let width = 0, height = 0, dpr = 1;
    let particles = [];
    let rafId = null;
    const mouse = { x: -9999, y: -9999, active: false };

    function particleCount() {
      // Scale with viewport area, but keep it sane on phones and huge monitors
      return Math.round(Math.min(140, Math.max(36, (width * height) / 11000)));
    }

    function makeParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        r: Math.random() * 1.7 + 1.1
      };
    }

    function resize() {
      dpr    = Math.min(window.devicePixelRatio || 1, 2);
      width  = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width  = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = particleCount();
      while (particles.length < target) particles.push(makeParticle());
      particles.length = target;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around the edges so the field never empties out
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Gentle pull toward the cursor
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_DIST && dist > 0.5) {
            const pull = (1 - dist / MOUSE_DIST) * 0.35;
            p.x += (dx / dist) * pull;
            p.y += (dy / dist) * pull;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + ACCENT + ', 0.85)';
        ctx.shadowColor = 'rgba(' + ACCENT + ', 0.9)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Links to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q  = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d  = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(' + ACCENT + ', ' + (0.22 * (1 - d / LINK_DIST)).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Brighter link from the cursor itself
        if (mouse.active) {
          const d = Math.hypot(mouse.x - p.x, mouse.y - p.y);
          if (d < MOUSE_DIST) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = 'rgba(' + ACCENT + ', ' + (0.3 * (1 - d / MOUSE_DIST)).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    function start() {
      if (rafId === null) rafId = requestAnimationFrame(draw);
    }

    function stop() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    window.addEventListener('pointermove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }, { passive: true });

    window.addEventListener('pointerleave', () => { mouse.active = false; }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop(); else start();
    });

    start();
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', () => {
    ensureMarqueeSeamless();
    initScrollReveal();
    initNavbarScroll();
    initBackgroundCanvas();
  });

  window.addEventListener('resize', () => {
    ensureMarqueeSeamless();
  }, { passive: true });

})();
