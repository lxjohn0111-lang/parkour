// Persistent progress (koban, seals, upgrades, settings).
import { SDK } from './sdk.js';
import { SAVE_KEY, UPGRADES } from './config.js';

const DEFAULT = () => ({
  v: 1,
  koban: 0,
  unlocked: 1,
  levels: {},       // id -> { best, rank, seals:[escape, ghost, swift], koban, cat }
  upgrades: {},     // key -> level
  wrap: 'cream',
  endlessBest: 0,
  daily: { seed: 0, best: 0, score: 0 },
  seenIntro: false,
  totals: { runs: 0, caught: 0, koban: 0, cats: 0 },
  settings: { sens: 1, sfx: 0.8, music: 0.6, quality: -1, invertY: false, fov: 80 },
});

export const Save = {
  data: DEFAULT(),
  _timer: 0,
  load() {
    try {
      const raw = SDK.getItem(SAVE_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        const base = DEFAULT();
        this.data = { ...base, ...d, settings: { ...base.settings, ...(d.settings || {}) }, totals: { ...base.totals, ...(d.totals || {}) }, daily: { ...base.daily, ...(d.daily || {}) } };
      }
    } catch (e) { this.data = DEFAULT(); }
    return this.data;
  },
  save() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      try { SDK.setItem(SAVE_KEY, JSON.stringify(this.data)); } catch (e) { /* ignore */ }
    }, 150);
  },
  reset() { this.data = DEFAULT(); this.save(); },
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
