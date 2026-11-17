// DOM user interface: HUD, menus, hideout shop, results.
import * as THREE from 'three';
import { LEVELS, UPGRADES, WRAPS, PALETTES } from './config.js';
import { Save } from './save.js';
import { fmtTime, clamp } from './util.js';

const $ = (id) => document.getElementById(id);
const _v = new THREE.Vector3();

export class UI {
  constructor(game) {
    this.game = game;
    this.cache = {};
    this.screens = ['loading', 'menu', 'nights', 'shop', 'settings', 'pause', 'failed', 'results'];
    this.current = 'loading'; this.backTo = 'menu';
    this.subT = 0; this.hintT = 0; this.bannerT = 0; this.arrowT = 0; this.toastT = 0;
    this.bind();
  }

  set(id, value) {
    if (this.cache[id] === value) return;
    this.cache[id] = value;
    $(id).textContent = value;
  }
  cls(el, name, on) { if (el.classList.contains(name) !== on) el.classList.toggle(name, on); }

  show(name) {
    this.current = name;
    for (const s of this.screens) $('s-' + s).classList.toggle('show', s === name);
    if (name === 'menu') this.refreshMenu();
    if (name === 'nights') this.renderNights();
    if (name === 'shop') this.renderShop();
  }
  hideScreens() { this.show(null); }
  hud(on) { $('hud').classList.toggle('hidden', !on); document.body.classList.toggle('playing', on); }

  bind() {
    const g = this.game, click = (id, fn) => $(id).addEventListener('click', () => { g.audio.init(); g.audio.ui(); fn(); });
    click('b-play', () => g.startRun(g.nextCampaignLevel()));
    click('b-nights', () => { this.backTo = 'menu'; this.show('nights'); });
    click('b-shop', () => { this.backTo = 'menu'; this.show('shop'); });
    click('b-settings', () => { this.backTo = 'menu'; this.show('settings'); });
    click('b-daily', () => g.startRun(g.dailyDef()));
    click('b-endless', () => g.startRun(g.endlessDef(1)));
    document.querySelectorAll('[data-back]').forEach((b) => b.addEventListener('click', () => { g.audio.ui(); this.show(this.backTo); }));
    click('p-resume', () => g.resume());
    click('p-checkpoint', () => g.respawn(false));
    click('p-restart', () => g.restartRun(false));
    click('p-settings', () => { this.backTo = 'pause'; this.show('settings'); });
    click('p-quit', () => g.toMenu());
    click('f-checkpoint', () => g.respawn(true));
    click('f-revive', () => g.reviveWithAd());
    click('f-restart', () => g.restartRun(true));
    click('f-quit', () => g.toMenu());
    click('r-next', () => g.nextRun());
    click('r-retry', () => g.restartRun(true));
    click('r-shop', () => { this.backTo = 'results'; this.show('shop'); });
    click('r-menu', () => g.toMenu());
    click('r-double', () => g.doubleReward());
    // settings
    const s = () => Save.data.settings;
    const bindRange = (id, key, apply) => {
      const el = $(id);
      el.addEventListener('input', () => { s()[key] = parseFloat(el.value); apply && apply(); Save.save(); });
    };
    bindRange('set-sens', 'sens', () => g.applySettings());
    bindRange('set-sfx', 'sfx', () => g.applySettings());
    bindRange('set-music', 'music', () => g.applySettings());
    bindRange('set-fov', 'fov', () => g.applySettings());
    $('set-quality').addEventListener('change', (e) => { s().quality = parseInt(e.target.value, 10); g.applySettings(true); Save.save(); });
    $('set-invert').addEventListener('change', (e) => { s().invertY = e.target.checked; g.applySettings(); Save.save(); });
  }
  syncSettings() {
    const s = Save.data.settings;
    $('set-sens').value = s.sens; $('set-sfx').value = s.sfx; $('set-music').value = s.music; $('set-fov').value = s.fov;
    $('set-quality').value = s.quality; $('set-invert').checked = s.invertY;
  }

