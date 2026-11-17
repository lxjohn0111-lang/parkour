// First-person parkour controller + view-model arms.
// Movement is tuned around momentum: nothing here should ever make you stop.
import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { clamp, lerp, damp, smooth } from './util.js';
import { STEP } from './world.js';

const GRAV = 24, JUMP = 7.9, RUN = 8.7, SNEAK = 3.3, RADIUS = 0.35;
const H_STAND = 1.75, H_CROUCH = 1.0, EYE_STAND = 1.62, EYE_CROUCH = 0.92;
const REACH = 2.8;

export class Player {
  constructor(game) {
    this.game = game;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0; this.pitch = 0;
    this.camera = new THREE.PerspectiveCamera(80, 1, 0.08, 1500);
    this.camera.rotation.order = 'YXZ';
    this.out = { nx: 0, nz: 0, solid: null, top: 0 };
    this.buildArms();
    this.reset({ x: 0, y: 0, z: 0, yaw: 0 });
  }

  reset(sp) {
    this.pos.set(sp.x, sp.y, sp.z);
    this.vel.set(0, 0, 0);
    this.yaw = sp.yaw || 0; this.pitch = -0.08;
    this.state = 'ground';
    this.grounded = true; this.crouch = false; this.sliding = false;
    this.coyote = 0; this.jumpBuf = 0; this.rollBuf = 0;
    this.slideT = 0; this.wallT = 0; this.wallCd = 0; this.wallN = [0, 0]; this.wallSide = 0; this.lastWall = null;
    this.mantle = null; this.rope = null; this.ropeS = 0; this.ropeV = 0; this.hook = null; this.hookCd = 0;
    this.flow = 0; this.style = 0;
    this.yVis = sp.y; this.eye = EYE_STAND; this.bob = 0; this.bobAmt = 0; this.dip = 0; this.dipV = 0;
    this.roll = 0; this.rollAnim = 0; this.fov = 80; this.shake = 0;
    this.airStart = null; this.stepAcc = 0; this.throwT = 0;
    this.inShadow = false; this.shadowT = 0; this.speed = 0; this.noiseT = 0;
    this.dead = false; this.frozen = false; this.lastSafe = { x: sp.x, y: sp.y, z: sp.z };
  }

  get height() { return this.crouch || this.sliding ? H_CROUCH : H_STAND; }
  get chestY() { return this.pos.y + (this.crouch || this.sliding ? 0.6 : 1.15); }

  addFlow(v, pts = 0, label = null) {
    this.flow = clamp(this.flow + v, 0, 1);
    if (pts) {
      const gain = Math.round(pts * (1 + this.flow * 2));
      this.style += gain;
      if (label) this.game.onStyle(label, gain);
    }
  }

