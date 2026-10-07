// DOM HUD. Values are written only when they change so the per-frame cost stays tiny.
const $ = (id) => document.getElementById(id);

const els = {};
const last = {};
let bannerTimer = 0;
const feedItems = [];

function setText(key, value) {
  if (last[key] === value) return;
  last[key] = value;
  if (els[key]) els[key].textContent = value;
}

function setStyle(key, prop, value) {
  const k = key + ':' + prop;
  if (last[k] === value) return;
  last[k] = value;
  if (els[key]) els[key].style.setProperty(prop, value);
}

function setClass(key, cls, on) {
  const k = key + '.' + cls;
  if (last[k] === on) return;
  last[k] = on;
  if (els[key]) els[key].classList.toggle(cls, on);
}

export const hud = {
  init() {
    const ids = [
      'hud', 'overlay', 'panel-menu', 'panel-pause', 'panel-dead', 'crosshair', 'hitmarker', 'damage',
      'hp-fill', 'hp-num', 'cover-state', 'ammo-mag', 'ammo-res', 'reload-state', 'wave-num', 'wave-sub',
      'rush-fill', 'score', 'kills', 'combo', 'banner', 'banner-title', 'banner-sub', 'feed', 'ads-scope',
      'dead-stats', 'low-hp',
    ];
    for (const id of ids) els[id] = $(id);
  },

  // panel: 'menu' | 'pause' | 'dead' | 'none' (none = playing, HUD on, no overlay)
  show(panel) {
    const ids = { menu: 'panel-menu', pause: 'panel-pause', dead: 'panel-dead' };
    for (const [name, id] of Object.entries(ids)) setClass(id, 'hidden', name !== panel);
    setClass('overlay', 'hidden', panel === 'none');
    setClass('hud', 'hidden', panel !== 'none');
  },

  setHealth(hp, max) {
    const pct = Math.max(0, hp / max) * 100;
    setStyle('hp-fill', 'width', pct.toFixed(1) + '%');
    setText('hp-num', String(Math.ceil(hp)));
    setClass('low-hp', 'on', hp < 35 && hp > 0);
  },

  setCover(inCover) {
    setText('cover-state', inCover ? 'IN COVER' : 'EXPOSED');
    setClass('cover-state', 'safe', inCover);
  },

  setAmmo(mag, reserve, reloading) {
    setText('ammo-mag', String(mag));
    setText('ammo-res', '/ ' + reserve);
    setText('reload-state', reloading ? 'RELOADING' : '');
    setClass('ammo-mag', 'low', mag <= 5);
  },

  setWave(wave, left, phase) {
    setText('wave-num', String(wave));
    const sub = phase === 'fighting' ? `${left} HOSTILE${left === 1 ? '' : 'S'}` : phase === 'break' ? 'RESUPPLY' : phase === 'intro' ? 'STAND BY' : '';
    setText('wave-sub', sub);
  },

  setRush(v) {
    setStyle('rush-fill', 'width', (Math.min(1, Math.max(0, v)) * 100).toFixed(1) + '%');
  },

  setScore(score, kills, combo) {
    setText('score', score.toLocaleString('en-US'));
    setText('kills', 'KILLS ' + kills);
    setText('combo', combo >= 2 ? `${combo} KILL STREAK` : '');
  },

  // Crosshair gap widens with spread (in radians).
  setCrosshair(spread, ads) {
    const gap = Math.round(5 + spread * 1500);
    if (last.gap !== gap) {
      last.gap = gap;
      els['crosshair'].style.setProperty('--gap', gap + 'px');
    }
    setClass('crosshair', 'ads', ads);
    setClass('ads-scope', 'on', ads);
  },

  flashDamage(amount) {
    const a = Math.min(1, 0.4 + amount / 40);
    if (els.damage) {
      els.damage.style.opacity = String(a);
      els.damage.classList.remove('pulse');
      void els.damage.offsetWidth;
      els.damage.classList.add('pulse');
    }
  },

  // kind: body | head | plate | kill
  hitMarker(kind) {
    const el = els.hitmarker;
    if (!el) return;
    el.classList.remove('body', 'head', 'plate', 'kill', 'show');
    void el.offsetWidth;
    el.classList.add(kind, 'show');
  },

  banner(title, sub = '', ms = 2200) {
    if (!els['banner']) return;
    setText('banner-title', title);
    setText('banner-sub', sub);
    els['banner'].classList.add('on');
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(() => els['banner'].classList.remove('on'), ms);
  },

  feed(text, cls = '') {
    const host = els.feed;
    if (!host) return;
    const li = document.createElement('div');
    li.className = 'feed-item ' + cls;
    li.textContent = text;
    host.prepend(li);
    feedItems.push(li);
    while (feedItems.length > 4) {
      const old = feedItems.shift();
      old.remove();
    }
    setTimeout(() => {
      li.classList.add('out');
      setTimeout(() => li.remove(), 450);
    }, 2600);
  },

  showDead(lines) {
    if (els['dead-stats']) els['dead-stats'].innerHTML = lines.map((l) => `<div><span>${l[0]}</span><b>${l[1]}</b></div>`).join('');
  },

  resetCache() {
    for (const k of Object.keys(last)) delete last[k];
    feedItems.length = 0;
    if (els.feed) els.feed.innerHTML = '';
  },
};
