// Persistent progress (koban, seals, upgrades, settings).
import { SDK } from './sdk.js';
import { SAVE_KEY, UPGRADES } from './config.js';

const DEFAULT = () => ({
  v: 1,
  koban: 0,
  unlocked: 1,
  levels: {},       // id -> { best, rank, seals:[escaped, ghost, contracts], koban, cat }
  upgrades: {},     // key -> level
  wrap: 'cream',
  endlessBest: 0,
  daily: { seed: 0, best: 0, score: 0 },
  seenIntro: false,
  totals: { runs: 0, caught: 0, koban: 0, cats: 0 },
  settings: { sens: 1, sfx: 0.8, music: 0.6, quality: -1, invertY: false, fov: 80 },
});

function parse(raw) {
  if (!raw) return null;
  try {
    const d = JSON.parse(raw);
    if (!d || typeof d !== 'object') return null;
    const base = DEFAULT();
    return { ...base, ...d, settings: { ...base.settings, ...(d.settings || {}) }, totals: { ...base.totals, ...(d.totals || {}) }, daily: { ...base.daily, ...(d.daily || {}) }, levels: d.levels || {}, upgrades: d.upgrades || {} };
  } catch (e) { return null; }
}

// never lose the last change: write right away when the tab is hidden or closed
if (typeof addEventListener === 'function') {
  addEventListener('pagehide', () => Save.flush());
  addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') Save.flush(); });
}

export const Save = {
  data: DEFAULT(),
  _timer: 0,
  _last: '',
  // Call once, after SDK.init(): reads the saved progress from the CrazyGames data module.
  load() {
    SDK.lockStorage();
    let raw = null;
    try { raw = SDK.getItem(SAVE_KEY); } catch (e) { raw = null; }
    // first run with the data module: bring over progress kept in this browser before
    let migrated = false;
    if (!raw && SDK.dataModule) { raw = SDK.localGet(SAVE_KEY); migrated = !!raw; }
    this.data = parse(raw) || DEFAULT();
    this._last = raw && !migrated ? raw : '';
    if (migrated) this.flush();
    return this.data;
  },
  // Debounced: many changes in a burst become one write.
  save() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => this.flush(), 250);
  },
  // Write now (also used when the page is hidden or closed), only if something changed.
  flush() {
    clearTimeout(this._timer);
    let json;
    try { json = JSON.stringify(this.data); } catch (e) { return; }
    if (json === this._last) return;
    if (SDK.setItem(SAVE_KEY, json)) this._last = json;
  },
  reset() { this.data = DEFAULT(); this.flush(); },
  up(key) { return this.data.upgrades[key] || 0; },
  seals() {
    let n = 0;
    for (const k in this.data.levels) n += (this.data.levels[k].seals || []).filter(Boolean).length;
    return n;
  },
  cats() {
    let n = 0;
    for (const k in this.data.levels) if (this.data.levels[k].cat) n++;
    return n;
  },
  canBuy(u) {
    const lvl = this.up(u.key);
    return lvl < u.costs.length && this.data.koban >= u.costs[lvl];
  },
  buy(key) {
    const u = UPGRADES.find((x) => x.key === key);
    if (!u || !this.canBuy(u)) return false;
    this.data.koban -= u.costs[this.up(key)];
    this.data.upgrades[key] = this.up(key) + 1;
    this.save();
    return true;
  },
};