  // ------------------------------------------------------------------ update
  update(dt, input) {
    const g = this.game, w = g.world;
    if (this.frozen) { this.updateCamera(dt, 0, 0); return; }
    // look
    this.yaw -= input.lookX; this.pitch = clamp(this.pitch - input.lookY, -1.5, 1.5);
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    const fx = -sy, fz = -cy, rx = cy, rz = -sy;
    let mx = input.moveX, mz = input.moveZ;
    const ml = Math.hypot(mx, mz);
    if (ml > 1) { mx /= ml; mz /= ml; }
    let wx = fx * mz + rx * mx, wz = fz * mz + rz * mx;
    const wl = Math.hypot(wx, wz);
    this.jumpBuf = input.jumpPressed ? 0.13 : Math.max(0, this.jumpBuf - dt);
    this.rollBuf = input.crouchPressed ? 0.32 : Math.max(0, this.rollBuf - dt);
    this.wallCd = Math.max(0, this.wallCd - dt);
    this.hookCd = Math.max(0, this.hookCd - dt);
    this.throwT = Math.max(0, this.throwT - dt);
    const maxRun = RUN * (1 + this.flow * g.stats.flowBonus);

    if (input.hookPressed) this.tryHook();

    if (this.state === 'mantle') this.updateMantle(dt);
    else if (this.state === 'rope') this.updateRope(dt, input, wx, wz, fx, fz);
    else if (this.state === 'hook') this.updateHook(dt, input);
    else {
      const v = this.vel;
      let hs = Math.hypot(v.x, v.z);
      if (this.grounded) {
        // ---- ground
        if (input.crouchPressed && hs > 6.2 && !this.sliding) {
          this.sliding = true; this.slideT = 0; this.crouch = false;
          const b = Math.min(hs + 2.2, 15) / hs; v.x *= b; v.z *= b;
          this.addFlow(0.05, 20, 'Slide');
          g.audio.slide(true);
        }
        if (this.sliding) {
          this.slideT += dt;
          // slope pulls you downhill
          const e = 0.25, y = this.pos.y;
          const gx = (w.groundAt(this.pos.x + e, this.pos.z, y + 0.3, 0.6) - w.groundAt(this.pos.x - e, this.pos.z, y + 0.3, 0.6)) / (2 * e);
          const gz = (w.groundAt(this.pos.x, this.pos.z + e, y + 0.3, 0.6) - w.groundAt(this.pos.x, this.pos.z - e, y + 0.3, 0.6)) / (2 * e);
          if (Math.abs(gx) < 1.5 && Math.abs(gz) < 1.5) {
            const k = GRAV * 0.9 / (1 + gx * gx + gz * gz);
            v.x -= gx * k * dt; v.z -= gz * k * dt;
          }
          hs = Math.hypot(v.x, v.z);
          const dec = 4.2 * dt;
          if (hs > dec) { v.x -= (v.x / hs) * dec; v.z -= (v.z / hs) * dec; }
          v.x += wx * 5 * dt; v.z += wz * 5 * dt;
          hs = Math.hypot(v.x, v.z);
          if (hs > 17) { v.x *= 17 / hs; v.z *= 17 / hs; }
          if (hs < 3.4 || (!input.crouch && this.slideT > 0.3) || this.slideT > 2.6) { this.sliding = false; this.crouch = input.crouch; g.audio.slide(false); }
        } else {
          this.crouch = input.crouch;
          const target = this.crouch ? SNEAK : maxRun;
          const tx = wx * target, tz = wz * target;
          const acc = (wl > 0.05 ? 46 : 40) * dt;
          const dx = tx - v.x, dz = tz - v.z, dl = Math.hypot(dx, dz);
          if (dl <= acc) { v.x = tx; v.z = tz; } else { v.x += (dx / dl) * acc; v.z += (dz / dl) * acc; }
        }
        v.y = 0;
        this.coyote = 0.13;
        if (this.jumpBuf > 0) this.jump(1);
      } else {
        // ---- air
        this.coyote = Math.max(0, this.coyote - dt);
        if (this.jumpBuf > 0 && this.coyote > 0) this.jump(1);
        if (this.state === 'wallrun') this.updateWallrun(dt, input, wx, wz);
        else {
          v.y -= GRAV * (v.y > 0 && !input.jump ? 1.9 : 1) * dt;
          if (v.y < -42) v.y = -42;
          const before = Math.hypot(v.x, v.z);
          v.x += wx * 17 * dt; v.z += wz * 17 * dt;
          const after = Math.hypot(v.x, v.z), cap = Math.max(before, maxRun * 0.85);
          if (after > cap) { v.x *= cap / after; v.z *= cap / after; }
        }
      }
      this.move(dt, input, wx, wz, fx, fz);
    }

    // world limits, water, bookkeeping
    const b = w.bounds;
    this.pos.x = clamp(this.pos.x, b.x0, b.x1); this.pos.z = clamp(this.pos.z, b.z0, b.z1);
    if (this.pos.y < -0.55 && w.isWater(this.pos.x, this.pos.z)) g.onSplash();
    this.speed = Math.hypot(this.vel.x, this.vel.z);
    // flow decays when you dawdle
    this.flow = Math.max(0, this.flow - dt * (this.speed < 4 ? 0.3 : 0.04 * g.stats.flowDecay));
    // footsteps + noise
    if (this.grounded && !this.sliding && this.speed > 1) {
      this.stepAcc += this.speed * dt;
      const stride = this.crouch ? 1.5 : 2.3;
      if (this.stepAcc > stride) {
        this.stepAcc = 0;
        g.audio.step(this.pos.y > 1.2, this.crouch ? 0.25 : 0.7);
        if (!this.crouch) g.noise(this.pos.x, this.pos.y, this.pos.z, 5.2 * g.stats.noise, 0.35);
      }
    }
    this.shadowT -= dt;
    if (this.shadowT <= 0) { this.shadowT = 0.14; this.inShadow = w.inShadow(this.pos.x, this.chestY, this.pos.z); }
    if (this.grounded && this.state === 'ground' && !this.sliding) this.lastSafe = { x: this.pos.x, y: this.pos.y, z: this.pos.z };
    this.updateCamera(dt, mx, mz);
  }

