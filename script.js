// ══════════════════════════════════════════
//  ICONS
// ══════════════════════════════════════════
const ICONS = {
  store:          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  star:           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  chat:           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  code:           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  community:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  monitor:        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  video:          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
  bell:           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  person:         `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  calendar:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  labelOwner:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  labelConsulting:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  labelPartner:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  dot:            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/></svg>`,
  external:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  discord:        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>`,
  chevronDown:    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  clock:          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  starFill:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
};

const LABEL_ICON = { owner: 'labelOwner', consulting: 'labelConsulting', partner: 'labelPartner' };

// ══════════════════════════════════════════
//  SMOOTH SCROLL — manual RAF, não depende
//  do browser nem de overflow:hidden no body
// ══════════════════════════════════════════
function smoothScrollTo(targetY, duration) {
  const startY = window.scrollY;
  const diff   = targetY - startY;
  const start  = performance.now();

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease in-out quart
    const ease = progress < 0.5
      ? 8 * progress * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 4) / 2;
    window.scrollTo(0, startY + diff * ease);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ══════════════════════════════════════════
//  HAMBURGER + NAV LINKS
// ══════════════════════════════════════════
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    navLinks.classList.remove('open');
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    smoothScrollTo(top, 700);
  });
});

// ══════════════════════════════════════════
//  COUNTER ANIMATION
// ══════════════════════════════════════════
function animateCounter(el, target, suffix, duration) {
  el.style.position = 'relative';

  function makeSpan(val) {
    const s = document.createElement('span');
    s.style.cssText = 'display:block;position:absolute;left:0;right:0;top:0;line-height:inherit;';
    s.textContent = suffix === '+' ? val + '+' : val + suffix;
    return s;
  }

  let activeSpan = makeSpan(0);
  el.innerHTML = '';
  el.appendChild(activeSpan);

  const startTime = performance.now();
  let lastDisplayed = 0;

  const tick = (now) => {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const next     = Math.round(eased * target);

    if (next !== lastDisplayed) {
      const incoming = makeSpan(next);
      incoming.style.top = '100%';
      incoming.style.transition = 'none';
      el.appendChild(incoming);

      const outgoing = activeSpan;
      outgoing.style.transition = 'top .18s cubic-bezier(.25,.46,.45,.94), opacity .18s ease';
      outgoing.style.top     = '-100%';
      outgoing.style.opacity = '0';

      requestAnimationFrame(() => {
        incoming.style.transition = 'top .18s cubic-bezier(.25,.46,.45,.94)';
        incoming.style.top = '0';
      });

      setTimeout(() => outgoing.parentNode && outgoing.parentNode.removeChild(outgoing), 220);
      activeSpan    = incoming;
      lastDisplayed = next;
    }

    if (progress < 1) requestAnimationFrame(tick);
    else { el.innerHTML = ''; el.appendChild(makeSpan(target)); }
  };

  requestAnimationFrame(tick);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target, parseInt(e.target.dataset.target), e.target.dataset.suffix || '', 2000);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

// ══════════════════════════════════════════
//  HEADER STATS
// ══════════════════════════════════════════
const STATUS_CONFIG = {
  available:   { cls: 'available',   text: 'Disponível para novos projetos' },
  away:        { cls: 'away',        text: 'Ausente no momento'             },
  unavailable: { cls: 'unavailable', text: 'Indisponível no momento'       }
};

function renderHeaderStats(stats) {
  const statsEl  = document.getElementById('infoStats');
  const onlineEl = document.getElementById('onlineIndicator');

  statsEl.innerHTML = [
    { key: 'experience', icon: ICONS.clock    },
    { key: 'feedbacks',  icon: ICONS.starFill }
  ].map(({ key, icon }) => {
    const s = stats[key];
    return `<div class="stat-item">
      <div class="stat-item-label">${icon}${s.label}</div>
      <div class="stat-item-value" data-target="${s.value}" data-suffix="${s.suffix}">${s.value}${s.suffix}</div>
      <div class="stat-item-sub">${s.sub}</div>
    </div>`;
  }).join('');

  const av  = stats.availability;
  const cfg = STATUS_CONFIG[av.status] || STATUS_CONFIG.available;
  onlineEl.innerHTML = `<span class="status-dot ${cfg.cls}"></span>${av.text || cfg.text}`;

  statsEl.querySelectorAll('.stat-item-value[data-target]').forEach(el => counterObs.observe(el));
}

// ══════════════════════════════════════════
//  RENDER SERVERS
// ══════════════════════════════════════════
function renderServers(servers) {
  document.getElementById('projectsGrid').innerHTML = servers.map(s => {
    const bannerBg = s.bannerUrl
      ? `<div class="project-banner-bg" style="background:${s.bannerGradient}"><img src="${s.bannerUrl}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.85"/></div>`
      : `<div class="project-banner-bg" style="background:${s.bannerGradient}"></div>`;

    const labels = s.labels.map(l =>
      `<div class="project-label project-label--${l.type}">${ICONS[LABEL_ICON[l.type]]}${l.text}</div>`
    ).join('');

    const badge = s.status === 'active'
      ? `<div class="project-active">${ICONS.dot}Ativo</div>`
      : `<div class="project-inactive-badge">${ICONS.dot}Inativo</div>`;

    const tags = s.tags.map(t =>
      `<span class="project-tag">${ICONS[t.icon]}${t.text}</span>`
    ).join('');

    return `<div class="project-card">
      <div class="project-banner">${bannerBg}</div>
      <div class="project-banner-icon-wrap">
        <img class="project-banner-icon" src="${s.iconUrl}" alt="${s.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="project-banner-icon-fallback" style="display:none">${s.iconFallback}</div>
      </div>
      <div class="project-body">
        <div class="project-top">
          <div class="project-top-left">
            <div class="project-name">${s.name}</div>
            <div style="display:flex;gap:.4rem;flex-wrap:wrap">${labels}</div>
          </div>
          ${badge}
        </div>
        <p class="project-desc">${s.description}</p>
        <a href="${s.inviteUrl}" target="_blank" class="project-access-btn">
          ${ICONS.discord}Acesse aqui
        </a>
        <div class="project-tags">${tags}</div>
        <div class="project-rep">
          ${ICONS.person}
          <a href="${s.representative.profileUrl}" target="_blank">${s.representative.handle}</a>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════
//  STARS
// ══════════════════════════════════════════
function renderStars(rating) {
  const full  = `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#f59e0b" stroke="#f59e0b" stroke-width="1"/></svg>`;
  const half  = `<svg viewBox="0 0 24 24"><defs><linearGradient id="hg"><stop offset="50%" stop-color="#f59e0b"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#hg)" stroke="#f59e0b" stroke-width="1"/></svg>`;
  const empty = `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="transparent" stroke="#f59e0b" stroke-width="1"/></svg>`;
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += rating >= i ? full : rating >= i - 0.5 ? half : empty;
  }
  return html;
}

