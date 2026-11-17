// Diagnostics for touch devices. When the page runs as a claude.ai artifact with the `db`
// capability, it saves a short report per session (device size, which touch events reach
// the page, how each press ended, script errors) so a control problem on a real phone can
// be read back and fixed. Outside claude.ai (CrazyGames, local files) this does nothing.
const MAX_WRITES = 8;

export class Diag {
  constructor() {
    this.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    this.counts = {};
    this.errors = [];
    this.samples = [];
    this.writes = 0;
    this.busy = false;
    this.dirty = true;
    this.db = null;
    const count = (e) => { const k = e.type + (e.pointerType ? ':' + e.pointerType : ''); this.counts[k] = (this.counts[k] || 0) + 1; this.dirty = true; };
    for (const t of ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'click']) {
      addEventListener(t, count, { capture: true, passive: true });
    }
    addEventListener('error', (e) => this.err(e.message + ' @' + (e.filename || '').split('/').pop() + ':' + e.lineno));
    addEventListener('unhandledrejection', (e) => this.err('promise: ' + (e.reason && (e.reason.message || e.reason.code) || e.reason)));
    try {
      const c = window.claude;
      if (c && c.use) c.use('db').then((db) => { this.db = db; this.flush(); }).catch(() => {});
    } catch (e) { /* not in a viewer */ }
  }
  err(msg) {
    if (this.errors.length < 20) this.errors.push(String(msg).slice(0, 300));
    this.dirty = true;
  }
  sample(s) {
    if (this.samples.length < 40) { this.samples.push(s); this.dirty = true; }
  }
  report(game) {
    const tc = game && game.input && game.input.tc;
    let coarse = null, fine = null;
    try { coarse = matchMedia('(pointer: coarse)').matches; fine = matchMedia('(any-pointer: fine)').matches; } catch (e) { /* old browser */ }
    return {
      v: 7,
      at: new Date().toISOString(),
      ua: navigator.userAgent.slice(0, 200),
      screen: `${innerWidth}x${innerHeight}@${devicePixelRatio}`,
      coarse, fine,
      touchPoints: navigator.maxTouchPoints || 0,
      pointerEvents: !!window.PointerEvent,
      touchMode: !!(game && game.input && game.input.touch),
      state: game ? game.state : 'boot',
      counts: this.counts,
      presses: tc ? tc.presses.slice(-30) : [],
      cutShort: tc ? tc.cutShort : 0,
      samples: this.samples,
      errors: this.errors,
    };
  }
  // One write at a time, only when something changed, a handful per session.
  async flush(game) {
    if (!this.db || this.busy || !this.dirty || this.writes >= MAX_WRITES) return;
    this.busy = true; this.dirty = false; this.writes++;
    try { await this.db.doc('diag/' + this.id).set(this.report(game || this.game)); } catch (e) { /* best effort */ }
    this.busy = false;
  }
}