  jump(mult) {
    const v = this.vel;
    v.y = JUMP * mult;
    if (this.sliding) { this.sliding = false; this.game.audio.slide(false); }
    this.grounded = false; this.coyote = 0; this.jumpBuf = 0; this.crouch = false;
    this.state = 'air';
    this.airStart = { x: this.pos.x, z: this.pos.z, y: this.pos.y };
    this.game.audio.jump();
    this.dipV -= 1.2;
  }

  // Integrate with small sub-steps so thin ledges and steep roofs never tunnel.
  move(dt, input, wx, wz, fx, fz) {
    const w = this.game.world, v = this.vel, p = this.pos, out = this.out;
    const dist = Math.hypot(v.x, v.y, v.z) * dt;
    const n = Math.max(1, Math.ceil(dist / 0.2));
    const sdt = dt / n;
    for (let i = 0; i < n; i++) {
      p.x += v.x * sdt; p.y += v.y * sdt; p.z += v.z * sdt;
      out.solid = null;
      if (w.collide(p, RADIUS, this.height, out)) {
        const into = v.x * out.nx + v.z * out.nz;
        const hs = Math.hypot(v.x, v.z);
        // auto vault low obstacles at speed
        if (this.grounded && !this.sliding && out.top - p.y <= 1.3 && hs > 4.5 && into < -3 && this.tryMantle(-out.nx, -out.nz, true)) return;
        if (!this.grounded && this.state === 'air' && this.wallCd <= 0 && hs > 5.5 && into < 0 && -into / hs < 0.8 && p.y - w.groundAt(p.x, p.z, p.y, 0.2) > 0.9 &&
          w.wallAt(p.x - out.nx * (RADIUS + 0.25), p.z - out.nz * (RADIUS + 0.25), p.y) && (this.lastWall !== out.solid || this.wallCdSame <= 0)) {
          this.startWallrun(out);
        }
        if (into < 0) { v.x -= out.nx * into; v.z -= out.nz * into; }
      }
      // ground / rope
      let gy = w.groundAt(p.x, p.z, p.y, this.grounded ? STEP : 0.4);
      const gs = w.hit;
      const rope = v.y <= 0.5 ? w.ropeAt(p.x, p.z, p.y, this.grounded ? STEP : 0.35, this.grounded ? 0.3 : 0.25 - v.y * sdt) : null;
      if (rope && rope._y > gy + 0.02) { this.enterRope(rope); return; }
      if (this.grounded) {
        if (gy >= p.y - 0.5) p.y = gy;
        else { this.grounded = false; this.state = 'air'; this.airStart = { x: p.x, z: p.z, y: p.y }; if (this.sliding) { this.sliding = false; this.game.audio.slide(false); } }
      } else if (p.y <= gy && v.y <= 0.01 || (p.y < gy && gy - p.y <= 0.4)) {
        this.land(gy, gs);
      } else {
        const c = w.ceilAt(p.x, p.z, p.y + 0.4);
        if (v.y > 0 && p.y + this.height > c) { p.y = c - this.height; v.y = 0; }
      }
    }
    this.wallCdSame = Math.max(0, (this.wallCdSame || 0) - dt);
    // ledge grab while airborne and pushing forward
    if (!this.grounded && this.state === 'air' && (input.moveZ > 0.2 || input.jump) && v.y < 6.5) this.tryMantle(fx, fz, false);
  }

  land(gy, solid) {
    const g = this.game, v = this.vel, p = this.pos;
    const impact = -v.y;
    p.y = gy; v.y = 0;
    this.grounded = true; this.state = 'ground'; this.lastWall = null;
    const hs = Math.hypot(v.x, v.z);
    if (this.airStart) {
      const d = Math.hypot(p.x - this.airStart.x, p.z - this.airStart.z);
      if (d > 4.2) this.addFlow(0.1 + Math.min(0.1, d * 0.01), Math.round(d * 6), d > 7.5 ? 'Great Leap' : 'Leap');
    }
    this.airStart = null;
    const rolling = this.rollBuf > 0 && impact > 9;
    if (rolling) {
      this.rollAnim = 1; this.addFlow(0.1, 40, 'Roll');
      g.audio.roll();
      if (hs > 5) { this.sliding = false; }
    }
    const hard = impact > (rolling ? 19 : 13);
    if (hard) {
      const k = rolling ? 0.85 : 0.5;
      v.x *= k; v.z *= k;
      this.flow *= rolling ? 0.9 : 0.55;
      this.shake = Math.min(1, this.shake + 0.5);
    }
    const dmgAt = rolling ? 24 : 18.5;
    if (impact > dmgAt) g.damage((impact - dmgAt) * 5.5 + 5, 'fall');
    this.dipV -= Math.min(7, impact * 0.32);
    g.audio.land(clamp(impact / 16, 0.15, 1), p.y > 1.2);
    if (impact > 6) g.noise(p.x, p.y, p.z, (rolling ? 5 : 4 + impact * 0.55) * g.stats.noise, 0.5);
    g.onLand(impact, p);
  }