// ══════════════════════════════════════════
//  RENDER REVIEWS
// ══════════════════════════════════════════
function renderReviews(reviews) {
  document.getElementById('reviewsTrack').innerHTML = reviews.map(r => {
    const fallbackBg  = r.avatarColor || 'linear-gradient(135deg,#3b1a6b,#9d5cf5)';
    const fallbackTxt = r.avatarFallback || '?';
    const avatar = r.avatarUrl
      ? `<div class="review-avatar" style="padding:0;overflow:hidden;background:none;border:2px solid var(--border2)">
           <img src="${r.avatarUrl}" alt="${r.handle}"
             style="width:100%;height:100%;object-fit:cover;border-radius:50%"
             data-fb-bg="${fallbackBg}" data-fb-txt="${fallbackTxt}"
             onerror="this.parentNode.style.background=this.dataset.fbBg;this.parentNode.textContent=this.dataset.fbTxt"/>
         </div>`
      : `<div class="review-avatar" style="background:${fallbackBg}">${fallbackTxt}</div>`;

    return `<div class="review-card">
      <div class="review-top">
        ${avatar}
        <div>
          <div class="review-user">${r.username}</div>
          <div class="review-handle">${r.handle}</div>
          <div class="review-stars">${renderStars(r.rating)}</div>
        </div>
      </div>
      <div class="review-text-wrap">
        <p class="review-text-fade">${r.text}</p>
      </div>
      <div class="review-date">${ICONS.calendar}${r.date}</div>
    </div>`;
  }).join('');
}

