// Touch controls, written plainly: a floating joystick on the left half of the screen,
// drag-to-look on the right half. Every press is also summarised for the diagnostics log
// (see diag.js), so a device where it misbehaves can be understood instead of guessed at.
const R = 56;        // joystick travel, CSS px
const DEAD = 0.12;   // dead zone, fraction of R

export class TouchControls {
  constructor(input) {
    this.input = input;
    this.zone = document.getElementById('touch-zone');
    this.stickEl = document.getElementById('stick');
    this.knobEl = document.getElementById('knob');
    this.stick = null;   // { id, ox, oy, x, y, t0, moves, dist }
    this.look = null;    // { id, x, y, t0, moves, dist }
    this.mx = 0; this.mz = 0;
    this.presses = [];   // last presses, for diagnostics
    this.cutShort = 0;   // presses the host cancelled before any drag arrived
    this.warned = false;

    const z = this.zone;
    if (window.PointerEvent) {
      z.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse') return;
        e.preventDefault();
        try { z.setPointerCapture(e.pointerId); } catch (err) { /* optional */ }
        this.down(e.pointerId, e.clientX, e.clientY, 'pointer');
      });
      z.addEventListener('pointermove', (e) => this.move(e.pointerId, e.clientX, e.clientY));
      z.addEventListener('pointerup', (e) => this.up(e.pointerId, 'up'));
      z.addEventListener('pointercancel', (e) => this.up(e.pointerId, 'cancel'));
      // keep the browser from scrolling or zooming under the thumbs
      z.addEventListener('touchstart', (e) => { if (e.cancelable) e.preventDefault(); }, { passive: false });
      z.addEventListener('touchmove', (e) => { if (e.cancelable) e.preventDefault(); }, { passive: false });
    } else {
      const each = (e, fn) => { for (let i = 0; i < e.changedTouches.length; i++) fn(e.changedTouches[i]); };
      z.addEventListener('touchstart', (e) => { if (e.cancelable) e.preventDefault(); each(e, (t) => this.down(t.identifier, t.clientX, t.clientY, 'touch')); }, { passive: false });
      z.addEventListener('touchmove', (e) => { if (e.cancelable) e.preventDefault(); each(e, (t) => this.move(t.identifier, t.clientX, t.clientY)); }, { passive: false });
      z.addEventListener('touchend', (e) => each(e, (t) => this.up(t.identifier, 'up')));
      z.addEventListener('touchcancel', (e) => each(e, (t) => this.up(t.identifier, 'cancel')));
    }
    z.addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('resize', () => this.render());
  }

  down(id, x, y, src) {
    const left = x < innerWidth * 0.45;
    const p = { id, x, y, ox: x, oy: y, t0: performance.now(), moves: 0, dist: 0, side: left ? 'L' : 'R', src };
    if (left && !this.stick) this.stick = p;
    else if (!this.look) this.look = p;
    else return;
    this.update();
  }

  move(id, x, y) {
    const s = this.stick, l = this.look;
    if (s && s.id === id) {
      s.moves++; s.dist += Math.hypot(x - s.x, y - s.y);
      s.x = x; s.y = y;
      // pushed past the rim: drag the base along so reversing is instant
      const dx = x - s.ox, dy = y - s.oy, d = Math.hypot(dx, dy);
      if (d > R) { s.ox = x - (dx / d) * R; s.oy = y - (dy / d) * R; }
      this.update();
    } else if (l && l.id === id) {
      l.moves++; l.dist += Math.hypot(x - l.x, y - l.y);
      if (this.input.enabled) {
        const k = 0.0055 * this.input.sens;
        this.input.lookX += (x - l.x) * k;
        this.input.lookY += (y - l.y) * k * (this.input.invertY ? -1 : 1);
      }
      l.x = x; l.y = y;
    }
  }

  up(id, how) {
    let p = null;
    if (this.stick && this.stick.id === id) { p = this.stick; this.stick = null; }
    else if (this.look && this.look.id === id) { p = this.look; this.look = null; }
    if (!p) return;
    const dur = performance.now() - p.t0;
    this.presses.push({ side: p.side, src: p.src, ms: Math.round(dur), moves: p.moves, px: Math.round(p.dist), end: how });
    if (this.presses.length > 40) this.presses.shift();
    // a press that the host cancels before a single drag event reached the page
    if (how === 'cancel' && p.moves === 0) this.cutShort++;
    if (this.cutShort >= 3 && !this.warned && this.input.enabled) {
      this.warned = true;
      this.input.game.ui.toast('This app is taking over finger drags. Open the game in Safari to use the joystick.');
    }
    this.update();
  }

  release() { this.stick = null; this.look = null; this.update(); }

  update() {
    const s = this.stick;
    if (s) {
      const dx = s.x - s.ox, dy = s.y - s.oy, d = Math.hypot(dx, dy);
      // dead zone, then an eased ramp: small pushes walk, the rim runs
      const m = d > 0 ? Math.min(1, Math.max(0, (d / R - DEAD) / (0.88 - DEAD))) : 0;
      const e = m * m * (3 - 2 * m) * 0.35 + m * 0.65;
      this.mx = m ? (dx / d) * e : 0;
      this.mz = m ? (-dy / d) * e : 0;
    } else { this.mx = 0; this.mz = 0; }
    this.render();
  }

  // Idle: a faint base at the bottom-left shows where to put the thumb. Pressed: under the thumb.
  home() {
    const r = this.zone.getBoundingClientRect();
    return { x: r.left + Math.min(112, r.width * 0.2), y: r.bottom - Math.min(112, r.height * 0.3), r };
  }
  render() {
    if (!this.stickEl) return;
    const s = this.stick, h = this.home();
    const ox = s ? s.ox : h.x, oy = s ? s.oy : h.y;
    this.stickEl.style.opacity = s ? 1 : 0.45;
    this.stickEl.style.transform = `translate(${(ox - h.r.left).toFixed(1)}px, ${(oy - h.r.top).toFixed(1)}px)`;
    this.knobEl.style.transform = s ? `translate(${(s.x - s.ox).toFixed(1)}px, ${(s.y - s.oy).toFixed(1)}px)` : 'translate(0px, 0px)';
  }
}
