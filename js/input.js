// Keyboard + mouse (pointer lock) and touch controls behind one small state object.
export class Input {
  constructor(canvas, game) {
    this.canvas = canvas; this.game = game;
    this.keys = new Set();
    this.moveX = 0; this.moveZ = 0; this.lookX = 0; this.lookY = 0;
    this.jump = false; this.crouch = false;
    this.jumpPressed = false; this.crouchPressed = false; this.throwPressed = false; this.hookPressed = false; this.smokePressed = false;
    this.sens = 1; this.invertY = false;
    this.touch = false; this.locked = false; this.enabled = false;
    this.crouchToggle = false;
    this.joy = { id: -1, ox: 0, oy: 0, x: 0, y: 0 };
    this.lookTouch = { id: -1, x: 0, y: 0 };
    this._lockAt = 0;
    this.lockFailed = false;

    addEventListener('keydown', (e) => this.onKey(e, true));
    addEventListener('keyup', (e) => this.onKey(e, false));
    addEventListener('blur', () => { this.keys.clear(); this.jump = false; });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === canvas;
      if (!this.locked) { this._lockAt = performance.now(); game.onPointerUnlock(); }
    });
    document.addEventListener('pointerlockerror', () => this.lockFail());
    canvas.addEventListener('mousedown', (e) => {
      if (this.touch) return;
      if (!this.locked && !this.lockFailed) { if (this.enabled) this.lock(); return; }
      if (!this.enabled) return;
      // without pointer lock the left button drags the view, so only F throws
      if (e.button === 0 && this.locked) this.throwPressed = true;
      if (e.button === 2) this.hookPressed = true;
    });
    addEventListener('mousemove', (e) => {
      if (!this.enabled) return;
      if (!this.locked && !(this.lockFailed && (e.buttons & 1))) return;
      // guard against the huge deltas some browsers emit right after locking
      const mx = Math.max(-200, Math.min(200, e.movementX || 0)), my = Math.max(-200, Math.min(200, e.movementY || 0));
      this.lookX += mx * 0.0021 * this.sens;
      this.lookY += my * 0.0021 * this.sens * (this.invertY ? -1 : 1);
    });
    addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('wheel', (e) => { if (this.enabled) e.preventDefault(); }, { passive: false });
    this.setupTouch();
  }

  lock() {
    if (this.touch || this.locked || this.lockFailed) return;
    try {
      const p = this.canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => this.lockFail());
    } catch (e) { this.lockFail(); }
  }
  // Some embeds refuse pointer lock: fall back to click-and-drag look.
  lockFail() {
    this.locked = false;
    if (this.lockFailed) return;
    this.lockFailed = true;
    this.game.onLockFailed && this.game.onLockFailed();
  }
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); }

  onKey(e, down) {
    const c = e.code;
    if (this.enabled && ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(c)) e.preventDefault();
    if (down) {
      if (e.repeat) return;
      this.keys.add(c);
      if (c === 'Escape' || c === 'KeyP') this.game.onPauseKey();
      if (!this.enabled) return;
      if (c === 'Space') { this.jumpPressed = true; this.jump = true; }
      if (c === 'ShiftLeft' || c === 'ShiftRight') { this.crouchPressed = true; }
      if (c === 'KeyC') { this.crouchPressed = true; this.crouchToggle = !this.crouchToggle; }
      if (c === 'KeyE') this.hookPressed = true;
      if (c === 'KeyF') this.throwPressed = true;
      if (c === 'KeyQ') this.smokePressed = true;
      if (c === 'KeyR') this.game.onRestartKey();
    } else {
      this.keys.delete(c);
      if (c === 'Space') this.jump = false;
    }
  }

  // Called once per frame before the simulation reads the state.
  poll() {
    const k = this.keys;
    if (!this.touch) {
      this.moveX = (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0);
      this.moveZ = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0);
      this.crouch = k.has('ShiftLeft') || k.has('ShiftRight') || this.crouchToggle;
    } else {
      const j = this.joy;
      const dx = j.x - j.ox, dy = j.y - j.oy, l = Math.hypot(dx, dy), max = 52;
      if (j.id >= 0 && l > 6) { this.moveX = (dx / l) * Math.min(1, l / max); this.moveZ = (-dy / l) * Math.min(1, l / max); }
      else { this.moveX = 0; this.moveZ = 0; }
      this.crouch = this.crouchToggle;
    }
  }
  endFrame() {
    this.lookX = 0; this.lookY = 0;
    this.jumpPressed = this.crouchPressed = this.throwPressed = this.hookPressed = this.smokePressed = false;
  }
  reset() {
    this.keys.clear(); this.jump = false; this.crouchToggle = false; this.endFrame();
    this.joy.id = -1; this.lookTouch.id = -1;
    this.updateStick();
  }

  // ------------------------------------------------------------------ touch
  setupTouch() {
    const root = document.getElementById('touch');
    if (!root) return;
    this.stick = document.getElementById('stick'); this.knob = document.getElementById('knob');
    const zone = document.getElementById('touch-zone');
    const enable = () => { if (!this.touch) { this.touch = true; document.body.classList.add('touch'); } };
    addEventListener('touchstart', enable, { passive: true, once: true });
    zone.addEventListener('touchstart', (e) => {
      e.preventDefault();
      for (const t of e.changedTouches) {
        if (t.clientX < innerWidth * 0.42 && this.joy.id < 0) Object.assign(this.joy, { id: t.identifier, ox: t.clientX, oy: t.clientY, x: t.clientX, y: t.clientY });
        else if (this.lookTouch.id < 0) Object.assign(this.lookTouch, { id: t.identifier, x: t.clientX, y: t.clientY });
      }
      this.updateStick();
    }, { passive: false });
    zone.addEventListener('touchmove', (e) => {
      e.preventDefault();
      for (const t of e.changedTouches) {
        if (t.identifier === this.joy.id) { this.joy.x = t.clientX; this.joy.y = t.clientY; }
        else if (t.identifier === this.lookTouch.id) {
          if (this.enabled) {
            this.lookX += (t.clientX - this.lookTouch.x) * 0.0052 * this.sens;
            this.lookY += (t.clientY - this.lookTouch.y) * 0.0052 * this.sens * (this.invertY ? -1 : 1);
          }
          this.lookTouch.x = t.clientX; this.lookTouch.y = t.clientY;
        }
      }
      this.updateStick();
    }, { passive: false });
    const end = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === this.joy.id) this.joy.id = -1;
        if (t.identifier === this.lookTouch.id) this.lookTouch.id = -1;
      }
      this.updateStick();
    };
    zone.addEventListener('touchend', end); zone.addEventListener('touchcancel', end);
    root.querySelectorAll('[data-btn]').forEach((el) => {
      const b = el.dataset.btn;
      el.addEventListener('touchstart', (e) => {
        e.preventDefault(); e.stopPropagation();
        el.classList.add('on');
        if (!this.enabled && b !== 'pause') return;
        if (b === 'jump') { this.jumpPressed = true; this.jump = true; }
        if (b === 'crouch') { this.crouchPressed = true; this.crouchToggle = !this.crouchToggle; el.classList.toggle('held', this.crouchToggle); }
        if (b === 'throw') this.throwPressed = true;
        if (b === 'hook') this.hookPressed = true;
        if (b === 'smoke') this.smokePressed = true;
        if (b === 'pause') this.game.onPauseKey();
      }, { passive: false });
      const up = (e) => { e.preventDefault(); el.classList.remove('on'); if (b === 'jump') this.jump = false; };
      el.addEventListener('touchend', up, { passive: false }); el.addEventListener('touchcancel', up, { passive: false });
    });
  }
  updateStick() {
    if (!this.stick) return;
    const j = this.joy;
    if (j.id < 0) { this.stick.style.opacity = 0; return; }
    this.stick.style.opacity = 1;
    this.stick.style.left = j.ox + 'px'; this.stick.style.top = j.oy + 'px';
    const dx = j.x - j.ox, dy = j.y - j.oy, l = Math.hypot(dx, dy) || 1, k = Math.min(1, 52 / l);
    this.knob.style.transform = `translate(${dx * k}px, ${dy * k}px)`;
  }
}