  // ---------------------------------------------------------------- menus
  refreshMenu() {
    const g = this.game, d = Save.data;
    const next = g.nextCampaignLevel();
    $('b-play-sub').textContent = `Night ${next.id} · ${next.name}`;
    $('m-koban').textContent = d.koban; $('m-seals').textContent = `${Save.seals()}/36`; $('m-cats').textContent = `${Save.cats()}/12`;
    const endless = d.unlocked > 4;
    $('b-endless').classList.toggle('locked', !endless);
    $('b-endless-sub').textContent = endless ? (d.endlessBest ? `Best: night ${d.endlessBest}` : 'How far can you run?') : 'Clear Night 4 to unlock';
    const dd = g.dailyDef();
    $('b-daily-sub').textContent = d.daily.seed === dd.dailySeed && d.daily.best ? `Today: ${fmtTime(d.daily.best)}` : 'New rooftops every day';
  }
  renderNights() {
    const grid = $('nights-grid'), d = Save.data;
    grid.innerHTML = '';
    for (const L of LEVELS) {
      const rec = d.levels[L.id], locked = L.id > d.unlocked;
      const b = document.createElement('button');
      b.className = `night d${L.d}${locked ? ' locked' : ''}${L.id === d.unlocked ? ' next' : ''}`;
      const seals = (rec?.seals || [false, false, false]).map((s) => `<b class="seal${s ? ' on' : ''}"></b>`).join('');
      b.innerHTML = `<span class="num">NIGHT ${L.id} · ${PALETTES[L.d].time.toUpperCase()}</span><span class="jp">${L.jp}</span><span class="nm">${L.name}</span>
        <span class="meta">${seals}${rec?.cat ? '<span class="jp">招</span>' : ''}<span>${rec?.best ? fmtTime(rec.best) : locked ? 'LOCKED' : '—'}</span><span class="rk">${rec?.rank || ''}</span></span>`;
      b.addEventListener('click', () => { this.game.audio.ui(); this.game.startRun(L); });
      grid.appendChild(b);
    }
  }
  renderShop() {
    const grid = $('shop-grid'), d = Save.data, g = this.game;
    $('shop-koban').textContent = d.koban;
    grid.innerHTML = '';
    for (const u of UPGRADES) {
      const lvl = Save.up(u.key), max = lvl >= u.costs.length, cost = u.costs[lvl];
      const el = document.createElement('div');
      el.className = 'up';
      const pips = u.costs.map((_, i) => `<i class="${i < lvl ? 'on' : ''}"></i>`).join('');
      el.innerHTML = `<span class="jp">${u.jp}</span><span class="nm">${u.name}</span><span class="ds">${u.desc}</span><span class="pips">${pips}</span>`;
      const b = document.createElement('button');
      b.className = 'buy' + (max ? ' max' : d.koban < cost ? ' no' : '');
      b.innerHTML = max ? 'MASTERED' : `<b class="coin"></b>${cost}`;
      b.addEventListener('click', () => { if (Save.buy(u.key)) { g.audio.buy(); g.refreshStats(); this.renderShop(); } });
      el.appendChild(b);
      grid.appendChild(el);
    }
    const wraps = $('wraps'), seals = Save.seals();
    wraps.innerHTML = '';
    for (const w of WRAPS) {
      const b = document.createElement('button');
      const locked = seals < w.need;
      b.className = 'wrap' + (d.wrap === w.key ? ' sel' : '') + (locked ? ' locked' : '');
      b.innerHTML = `<i style="background:#${w.color.toString(16).padStart(6, '0')}"></i>${w.name}${locked ? ` · ${w.need} seals` : ''}`;
      b.addEventListener('click', () => { d.wrap = w.key; Save.save(); g.audio.ui(); g.refreshStats(); this.renderShop(); });
      wraps.appendChild(b);
    }
  }

