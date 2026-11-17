// Keyboard + mouse (pointer lock) and touch controls behind one small state object.
import { TouchControls } from './touch.js';

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
    this.tc = null;
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
      this.moveX = this.tc ? this.tc.mx : 0;
      this.moveZ = this.tc ? this.tc.mz : 0;
      this.crouch = this.crouchToggle;
    }
  }
  endFrame() {
    this.lookX = 0; this.lookY = 0;
    this.jumpPressed = this.crouchPressed = this.throwPressed = this.hookPressed = this.smokePressed = false;
  }
  reset() {
    this.keys.clear(); this.jump = false; this.crouchToggle = false; this.endFrame();
    if (this.tc) this.tc.release();
    document.querySelectorAll('.tb.held').forEach((el) => el.classList.remove('held'));
  }

  // ------------------------------------------------------------------ touch
  setupTouch() {
    const root = document.getElementById('touch');
    if (!root) return;
    this.tc = new TouchControls(this);
    const enable = () => {
      if (this.touch) return;
      this.touch = true;
      document.body.classList.add('touch');
      this.game.onTouchMode && this.game.onTouchMode();
      this.tc.render();
    };
    try { if (matchMedia('(pointer: coarse)').matches && !matchMedia('(any-pointer: fine)').matches) enable(); } catch (e) { /* old browser */ }
    addEventListener('touchstart', enable, { passive: true, capture: true });
    addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch' || e.pointerType === 'pen') enable(); }, { passive: true, capture: true });
    // while playing, a finger drag must never scroll or bounce the page
    document.addEventListener('touchmove', (e) => { if (this.enabled && e.cancelable) e.preventDefault(); }, { passive: false });

    // action buttons: act on press; a bare click (no press before it) also works
    const act = (b, el) => {
      if (!this.enabled && b !== 'pause') return;
      if (b === 'jump') this.jumpPressed = true;
      if (b === 'crouch') { this.crouchPressed = true; this.crouchToggle = !this.crouchToggle; el.classList.toggle('held', this.crouchToggle); }
      if (b === 'throw') this.throwPressed = true;
      if (b === 'hook') this.hookPressed = true;
      if (b === 'smoke') this.smokePressed = true;
      if (b === 'pause') this.game.onPauseKey();
    };
    root.querySelectorAll('[data-btn]').forEach((el) => {
      const b = el.dataset.btn;
      let downAt = -1e9;
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault(); e.stopPropagation();
        enable();
        downAt = performance.now();
        el.classList.add('on');
        try { el.setPointerCapture(e.pointerId); } catch (err) { /* optional */ }
        act(b, el);
        if (b === 'jump' && this.enabled) this.jump = true;
      });
      const release = () => { el.classList.remove('on'); if (b === 'jump') this.jump = false; };
      for (const t of ['pointerup', 'pointercancel', 'lostpointercapture']) el.addEventListener(t, release);
      el.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        if (performance.now() - downAt < 1500) return; // already handled by the press
        enable();
        act(b, el);
      });
      el.addEventListener('contextmenu', (e) => e.preventDefault());
    });
  }
}