  // Ledge detection: is there a surface within reach just ahead?
  tryMantle(dx, dz, vault) {
    const w = this.game.world, p = this.pos;
    // probe ahead first, then right overhead (grabbing an eave you are standing under)
    for (const d of vault ? [0.6, 0.9] : [0.6, 0.9, 0.3, 0]) {
      const px = p.x + dx * d, pz = p.z + dz * d;
      const top = w.groundAt(px, pz, p.y + (vault ? 1.3 : REACH), 0);
      const rise = top - p.y;
      if (rise < (vault ? STEP + 0.01 : 0.55) || rise > (vault ? 1.3 : REACH)) continue;
      if (d < 0.5 && rise < this.height) continue;
      if (w.solidAt(px, top + 0.5, pz) || w.solidAt(px, top + 1.1, pz)) continue;
      const hs = Math.hypot(this.vel.x, this.vel.z);
      const quick = rise < 1.35;
      this.mantle = { x0: p.x, y0: p.y, z0: p.z, x1: px, y1: top + 0.02, z1: pz, t: 0, dur: quick ? 0.2 + rise * 0.06 : 0.26 + rise * 0.15, dx, dz, speed: quick ? Math.max(hs * 0.92, 5) : Math.max(4.4, hs * 0.5), quick };
      this.state = 'mantle'; this.grounded = false; this.sliding = false; this.crouch = false;
      this.vel.set(0, 0, 0);
      this.game.audio.mantle(quick);
      this.addFlow(quick ? 0.08 : 0.06, quick ? 30 : 25, quick ? 'Vault' : 'Climb');
      this.game.noise(p.x, p.y, p.z, 3.5 * this.game.stats.noise, 0.3);
      return true;
    }
    return false;
  }

  updateMantle(dt) {
    const m = this.mantle, p = this.pos;
    m.t += dt / m.dur;
    const t = Math.min(1, m.t);
    const up = smooth(0, 0.7, t), fw = smooth(0.45, 1, t);
    p.x = lerp(m.x0, m.x1, fw); p.z = lerp(m.z0, m.z1, fw);
    p.y = lerp(m.y0, m.y1, up) + (m.quick ? Math.sin(t * Math.PI) * 0.25 : 0);
    if (t >= 1) {
      this.state = 'ground'; this.grounded = true; this.mantle = null;
      this.vel.set(m.dx * m.speed, 0, m.dz * m.speed);
      this.yVis = p.y;
    }
  }

  startWallrun(out) {
    const v = this.vel;
    const into = v.x * out.nx + v.z * out.nz;
    let tx = v.x - out.nx * into, tz = v.z - out.nz * into;
    const tl = Math.hypot(tx, tz);
    if (tl < 3) return;
    tx /= tl; tz /= tl;
    this.state = 'wallrun'; this.wallT = 0;
    this.wallN = [out.nx, out.nz]; this.wallDir = [tx, tz]; this.wallSpeed = Math.max(tl, 8.4);
    this.lastWall = out.solid;
    v.y = clamp(v.y, 2.4, 4.6);
    // which side is the wall on? (n points away from the wall)
    const rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    this.wallSide = out.nx * rx + out.nz * rz < 0 ? 1 : -1;
    this.game.audio.wallrun(true);
    this.addFlow(0.08, 35, 'Wall Run');
  }

  updateWallrun(dt, input, wx, wz) {
    const w = this.game.world, v = this.vel, p = this.pos;
    this.wallT += dt;
    const [nx, nz] = this.wallN, [tx, tz] = this.wallDir;
    v.x = tx * this.wallSpeed - nx * 1.5; v.z = tz * this.wallSpeed - nz * 1.5;
    v.y -= 8.5 * dt;
    this.flow = Math.min(1, this.flow + dt * 0.15);
    const still = w.wallAt(p.x - nx * (RADIUS + 0.3), p.z - nz * (RADIUS + 0.3), p.y);
    const end = (jumped) => {
      this.state = 'air'; this.wallCd = 0.25; this.wallCdSame = 0.9;
      this.game.audio.wallrun(false);
      if (jumped) {
        v.x = tx * this.wallSpeed * 0.95 + nx * 5.4; v.z = tz * this.wallSpeed * 0.95 + nz * 5.4; v.y = 7.6;
        this.game.audio.jump();
        this.addFlow(0.1, 30, 'Wall Jump');
        this.airStart = { x: p.x, z: p.z, y: p.y };
      } else { v.x += nx * 1.5; v.z += nz * 1.5; }
    };
    if (this.jumpBuf > 0) { this.jumpBuf = 0; end(true); }
    else if (!still || this.wallT > 1.3 || (wx * tx + wz * tz < -0.3)) end(false);
  }