  showFailed(canRevive, text) {
    $('fail-text').textContent = text;
    $('f-revive').classList.toggle('hidden', !canRevive);
    this.show('failed');
  }
  showResults(r) {
    const def = r.def;
    $('r-jp').textContent = def.jp;
    $('r-sub').textContent = def.endless || def.daily ? def.name : `Night ${def.id} · ${def.name}`;
    const rk = $('r-rank'); rk.textContent = r.rank; rk.className = 'rank ' + r.rank;
    $('r-time').textContent = fmtTime(r.time);
    const par = $('r-par'); par.textContent = `par ${fmtTime(def.par)}`; par.className = r.time <= def.par ? 'good' : '';
    $('r-koban').textContent = r.koban; $('r-koban-x').textContent = `of ${r.kobanMax}`;
    $('r-style').textContent = r.style; $('r-flow').textContent = `peak flow ×${(1 + r.maxFlow * 2).toFixed(1)}`;
    $('r-alerts').textContent = r.alerts; $('r-caught').textContent = r.deaths ? `captured ${r.deaths}×` : 'never caught';
    $('r-score').textContent = r.score.toLocaleString(); const best = $('r-best'); best.textContent = r.newBest ? 'NEW BEST' : `best ${fmtTime(r.best)}`; best.className = r.newBest ? 'good' : '';
    r.seals.forEach((on, i) => { const el = $('seal-' + i); el.classList.toggle('on', on); el.classList.toggle('new', r.newSeals[i]); });
    $('seal-par').textContent = `Under ${fmtTime(def.par)}`;
    $('seal-cat').classList.toggle('on', r.cat); $('seal-cat').classList.toggle('new', r.newCat);
    $('r-earn').textContent = r.earn;
    $('r-double').classList.toggle('hidden', r.earn <= 0);
    $('r-next').classList.toggle('hidden', !r.hasNext);
    $('r-next').querySelector('span').textContent = def.endless ? 'DEEPER' : 'NEXT NIGHT';
    this.show('results');
  }
  setEarn(v) { $('r-earn').textContent = v; $('r-double').classList.add('hidden'); }
  loading(p, text) { $('load-fill').style.transform = `scaleX(${p})`; if (text) $('load-text').textContent = text; }

