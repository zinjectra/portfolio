/**
 * ═══════════════════════════════════════════════════════
 *  ZINJECTRA — Application Logic
 * ═══════════════════════════════════════════════════════
 */
;(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════
     PLAYLIST — Add songs here
     ═══════════════════════════════════════════════════ */
  const PLAYLIST = [
    // "assets/audio/audio1.mp3",
    // "assets/audio/audio2.mp3",
    // "assets/audio/audio3.mp3",
  ];

  /* ═══════════════════════════════════════════════════
     SVG ICONS
     ═══════════════════════════════════════════════════ */
  const ICONS = {
    discord:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z"/></svg>',
    github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    javascript:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>',
    html:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.07-.999.09-.994-11.527-.003L7.59 12.473h7.09l-.309 3.388-2.38.64-2.381-.64-.151-1.75h-2.1l.3 3.558 4.332 1.202 4.332-1.202.603-6.63H8.531z"/></svg>',
    python:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.35.11-.33.17-.3.25-.27.33-.23.42-.2.51-.15.63-.1.73-.04.85.01 1.01.08 1.18.19.4.09zm-6.18 8.33a.934.934 0 0 1-.662-.27.927.927 0 0 1-.27-.664c0-.26.09-.48.27-.662a.936.936 0 0 1 .662-.27c.258 0 .48.09.664.27.182.182.27.401.27.662s-.088.482-.27.664a.939.939 0 0 1-.664.27zM21.93 16.6l.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16l-.06-.01h-8.16v.83h6.44l.01 2.75.02.37-.05.35-.11.33-.17.3-.25.27-.33.23-.42.2-.51.15-.63.1-.73.04-.85-.01-1.01-.08-1.18-.19-.4-.09-.36-.11-.32-.14-.29-.17-.27-.2-.24-.22-.22-.25-.19-.26-.17-.29-.14-.3-.11-.32-.07-.32-.04-.31V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h4.47l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V6.07h3.09l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23zm-6.9 1.09c.258 0 .48.09.662.27.182.182.27.402.27.664s-.088.48-.27.662a.937.937 0 0 1-.662.27.937.937 0 0 1-.664-.27.93.93 0 0 1-.27-.662c0-.262.09-.482.27-.664a.939.939 0 0 1 .664-.27z"/></svg>',
    sparkles:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
  };
  function icon(name) { return ICONS[name] || ICONS.link; }
  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function escA(s) { return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  /* ═══════════════════════════════════════════════════
     TOAST SYSTEM
     ═══════════════════════════════════════════════════ */
  function toast(msg, duration) {
    duration = duration || 3000;
    var container = document.getElementById('toastContainer');
    if (!container) return;
    var el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(function() { el.classList.add('toast--out'); }, duration);
    setTimeout(function() { el.remove(); }, duration + 400);
  }

  /* ═══════════════════════════════════════════════════
     RENDER CONFIG CONTENT
     ═══════════════════════════════════════════════════ */
  function renderContent() {
    var id = CONFIG.identity || {};
    // Hero
    var titleEl = document.querySelector('.glitch-text');
    if (titleEl && id.displayName) {
      titleEl.textContent = id.displayName;
      titleEl.setAttribute('data-text', id.displayName);
    }
    setText('.hero__username', id.username);
    setText('#heroBio', id.biography);
    setText('#heroBioSub', id.biographySub);
    // Character
    var charImg = document.getElementById('heroCharImg');
    if (charImg && id.characterImg) charImg.src = id.characterImg;
    else if (charImg && !id.characterImg) charImg.style.display = 'none';
    // Labels
    var labelsEl = document.querySelector('.hero__labels');
    if (labelsEl && id.labels && id.labels.length) {
      labelsEl.innerHTML = id.labels.map(function(l, i) {
        var h = '<span class="hero__label">' + esc(l) + '</span>';
        if (i < id.labels.length - 1) h += '<span class="hero__label-sep">/</span>';
        return h;
      }).join('');
    }
    // Background
    var bg = (CONFIG.background || {}).image;
    var heroBg = document.getElementById('heroBg');
    if (heroBg && bg) heroBg.style.backgroundImage = 'url(' + bg + ')';
    // About
    var about = CONFIG.about || {};
    var aboutContent = document.getElementById('aboutContent');
    if (aboutContent && about.paragraphs) {
      aboutContent.innerHTML = about.paragraphs.map(function(p) {
        return '<p>' + esc(p) + '</p>';
      }).join('');
    }
    // Skills
    var grid = document.getElementById('skillsGrid');
    var skills = CONFIG.skills || [];
    if (grid && skills.length) {
      grid.innerHTML = skills.map(function(s) {
        return '<div class="skill-card"><div class="skill-card__icon">' + icon(s.icon) + '</div><span class="skill-card__name">' + esc(s.name) + '</span></div>';
      }).join('');
    }
    // Projects
    renderProjects();
    // Socials
    renderSocials();
    // Footer
    var footerEl = document.getElementById('footerText');
    var f = CONFIG.footer || {};
    if (footerEl && f.text) footerEl.textContent = f.text.replace('{year}', new Date().getFullYear());
    // Meta
    var m = CONFIG.meta || {};
    if (m.siteTitle) document.title = m.siteTitle;
  }

  function setText(sel, val) {
    if (!val) return;
    var el = typeof sel === 'string' ? document.querySelector(sel) : sel;
    if (el) el.textContent = val;
  }

  function renderProjects() {
    var grid = document.getElementById('workGrid');
    if (!grid) return;
    var projects = CONFIG.projects || [];
    if (!projects.length) {
      grid.innerHTML = '<div class="work__empty"><div class="work__empty-icon">▨</div><h3 class="work__empty-title">NO TRANSMISSIONS FOUND</h3><p class="work__empty-text">More work will appear here.</p></div>';
      return;
    }
    grid.innerHTML = projects.map(function(p) {
      var imgH = p.image ? '<div class="project-card__image"><img src="' + escA(p.image) + '" alt="' + escA(p.title) + '" loading="lazy"></div>' : '';
      var tagsH = (p.tags || []).map(function(t) { return '<span class="project-card__tag">' + esc(t) + '</span>'; }).join('');
      var open = p.url ? '<a href="' + escA(p.url) + '" target="_blank" rel="noopener noreferrer" class="project-card">' : '<div class="project-card">';
      var close = p.url ? '</a>' : '</div>';
      return open + imgH + '<div class="project-card__body"><h3 class="project-card__title">' + esc(p.title) + '</h3>' + (p.description ? '<p class="project-card__desc">' + esc(p.description) + '</p>' : '') + (tagsH ? '<div class="project-card__tags">' + tagsH + '</div>' : '') + '</div>' + close;
    }).join('');
  }

  function renderSocials() {
    var links = (CONFIG.socials || []).filter(function(s) { return s.url || s.copyValue; });
    // Hero socials
    var heroS = document.getElementById('heroSocials');
    if (heroS) {
      if (!links.length) { heroS.style.display = 'none'; }
      else {
        heroS.innerHTML = links.map(function(s) {
          if (s.copyValue) return '<button class="social-btn" data-copy="' + escA(s.copyValue) + '" aria-label="Copy ' + escA(s.platform) + '" title="' + escA(s.platform) + '">' + icon(s.icon) + '</button>';
          return '<a href="' + escA(s.url) + '" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="' + escA(s.platform) + '" title="' + escA(s.platform) + '">' + icon(s.icon) + '</a>';
        }).join('');
      }
    }
    // Contact socials
    var contactS = document.getElementById('contactSocials');
    if (contactS) {
      if (!links.length) { contactS.parentElement.style.display = 'none'; }
      else {
        contactS.innerHTML = links.map(function(s) {
          if (s.copyValue) return '<button class="contact-social-item" data-copy="' + escA(s.copyValue) + '">' + icon(s.icon) + ' <span>' + esc(s.platform) + '</span></button>';
          return '<a href="' + escA(s.url) + '" class="contact-social-item" target="_blank" rel="noopener noreferrer">' + icon(s.icon) + ' <span>' + esc(s.platform) + '</span></a>';
        }).join('');
      }
    }
    // Copy handlers
    document.querySelectorAll('[data-copy]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        navigator.clipboard.writeText(this.dataset.copy).then(function() {
          toast('Copied to clipboard');
        }).catch(function() { toast('Failed to copy'); });
      });
    });
  }

  /* ═══════════════════════════════════════════════════
     NAVIGATION
     ═══════════════════════════════════════════════════ */
  function initNav() {
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('navLinks');
    var links = document.querySelectorAll('.nav__link');
    if (toggle && menu) {
      toggle.addEventListener('click', function() {
        var open = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!open));
        menu.classList.toggle('is-open', !open);
        document.body.style.overflow = !open ? 'hidden' : '';
      });
    }
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        if (toggle && menu) {
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      });
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menu && menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
    // Scroll spy
    var sections = document.querySelectorAll('.section[id]');
    var spyObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          links.forEach(function(l) { l.classList.remove('nav__link--active'); });
          var active = document.querySelector('.nav__link[data-nav="' + entry.target.id + '"]');
          if (active) active.classList.add('nav__link--active');
        }
      });
    }, { threshold: 0.2, rootMargin: '-60px 0px -40% 0px' });
    sections.forEach(function(s) { spyObserver.observe(s); });
  }

  /* ═══════════════════════════════════════════════════
     SCROLL ANIMATIONS
     ═══════════════════════════════════════════════════ */
  function initScrollAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-animate]').forEach(function(el) { el.classList.add('is-visible'); });
      return;
    }
    var elements = document.querySelectorAll('[data-animate]');
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.dataset.delay || '0', 10);
          setTimeout(function() { entry.target.classList.add('is-visible'); }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    elements.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        var d = parseInt(el.dataset.delay || '0', 10);
        setTimeout(function() { el.classList.add('is-visible'); }, 80 + d);
      }
      observer.observe(el);
    });
  }

  /* ═══════════════════════════════════════════════════
     SCROLL PROGRESS + BACK TO TOP
     ═══════════════════════════════════════════════════ */
  function initScrollUI() {
    var bar = document.getElementById('scrollBar');
    var btt = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var pct = h > 0 ? (window.scrollY / h * 100) : 0;
      if (bar) bar.style.width = pct + '%';
      if (btt) btt.classList.toggle('back-to-top--visible', window.scrollY > 400);
    }, { passive: true });
    if (btt) btt.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ═══════════════════════════════════════════════════
     VHS TIMECODE
     ═══════════════════════════════════════════════════ */
  function initTimecode() {
    var el = document.getElementById('vhsTimecode');
    if (!el) return;
    setInterval(function() {
      var d = new Date();
      el.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + ':' + pad(Math.floor(d.getMilliseconds() / 10));
    }, 100);
  }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  /* ═══════════════════════════════════════════════════
     FORM TABS
     ═══════════════════════════════════════════════════ */
  function initFormTabs() {
    var tabs = document.querySelectorAll('.form-tab');
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        tabs.forEach(function(t) { t.classList.remove('form-tab--active'); });
        tab.classList.add('form-tab--active');
        document.querySelectorAll('.form-panel').forEach(function(p) { p.classList.remove('form-panel--active'); });
        var panel = document.getElementById(tab.dataset.tab + 'Panel');
        if (panel) panel.classList.add('form-panel--active');
      });
    });
  }

  /* ═══════════════════════════════════════════════════
     TICKET FORM
     ═══════════════════════════════════════════════════ */
  function initTicketForm() {
    var form = document.getElementById('ticketForm');
    if (!form) return;
    var fields = {
      name:     { el: document.getElementById('ticketName'),     err: document.getElementById('ticketNameError') },
      discord:  { el: document.getElementById('ticketDiscord'),  err: document.getElementById('ticketDiscordError') },
      subject:  { el: document.getElementById('ticketSubject'),  err: document.getElementById('ticketSubjectError') },
      category: { el: document.getElementById('ticketCategory'), err: document.getElementById('ticketCategoryError') },
      message:  { el: document.getElementById('ticketMessage'),  err: document.getElementById('ticketMessageError') },
    };
    var honeypot = document.getElementById('ticketWebsite');
    var submitBtn = document.getElementById('ticketSubmit');
    var feedback = document.getElementById('ticketFeedback');
    var charCount = document.getElementById('ticketMsgCount');
    var loadedAt = Date.now();
    var submitting = false;
    var lastHash = '';

    if (fields.message.el && charCount) {
      fields.message.el.addEventListener('input', function() { charCount.textContent = this.value.length + ' / 2000'; });
    }
    Object.values(fields).forEach(function(f) {
      if (f.el) f.el.addEventListener('input', function() { f.el.classList.remove('form-input--error'); if (f.err) f.err.textContent = ''; });
    });

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      if (submitting) return;
      hideFb(feedback);
      if (honeypot && honeypot.value) return;
      if (Date.now() - loadedAt < 2000) { showFb(feedback, 'error', 'Too fast. Please wait a moment.'); return; }
      var valid = true;
      if (!val(fields.name, 'Name is required.')) valid = false;
      if (!val(fields.discord, 'Discord username is required.')) valid = false;
      if (!val(fields.subject, 'Subject is required.')) valid = false;
      if (!fields.category.el.value) { setErr(fields.category, 'Select a category.'); valid = false; }
      if (!val(fields.message, 'Message is required.', 10)) valid = false;
      if (!valid) return;

      var payload = {
        type: 'ticket',
        name: fields.name.el.value.trim(),
        discord: fields.discord.el.value.trim(),
        subject: fields.subject.el.value.trim(),
        category: fields.category.el.value,
        message: fields.message.el.value.trim(),
      };
      var hash = JSON.stringify(payload);
      if (hash === lastHash) { showFb(feedback, 'error', 'This ticket was already submitted.'); return; }

      var endpoint = (CONFIG.contact || {}).endpoint;
      if (!endpoint) { showFb(feedback, 'error', 'Contact system is not configured.'); return; }

      submitting = true;
      setLoading(submitBtn, true);
      try {
        var res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        var data = await res.json().catch(function() { return {}; });
        if (res.ok) {
          lastHash = hash;
          showFb(feedback, 'success', data.message || 'Ticket submitted successfully.');
          form.reset();
          if (charCount) charCount.textContent = '0 / 2000';
          loadedAt = Date.now();
        } else {
          showFb(feedback, 'error', data.error || 'Submission failed. Try again.');
        }
      } catch(err) {
        showFb(feedback, 'error', 'Network error. Check your connection.');
      } finally {
        submitting = false;
        setLoading(submitBtn, false);
      }
    });
  }

  /* ═══════════════════════════════════════════════════
     APPLICATION FORM
     ═══════════════════════════════════════════════════ */
  function initAppForm() {
    var form = document.getElementById('applicationForm');
    if (!form) return;
    var fields = {
      name:       { el: document.getElementById('appName'),       err: document.getElementById('appNameError') },
      discord:    { el: document.getElementById('appDiscord'),    err: document.getElementById('appDiscordError') },
      category:   { el: document.getElementById('appCategory'),   err: document.getElementById('appCategoryError') },
      experience: { el: document.getElementById('appExperience'), err: document.getElementById('appExperienceError') },
      reason:     { el: document.getElementById('appReason'),     err: document.getElementById('appReasonError') },
    };
    var portfolio = document.getElementById('appPortfolio');
    var honeypot = document.getElementById('appWebsite');
    var submitBtn = document.getElementById('appSubmit');
    var feedback = document.getElementById('appFeedback');
    var loadedAt = Date.now();
    var submitting = false;
    var lastHash = '';

    Object.values(fields).forEach(function(f) {
      if (f.el) f.el.addEventListener('input', function() { f.el.classList.remove('form-input--error'); if (f.err) f.err.textContent = ''; });
    });

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      if (submitting) return;
      hideFb(feedback);
      if (honeypot && honeypot.value) return;
      if (Date.now() - loadedAt < 2000) { showFb(feedback, 'error', 'Too fast. Please wait.'); return; }
      var valid = true;
      if (!val(fields.name, 'Name is required.')) valid = false;
      if (!val(fields.discord, 'Discord username is required.')) valid = false;
      if (!fields.category.el.value) { setErr(fields.category, 'Select a category.'); valid = false; }
      if (!val(fields.experience, 'Tell us about your experience.', 10)) valid = false;
      if (!val(fields.reason, 'Reason is required.', 10)) valid = false;
      if (!valid) return;

      var payload = {
        type: 'application',
        name: fields.name.el.value.trim(),
        discord: fields.discord.el.value.trim(),
        category: fields.category.el.value,
        experience: fields.experience.el.value.trim(),
        reason: fields.reason.el.value.trim(),
        portfolio: (portfolio && portfolio.value.trim()) || '',
      };
      var hash = JSON.stringify(payload);
      if (hash === lastHash) { showFb(feedback, 'error', 'This application was already submitted.'); return; }

      var endpoint = (CONFIG.contact || {}).endpoint;
      if (!endpoint) { showFb(feedback, 'error', 'System not configured.'); return; }

      submitting = true;
      setLoading(submitBtn, true);
      try {
        var res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        var data = await res.json().catch(function() { return {}; });
        if (res.ok) {
          lastHash = hash;
          showFb(feedback, 'success', data.message || 'Application submitted successfully.');
          form.reset();
          loadedAt = Date.now();
        } else {
          showFb(feedback, 'error', data.error || 'Submission failed.');
        }
      } catch(err) {
        showFb(feedback, 'error', 'Network error.');
      } finally {
        submitting = false;
        setLoading(submitBtn, false);
      }
    });
  }

  // Form helpers
  function val(field, msg, minLen) {
    var v = field.el ? field.el.value.trim() : '';
    if (!v) { setErr(field, msg); return false; }
    if (minLen && v.length < minLen) { setErr(field, 'Must be at least ' + minLen + ' characters.'); return false; }
    return true;
  }
  function setErr(field, msg) { field.el.classList.add('form-input--error'); if (field.err) field.err.textContent = msg; }
  function setLoading(btn, state) { btn.classList.toggle('btn--loading', state); btn.disabled = state; }
  function showFb(el, type, msg) { el.className = 'form-feedback form-feedback--' + type; el.textContent = msg; }
  function hideFb(el) { el.className = 'form-feedback'; el.textContent = ''; }

  /* ═══════════════════════════════════════════════════
     MUSIC PLAYER
     ═══════════════════════════════════════════════════ */
  function initMusicPlayer() {
    if (!PLAYLIST.length) return; // No tracks — hide player

    var player = document.getElementById('musicPlayer');
    if (!player) return;
    player.classList.add('player--visible');

    var audio = new Audio();
    var currentIndex = 0;
    var isShuffled = false;
    var repeatMode = 0; // 0=none, 1=all, 2=one
    var shuffledOrder = [];

    // Elements
    var playBtn = document.getElementById('playerPlay');
    var prevBtn = document.getElementById('playerPrev');
    var nextBtn = document.getElementById('playerNext');
    var shuffleBtn = document.getElementById('playerShuffle');
    var repeatBtn = document.getElementById('playerRepeat');
    var muteBtn = document.getElementById('playerMute');
    var volumeSlider = document.getElementById('playerVolume');
    var seekSlider = document.getElementById('playerSeek');
    var progressFill = document.getElementById('playerProgressFill');
    var trackEl = document.getElementById('playerTrack');
    var artistEl = document.getElementById('playerArtist');
    var currentEl = document.getElementById('playerCurrent');
    var durationEl = document.getElementById('playerDuration');
    var playlistToggle = document.getElementById('playerPlaylistToggle');
    var playlistEl = document.getElementById('playerPlaylist');
    var iconPlay = playBtn.querySelector('.icon-play');
    var iconPause = playBtn.querySelector('.icon-pause');
    var iconVol = muteBtn.querySelector('.icon-vol');
    var iconMute = muteBtn.querySelector('.icon-mute');

    // Load saved preferences
    var savedVol = localStorage.getItem('z_vol');
    if (savedVol !== null) { audio.volume = parseFloat(savedVol); volumeSlider.value = Math.round(audio.volume * 100); }
    else { audio.volume = 0.8; }

    // Build playlist
    function buildPlaylistUI() {
      playlistEl.innerHTML = PLAYLIST.map(function(src, i) {
        var name = src.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
        return '<div class="player__playlist-item' + (i === currentIndex ? ' player__playlist-item--active' : '') + '" data-index="' + i + '">' +
          '<span class="player__playlist-item__num">' + (i + 1) + '</span>' +
          '<span class="player__playlist-item__name">' + esc(name) + '</span>' +
          (i === currentIndex ? '<span class="player__playlist-item__playing">▶</span>' : '') +
          '</div>';
      }).join('');
      playlistEl.querySelectorAll('.player__playlist-item').forEach(function(item) {
        item.addEventListener('click', function() { loadTrack(parseInt(this.dataset.index)); audio.play(); updatePlayState(true); });
      });
    }

    function loadTrack(index) {
      currentIndex = index;
      var src = PLAYLIST[currentIndex];
      audio.src = src;
      var name = src.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
      trackEl.textContent = name;
      artistEl.textContent = 'Zinjectra';
      buildPlaylistUI();
    }

    function updatePlayState(playing) {
      iconPlay.style.display = playing ? 'none' : '';
      iconPause.style.display = playing ? '' : 'none';
      playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    }

    function getNextIndex() {
      if (repeatMode === 2) return currentIndex;
      if (isShuffled) {
        if (!shuffledOrder.length || shuffledOrder.indexOf(currentIndex) === shuffledOrder.length - 1) {
          shuffledOrder = shuffleArray(PLAYLIST.map(function(_, i) { return i; }));
        }
        var ci = shuffledOrder.indexOf(currentIndex);
        return shuffledOrder[(ci + 1) % shuffledOrder.length];
      }
      return (currentIndex + 1) % PLAYLIST.length;
    }

    function getPrevIndex() {
      if (isShuffled && shuffledOrder.length) {
        var ci = shuffledOrder.indexOf(currentIndex);
        return shuffledOrder[(ci - 1 + shuffledOrder.length) % shuffledOrder.length];
      }
      return (currentIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    }

    function shuffleArray(arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      return a;
    }

    function formatTime(s) {
      if (isNaN(s) || !isFinite(s)) return '0:00';
      var m = Math.floor(s / 60);
      var sec = Math.floor(s % 60);
      return m + ':' + (sec < 10 ? '0' : '') + sec;
    }

    // Events
    playBtn.addEventListener('click', function() {
      if (!audio.src && PLAYLIST.length) loadTrack(0);
      if (audio.paused) { audio.play().catch(function() {}); updatePlayState(true); }
      else { audio.pause(); updatePlayState(false); }
    });
    prevBtn.addEventListener('click', function() {
      if (audio.currentTime > 3) { audio.currentTime = 0; return; }
      loadTrack(getPrevIndex()); audio.play().catch(function() {}); updatePlayState(true);
    });
    nextBtn.addEventListener('click', function() {
      loadTrack(getNextIndex()); audio.play().catch(function() {}); updatePlayState(true);
    });
    shuffleBtn.addEventListener('click', function() {
      isShuffled = !isShuffled;
      shuffleBtn.classList.toggle('player__btn--active', isShuffled);
      if (isShuffled) shuffledOrder = shuffleArray(PLAYLIST.map(function(_, i) { return i; }));
    });
    repeatBtn.addEventListener('click', function() {
      repeatMode = (repeatMode + 1) % 3;
      repeatBtn.classList.toggle('player__btn--active', repeatMode > 0);
      repeatBtn.title = ['Repeat Off', 'Repeat All', 'Repeat One'][repeatMode];
    });
    muteBtn.addEventListener('click', function() {
      audio.muted = !audio.muted;
      iconVol.style.display = audio.muted ? 'none' : '';
      iconMute.style.display = audio.muted ? '' : 'none';
    });
    volumeSlider.addEventListener('input', function() {
      audio.volume = this.value / 100;
      audio.muted = false;
      iconVol.style.display = '';
      iconMute.style.display = 'none';
      localStorage.setItem('z_vol', audio.volume);
    });
    seekSlider.addEventListener('input', function() {
      if (audio.duration) audio.currentTime = (this.value / 100) * audio.duration;
    });
    audio.addEventListener('timeupdate', function() {
      if (!audio.duration) return;
      var pct = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = pct + '%';
      seekSlider.value = pct;
      currentEl.textContent = formatTime(audio.currentTime);
    });
    audio.addEventListener('loadedmetadata', function() {
      durationEl.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('ended', function() {
      if (repeatMode === 2) { audio.currentTime = 0; audio.play(); return; }
      var next = getNextIndex();
      if (repeatMode === 0 && next === 0 && !isShuffled) { updatePlayState(false); return; }
      loadTrack(next); audio.play().catch(function() {}); updatePlayState(true);
    });
    audio.addEventListener('error', function() {
      trackEl.textContent = 'Error loading track';
      toast('Failed to load audio file');
    });
    playlistToggle.addEventListener('click', function() {
      playlistEl.classList.toggle('is-open');
    });

    // Initial state
    loadTrack(0);
    buildPlaylistUI();
  }

  /* ═══════════════════════════════════════════════════
     INIT
     ═══════════════════════════════════════════════════ */
  function init() {
    renderContent();
    initNav();
    initScrollAnimations();
    initScrollUI();
    initTimecode();
    initFormTabs();
    initTicketForm();
    initAppForm();
    initMusicPlayer();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
