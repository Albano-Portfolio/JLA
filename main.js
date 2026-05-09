/* =============================================
   JASON L. ALBANO — PORTFOLIO JAVASCRIPT
   Handles: nav scroll, reveal animations,
   skill bar animations, mobile menu
============================================= */

(function () {
  'use strict';

  // ─── NAV SCROLL EFFECT ───────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // ─── MOBILE MENU ─────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  // ─── INTERSECTION OBSERVER: REVEAL-UP ────────
  const revealElements = document.querySelectorAll('.reveal-up');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay for grid children
        const siblings = entry.target.parentElement.querySelectorAll('.reveal-up');
        let delay = 0;
        siblings.forEach((el, idx) => {
          if (el === entry.target) delay = idx * 80;
        });
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ─── INTERSECTION OBSERVER: SKILL BARS ───────
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Small delay so the card reveal animation completes first
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, 200);
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(el => skillObserver.observe(el));

  // ─── SMOOTH SCROLL FOR NAV LINKS ─────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72; // nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── TIMELINE DOT HOVER EFFECT ───────────────
  document.querySelectorAll('.timeline-item').forEach(item => {
    const dot = item.querySelector('.timeline-dot');
    item.addEventListener('mouseenter', () => {
      if (!dot.classList.contains('current-dot')) {
        dot.style.borderColor = 'var(--gold)';
        dot.style.background = 'var(--ink-light)';
      }
    });
    item.addEventListener('mouseleave', () => {
      if (!dot.classList.contains('current-dot')) {
        dot.style.borderColor = '';
        dot.style.background = '';
      }
    });
  });

  // ─── STAT NUMBER COUNTER ANIMATION ───────────
  function animateCounter(el, target, duration) {
    const start = performance.now();
    const isFloat = target % 1 !== 0;
    const update = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease out
      const value = Math.round(eased * target);
      el.textContent = value + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const statNums = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const num = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/[0-9]/g, '');
        el.dataset.suffix = suffix;
        animateCounter(el, num, 1200);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statObserver.observe(el));

})();