  enterRope(r) {
    const p = this.pos, v = this.vel;
    this.state = 'rope'; this.rope = r; this.grounded = false; this.sliding = false; this.crouch = false;
    this.ropeS = r._t * r.len;
    this.ropeV = v.x * r.ux + v.z * r.uz;
    p.x = r.ax + r.ux * this.ropeS; p.z = r.az + r.uz * this.ropeS; p.y = r._y;
    v.y = 0;
    this.game.audio.rope();
    this.addFlow(0.05, 20, Math.abs(r.slope) > 0.1 ? 'Zip Line' : 'Tightrope');
  }

  updateRope(dt, input, wx, wz, fx, fz) {
    const r = this.rope, p = this.pos, v = this.vel, g = this.game;
    const along = wx * r.ux + wz * r.uz;
    const steep = Math.abs(r.slope) > 0.1;
    if (steep) {
      // zip: gravity does the work
      const down = r.slope < 0 ? 1 : -1;
      this.ropeV += down * (4 + Math.abs(r.slope) * 26) * dt;
      this.ropeV = clamp(this.ropeV, -17, 17);
      this.flow = Math.min(1, this.flow + dt * 0.12);
    } else {
      const target = along * 6.2 * (1 + this.flow * 0.3);
      this.ropeV += clamp(target - this.ropeV, -26 * dt, 26 * dt);
      if (Math.abs(this.ropeV) > 2) this.flow = Math.min(1, this.flow + dt * 0.07);
    }
    this.ropeS += this.ropeV * dt;
    const t = this.ropeS / r.len;
    p.x = r.ax + r.dx * t; p.z = r.az + r.dz * t; p.y = r.ay + (r.by - r.ay) * t;
    v.x = r.ux * this.ropeV; v.z = r.uz * this.ropeV; v.y = 0;
    const leave = (jump) => {
      this.state = 'air'; this.rope = null; this.grounded = false;
      this.airStart = { x: p.x, z: p.z, y: p.y };
      if (jump) { v.y = JUMP; g.audio.jump(); this.jumpBuf = 0; v.x += fx * 1.5; v.z += fz * 1.5; }
      p.y += 0.05;
    };
    if (this.jumpBuf > 0) leave(true);
    else if (t < 0 || t > 1) { this.state = 'ground'; this.grounded = true; this.rope = null; }
    this.stepAcc += Math.abs(this.ropeV) * dt;
    if (this.stepAcc > 1.6 && !steep) { this.stepAcc = 0; g.audio.step(true, 0.2); }
  }

  tryHook() {
    const g = this.game;
    if (g.stats.hookRange <= 0 || this.hookCd > 0 || this.state === 'hook' || this.state === 'mantle') return;
    const cam = this.camera.position;
    const d = new THREE.Vector3();
    this.camera.getWorldDirection(d);
    let best = null, bestDot = Math.cos(0.3);
    for (const a of g.world.anchors) {
      const ax = a.x - cam.x, ay = a.y - cam.y, az = a.z - cam.z;
      const dist = Math.hypot(ax, ay, az);
      if (dist > g.stats.hookRange || dist < 3) continue;
      const dot = (ax * d.x + ay * d.y + az * d.z) / dist;
      if (dot > bestDot && g.world.los(cam.x, cam.y, cam.z, a.x, a.y, a.z)) { bestDot = dot; best = a; }
    }
    if (!best) { g.audio.deny(); return; }
    this.hook = { a: best, t: 0 };
    this.state = 'hook'; this.grounded = false; this.sliding = false; this.crouch = false; this.rope = null;
    this.airStart = { x: this.pos.x, z: this.pos.z, y: this.pos.y };
    g.audio.hook();
    this.addFlow(0.1, 40, 'Kaginawa');
  }

