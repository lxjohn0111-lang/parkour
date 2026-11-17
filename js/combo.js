// Trick combos: every move feeds the counter, keep moving to keep it alive, and bank it for
// score and koban. Getting hit or bailing a flip loses the lot.
const TIERS = [
  { n: 3, jp: '良', en: 'NICE' },
  { n: 5, jp: '巧', en: 'SLICK' },
  { n: 8, jp: '凄', en: 'SAVAGE' },
  { n: 12, jp: '神', en: 'GODLIKE' },
  { n: 17, jp: '伝説', en: 'LEGENDARY' },
];

export class Combo {
  constructor(game) { this.game = game; this.reset(); }
  reset() { this.n = 0; this.pts = 0; this.t = 0; this.tmax = 1; this.tier = -1; this.list = []; }
  get mult() { return Math.min(6, 1 + Math.floor(this.n / 2) * 0.5); }

  add(label, pts, big = false) {
    const g = this.game;
    this.n++; this.pts += pts;
    this.tmax = this.t = Math.max(this.t, 2.6 + (big ? 0.9 : 0));
    this.list.push({ label, pts });
    if (this.list.length > 4) this.list.shift();
    let tier = -1;
    for (let i = 0; i < TIERS.length; i++) if (this.n >= TIERS[i].n) tier = i;
    if (tier > this.tier) {
      this.tier = tier;
      g.ui.comboTier(TIERS[tier], tier);
      g.audio.tier(tier);
      g.fovKick = Math.max(g.fovKick, 5 + tier * 1.5);
      g.fxFlash = Math.max(g.fxFlash, 0.08 + tier * 0.03);
    }
    g.audio.trick(this.n, big);
    g.tally.bestCombo = Math.max(g.tally.bestCombo, this.n);
    g.ui.combo(this);
  }

  update(dt) {
    if (!this.n) return;
    const p = this.game.player;
    // standing around drains it fast; flow keeps it alive a little longer
    const idle = p.state === 'ground' && p.speed < 2.5;
    this.t -= dt * (idle ? 3 : 1 - p.flow * 0.35);
    if (this.t <= 0) this.bank();
    else this.game.ui.comboTimer(this.t / this.tmax);
  }

  bank() {
    if (!this.n) return;
    const g = this.game, total = Math.round(this.pts * this.mult);
    g.player.style += total;
    const koban = this.n >= 3 ? Math.floor(total / 140) : 0;
    if (koban) g.run.koban += koban;
    g.ui.comboBank(total, koban, this.n);
    g.audio.bank(this.n);
    this.reset();
  }

  drop() {
    if (!this.n) return;
    this.game.ui.comboDrop(this.n);
    this.game.audio.drop();
    this.reset();
  }
}
