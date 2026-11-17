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
      const dx = j.x - j.ox, dy = j.y - j.oy, l = Math.hypot(dx, dy);
      if (j.id >= 0 && l > 8) { const m = Math.min(1, (l - 8) / 32); this.moveX = (dx / l) * m; this.moveZ = (-dy / l) * m; }
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
    document.querySelectorAll('.tb.held').forEach((el) => el.classList.remove('held'));
    this.updateStick();
  }

  // ------------------------------------------------------------------ touch
  setupTouch() {
    const root = document.getElementById('touch');
    if (!root) return;
    this.stick = document.getElementById('stick'); this.knob = document.getElementById('knob');
    const zone = (this.zone = document.getElementById('touch-zone'));
    const enable = () => {
      if (this.touch) return;
      this.touch = true;
      document.body.classList.add('touch');
      this.game.onTouchMode && this.game.onTouchMode();
    };
    // phones and tablets switch to touch controls up front; anything else on its first finger
    try { if (matchMedia('(pointer: coarse)').matches && !matchMedia('(any-pointer: fine)').matches) enable(); } catch (e) { /* old browser */ }
    addEventListener('touchstart', enable, { passive: true, capture: true });
    addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch' || e.pointerType === 'pen') enable(); }, { passive: true, capture: true });

    // Pointer Events: one id per finger, delivered the same way in browsers and in-app web views.
    zone.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse') return;
      e.preventDefault();
      enable();
      const x = e.clientX, y = e.clientY, h = this.home();
      if (x < innerWidth * 0.45 && this.joy.id < 0) {
        // pressing on the fixed stick gives a direction at once, no drag needed (some in-app
        // web views hand finger drags to the app instead of the page); elsewhere it floats
        if (Math.hypot(x - h.x, y - h.y) < 100) Object.assign(this.joy, { id: e.pointerId, ox: h.x, oy: h.y, x, y });
        else Object.assign(this.joy, { id: e.pointerId, ox: x, oy: y, x, y });
      }
      else if (this.lookTouch.id < 0) Object.assign(this.lookTouch, { id: e.pointerId, x, y });
      try { zone.setPointerCapture(e.pointerId); } catch (err) { /* capture is optional */ }
      this.updateStick();
    });
    zone.addEventListener('pointermove', (e) => {
      if (e.pointerId === this.joy.id) { this.joy.x = e.clientX; this.joy.y = e.clientY; this.updateStick(); }
      else if (e.pointerId === this.lookTouch.id) {
        if (this.enabled) {
          this.lookX += (e.clientX - this.lookTouch.x) * 0.0052 * this.sens;
          this.lookY += (e.clientY - this.lookTouch.y) * 0.0052 * this.sens * (this.invertY ? -1 : 1);
        }
        this.lookTouch.x = e.clientX; this.lookTouch.y = e.clientY;
      }
    });
    const end = (e) => {
      if (e.pointerId === this.joy.id) this.joy.id = -1;
      if (e.pointerId === this.lookTouch.id) this.lookTouch.id = -1;
      this.updateStick();
    };
    for (const t of ['pointerup', 'pointercancel', 'lostpointercapture']) zone.addEventListener(t, end);
    // while playing, a finger drag must never scroll or bounce the page
    document.addEventListener('touchmove', (e) => { if (this.enabled && e.cancelable) e.preventDefault(); }, { passive: false });
    addEventListener('resize', () => this.updateStick());
    // no long-press menus, text selection or double-tap zoom while playing
    const block = (e) => e.preventDefault();
    zone.addEventListener('touchstart', block, { passive: false });
    zone.addEventListener('contextmenu', block);
    root.querySelectorAll('[data-btn]').forEach((el) => {
      const b = el.dataset.btn;
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault(); e.stopPropagation();
        enable();
        el.classList.add('on');
        try { el.setPointerCapture(e.pointerId); } catch (err) { /* optional */ }
        if (!this.enabled && b !== 'pause') return;
        if (b === 'jump') { this.jumpPressed = true; this.jump = true; }
        if (b === 'crouch') { this.crouchPressed = true; this.crouchToggle = !this.crouchToggle; el.classList.toggle('held', this.crouchToggle); }
        if (b === 'throw') this.throwPressed = true;
        if (b === 'hook') this.hookPressed = true;
        if (b === 'smoke') this.smokePressed = true;
        if (b === 'pause') this.game.onPauseKey();
      });
      const up = () => { el.classList.remove('on'); if (b === 'jump') this.jump = false; };
      for (const t of ['pointerup', 'pointercancel', 'lostpointercapture']) el.addEventListener(t, up);
      el.addEventListener('touchstart', block, { passive: false });
      el.addEventListener('contextmenu', block);
    });
  }
  // Resting place of the stick (client coordinates), bottom-left inside the safe area.
  home() {
    const r = this.zone.getBoundingClientRect();
    return { x: r.left + Math.min(112, r.width * 0.2), y: r.bottom - Math.min(112, r.height * 0.3), r };
  }
  updateStick() {
    if (!this.stick) return;
    const j = this.joy, h = this.home(), active = j.id >= 0;
    const ox = active ? j.ox : h.x, oy = active ? j.oy : h.y;
    this.stick.style.opacity = active ? 1 : 0.6;
    this.stick.style.left = ox - h.r.left + 'px'; this.stick.style.top = oy - h.r.top + 'px';
    const dx = active ? j.x - j.ox : 0, dy = active ? j.y - j.oy : 0, l = Math.hypot(dx, dy) || 1, k = Math.min(1, 52 / l);
    this.knob.style.transform = `translate(${dx * k}px, ${dy * k}px)`;
  }
}