  updateHook(dt, input) {
    const h = this.hook, p = this.pos, v = this.vel, w = this.game.world;
    h.t += dt;
    const dx = h.a.x - p.x, dy = h.a.y - (p.y + 1.3), dz = h.a.z - p.z;
    const dist = Math.hypot(dx, dy, dz) || 1;
    const sp = Math.min(26, 8 + h.t * 60);
    v.x = damp(v.x, (dx / dist) * sp, 10, dt); v.y = damp(v.y, (dy / dist) * sp, 10, dt); v.z = damp(v.z, (dz / dist) * sp, 10, dt);
    const n = Math.max(1, Math.ceil((sp * dt) / 0.2));
    for (let i = 0; i < n; i++) {
      p.x += (v.x * dt) / n; p.y += (v.y * dt) / n; p.z += (v.z * dt) / n;
      w.collide(p, RADIUS, H_STAND, this.out);
      const gy = w.groundAt(p.x, p.z, p.y, 0.3);
      if (p.y < gy) p.y = gy;
    }
    this.flow = Math.min(1, this.flow + dt * 0.2);
    if (dist < 2.0 || h.t > 2.4 || this.jumpBuf > 0) {
      const hl = Math.hypot(dx, dz) || 1;
      v.x = (dx / hl) * 5.5; v.z = (dz / hl) * 5.5; v.y = this.jumpBuf > 0 ? Math.max(v.y, 6.5) : 5.2;
      this.jumpBuf = 0; this.state = 'air'; this.hook = null; this.hookCd = 0.7;
    }
  }

  // ------------------------------------------------------------------ camera
  updateCamera(dt, mx, mz) {
    const cam = this.camera, p = this.pos;
    const low = this.crouch || this.sliding;
    this.eye = damp(this.eye, low ? EYE_CROUCH : EYE_STAND, 14, dt);
    // smooth out step-ups so stairs of crates don't jolt the view
    if (this.grounded && this.state === 'ground') this.yVis = Math.abs(p.y - this.yVis) > 1.2 ? p.y : damp(this.yVis, p.y, 22, dt);
    else this.yVis = p.y;
    // landing dip (spring)
    this.dipV += (-this.dip * 130 - this.dipV * 16) * dt;
    this.dip += this.dipV * dt;
    this.dip = clamp(this.dip, -0.5, 0.2);
    // head bob
    const moving = this.grounded && !this.sliding && this.speed > 1.5;
    this.bobAmt = damp(this.bobAmt, moving ? Math.min(1, this.speed / RUN) : 0, 8, dt);
    this.bob += dt * (this.crouch ? 7 : 11.5) * (0.5 + 0.5 * Math.min(1.3, this.speed / RUN));
    const bobY = Math.sin(this.bob * 2) * 0.035 * this.bobAmt, bobX = Math.cos(this.bob) * 0.022 * this.bobAmt;
    // roll: strafe lean, wallrun tilt, slide lean, rope sway
    let rollT = -mx * 0.02 * (this.grounded ? 1 : 0.5);
    if (this.state === 'wallrun') rollT = this.wallSide * 0.2;
    if (this.sliding) rollT += 0.06;
    if (this.state === 'rope') rollT = Math.sin(this.bob * 0.5) * 0.03;
    this.roll = damp(this.roll, rollT, 9, dt);
    let pitchAdd = 0;
    if (this.rollAnim > 0) {
      this.rollAnim = Math.max(0, this.rollAnim - dt * 2.6);
      const t = 1 - this.rollAnim;
      pitchAdd = -Math.sin(t * Math.PI) * 0.55;
      this.dip = Math.min(this.dip, -0.25 * Math.sin(t * Math.PI));
    }
    if (this.state === 'mantle' && this.mantle) pitchAdd -= Math.sin(Math.min(1, this.mantle.t) * Math.PI) * 0.16;
    this.shake = Math.max(0, this.shake - dt * 2.4);
    const sh = this.shake * this.shake * 0.05;
    cam.position.set(p.x + Math.cos(this.yaw) * bobX + (Math.random() - 0.5) * sh, this.yVis + this.eye + bobY + this.dip + (Math.random() - 0.5) * sh, p.z - Math.sin(this.yaw) * bobX);
    cam.rotation.set(this.pitch + pitchAdd, this.yaw, this.roll);
    const sp = Math.hypot(this.vel.x, this.vel.y * 0.5, this.vel.z);
    const fovT = this.game.settings.fov + smooth(7, 17, sp) * 13 + (this.state === 'hook' ? 8 : 0) + (this.sliding ? 4 : 0);
    this.fov = damp(this.fov, fovT, 5, dt);
    this.applyFov(this.fov);
    this.updateArms(dt);
  }