// ── "Ler mais" auto-detect overflow ──
function initReadMore() {
  const SVG_CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

  document.querySelectorAll('.review-card').forEach(card => {
    if (card.dataset.readMoreInit) return;

    const para = card.querySelector('.review-text-fade');
    if (!para) return;

    const overflows = para.scrollHeight > para.offsetHeight + 2;
    if (!overflows) return;

    card.classList.add('has-overflow');
    card.dataset.readMoreInit = '1';

    const btn = document.createElement('button');
    btn.className = 'review-read-more';
    btn.innerHTML = `<span>Ler mais</span>${SVG_CHEVRON}`;

    btn.addEventListener('click', () => {
      const expanded = card.classList.toggle('expanded');
      btn.querySelector('span').textContent = expanded ? 'Ler menos' : 'Ler mais';
    });

    const dateEl = card.querySelector('.review-date');
    card.insertBefore(btn, dateEl);
  });

  // Fade lateral some ao hover em cards nas pontas
  const wrap  = document.querySelector('.reviews-track-wrap');
  const track = document.getElementById('reviewsTrack');
  if (!wrap || !track) return;

  const updateLateralFade = () => {
    const cards      = Array.from(track.querySelectorAll('.review-card'));
    const wrapRect   = wrap.getBoundingClientRect();
    const fadeWidth  = 60;

    cards.forEach(card => {
      const r = card.getBoundingClientRect();
      const nearLeft  = r.left < wrapRect.left  + fadeWidth;
      const nearRight = r.right > wrapRect.right - fadeWidth;
      card.dataset.nearLeft  = nearLeft  ? '1' : '0';
      card.dataset.nearRight = nearRight ? '1' : '0';
    });
  };

  track.addEventListener('scroll', updateLateralFade, { passive: true });
  updateLateralFade();

  track.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      if (card.dataset.nearLeft  === '1') wrap.classList.add('fade-left-hidden');
      if (card.dataset.nearRight === '1') wrap.classList.add('fade-right-hidden');
    });
    card.addEventListener('mouseleave', () => {
      wrap.classList.remove('fade-left-hidden', 'fade-right-hidden');
    });
  });
}

// ══════════════════════════════════════════
//  FETCH & INIT
// ══════════════════════════════════════════
fetch('data.json')
  .then(r => r.json())
  .then(data => {
    renderHeaderStats(data.headerStats);
    renderServers(data.servers);

    const sorted = [...data.reviews].sort((a, b) => {
      const p = d => { const [dd,mm,yyyy] = d.split('/'); return new Date(yyyy, mm-1, dd); };
      return p(b.date) - p(a.date);
    });
    renderReviews(sorted);

    // Roda initReadMore só depois das fontes carregarem (garante medição correta)
    const runInit = () => setTimeout(initReadMore, 100);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(runInit);
    } else {
      setTimeout(initReadMore, 300);
    }

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  })
  .catch(err => console.error('data.json error:', err));

// ══════════════════════════════════════════
//  DRAG SCROLL — REVIEWS
// ══════════════════════════════════════════
(function () {
  const track = document.getElementById('reviewsTrack');
  let isDown = false, startX, startLeft, velX = 0, lastX = 0, lastT = 0, raf = null;

  const cancelMomentum = () => { if (raf) { cancelAnimationFrame(raf); raf = null; } };

  track.addEventListener('mousedown', e => {
    cancelMomentum();
    isDown = true; track.classList.add('dragging');
    startX = e.pageX; startLeft = track.scrollLeft;
    lastX = e.pageX; lastT = performance.now(); velX = 0;
  });
  window.addEventListener('mousemove', e => {
    if (!isDown) return;
    const now = performance.now(), dt = now - lastT;
    if (dt > 0) velX = (e.pageX - lastX) / dt;
    lastX = e.pageX; lastT = now;
    track.scrollLeft = startLeft - (e.pageX - startX);
  });
  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false; track.classList.remove('dragging');
    let v = velX * 18;
    const step = () => { if (Math.abs(v) < 0.5) return; track.scrollLeft -= v; v *= 0.93; raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
  });

  let tX, tLeft, tLX, tV = 0, tLT = 0;
  track.addEventListener('touchstart', e => {
    cancelMomentum();
    tX = e.touches[0].pageX; tLeft = track.scrollLeft;
    tLX = tX; tLT = performance.now(); tV = 0;
  }, { passive: true });
  track.addEventListener('touchmove', e => {
    const now = performance.now(), dt = now - tLT, x = e.touches[0].pageX;
    if (dt > 0) tV = (x - tLX) / dt;
    tLX = x; tLT = now;
    track.scrollLeft = tLeft - (x - tX);
  }, { passive: true });
  track.addEventListener('touchend', () => {
    let v = tV * 18;
    const step = () => { if (Math.abs(v) < 0.5) return; track.scrollLeft -= v; v *= 0.93; raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
  });

  const smoothSlide = (delta) => {
    cancelMomentum();
    const s = track.scrollLeft;
    const e = Math.max(0, Math.min(track.scrollWidth - track.clientWidth, s + delta));
    const t0 = performance.now();
    const step = now => {
      const p = Math.min((now - t0) / 500, 1);
      track.scrollLeft = s + (e - s) * (1 - Math.pow(1 - p, 4));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  };

  document.getElementById('revPrev').addEventListener('click', () => smoothSlide(-340));
  document.getElementById('revNext').addEventListener('click', () => smoothSlide(340));
})();

// ══════════════════════════════════════════
//  SCROLL REVEAL
// ══════════════════════════════════════════
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 100);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));