  // ------------------------------------------------------------------ HUD
  stylePop(label, pts, gold = false) {
    const box = $('pops');
    const el = document.createElement('div');
    el.className = 'pop' + (gold ? ' gold' : '');
    el.innerHTML = `${label}<b>+${pts}</b>`;
    box.appendChild(el);
    while (box.children.length > 5) box.removeChild(box.firstChild);
    setTimeout(() => el.remove(), 1500);
  }
  banner(jp, en, kind = '') {
    const b = $('banner');
    b.className = kind;
    b.querySelector('.jp').textContent = jp; b.querySelector('.en').textContent = en;
    b.style.animation = 'none'; void b.offsetWidth; b.style.animation = '';
    this.bannerT = 2.2;
  }
  hint(html, dur = 6) { const h = $('hint'); h.innerHTML = html; h.classList.remove('hidden'); this.hintT = dur; }
  subtitle(jp, en) { const s = $('subs'); s.querySelector('.jp').textContent = jp; s.querySelector('.en').textContent = en; s.classList.remove('hidden'); s.style.animation = 'none'; void s.offsetWidth; s.style.animation = ''; this.subT = 2.6; }
  intro(def, pal) {
    const el = $('intro');
    el.querySelector('.jp').textContent = def.jp;
    el.querySelector('.t').textContent = def.name;
    el.querySelector('.d').textContent = `${pal.name.toUpperCase()} · ${pal.time.toUpperCase()}`;
    el.querySelector('.x').textContent = def.intro;
    el.classList.remove('hidden'); el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
    this.introT = 5.2;
  }
  arrowWarn(from) { this.arrowFrom = from.clone(); this.arrowT = 0.8; const a = $('arrow-warn'); a.classList.remove('hidden'); const i = a.firstElementChild; i.style.animation = 'none'; void i.offsetWidth; i.style.animation = ''; }
  toast(text) { const t = $('toast'); t.textContent = text; t.classList.remove('hidden'); this.toastT = 2.6; }
  flashTool(id) { const el = $(id); el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
  clearTransient() {
    for (const id of ['banner', 'hint', 'subs', 'intro', 'arrow-warn', 'ring', 'lockhint']) $(id).classList.add('hidden');
    $('pops').innerHTML = '';
    this.subT = this.hintT = this.bannerT = this.arrowT = this.introT = 0;
  }

  // Bearing of a world position relative to the camera, in degrees clockwise from "ahead".
  bearing(x, z) {
    const p = this.game.player;
    const a = Math.atan2(x - p.pos.x, -(z - p.pos.z)) + p.yaw;
    return (a * 180) / Math.PI;
  }

  update(dt) {
    const g = this.game, p = g.player, A = g.actors, hud = $('hud');
    if (this.subT > 0 && (this.subT -= dt) <= 0) $('subs').classList.add('hidden');
    if (this.hintT > 0 && (this.hintT -= dt) <= 0) $('hint').classList.add('hidden');
    if (this.bannerT > 0 && (this.bannerT -= dt) <= 0) $('banner').classList.add('hidden');
    if (this.introT > 0 && (this.introT -= dt) <= 0) $('intro').classList.add('hidden');
    if (this.toastT > 0 && (this.toastT -= dt) <= 0) $('toast').classList.add('hidden');
    if (hud.classList.contains('hidden')) return;
    this.cls($('lockhint'), 'hidden', !(g.state === 'playing' && !g.input.locked && !g.input.touch && !g.headless));
    $('hp-fill').style.transform = `scaleX(${clamp(g.hp / g.stats.maxHp, 0, 1)})`;
    $('flow-fill').style.transform = `scaleX(${p.flow.toFixed(3)})`;
    this.set('flow-label', p.flow > 0.08 ? `FLOW ×${(1 + p.flow * 2).toFixed(1)}` : 'FLOW');
    this.cls($('flow-label'), 'hot', p.flow > 0.5);
    this.set('koban-n', g.run.koban);
    this.set('timer', fmtTime(g.run.time));
    const goal = g.world.goal;
    const dist = Math.hypot(goal.x - p.pos.x, goal.z - p.pos.z, goal.y - p.pos.y);
    this.set('dist', `${Math.round(dist)} m`);
    this.set('star-n', g.stars); this.set('smoke-n', g.smokes);
    this.cls($('tool-star'), 'empty', g.stars <= 0); this.cls($('tool-smoke'), 'empty', g.smokes <= 0);
    this.cls($('tool-hook'), 'hidden', g.stats.hookRange <= 0);
    // the eye
    const det = A.detect, alert = A.alert;
    let state = 'calm', label = 'UNSEEN', open = 0.4;
    if (alert === 'alert') { state = 'alert'; label = 'SPOTTED'; open = 1; }
    else if (alert === 'search') { state = 'search'; label = 'SEARCHING'; open = 0.7; }
    else if (det > 0.04) { state = 'sus'; label = det > 0.6 ? 'ALMOST SEEN' : 'SUSPICIOUS'; open = 0.4 + det * 0.6; }
    else if (p.inShadow) { state = 'hidden'; label = 'IN SHADOW'; open = 0; }
    if (this.eyeState !== state) {
      this.eyeState = state;
      for (const s of ['alert', 'search', 'sus', 'hidden']) hud.classList.toggle('s-' + s, s === state);
    }
    this.set('eye-label', label);
    $('eye-open').style.transform = `scaleY(${open.toFixed(2)})`;
    $('eye-open').style.opacity = open > 0.02 ? 1 : 0;
    $('eye-shut').style.opacity = open > 0.02 ? 0 : 1;
    $('eye-fill').style.transform = `scaleX(${alert === 'alert' ? 1 : det.toFixed(3)})`;
    // who is looking at you
    const th = $('threat');
    if (A.threat && det > 0.04 && alert !== 'alert') {
      th.style.opacity = clamp(det * 1.5, 0.25, 1);
      th.style.transform = `rotate(${this.bearing(A.threat.pos.x, A.threat.pos.z).toFixed(1)}deg)`;
    } else th.style.opacity = 0;
    if (this.arrowT > 0) {
      this.arrowT -= dt;
      $('arrow-warn').style.transform = `rotate(${this.bearing(this.arrowFrom.x, this.arrowFrom.z).toFixed(1)}deg)`;
      if (this.arrowT <= 0) $('arrow-warn').classList.add('hidden');
    }
    // goal marker pinned to the screen edge when out of view
    const W = innerWidth, H = innerHeight, cam = p.camera;
    _v.set(goal.x, goal.y + 3, goal.z).project(cam);
    let mx = (_v.x * 0.5 + 0.5) * W, my = (-_v.y * 0.5 + 0.5) * H;
    if (_v.z > 1) { mx = W - mx; my = H * 0.9; }
    mx = clamp(mx, W * 0.06, W * 0.94); my = clamp(my, H * 0.13, H * 0.86);
    $('marker').style.transform = `translate(${mx.toFixed(0)}px, ${my.toFixed(0)}px) translate(-50%, -50%)`;
    this.set('marker-d', `${Math.round(dist)} m`);
    // hook target ring
    const ring = $('ring');
    if (g.hookTarget) {
      _v.set(g.hookTarget.x, g.hookTarget.y, g.hookTarget.z).project(cam);
      ring.classList.remove('hidden');
      ring.style.transform = `translate(${((_v.x * 0.5 + 0.5) * W).toFixed(0)}px, ${((-_v.y * 0.5 + 0.5) * H).toFixed(0)}px)`;
    } else ring.classList.add('hidden');
  }
}
