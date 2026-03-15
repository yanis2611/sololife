/* ═══════════════════════════════════════════════════════════
   SOLO LIFE ACADEMY — Main JS v4.0 (Premium Effects)
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var isCoarse = window.matchMedia('(pointer: coarse)').matches;

  /* ─── 1. AFFILIATE ─── */
  var params = new URLSearchParams(window.location.search);
  var ref = params.get('ref') || localStorage.getItem('sla_ref') || 'direct';
  if (params.get('ref')) localStorage.setItem('sla_ref', params.get('ref'));
  function injectRef() {
    document.querySelectorAll('input[name="ref"]').forEach(function (f) { f.value = ref; });
    document.querySelectorAll('.stripe-link').forEach(function (l) {
      var h = l.getAttribute('href');
      if (h && h !== '#') { l.setAttribute('href', h + (h.indexOf('?') !== -1 ? '&' : '?') + 'client_reference_id=' + encodeURIComponent(ref)); }
    });
  }

  /* ─── 2. NAV ─── */
  var nav = document.getElementById('nav');
  var navLinks = document.querySelectorAll('.nav-link[data-section]');
  var sections = document.querySelectorAll('section[id]');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 50); }
  var sObs = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        var id = e.target.id;
        navLinks.forEach(function (l) { l.classList.toggle('active', l.getAttribute('data-section') === id); });
      }
    });
  }, { threshold: .3, rootMargin: '-80px 0px -40% 0px' });
  sections.forEach(function (s) { sObs.observe(s); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var t = a.getAttribute('href');
    if (t === '#') return;
    var el = document.querySelector(t);
    if (!el) return;
    e.preventDefault();
    closeMobileNav();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── 3. SCROLL PROGRESS BAR ─── */
  var progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var pct = h > 0 ? (window.scrollY / h) * 100 : 0;
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }

  /* ─── 4. HAMBURGER ─── */
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.getElementById('nav-mobile');
  function closeMobileNav() {
    if (!hamburger || !mobileNav) return;
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      var o = hamburger.getAttribute('aria-expanded') === 'true';
      if (o) closeMobileNav();
      else {
        hamburger.setAttribute('aria-expanded', 'true');
        mobileNav.classList.add('open');
        mobileNav.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  /* ─── 5. ACCORDIONS ─── */
  function initAccordions(c) {
    var ts = c.querySelectorAll('.accordion-trigger');
    ts.forEach(function (t) {
      t.addEventListener('click', function () {
        var o = this.getAttribute('aria-expanded') === 'true';
        var cid = this.getAttribute('aria-controls');
        var ct = document.getElementById(cid);
        ts.forEach(function (x) {
          var xc = document.getElementById(x.getAttribute('aria-controls'));
          if (x !== t) { x.setAttribute('aria-expanded', 'false'); if (xc) xc.style.maxHeight = null; }
        });
        if (o) { this.setAttribute('aria-expanded', 'false'); if (ct) ct.style.maxHeight = null; }
        else { this.setAttribute('aria-expanded', 'true'); if (ct) ct.style.maxHeight = ct.scrollHeight + 'px'; }
      });
    });
  }
  var faq = document.querySelector('.faq-wrapper'); if (faq) initAccordions(faq);
  document.querySelectorAll('.glass-card').forEach(function (c) { initAccordions(c); });
  document.querySelectorAll('.pricing-card').forEach(function (c) { initAccordions(c); });

  /* ─── 6. MODALS ─── */
  var activeModal = null, lastFocused = null;
  function openModal(id) {
    var m = document.getElementById(id); if (!m) return;
    lastFocused = document.activeElement; activeModal = m;
    m.classList.add('active'); m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!activeModal) return;
    activeModal.classList.remove('active'); activeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus(); activeModal = null;
  }
  document.querySelectorAll('[data-open-modal]').forEach(function (b) { b.addEventListener('click', function () { openModal(this.getAttribute('data-open-modal')); }); });
  document.querySelectorAll('.modal-overlay .modal-close').forEach(function (b) { b.addEventListener('click', closeModal); });
  document.querySelectorAll('.modal-overlay').forEach(function (o) { o.addEventListener('click', function (e) { if (e.target === o) closeModal(); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeModal(); closeContactForm(); } });

  /* ─── 6b. CONTACT FORM ─── */
  var contactOverlay = document.getElementById('contact-form-overlay');
  function openContactForm(type) {
    if (!contactOverlay) return; lastFocused = document.activeElement;
    var of = document.getElementById('form-offre'); if (of) of.value = type || '';
    var t = document.getElementById('contact-form-title');
    if (t) {
      if (type === 'gestion') t.textContent = "Trading Automatique — Demande d'accès";
      else if (type === 'copy') t.textContent = "Copy Trading VIP — Rejoindre le groupe";
      else t.textContent = "Demande d'accès";
    }
    contactOverlay.classList.add('active'); contactOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; activeModal = contactOverlay;
  }
  function closeContactForm() {
    if (!contactOverlay) return;
    contactOverlay.classList.remove('active'); contactOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (activeModal === contactOverlay) activeModal = null;
  }
  document.querySelectorAll('[data-open-form]').forEach(function (b) { b.addEventListener('click', function () { openContactForm(this.getAttribute('data-open-form')); }); });
  if (contactOverlay) {
    var cc = contactOverlay.querySelector('.modal-close');
    if (cc) cc.addEventListener('click', closeContactForm);
    contactOverlay.addEventListener('click', function (e) { if (e.target === contactOverlay) closeContactForm(); });
  }

  /* ─── 7. CUSTOM CURSOR ─── */
  if (!isCoarse) {
    var dot = document.getElementById('cursor-dot');
    var ring = document.getElementById('cursor-ring');
    if (dot && ring) {
      var mx = 0, my = 0, rx = 0, ry = 0;
      document.addEventListener('mousemove', function (e) {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px'; dot.style.top = my + 'px';
        if (!document.body.classList.contains('cursor-ready')) document.body.classList.add('cursor-ready');
      }, { passive: true });
      (function a() {
        rx += (mx - rx) * .12; ry += (my - ry) * .12;
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        requestAnimationFrame(a);
      })();
      var intSel = 'a,button,input,textarea,select,.glass-card,.pricing-card,.review-card,[role="button"]';
      document.addEventListener('mouseover', function (e) { if (e.target.closest(intSel)) ring.classList.add('hover'); }, { passive: true });
      document.addEventListener('mouseout', function (e) { if (e.target.closest(intSel)) ring.classList.remove('hover'); }, { passive: true });
    }
  }

  /* ─── 8. 3D TILT + CARD SHINE ─── */
  if (!isCoarse) {
    var tiltCards = document.querySelectorAll('.glass-card, .pricing-card, .review-card');
    tiltCards.forEach(function (card) {
      // Inject shine overlay
      var shine = document.createElement('div');
      shine.className = 'card-shine';
      card.appendChild(shine);

      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var rotX = ((y - cy) / cy) * -6;
        var rotY = ((x - cx) / cx) * 6;
        card.style.transform = 'perspective(800px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) scale(1.02)';
        shine.style.opacity = '1';
        shine.style.background = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(187,134,252,0.12) 0%, transparent 60%)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        shine.style.opacity = '0';
      });
    });
  }

  /* ─── 9. MAGNETIC BUTTONS ─── */
  if (!isCoarse) {
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.2) + 'px, ' + (y * 0.2) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  /* ─── 10. ANIMATED COUNTERS ─── */
  function countUp(el, target, duration, suffix) {
    var start = null;
    function ease(t) { return 1 - Math.pow(1 - t, 4); }
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(ease(p) * target) + (suffix || '');
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + (suffix || '');
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('.stat-value[data-count], .bento-big-number[data-count]');
  if (counters.length > 0) {
    var cObs = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          countUp(e.target, parseInt(e.target.getAttribute('data-count'), 10), 2200, e.target.getAttribute('data-suffix') || '');
          cObs.unobserve(e.target);
        }
      });
    }, { threshold: .5 });
    counters.forEach(function (c) { cObs.observe(c); });
  }

  /* ─── 11. PARTICLES CANVAS ─── */
  var canvas = document.getElementById('particles-canvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var pts = [];
    var cnt = isCoarse ? 30 : 60;
    var mouseCanvas = { x: -1000, y: -1000 };

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);

    if (!isCoarse) {
      document.addEventListener('mousemove', function (e) { mouseCanvas.x = e.clientX; mouseCanvas.y = e.clientY; }, { passive: true });
    }

    for (var i = 0; i < cnt; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - .5) * .3,
        vy: (Math.random() - .5) * .3,
        r: Math.random() * 1.8 + .4,
        o: Math.random() * .35 + .05
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var j = 0; j < pts.length; j++) {
        var p = pts[j];

        // Mouse repel effect
        var dmx = p.x - mouseCanvas.x, dmy = p.y - mouseCanvas.y;
        var distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < 120) {
          p.x += (dmx / distMouse) * 1.5;
          p.y += (dmy / distMouse) * 1.5;
        }

        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(187,134,252,' + p.o + ')';
        ctx.fill();

        for (var k = j + 1; k < pts.length; k++) {
          var q = pts[k];
          var dx = p.x - q.x, dy = p.y - q.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(187,134,252,' + (0.06 * (1 - d / 130)) + ')';
            ctx.lineWidth = .6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ─── 12. GSAP PREMIUM ANIMATIONS ─── */
  window.addEventListener('load', function () {
    if (typeof gsap === 'undefined') return;
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    // ── Hero Text Split Animation ──
    var heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      // Process each child node (text, <br>, <span>) safely
      var nodes = Array.from(heroTitle.childNodes);
      heroTitle.innerHTML = '';
      nodes.forEach(function (node) {
        if (node.nodeType === 3) {
          // Text node — split into words
          var text = node.textContent;
          var wordArr = text.split(/(\s+)/);
          wordArr.forEach(function (w) {
            if (/^\s+$/.test(w)) {
              heroTitle.appendChild(document.createTextNode(w));
            } else if (w) {
              var wrap = document.createElement('span');
              wrap.className = 'word-wrap';
              var inner = document.createElement('span');
              inner.className = 'word';
              inner.textContent = w;
              wrap.appendChild(inner);
              heroTitle.appendChild(wrap);
              heroTitle.appendChild(document.createTextNode(' '));
            }
          });
        } else if (node.nodeName === 'BR') {
          heroTitle.appendChild(document.createElement('br'));
        } else if (node.nodeName === 'SPAN') {
          // Clone the span (e.g. text-gradient) and split its text
          var span = node.cloneNode(false);
          var spanWords = node.textContent.split(/(\s+)/);
          spanWords.forEach(function (w) {
            if (/^\s+$/.test(w)) {
              span.appendChild(document.createTextNode(w));
            } else if (w) {
              var wrap = document.createElement('span');
              wrap.className = 'word-wrap';
              var inner = document.createElement('span');
              inner.className = 'word';
              inner.textContent = w;
              wrap.appendChild(inner);
              span.appendChild(wrap);
              span.appendChild(document.createTextNode(' '));
            }
          });
          heroTitle.appendChild(span);
        } else {
          heroTitle.appendChild(node.cloneNode(true));
        }
      });

      gsap.fromTo('.hero-title .word',
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: 'power3.out', delay: 0.3 }
      );
    }

    // ── Hero elements stagger entrance ──
    var heroTl = gsap.timeline({ delay: 0.1 });
    heroTl
      .fromTo('.hero-pill', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
      .fromTo('.hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
      .fromTo('.hero-ctas', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .fromTo('.hero-trust-row', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
      .fromTo('.floater', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.15, ease: 'back.out(1.7)' }, '-=0.4');

    // ── Scroll reveals with stagger ──
    document.querySelectorAll('[data-gsap="fade-up"]').forEach(function (el) {
      var delay = parseInt(el.getAttribute('data-delay') || '0', 10) / 1000;
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          delay: delay,
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        }
      );
    });

    // ── Stats counter animation trigger ──
    var statsSection = document.querySelector('.stats-bar');
    if (statsSection) {
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: statsSection, start: 'top 85%' }
        }
      );
    }

    // ── Marquee ──
    document.querySelectorAll('.marquee-content').forEach(function (mc) {
      mc.innerHTML += mc.innerHTML;
      gsap.to(mc, { xPercent: -50, repeat: -1, duration: 20, ease: 'linear' });
    });

    // ── Review summary bar fill animation ──
    document.querySelectorAll('.bar-fill').forEach(function (bar) {
      var w = bar.style.width;
      bar.style.width = '0%';
      gsap.to(bar, {
        width: w, duration: 1.5, ease: 'power2.out',
        scrollTrigger: { trigger: bar, start: 'top 90%' }
      });
    });

    // ── Parallax mouse on hero ──
    if (!isCoarse) {
      document.addEventListener('mousemove', function (e) {
        var xr = (e.clientX / window.innerWidth - .5);
        var yr = (e.clientY / window.innerHeight - .5);
        gsap.to('.hero-slider', { x: xr * 20, y: yr * 20, duration: 2, ease: 'power2.out' });
      });
    }

    // ── Bento chart fill ──
    document.querySelectorAll('.bento-chart-fill').forEach(function (fill) {
      gsap.fromTo(fill, { width: '0%' }, {
        width: '85%', duration: 1.8, ease: 'power2.out',
        scrollTrigger: { trigger: fill, start: 'top 90%' }
      });
    });

    // ── Bento grid entrance ──
    gsap.fromTo('.bento-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.bento-grid', start: 'top 85%' }
      }
    );

    // ── Section parallax ──
    document.querySelectorAll('.section-header').forEach(function (h) {
      gsap.to(h, {
        yPercent: -8,
        scrollTrigger: { trigger: h, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
      });
    });
  });

  /* ─── 13. LOADING SCREEN ─── */
  var loader = document.getElementById('loader');
  var loaderFill = document.getElementById('loader-bar-fill');
  if (loader) {
    document.body.classList.add('loading');
    var hero = document.querySelector('.hero');
    if (hero) hero.classList.add('page-enter');

    var progress = 0;
    var loaderInterval = setInterval(function () {
      progress += Math.random() * 20 + 8;
      if (progress > 90) progress = 90;
      if (loaderFill) loaderFill.style.width = progress + '%';
    }, 150);

    function hideLoader() {
      clearInterval(loaderInterval);
      if (loaderFill) loaderFill.style.width = '100%';
      setTimeout(function () {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        if (hero) {
          hero.classList.add('animate');
        }
      }, 300);
    }

    window.addEventListener('load', function () {
      setTimeout(hideLoader, 300);
    });

    // Fallback: hide loader after 1.5s max
    setTimeout(hideLoader, 1500);
  }

  /* ─── 13b. LAZY VIDEO LOADING ─── */
  var lazyVideos = document.querySelectorAll('video[data-lazy-video]');
  if (lazyVideos.length > 0) {
    var vObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var video = entry.target;
          var src = video.getAttribute('data-lazy-video');
          if (src && !video.querySelector('source')) {
            var source = document.createElement('source');
            source.src = src;
            source.type = 'video/mp4';
            video.appendChild(source);
            video.load();
            video.play().catch(function () {
              document.addEventListener('touchstart', function playOnTouch() {
                video.play();
                document.removeEventListener('touchstart', playOnTouch);
              }, { once: true });
            });
          }
          vObs.unobserve(video);
        }
      });
    }, { rootMargin: '200px' });
    lazyVideos.forEach(function (v) { vObs.observe(v); });
  }

  /* ─── 13c. LAZY CALENDLY WIDGET ─── */
  var bookingSection = document.getElementById('booking');
  if (bookingSection) {
    var calendlyLoaded = false;
    var calObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !calendlyLoaded) {
          calendlyLoaded = true;
          // Load Calendly CSS
          var calCSS = document.createElement('link');
          calCSS.rel = 'stylesheet';
          calCSS.href = 'https://assets.calendly.com/assets/external/widget.css';
          document.head.appendChild(calCSS);
          // Load Calendly JS
          var calJS = document.createElement('script');
          calJS.src = 'https://assets.calendly.com/assets/external/widget.js';
          calJS.async = true;
          document.body.appendChild(calJS);
          calObs.unobserve(bookingSection);
        }
      });
    }, { rootMargin: '400px' });
    calObs.observe(bookingSection);
  }

  /* ─── 13d. CTA SHAKE ON VIEWPORT ─── */
  var ctaButtons = document.querySelectorAll('.btn-purple, .btn-outline');
  if (ctaButtons.length > 0) {
    var shakeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var btn = entry.target;
        if (entry.isIntersecting) {
          btn.classList.add('btn-shake');
          // Remove shake class after 2s (animation duration)
          setTimeout(function () {
            btn.classList.remove('btn-shake');
          }, 2000);
        } else {
          btn.classList.remove('btn-shake');
        }
      });
    }, { threshold: 0.5 });
    ctaButtons.forEach(function (btn) { shakeObs.observe(btn); });
  }

  /* ─── 14. CARD TILT 3D EFFECT ─── */
  if (!isCoarse) {
    var tiltCards = document.querySelectorAll('.glass-card, .pricing-card, .bento-card, .review-card');

    tiltCards.forEach(function (card) {
      // Add spotlight div
      var spot = document.createElement('div');
      spot.className = 'card-spotlight';
      card.style.position = 'relative';
      card.appendChild(spot);

      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var tiltY = ((x - centerX) / centerX) * 4;
        var tiltX = ((centerY - y) / centerY) * 4;

        card.style.setProperty('--tilt-x', tiltX + 'deg');
        card.style.setProperty('--tilt-y', tiltY + 'deg');
        card.classList.add('tilt-active');

        // Spotlight
        var pctX = ((x / rect.width) * 100).toFixed(1);
        var pctY = ((y / rect.height) * 100).toFixed(1);
        spot.style.setProperty('--spot-x', pctX + '%');
        spot.style.setProperty('--spot-y', pctY + '%');
      });

      card.addEventListener('mouseleave', function () {
        card.classList.remove('tilt-active');
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    });
  }

  /* ─── 15. MAGNETIC BUTTONS ─── */
  if (!isCoarse) {
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  /* ─── 15b. HERO VIDEO CUSTOM CONTROLS ─── */
  var heroVideo = document.querySelector('.hero-video');
  var playBtn = document.getElementById('hero-play-btn');
  var muteBtn = document.getElementById('hero-mute-btn');
  if (heroVideo && playBtn) {
    playBtn.addEventListener('click', function () {
      if (heroVideo.paused) {
        heroVideo.play();
        playBtn.querySelector('.icon-pause').style.display = '';
        playBtn.querySelector('.icon-play').style.display = 'none';
        playBtn.setAttribute('aria-label', 'Pause la vidéo');
      } else {
        heroVideo.pause();
        playBtn.querySelector('.icon-pause').style.display = 'none';
        playBtn.querySelector('.icon-play').style.display = '';
        playBtn.setAttribute('aria-label', 'Lire la vidéo');
      }
    });
  }
  if (heroVideo && muteBtn) {
    muteBtn.addEventListener('click', function () {
      heroVideo.muted = !heroVideo.muted;
      if (heroVideo.muted) {
        muteBtn.querySelector('.icon-muted').style.display = '';
        muteBtn.querySelector('.icon-unmuted').style.display = 'none';
        muteBtn.setAttribute('aria-label', 'Activer le son');
      } else {
        muteBtn.querySelector('.icon-muted').style.display = 'none';
        muteBtn.querySelector('.icon-unmuted').style.display = '';
        muteBtn.setAttribute('aria-label', 'Couper le son');
      }
    });
  }

  /* ─── 15c. HERO IMAGE SLIDER ─── */
  var heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 1) {
    var currentHeroSlide = 0;
    setInterval(function () {
      heroSlides[currentHeroSlide].classList.remove('hero-slide-active');
      currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
      var next = heroSlides[currentHeroSlide];
      // Reset Ken Burns animation
      next.style.animation = 'none';
      next.offsetHeight; // trigger reflow
      next.style.animation = '';
      next.classList.add('hero-slide-active');
    }, 4500);
  }

  /* ─── 16. REVIEW CAROUSEL ─── */
  var carousel = document.getElementById('reviews-carousel');
  var track = document.getElementById('reviews-track');
  var dotsContainer = document.getElementById('carousel-dots');
  if (carousel && track && dotsContainer) {
    var cards = track.querySelectorAll('.review-card');
    var currentSlide = 0;
    var cardsPerView = 3;
    var autoplayInterval;

    function getCardsPerView() {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    }

    function getTotalSlides() {
      cardsPerView = getCardsPerView();
      return Math.ceil(cards.length / cardsPerView);
    }

    function buildDots() {
      dotsContainer.innerHTML = '';
      var total = getTotalSlides();
      for (var i = 0; i < total; i++) {
        var dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Slide ' + (i + 1));
        dot.setAttribute('data-slide', i);
        dot.addEventListener('click', function () {
          goToSlide(parseInt(this.getAttribute('data-slide')));
        });
        dotsContainer.appendChild(dot);
      }
    }

    function goToSlide(n) {
      var total = getTotalSlides();
      currentSlide = ((n % total) + total) % total;
      var cardWidth = cards[0].offsetWidth + 24; // gap
      track.style.transform = 'translateX(-' + (currentSlide * cardsPerView * cardWidth) + 'px)';
      dotsContainer.querySelectorAll('.carousel-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === currentSlide);
      });
    }

    function startAutoplay() {
      autoplayInterval = setInterval(function () {
        goToSlide(currentSlide + 1);
      }, 4000);
    }

    function stopAutoplay() { clearInterval(autoplayInterval); }

    buildDots();
    startAutoplay();

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    window.addEventListener('resize', function () { buildDots(); goToSlide(0); });
  }

  /* ─── 17. STICKY MOBILE CTA ─── */
  var stickyCta = document.getElementById('sticky-cta');
  if (stickyCta) {
    var heroSection = document.getElementById('hero');
    var stickyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        stickyCta.classList.toggle('visible', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    if (heroSection) stickyObs.observe(heroSection);
  }

  /* ─── 18. INIT ─── */
  injectRef();
})();
