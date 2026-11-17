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
      else {
        // the stick can stay latched forward (see stickTap): keep running hands-free
        this.moveZ = this.latch;
        this.moveX = 0;
      }
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
    this.latch = 0; this.turnImpulse = 0;
    document.querySelectorAll('.tb.held').forEach((el) => el.classList.remove('held'));
    this.updateStick();
  }

  // ------------------------------------------------------------------ touch
  // Touch input is layered, because some in-app web views take the finger away from the page:
  //  1. Pointer Events (press, drag, lift) for the drag stick, look drag and buttons;
  //  2. a press that gets cancelled still counts as a tap;
  //  3. a plain click (all some views deliver) triggers the same tap action.
  setupTouch() {
    const root = document.getElementById('touch');
    if (!root) return;
    this.stick = document.getElementById('stick'); this.knob = document.getElementById('knob');
    const zone = (this.zone = document.getElementById('touch-zone'));
    this.latch = 0; this.turnImpulse = 0;
    this.label = document.getElementById('stick-label');
    this.diag = { src: '-', down: 0, move: 0, up: 0, cancel: 0, tap: 0 };
    const enable = () => {
      if (this.touch) return;
      this.touch = true;
      document.body.classList.add('touch');
      this.game.onTouchMode && this.game.onTouchMode();
      this.updateStick();
    };
    try { if (matchMedia('(pointer: coarse)').matches && !matchMedia('(any-pointer: fine)').matches) enable(); } catch (e) { /* old browser */ }
    addEventListener('touchstart', enable, { passive: true, capture: true });
    addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch' || e.pointerType === 'pen') enable(); }, { passive: true, capture: true });
    const now = () => performance.now();

    // ---- stick (left side) and look drag (right side) on the touch zone.
    // Touch events are iOS's own path and drive it; Pointer Events stand in where touch events
    // never arrive; a plain click is the last resort. Presses that get cancelled still count.
    let src = null, zoneDownAt = -1e9;
    const start = (id, x, y) => {
      this.diag.down++; zoneDownAt = now();
      const h = this.home();
      if (x < innerWidth * 0.45 && this.joy.id < 0) {
        const ring = Math.hypot(x - h.x, y - h.y) < 100;
        Object.assign(this.joy, { id, ox: ring ? h.x : x, oy: ring ? h.y : y, x, y, t0: now(), ring, moved: false });
        if (ring) this.latch = 0; // touching the stick takes over from a latched run
      } else if (this.lookTouch.id < 0) Object.assign(this.lookTouch, { id, x, y });
      this.updateStick();
    };
    const move = (id, x, y) => {
      const j = this.joy;
      if (id === j.id) {
        this.diag.move++;
        j.x = x; j.y = y;
        if (!j.moved && Math.hypot(x - j.ox, y - j.oy) > 14 && !j.ring) j.moved = true;
        this.updateStick();
      } else if (id === this.lookTouch.id) {
        this.diag.move++;
        if (this.enabled) {
          this.lookX += (x - this.lookTouch.x) * 0.0052 * this.sens;
          this.lookY += (y - this.lookTouch.y) * 0.0052 * this.sens * (this.invertY ? -1 : 1);
        }
        this.lookTouch.x = x; this.lookTouch.y = y;
      }
    };
    const finish = (id, cancelled) => {
      cancelled ? this.diag.cancel++ : this.diag.up++;
      const j = this.joy;
      if (id === j.id) {
        const quick = now() - j.t0 < 300;
        if (j.ring && (quick || cancelled)) this.stickTap(j.x - j.ox, j.y - j.oy, !quick);
        j.id = -1;
      }
      if (id === this.lookTouch.id) this.lookTouch.id = -1;
      this.updateStick();
    };
    const clearAll = () => { this.joy.id = -1; this.lookTouch.id = -1; };
    zone.addEventListener('touchstart', (e) => {
      e.preventDefault(); enable();
      if (src !== 'touch') { src = this.diag.src = 'touch'; clearAll(); }
      for (const t of e.changedTouches) start(t.identifier, t.clientX, t.clientY);
    }, { passive: false });
    zone.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (src === 'touch') for (const t of e.changedTouches) move(t.identifier, t.clientX, t.clientY);
    }, { passive: false });
    zone.addEventListener('touchend', (e) => { if (src === 'touch') for (const t of e.changedTouches) finish(t.identifier, false); });
    zone.addEventListener('touchcancel', (e) => { if (src === 'touch') for (const t of e.changedTouches) finish(t.identifier, true); });
    const pid = (e) => 1e6 + e.pointerId; // never collides with touch identifiers
    zone.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' || src === 'touch') return;
      enable();
      src = this.diag.src = 'pointer';
      start(pid(e), e.clientX, e.clientY);
      try { zone.setPointerCapture(e.pointerId); } catch (err) { /* capture is optional */ }
    });
    zone.addEventListener('pointermove', (e) => { if (src === 'pointer') move(pid(e), e.clientX, e.clientY); });
    zone.addEventListener('pointerup', (e) => { if (src === 'pointer') finish(pid(e), false); });
    zone.addEventListener('pointercancel', (e) => { if (src === 'pointer') finish(pid(e), true); });
    zone.addEventListener('click', (e) => {
      if (now() - zoneDownAt < 1200) return; // the click after a real press: already handled
      this.diag.tap++;
      const h = this.home();
      if (Math.hypot(e.clientX - h.x, e.clientY - h.y) < 100) { enable(); this.stickTap(e.clientX - h.x, e.clientY - h.y, false); }
    });
    zone.addEventListener('contextmenu', (e) => e.preventDefault());
    // while playing, a finger drag must never scroll or bounce the page
    document.addEventListener('touchmove', (e) => { if (this.enabled && e.cancelable) e.preventDefault(); }, { passive: false });
    addEventListener('resize', () => this.updateStick());

    // ---- action buttons: act on press, with a bare click as fallback
    const tap = (b, el) => {
      if (!this.enabled && b !== 'pause') return;
      if (b === 'jump') { this.jumpPressed = true; }
      if (b === 'crouch') { this.crouchPressed = true; this.crouchToggle = !this.crouchToggle; el.classList.toggle('held', this.crouchToggle); }
      if (b === 'throw') this.throwPressed = true;
      if (b === 'hook') this.hookPressed = true;
      if (b === 'smoke') this.smokePressed = true;
      if (b === 'pause') this.game.onPauseKey();
    };
    root.querySelectorAll('[data-btn]').forEach((el) => {
      const b = el.dataset.btn;
      let downAt = 0, held = false, pressed = false;
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault(); e.stopPropagation();
        enable();
        downAt = now(); held = true; pressed = true;
        el.classList.add('on');
        try { el.setPointerCapture(e.pointerId); } catch (err) { /* optional */ }
        tap(b, el);
        if (b === 'jump' && this.enabled) this.jump = true;
      });
      const release = () => {
        if (!held) return;
        held = false;
        el.classList.remove('on');
        if (b === 'jump') this.jump = false;
      };
      for (const t of ['pointerup', 'pointercancel', 'lostpointercapture']) el.addEventListener(t, release);
      el.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
      el.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        if (pressed) { pressed = false; if (now() - downAt < 4000) return; }
        this.diag.tap++;
        enable();
        tap(b, el);
      });
      el.addEventListener('contextmenu', (e) => e.preventDefault());
    });
  }

  // A short tap on the stick, or a hold the browser cut off.
  //  tap up: keep running (latched) · tap left/right: turn ~30° · tap middle/down: stop
  //  cut-off hold: keep going the way the stick was pushed
  stickTap(dx, dy, wasHold) {
    const l = Math.hypot(dx, dy);
    if (wasHold) this.latch = -dy > 12 ? 1 : 0;
    else if (l < 18 || dy > Math.abs(dx)) this.latch = 0;
    else if (Math.abs(dx) > -dy) this.turnImpulse += Math.sign(dx) * 0.52;
    else this.latch = 1;
    this.updateStick();
  }
  // Resting place of the stick (client coordinates), bottom-left inside the safe area.
  home() {
    const r = this.zone.getBoundingClientRect();
    return { x: r.left + Math.min(112, r.width * 0.2), y: r.bottom - Math.min(112, r.height * 0.3), r };
  }
  updateStick() {
    if (!this.stick || !this.zone) return;
    const j = this.joy, h = this.home(), active = j.id >= 0;
    const ox = active ? j.ox : h.x, oy = active ? j.oy : h.y;
    let dx = 0, dy = 0;
    if (active) { dx = j.x - j.ox; dy = j.y - j.oy; } else if (this.latch) dy = -40;
    const l = Math.hypot(dx, dy) || 1, k = Math.min(1, 52 / l);
    this.stick.style.opacity = active || this.latch ? 1 : 0.65;
    this.stick.style.left = ox - h.r.left + 'px'; this.stick.style.top = oy - h.r.top + 'px';
    this.knob.style.transform = `translate(${dx * k}px, ${dy * k}px)`;
    this.stick.classList.toggle('latched', !!this.latch && !active);
    if (this.label) {
      const t = this.latch && !active ? 'TAP MIDDLE TO STOP' : '';
      if (this.label.textContent !== t) this.label.textContent = t;
    }
  }
}