  // FOV settings are tuned for landscape. On narrow (portrait) screens, widen the vertical
  // angle so the horizontal view stays usable.
  applyFov(v) {
    const cam = this.camera, a = cam.aspect, ref = 1.45;
    let f = v;
    if (a < ref) f = Math.min(106, (2 * Math.atan(Math.tan((v * Math.PI) / 360) * Math.min(2.4, ref / a)) * 180) / Math.PI);
    if (Math.abs(cam.fov - f) > 0.01) { cam.fov = f; cam.updateProjectionMatrix(); }
    // on narrow screens pull the hands in so they stay clear of the touch buttons
    const k = Math.max(0.62, Math.min(1, a / ref));
    if (this.arms.scale.x !== k) this.arms.scale.setScalar(k);
  }

  // -------------------------------------------------------------------- arms
  buildArms() {
    const mk = (side) => {
      const g = new GeoBuilder();
      const sleeve = 0x2a2f55, glove = 0x24202e, wrap = 0xe9dfc8, skin = 0xe8b596;
      // arm points along -Z, origin at the elbow
      g.box(-0.046, -0.046, -0.2, 0.046, 0.046, 0.16, sleeve);
      g.box(-0.052, -0.052, -0.245, 0.052, 0.052, -0.2, wrap);
      g.box(-0.05, -0.05, -0.17, 0.05, 0.05, -0.145, wrap);
      g.box(-0.05, -0.03, -0.345, 0.05, 0.03, -0.245, glove);
      for (let i = 0; i < 4; i++) {
        const x = -0.05 + i * 0.026;
        g.box(x, -0.034, -0.42 + (i === 0 || i === 3 ? 0.012 : 0), x + 0.022, 0.012, -0.345, skin);
        g.box(x, -0.034, -0.375, x + 0.022, 0.016, -0.345, glove);
      }
      g.box(side * -0.082, -0.03, -0.33, side * -0.05, 0.012, -0.26, skin);
      const geo = g.build();
      const m = new THREE.Mesh(geo, this.game.mats.toon);
      m.frustumCulled = false; m.castShadow = false; m.receiveShadow = true;
      return m;
    };
    this.armR = mk(1); this.armL = mk(-1);
    this.arms = new THREE.Group();
    this.arms.add(this.armR, this.armL);
    this.arms.position.set(0, 0, -0.22);
    this.camera.add(this.arms);
    this.armP = { r: new THREE.Vector3(0.3, -0.5, -0.1), l: new THREE.Vector3(-0.3, -0.5, -0.1), rr: new THREE.Vector3(), lr: new THREE.Vector3() };
    this.wrapColor = new THREE.Color(0xe9dfc8);
    // rope for the grappling hook
    this.hookLine = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 1), new THREE.MeshBasicMaterial({ color: 0xf2d9a0 }));
    this.hookLine.frustumCulled = false; this.hookLine.visible = false;
  }

  setWrapColor(hex) {
    const c = new THREE.Color(hex), ref = new THREE.Color(0xe9dfc8);
    for (const arm of [this.armR, this.armL]) {
      const col = arm.geometry.attributes.color;
      if (!arm.userData.base) arm.userData.base = col.array.slice();
      const base = arm.userData.base;
      for (let i = 0; i < col.count; i++) {
        const r = base[i * 3], g = base[i * 3 + 1], b = base[i * 3 + 2];
        if (Math.abs(r - ref.r) + Math.abs(g - ref.g) + Math.abs(b - ref.b) < 0.01) col.setXYZ(i, c.r, c.g, c.b);
      }
      col.needsUpdate = true;
    }
  }

  updateArms(dt) {
    const P = this.armP;
    // target pose per hand: position + euler (x pitch up, y yaw, z roll)
    let rp = [0.36, -0.62, 0.05], rr = [0.7, 0.3, 0], lp = [-0.36, -0.62, 0.05], lr = [0.7, -0.3, 0];
    const sp = clamp(this.speed / RUN, 0, 1.3);
    const st = this.state;
    if (st === 'mantle' && this.mantle) {
      const t = Math.min(1, this.mantle.t), push = smooth(0.15, 0.9, t);
      rp = [0.24, lerp(-0.3, -0.62, push), -0.1]; lp = [-0.24, lerp(-0.3, -0.62, push), -0.1];
      rr = [lerp(0.35, -0.35, push), 0.3, 0]; lr = [lerp(0.35, -0.35, push), -0.3, 0];
    } else if (st === 'wallrun') {
      const s = this.wallSide;
      const near = [s * 0.44, -0.3, -0.02], nr = [0.9, -s * 0.55, -s * 0.5];
      const far = [-s * 0.36, -0.5, 0.04], fr = [0.9, s * 0.3, 0];
      if (s > 0) { rp = near; rr = nr; lp = far; lr = fr; } else { lp = near; lr = nr; rp = far; rr = fr; }
    } else if (st === 'rope') {
      const sw = Math.sin(this.bob * 0.5) * 0.06;
      rp = [0.46, -0.44 + sw, 0.1]; rr = [0.45, -0.95, 0]; lp = [-0.46, -0.44 - sw, 0.1]; lr = [0.45, 0.95, 0];
      if (Math.abs(this.rope?.slope || 0) > 0.1) { rp = [0.2, -0.28, 0.02]; rr = [1.35, 0.12, 0]; lp = [-0.2, -0.28, 0.02]; lr = [1.35, -0.12, 0]; }
    } else if (st === 'hook') {
      rp = [0.24, -0.36, -0.04]; rr = [1.08, 0.2, 0]; lp = [-0.36, -0.56, 0.05]; lr = [0.8, -0.3, 0];
    } else if (this.sliding) {
      rp = [0.38, -0.5, 0.02]; rr = [0.6, 0.5, 0.2]; lp = [-0.46, -0.62, 0.14]; lr = [0.15, -0.9, 0];
    } else if (!this.grounded) {
      const up = clamp(this.vel.y / 8, -1, 1);
      rp = [0.4, -0.46 + up * 0.05, 0.0]; rr = [0.95 + up * 0.2, 0.12, -0.2]; lp = [-0.4, -0.46 + up * 0.05, 0.0]; lr = [0.95 + up * 0.2, -0.12, 0.2];
    } else if (this.crouch) {
      rp = [0.3, -0.52, 0.0]; rr = [0.9, 0.45, 0]; lp = [-0.3, -0.52, 0.0]; lr = [0.9, -0.45, 0];
    } else if (sp > 0.2) {
      // sprint pump: hands alternate up into view
      const a = Math.sin(this.bob), k = sp;
      rp = [0.35, -0.58 + Math.max(0, a) * 0.13 * k, 0.05 - a * 0.1 * k]; rr = [0.72 + a * 0.42 * k, 0.3, 0];
      lp = [-0.35, -0.58 + Math.max(0, -a) * 0.13 * k, 0.05 + a * 0.1 * k]; lr = [0.72 - a * 0.42 * k, -0.3, 0];
    }
    if (this.throwT > 0) {
      const t = 1 - this.throwT / 0.3;
      rp = [0.3 - t * 0.2, -0.36 - t * 0.12, -0.05 - Math.sin(t * Math.PI) * 0.12]; rr = [1.1 - t * 0.9, 0.5 + t * 0.7, 0.3];
    }
    const k = st === 'mantle' ? 22 : 13;
    P.r.set(damp(P.r.x, rp[0], k, dt), damp(P.r.y, rp[1], k, dt), damp(P.r.z, rp[2], k, dt));
    P.l.set(damp(P.l.x, lp[0], k, dt), damp(P.l.y, lp[1], k, dt), damp(P.l.z, lp[2], k, dt));
    P.rr.set(damp(P.rr.x, rr[0], k, dt), damp(P.rr.y, rr[1], k, dt), damp(P.rr.z, rr[2], k, dt));
    P.lr.set(damp(P.lr.x, lr[0], k, dt), damp(P.lr.y, lr[1], k, dt), damp(P.lr.z, lr[2], k, dt));
    this.armR.position.copy(P.r); this.armR.rotation.set(P.rr.x, P.rr.y, P.rr.z, 'YXZ');
    this.armL.position.copy(P.l); this.armL.rotation.set(P.lr.x, P.lr.y, P.lr.z, 'YXZ');
    // hook rope
    if (this.hook) {
      const a = this.hook.a, cam = this.camera;
      const from = new THREE.Vector3(0.2, -0.12, -0.6).applyMatrix4(cam.matrixWorld);
      cam.updateMatrixWorld();
      const to = new THREE.Vector3(a.x, a.y, a.z);
      const len = from.distanceTo(to);
      this.hookLine.position.copy(from).lerp(to, 0.5);
      this.hookLine.scale.set(1, 1, len);
      this.hookLine.lookAt(to);
      this.hookLine.visible = true;
    } else this.hookLine.visible = false;
  }
}
