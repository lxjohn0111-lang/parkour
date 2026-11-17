// The night watch: rooftop sentries, street patrols, fire-tower lookouts, plus
// everything else that moves (shuriken, arrows, smoke, pickups, petals).
import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { clamp, lerp, damp, angleDiff, dampAngle, TAU } from './util.js';
import { STEP, HW } from './world.js';
import { BARKS } from './config.js';

const G_R = 0.35, G_H = 1.75;
const _v = new THREE.Vector3();
const _out = { nx: 0, nz: 0, solid: null, top: 0 };

let SHARED = null;
function shared() {
  if (SHARED) return SHARED;
  const navy = 0x232a55, navyD = 0x1a1f42, skin = 0xe2ad8c, hak = 0x4d5578, dark = 0x17152a, cream = 0xe8dcc0, steel = 0xb9c2d6, gold = 0xf2b53a, red = 0xc8452f;
  const body = new GeoBuilder();
  body.box(-0.25, 0.85, -0.15, 0.25, 1.45, 0.15, navy);
  body.box(-0.27, 0.58, -0.17, 0.27, 0.9, 0.17, navyD);
  body.box(-0.26, 0.86, -0.165, 0.26, 0.99, 0.165, cream);
  body.box(-0.11, 1.45, -0.11, 0.11, 1.72, 0.11, skin);
  body.box(-0.1, 1.1, 0.15, 0.1, 1.32, 0.165, red);
  body.cyl(0, 1.66, 0, 0.4, 0.06, 0.2, 8, dark);
  body.box(-0.05, 1.7, -0.33, 0.05, 1.78, -0.27, gold);
  const leg = new GeoBuilder();
  leg.box(-0.105, -0.6, -0.115, 0.105, 0.02, 0.115, hak);
  leg.box(-0.1, -0.7, -0.22, 0.1, -0.6, 0.1, dark);
  const armR = new GeoBuilder();
  armR.box(-0.07, -0.52, -0.08, 0.07, 0.04, 0.08, navy);
  armR.box(-0.055, -0.64, -0.06, 0.055, -0.52, 0.06, skin);
  armR.box(-0.016, -0.62, -0.5, 0.016, -0.585, -0.02, steel);
  armR.box(-0.016, -0.62, -0.2, 0.06, -0.585, -0.17, steel);
  const armL = new GeoBuilder();
  armL.box(-0.07, -0.52, -0.08, 0.07, 0.04, 0.08, navy);
  armL.box(-0.055, -0.64, -0.06, 0.055, -0.52, 0.06, skin);
  const lan = new GeoBuilder();
  lan.box(-0.012, -0.05, -0.012, 0.012, 0.0, 0.012, dark);
  lan.box(-0.14, -0.1, -0.14, 0.14, -0.05, 0.14, dark);
  lan.box(-0.14, -0.5, -0.14, 0.14, -0.45, 0.14, dark);
  const cone = new THREE.ConeGeometry(1, 1, 22, 1, true);
  cone.translate(0, -0.5, 0); cone.rotateX(Math.PI / 2);
  const cc = [];
  const cp = cone.attributes.position;
  for (let i = 0; i < cp.count; i++) { const k = 0.22 + 0.78 * Math.pow(1 - clamp(-cp.getZ(i), 0, 1), 1.4); cc.push(k, k, k); }
  cone.setAttribute('color', new THREE.Float32BufferAttribute(cc, 3));
  const star = new GeoBuilder();
  star.box(-0.16, -0.008, -0.035, 0.16, 0.008, 0.035, 0xd8dcec);
  star.box(-0.035, -0.008, -0.16, 0.035, 0.008, 0.16, 0xd8dcec);
  const arrow = new GeoBuilder();
  arrow.box(-0.012, -0.012, -0.45, 0.012, 0.012, 0.45, 0xd9c7a0);
  arrow.box(-0.03, -0.03, -0.55, 0.03, 0.03, -0.45, 0x444a66);
  arrow.box(-0.05, -0.002, 0.3, 0.05, 0.002, 0.45, 0xc8452f);
  const koban = new THREE.CylinderGeometry(0.15, 0.15, 0.04, 10);
  koban.scale(1.35, 1, 0.85); koban.rotateX(Math.PI / 2);
  SHARED = {
    body: body.build(), leg: leg.build(), armR: armR.build(), armL: armL.build(), lanFrame: lan.build(),
    lanGlow: new THREE.BoxGeometry(0.25, 0.35, 0.25).translate(0, -0.275, 0), cone, star: star.build(), arrow: arrow.build(), koban,
    ico: new THREE.IcosahedronGeometry(1, 0),
  };
  return SHARED;
}

class Guard {
  constructor(actors, def, tower = null) {
    this.A = actors; this.def = def; this.tower = tower;
    const S = shared(), mats = actors.game.mats;
    const g = (this.group = new THREE.Group());
    this.body = new THREE.Mesh(S.body, mats.toon);
    this.legL = new THREE.Mesh(S.leg, mats.toon); this.legL.position.set(-0.13, 0.7, 0);
    this.legR = new THREE.Mesh(S.leg, mats.toon); this.legR.position.set(0.13, 0.7, 0);
    this.armL = new THREE.Mesh(S.armL, mats.toon); this.armL.position.set(-0.33, 1.4, 0);
    this.armR = new THREE.Mesh(S.armR, mats.toon); this.armR.position.set(0.33, 1.4, 0);
    this.lan = new THREE.Group(); this.lan.position.set(0, -0.6, 0);
    this.lanFrame = new THREE.Mesh(S.lanFrame, mats.toon);
    this.lanGlow = new THREE.Mesh(S.lanGlow, actors.lanternMat);
    this.lan.add(this.lanFrame, this.lanGlow);
    this.armL.add(this.lan);
    g.add(this.body, this.legL, this.legR, this.armL, this.armR);
    g.traverse((o) => { if (o.isMesh) { o.castShadow = o !== this.lanGlow; o.receiveShadow = false; } });
    this.coneMat = new THREE.MeshBasicMaterial({ vertexColors: true, color: 0xffc46a, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, side: THREE.DoubleSide, opacity: 0.1, fog: false });
    this.cone = new THREE.Mesh(S.cone, this.coneMat);
    this.cone.frustumCulled = false; this.cone.renderOrder = 6;
    actors.group.add(g, this.cone);

    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3();
    this.yaw = 0; this.lookYaw = 0; this.lookPitch = 0; this.grounded = true;
    this.state = 'patrol'; this.aware = 0; this.wp = 0; this.wait = 0; this.t = Math.random() * 10;
    this.anim = 0; this.attackT = 0; this.attackCd = 0; this.stun = 0; this.climb = null; this.jumpCd = 0; this.stuck = 0; this.barkCd = 0;
    this.target = null; this.sees = false; this.extra = false; this.dead = false; this.lit = true; this.side = 0; this.sideT = 0;
    if (tower) {
      this.range = tower.range; this.half = 0.17; this.pos.set(tower.x, tower.y, tower.z);
      this.sweep = Math.random() * 6; this.aim = new THREE.Vector3(tower.aimX, 6, tower.aimZ); this.aimCur = this.aim.clone();
      this.fireT = 2; this.lampOff = 0;
      this.lamp = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.6), actors.lanternMat);
      this.lamp.position.set(tower.x, tower.y + 1.35, tower.z);
      actors.group.add(this.lamp);
      this.coneMat.opacity = 0.3;
    } else {
      this.range = def.kind === 'patrol' ? 15 : 17; this.half = 0.56;
      const p = def.pts[0];
      this.pos.set(p[0], actors.game.world.highest(p[0], p[1]), p[1]);
      this.home = def.pts.map((q) => [q[0], q[1]]);
      this.yaw = def.facing || 0;
    }
    this.eye = new THREE.Vector3(); this.dir = new THREE.Vector3(0, 0, -1);
    this.sync(0);
  }

  get speedPatrol() { return this.def && this.def.kind === 'patrol' ? 1.9 : 1.5; }

  // ---- perception: how fast does this guard notice the player right now?
  perceive(pl, chasing) {
    const A = this.A, w = A.game.world;
    if (this.stun > 0 || (this.tower && this.lampOff > 0)) return 0;
    const tx = pl.pos.x, ty = pl.chestY, tz = pl.pos.z;
    const dx = tx - this.eye.x, dy = ty - this.eye.y, dz = tz - this.eye.z;
    const d = Math.hypot(dx, dy, dz);
    const hidden = pl.inShadow, low = pl.crouch || pl.sliding;
    let range = this.range * (chasing ? 1.5 : 1) * (hidden && !this.tower ? 0.72 : 1) * (low ? 0.85 : 1);
    if (d > range) return 0;
    const dot = (dx * this.dir.x + dy * this.dir.y + dz * this.dir.z) / (d || 1);
    const cosH = Math.cos(this.half * (chasing ? 1.8 : 1));
    const close = d < 2.4 && !low;
    if (dot < cosH && !close && !(chasing && d < 9)) return 0;
    if (!w.los(this.eye.x, this.eye.y, this.eye.z, tx, ty, tz)) return 0;
    if (A.smokeBlocks(this.eye, tx, ty, tz)) return 0;
    let f = 1;
    if (low) f *= 0.55;
    if (hidden && !this.tower) f *= 0.5;
    if (pl.speed > 7 && !low) f *= 1.25;
    if (pl.speed < 0.6) f *= 0.8;
    f *= A.game.stats.detect;
    const near = 1 - d / range;
    return f * (this.tower ? 1.3 + near : 0.4 + near * 1.8);
  }

  update(dt, pl) {
    const A = this.A, game = A.game, w = game.world;
    this.t += dt; this.barkCd -= dt; this.attackCd -= dt; this.jumpCd -= dt;
    if (this.tower) return this.updateTower(dt, pl);
    const alert = A.alert;
    // stunned by a shuriken: lantern out, blind
    if (this.stun > 0) {
      this.stun -= dt; this.aware = 0;
      this.lit = false;
      if (this.stun <= 0) { this.lit = true; this.state = alert === 'alert' ? 'chase' : 'suspicious'; this.wait = 3; this.target = { x: pl.pos.x, z: pl.pos.z }; }
      this.physics(dt, 0, 0, 0);
      return this.sync(dt);
    }
    const rate = this.perceive(pl, this.state === 'chase');
    this.sees = rate > 0;
    if (this.state !== 'chase') {
      if (rate > 0) this.aware = Math.min(1, this.aware + rate * dt * (alert === 'search' ? 1.6 : 1));
      else this.aware = Math.max(0, this.aware - dt * 0.3);
      if (this.aware >= 1) A.raiseAlert(this);
      else if (this.aware > 0.35 && this.state === 'patrol') {
        this.state = 'suspicious'; this.wait = 2.2; this.target = { x: pl.pos.x, z: pl.pos.z };
        this.bark('suspicious'); game.audio.suspicious();
      }
    }
    let mvx = 0, mvz = 0, speed = 0;
    const toward = (x, z, sp) => {
      const dx = x - this.pos.x, dz = z - this.pos.z, d = Math.hypot(dx, dz);
      if (d > 0.3) { mvx = dx / d; mvz = dz / d; speed = sp; }
      return d;
    };
    switch (this.state) {
      case 'patrol': {
        if (this.wait > 0) {
          this.wait -= dt;
          this.lookYaw = Math.sin(this.t * 0.9) * 0.9;
        } else {
          const p = this.home[this.wp];
          this.lookYaw = damp(this.lookYaw, Math.sin(this.t * 0.6) * 0.35, 3, dt);
          if (toward(p[0], p[1], this.speedPatrol) < 0.5) { this.wp = (this.wp + 1) % this.home.length; this.wait = 1.5 + Math.random() * 2.5; }
        }
        break;
      }
      case 'suspicious': {
        this.wait -= dt;
        if (rate > 0) this.target = { x: pl.pos.x, z: pl.pos.z };
        this.face(this.target.x, this.target.z, dt, 5);
        this.lookYaw = damp(this.lookYaw, 0, 6, dt);
        if (this.wait <= 0) {
          if (this.aware > 0.5) { this.state = 'investigate'; this.wait = 5; }
          else { this.state = 'patrol'; this.wait = 0.5; if (this.aware < 0.2) this.bark('calm'); }
        }
        break;
      }
      case 'investigate': {
        this.wait -= dt;
        const d = toward(this.target.x, this.target.z, 2.6);
        if (d < 1.2 || this.wait <= 0 || this.blocked) { this.state = 'search'; this.wait = 3.5; }
        break;
      }
      case 'search': {
        this.wait -= dt;
        this.lookYaw = Math.sin(this.t * 1.7) * 1.2;
        if (this.target && this.wait > 2.5) toward(this.target.x, this.target.z, 3);
        if (this.wait <= 0 && alert !== 'alert' && alert !== 'search') { this.state = 'patrol'; this.wait = 0.5; }
        break;
      }
      case 'chase': {
        this.lookYaw = damp(this.lookYaw, 0, 8, dt);
        const tgt = A.lastKnown;
        const dx = tgt.x - this.pos.x, dz = tgt.z - this.pos.z, d = Math.hypot(dx, dz), dyy = pl.pos.y - this.pos.y;
        const dp = Math.hypot(pl.pos.x - this.pos.x, pl.pos.z - this.pos.z);
        if (this.attackT > 0) {
          this.attackT -= dt;
          this.face(pl.pos.x, pl.pos.z, dt, 10);
          if (this.attackT <= 0) {
            this.attackCd = 1.3;
            if (dp < 2.4 && Math.abs(dyy) < 1.7 && this.sees) { game.damage(34, 'guard', this); game.audio.thunk(); }
          }
        } else if (dp < 1.9 && Math.abs(dyy) < 1.5 && this.attackCd <= 0 && this.sees) {
          this.attackT = 0.42;
        } else if (d > 1.0) {
          // run at the last known position, sidestepping when blocked at an edge
          let sx = dx / d, sz = dz / d;
          if (this.sideT > 0) { this.sideT -= dt; const px = -sz * this.side, pz = sx * this.side; sx = sx * 0.3 + px; sz = sz * 0.3 + pz; const l = Math.hypot(sx, sz); sx /= l; sz /= l; }
          mvx = sx; mvz = sz; speed = this.def.kind === 'patrol' ? 6.6 : 7.3;
          if (this.barkCd <= 0 && Math.random() < dt * 0.25) this.bark('chase');
        } else if (A.alert === 'search') { this.state = 'search'; this.wait = 4; this.target = { x: tgt.x, z: tgt.z }; }
        break;
      }
    }
    this.physics(dt, mvx, mvz, speed);
    this.sync(dt);
  }

  face(x, z, dt, k) {
    const want = Math.atan2(-(x - this.pos.x), -(z - this.pos.z));
    this.yaw = dampAngle(this.yaw, want, k, dt);
  }

  // Kinematic agent sharing the player's collision world.
  physics(dt, mx, mz, speed) {
    const w = this.A.game.world, p = this.pos, v = this.vel;
    this.blocked = false;
    if (this.climb) {
      const c = this.climb;
      c.t += dt / c.dur;
      const t = Math.min(1, c.t);
      p.y = lerp(c.y0, c.y1, Math.min(1, t * 1.4));
      p.x = lerp(c.x0, c.x1, clamp(t * 2 - 1, 0, 1)); p.z = lerp(c.z0, c.z1, clamp(t * 2 - 1, 0, 1));
      if (t >= 1) { this.climb = null; this.grounded = true; }
      return;
    }
    const chase = this.state === 'chase';
    if (this.grounded) {
      if (speed > 0) {
        this.yaw = dampAngle(this.yaw, Math.atan2(-mx, -mz), chase ? 9 : 4, dt);
        // look before stepping: is there floor ahead?
        const ax = p.x + mx * 0.9, az = p.z + mz * 0.9;
        const gy = w.groundAt(ax, az, p.y, STEP);
        if (gy < p.y - 1.1) {
          let jumped = false;
          if (chase && this.jumpCd <= 0) {
            // find a landing spot across the gap
            for (let d = 2.5; d <= 7; d += 0.75) {
              const ly = w.groundAt(p.x + mx * d, p.z + mz * d, p.y + 1.0, 0);
              if (ly > p.y - 4.5 && (ly > 0.5 || p.y < 4)) {
                const dy = ly - p.y, vy = 7.6;
                const tAir = (vy + Math.sqrt(Math.max(0, vy * vy - 2 * 24 * dy))) / 24;
                const sp = clamp((d + 0.6) / tAir, 4, 10.5);
                v.x = mx * sp; v.z = mz * sp; v.y = vy; this.grounded = false; this.jumpCd = 0.6; jumped = true;
                break;
              }
            }
            if (!jumped && p.y - gy < 8 && this.A.game.player.pos.y < p.y - 2.5) { v.x = mx * 4; v.z = mz * 4; v.y = 2; this.grounded = false; jumped = true; }
          }
          if (!jumped) {
            speed = 0; this.blocked = true;
            if (chase && this.sideT <= 0) { this.side = Math.random() < 0.5 ? -1 : 1; this.sideT = 1.2; }
            else if (this.state === 'patrol') { this.wp = (this.wp + 1) % this.home.length; this.wait = 1.5; }
          }
        }
      }
      if (this.grounded) {
        const tx = mx * speed, tz = mz * speed;
        v.x = damp(v.x, tx, 10, dt); v.z = damp(v.z, tz, 10, dt); v.y = 0;
      }
    } else {
      v.y -= 24 * dt;
    }
    const dist = Math.hypot(v.x, v.y, v.z) * dt;
    const n = Math.max(1, Math.ceil(dist / 0.25));
    for (let i = 0; i < n; i++) {
      p.x += (v.x * dt) / n; p.y += (v.y * dt) / n; p.z += (v.z * dt) / n;
      if (w.collide(p, G_R, G_H, _out)) {
        const rise = _out.top - p.y;
        if (chase && this.grounded && rise > STEP && rise < 3.3 && speed > 0) {
          const cx = p.x - _out.nx * 0.8, cz = p.z - _out.nz * 0.8;
          const top = w.groundAt(cx, cz, p.y + 3.3, 0);
          if (top > p.y + STEP && !w.solidAt(cx, top + 1, cz)) {
            this.climb = { t: 0, dur: 0.35 + (top - p.y) * 0.28, x0: p.x, y0: p.y, z0: p.z, x1: cx, y1: top, z1: cz };
            v.set(0, 0, 0);
            return;
          }
        }
        if (this.grounded && speed > 0) { this.stuck += dt; if (chase && this.sideT <= 0 && this.stuck > 0.3) { this.side = Math.random() < 0.5 ? -1 : 1; this.sideT = 1.0; this.stuck = 0; } this.blocked = true; }
      }
      const gy = w.groundAt(p.x, p.z, p.y, this.grounded ? STEP : 0.4);
      if (this.grounded) {
        if (gy >= p.y - 0.6) p.y = gy; else this.grounded = false;
      } else if (p.y <= gy && v.y <= 0) { p.y = gy; v.y = 0; this.grounded = true; }
    }
    p.x = clamp(p.x, -HW, HW);
    if (p.y < -0.5) { p.y = 0; this.dead = this.extra; if (!this.extra) { const h = this.home[0]; p.set(h[0], w.highest(h[0], h[1]), h[1]); this.grounded = true; v.set(0, 0, 0); } }
  }

  updateTower(dt, pl) {
    const A = this.A, game = A.game, w = game.world, tw = this.tower;
    if (this.lampOff > 0) { this.lampOff -= dt; if (this.lampOff <= 0) this.bark('calm'); }
    const on = this.lampOff <= 0;
    this.lamp.visible = on; this.cone.visible = on; this.lit = on;
    this.sweep += dt * 0.42;
    const alert = A.alert === 'alert';
    let ax, ay, az;
    if (alert && A.seenT < 2.5) { ax = A.lastKnown.x; ay = A.lastKnown.y + 1; az = A.lastKnown.z; }
    else { ax = this.aim.x + Math.sin(this.sweep) * 17; ay = this.aim.y; az = this.aim.z + Math.sin(this.sweep * 0.63 + 1.3) * 11; }
    this.aimCur.x = damp(this.aimCur.x, ax, alert ? 3.5 : 6, dt); this.aimCur.y = damp(this.aimCur.y, ay, 4, dt); this.aimCur.z = damp(this.aimCur.z, az, alert ? 3.5 : 6, dt);
    this.eye.set(tw.x, tw.y + 1.35, tw.z);
    this.dir.copy(this.aimCur).sub(this.eye).normalize();
    this.yaw = Math.atan2(-this.dir.x, -this.dir.z);
    const rate = on ? this.perceive(pl, false) : 0;
    this.sees = rate > 0;
    if (!alert) {
      if (rate > 0) this.aware = Math.min(1, this.aware + rate * dt); else this.aware = Math.max(0, this.aware - dt * 0.4);
      if (this.aware >= 1) A.raiseAlert(this);
    } else {
      // lookout turns archer
      this.fireT -= dt;
      const d = this.eye.distanceTo(pl.pos);
      if (this.fireT <= 0 && d < 60 && w.los(this.eye.x, this.eye.y, this.eye.z, pl.pos.x, pl.chestY, pl.pos.z) && !A.smokeBlocks(this.eye, pl.pos.x, pl.chestY, pl.pos.z)) {
        this.fireT = 2.3 + Math.random() * 1.2;
        A.fireArrow(this.eye, pl);
      }
    }
    // view
    this.group.position.set(tw.x, tw.y, tw.z); this.group.rotation.y = this.yaw;
    this.armR.rotation.x = alert ? 1.4 : 0.2; this.armL.rotation.x = 1.2; this.lan.visible = false;
    const L = this.range;
    this.cone.position.copy(this.eye);
    this.cone.lookAt(_v.copy(this.eye).add(this.dir));
    this.cone.rotateY(Math.PI);
    const hitD = w.ray(this.eye.x, this.eye.y, this.eye.z, this.dir.x, this.dir.y, this.dir.z, L, 0.6);
    const len = hitD > 0 ? Math.min(L, hitD + 1.5) : L;
    this.cone.scale.set(len * Math.tan(this.half), len * Math.tan(this.half), len);
    this.lightHex = alert ? 0xff5a3a : this.aware > 0.3 ? 0xffa040 : 0xffe2a0;
    this.coneMat.color.setHex(this.lightHex).multiplyScalar(2.4);
  }

  bark(kind) {
    if (this.barkCd > 0) return;
    this.barkCd = 3;
    const A = this.A;
    if (A.barkT > 0) return;
    A.barkT = 2.4;
    const b = BARKS[kind][Math.floor(Math.random() * BARKS[kind].length)];
    A.game.ui.subtitle(b[0], b[1]);
  }

  sync(dt) {
    const g = this.group, p = this.pos;
    g.position.copy(p);
    g.rotation.y = this.yaw;
    const sp = Math.hypot(this.vel.x, this.vel.z);
    this.anim += dt * (3 + sp * 1.6);
    const sw = Math.sin(this.anim) * clamp(sp / 4, 0, 1) * 0.75;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw;
    let ar = -sw * 0.8, al = 1.05;
    if (this.attackT > 0) ar = 2.6 * (1 - Math.abs(this.attackT / 0.42 - 0.3));
    else if (this.state === 'chase') ar = 1.3 + sw * 0.3;
    if (this.stun > 0) { ar = 2.2; al = 2.3; }
    if (this.climb) { ar = 2.7; al = 2.7; }
    if (!this.grounded) { this.legL.rotation.x = 0.5; this.legR.rotation.x = -0.4; }
    this.armR.rotation.x = damp(this.armR.rotation.x, ar, 14, dt || 0.016);
    this.armL.rotation.x = damp(this.armL.rotation.x, al, 10, dt || 0.016);
    this.lan.rotation.x = -this.armL.rotation.x;
    this.lanGlow.visible = this.lit;
    this.body.rotation.y = this.lookYaw * 0.5;
    // eye + view direction (used by perception, cone and spotlight)
    const ly = this.yaw + this.lookYaw;
    this.eye.set(p.x, p.y + 1.6, p.z);
    this.dir.set(-Math.sin(ly), -0.12, -Math.cos(ly)).normalize();
    const L = this.range * 0.62;
    this.cone.visible = this.lit;
    this.cone.position.set(p.x - Math.sin(ly) * 0.4, p.y + 0.95, p.z - Math.cos(ly) * 0.4);
    this.cone.rotation.set(-0.12, ly, 0, 'YXZ');
    this.cone.scale.set(L * Math.tan(this.half), L * Math.tan(this.half) * 0.75, L);
    const c = this.state === 'chase' ? 0xff4a34 : this.aware > 0.35 || this.state === 'search' || this.state === 'investigate' ? 0xffa040 : 0xffd98a;
    this.lightHex = c;
    this.coneMat.color.setHex(c).multiplyScalar(1.5);
  }

  remove() {
    this.group.removeFromParent(); this.cone.removeFromParent(); this.coneMat.dispose();
    if (this.lamp) { this.lamp.removeFromParent(); this.lamp.geometry.dispose(); }
  }
}

export class Actors {
  constructor(game) {
    this.game = game;
    this.group = new THREE.Group();
    this.lanternMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffc46a).multiplyScalar(2.6), fog: false });
    this.guards = []; this.shots = []; this.smokes = []; this.pops = [];
    this.alert = 'calm'; this.lastKnown = new THREE.Vector3(); this.seenT = 99; this.searchT = 0; this.alertT = 0; this.spawnT = 0; this.barkT = 0;
    this.detect = 0; this.threat = null; this.hbT = 0;
    // a small pool of real spotlights, handed to whichever lanterns are nearest
    this.spots = [];
    for (let i = 0; i < 4; i++) {
      const s = new THREE.SpotLight(0xffc878, 0, 30, 0.5, 0.22, 0);
      s.castShadow = false;
      this.group.add(s, s.target);
      this.spots.push(s);
    }
    this.smokeMat = new THREE.MeshToonMaterial({ color: 0xcfc6e6, gradientMap: game.mats.toon.gradientMap });
    this.starMat = game.mats.toon;
    this.initParticles();
  }

  build(world) {
    this.clear();
    const S = shared(), game = this.game;
    for (const d of world.guardDefs) this.guards.push(new Guard(this, d));
    for (const t of world.towerDefs) this.guards.push(new Guard(this, null, t));
    // pickups
    this.pickups = world.pickups;
    const kob = this.pickups.filter((p) => p.type === 'koban');
    this.kobanMesh = new THREE.InstancedMesh(S.koban, game.mats.gold, Math.max(1, kob.length));
    this.kobanMesh.frustumCulled = false; this.kobanMesh.castShadow = false;
    kob.forEach((p, i) => { p.idx = i; });
    this.group.add(this.kobanMesh);
    this.pickMeshes = [];
    for (const p of this.pickups) {
      if (p.type === 'koban') continue;
      const m = makePickupMesh(p.type, game.mats);
      m.position.set(p.x, p.y, p.z);
      p.mesh = m; this.group.add(m); this.pickMeshes.push(m);
    }
    this.kobanT = 0;
    this.updateKoban(0, true);
    // checkpoints
    this.cps = world.checkpoints.map((c) => ({ ...c, on: !!c.start }));
    this.alert = 'calm'; this.detect = 0; this.seenT = 99; this.barkT = 0;
  }

  clear() {
    for (const g of this.guards) g.remove();
    this.guards.length = 0;
    for (const s of this.shots) s.mesh.removeFromParent();
    this.shots.length = 0;
    for (const s of this.smokes) s.meshes.forEach((m) => m.removeFromParent());
    this.smokes.length = 0;
    if (this.kobanMesh) { this.kobanMesh.removeFromParent(); this.kobanMesh.dispose(); this.kobanMesh = null; }
    if (this.pickMeshes) for (const m of this.pickMeshes) { m.removeFromParent(); }
    this.pickMeshes = [];
    for (const s of this.spots) s.intensity = 0;
  }

  // Restore the watch to its posts (used on checkpoint respawn).
  resetAlert() {
    this.alert = 'calm'; this.seenT = 99; this.detect = 0;
    this.guards = this.guards.filter((g) => { if (g.extra) { g.remove(); return false; } return true; });
    for (const g of this.guards) {
      g.aware = 0; g.stun = 0; g.lit = true; g.attackT = 0; g.climb = null;
      if (!g.tower) { g.state = 'patrol'; g.wait = 1; const h = g.home[0]; g.pos.set(h[0], this.game.world.highest(h[0], h[1]), h[1]); g.vel.set(0, 0, 0); g.grounded = true; g.sync(0); }
      else { g.lampOff = 0; g.fireT = 2; }
    }
    for (const s of this.shots) s.mesh.removeFromParent();
    this.shots.length = 0;
  }

  raiseAlert(src) {
    const game = this.game, pl = game.player;
    if (this.alert === 'alert') return;
    const first = this.alert !== 'search';
    this.alert = 'alert'; this.alertT = 0; this.seenT = 0; this.spawnT = 3.5;
    this.lastKnown.copy(pl.pos);
    src.barkCd = 0; this.barkT = 0;
    src.bark('spotted');
    game.audio.alert();
    game.onAlert(first);
    for (const g of this.guards) {
      if (g.tower) { g.aware = 1; continue; }
      const d = g.pos.distanceTo(pl.pos);
      if (g === src || d < 42) { g.state = 'chase'; g.aware = 1; g.sideT = 0; }
    }
  }

  smokeBlocks(eye, tx, ty, tz) {
    for (const s of this.smokes) {
      if (s.t > s.life - 0.8) continue;
      // distance from smoke centre to the sight segment
      const dx = tx - eye.x, dy = ty - eye.y, dz = tz - eye.z;
      const l2 = dx * dx + dy * dy + dz * dz;
      const t = clamp(((s.x - eye.x) * dx + (s.y - eye.y) * dy + (s.z - eye.z) * dz) / l2, 0, 1);
      if (Math.hypot(eye.x + dx * t - s.x, eye.y + dy * t - s.y, eye.z + dz * t - s.z) < s.r) return true;
    }
    return false;
  }

  hear(x, y, z, radius, strength) {
    if (this.alert === 'alert') return;
    for (const g of this.guards) {
      if (g.tower || g.stun > 0 || g.state === 'chase') continue;
      const d = Math.hypot(g.pos.x - x, (g.pos.y - y) * 0.6, g.pos.z - z);
      if (d > radius) continue;
      g.aware = Math.min(0.9, g.aware + strength * (1 - d / radius) * 0.7);
      if (g.state === 'patrol' && (strength >= 0.5 || g.aware > 0.3)) {
        g.target = { x, z };
        g.state = strength >= 0.8 ? 'investigate' : 'suspicious'; g.wait = strength >= 0.8 ? 6 : 2.4;
        g.bark('noise');
      }
    }
  }

  // ----------------------------------------------------------------- tools
  throwShuriken(cam) {
    const S = shared();
    const d = new THREE.Vector3(); cam.getWorldDirection(d);
    const m = new THREE.Mesh(S.star, this.game.mats.toon);
    const p = new THREE.Vector3(0.22, -0.12, -0.4).applyMatrix4(cam.matrixWorld);
    m.position.copy(p);
    this.group.add(m);
    this.shots.push({ kind: 'star', mesh: m, pos: p, vel: d.multiplyScalar(48), life: 1.6 });
    this.game.audio.throwS();
  }
  fireArrow(from, pl) {
    const S = shared();
    const m = new THREE.Mesh(S.arrow, this.game.mats.toon);
    const p = from.clone();
    const tgt = new THREE.Vector3(pl.pos.x, pl.chestY, pl.pos.z);
    const dist = p.distanceTo(tgt), sp = 36, t = dist / sp;
    // lead the target a little, but not perfectly: arrows should be dodgeable
    tgt.x += pl.vel.x * t * 0.75; tgt.z += pl.vel.z * t * 0.75; tgt.y += 0.5 * 5 * t * t;
    const v = tgt.sub(p).normalize().multiplyScalar(sp);
    m.position.copy(p);
    this.group.add(m);
    this.shots.push({ kind: 'arrow', mesh: m, pos: p, vel: v, life: 3 });
    this.game.audio.bow();
    this.game.ui.arrowWarn(from);
  }
  dropSmoke(x, y, z) {
    const S = shared();
    const meshes = [];
    for (let i = 0; i < 9; i++) {
      const m = new THREE.Mesh(S.ico, this.smokeMat);
      const a = (i / 9) * TAU;
      m.userData = { ox: Math.cos(a) * (i ? 2.2 : 0), oz: Math.sin(a) * (i ? 2.2 : 0), oy: 0.8 + (i % 3) * 0.9, s: 1.5 + (i % 4) * 0.35, r: Math.random() * 6 };
      m.position.set(x, y, z); m.castShadow = false;
      this.group.add(m); meshes.push(m);
    }
    this.smokes.push({ x, y: y + 1.2, z, t: 0, life: 7, r: 5.2, meshes });
    this.game.audio.smoke();
    // everyone nearby loses you
    if (this.alert === 'alert') {
      this.alert = 'search'; this.searchT = 11; this.seenT = 99;
      for (const g of this.guards) if (!g.tower && g.state === 'chase') { g.state = 'search'; g.wait = 5 + Math.random() * 2; g.target = { x: this.lastKnown.x, z: this.lastKnown.z }; g.aware = 0.3; }
      this.guards.find((g) => !g.tower)?.bark('smoke');
      this.game.onEscapeAlert(true);
    }
    for (const g of this.guards) if (!g.tower && Math.hypot(g.pos.x - x, g.pos.z - z) < 8) g.aware = Math.min(g.aware, 0.2);
  }

  updateShots(dt) {
    const game = this.game, w = game.world, pl = game.player;
    for (let i = this.shots.length - 1; i >= 0; i--) {
      const s = this.shots[i];
      s.life -= dt;
      let dead = s.life <= 0;
      const steps = Math.ceil((s.vel.length() * dt) / 0.45);
      for (let k = 0; k < steps && !dead; k++) {
        s.vel.y -= (s.kind === 'star' ? 5 : 5) * (dt / steps);
        s.pos.addScaledVector(s.vel, dt / steps);
        if (s.kind === 'star') {
          for (const g of this.guards) {
            if (g.tower) {
              if (g.lampOff <= 0 && s.pos.distanceTo(g.lamp.position) < 0.9) { g.lampOff = 14; g.aware = 0; game.audio.snuff(); g.barkCd = 0; this.barkT = 0; g.bark('blind'); game.onStyle('Lights Out', 60); this.burst(s.pos, 0xffc46a, 10); dead = true; }
              else if (Math.hypot(s.pos.x - g.pos.x, s.pos.z - g.pos.z) < 0.6 && s.pos.y > g.pos.y && s.pos.y < g.pos.y + 1.9) { dead = true; game.audio.thunk(); }
            } else if (g.stun <= 0 && Math.hypot(s.pos.x - g.pos.x, s.pos.z - g.pos.z) < 0.55 && s.pos.y > g.pos.y - 0.1 && s.pos.y < g.pos.y + 1.9) {
              g.stun = g.state === 'chase' ? 3.2 : 6; g.vel.set(0, 0, 0); g.attackT = 0;
              game.audio.snuff(); game.audio.thunk();
              g.barkCd = 0; this.barkT = 0; g.bark('blind');
              game.onStyle('Lantern Snuffed', 50);
              this.burst(s.pos, 0xffc46a, 10);
              dead = true;
            }
            if (dead) break;
          }
          if (!dead && (s.pos.y < 0 || w.solidAt(s.pos.x, s.pos.y, s.pos.z))) {
            dead = true; game.audio.clink();
            this.burst(s.pos, 0xffffff, 5);
            this.hear(s.pos.x, s.pos.y, s.pos.z, 15, 0.85);
          }
        } else {
          const dx = s.pos.x - pl.pos.x, dz = s.pos.z - pl.pos.z, dy = s.pos.y - pl.pos.y;
          if (Math.hypot(dx, dz) < 0.5 && dy > -0.1 && dy < pl.height + 0.1) { dead = true; game.damage(22, 'arrow', null, s.vel); }
          else if (s.pos.y < 0 || w.solidAt(s.pos.x, s.pos.y, s.pos.z)) { dead = true; game.audio.thunk(); this.burst(s.pos, 0xd9c7a0, 4); }
        }
      }
      s.mesh.position.copy(s.pos);
      if (s.kind === 'star') { s.mesh.rotation.y += dt * 40; }
      else s.mesh.lookAt(_v.copy(s.pos).sub(s.vel));
      if (dead) { s.mesh.removeFromParent(); this.shots.splice(i, 1); }
    }
    for (let i = this.smokes.length - 1; i >= 0; i--) {
      const s = this.smokes[i];
      s.t += dt;
      const grow = Math.min(1, s.t / 0.5), fade = clamp((s.life - s.t) / 1.2, 0, 1);
      for (const m of s.meshes) {
        const u = m.userData;
        m.position.set(s.x + u.ox * grow, s.y - 1.2 + u.oy * grow + s.t * 0.12, s.z + u.oz * grow);
        m.scale.setScalar(u.s * grow * fade + 0.001);
        m.rotation.set(u.r + s.t * 0.2, u.r * 2 + s.t * 0.15, 0);
      }
      if (s.t >= s.life) { s.meshes.forEach((m) => m.removeFromParent()); this.smokes.splice(i, 1); }
    }
  }

  // -------------------------------------------------------------- pickups
  updateKoban(dt, force = false) {
    const game = this.game, pl = game.player, m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), ps = new THREE.Vector3();
    this.kobanT += dt;
    const mag = game.stats.magnet;
    let dirty = force;
    for (const p of this.pickups) {
      if (p.taken && !p.fly && !force) continue;
      const dx = pl.pos.x - p.x, dy = pl.pos.y + 1.0 - p.y, dz = pl.pos.z - p.z;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (!p.taken && d2 < mag * mag && !game.over) {
        if (p.type === 'onigiri' && game.hp >= game.stats.maxHp - 1) { /* leave it for later */ }
        else { p.taken = true; p.fly = 0.0001; }
      }
      if (p.fly) {
        p.fly += dt * 5;
        const k = Math.min(1, p.fly);
        p.x += dx * k * 0.4; p.y += dy * k * 0.4; p.z += dz * k * 0.4;
        if (d2 < 0.8 || p.fly > 1.6) { p.fly = 0; p.gone = true; game.onPickup(p); }
      }
      if (p.type === 'koban') {
        if (d2 > 80 * 80 && !force && !p.gone) continue;
        const s = p.gone ? 0.0001 : p.fly ? Math.max(0.15, 1 - p.fly) : 1;
        q.setFromAxisAngle(_v.set(0, 1, 0), this.kobanT * 3 + p.idx);
        m4.compose(ps.set(p.x, p.y + Math.sin(this.kobanT * 2.4 + p.idx) * 0.1, p.z), q, sc.set(s, s, s));
        this.kobanMesh.setMatrixAt(p.idx, m4);
        dirty = true;
      } else if (p.mesh) {
        p.mesh.visible = !p.gone;
        p.mesh.position.set(p.x, p.y + Math.sin(this.kobanT * 2 + p.x) * 0.12, p.z);
        p.mesh.rotation.y = this.kobanT * 1.6;
      }
    }
    if (dirty) this.kobanMesh.instanceMatrix.needsUpdate = true;
  }

  // ------------------------------------------------------------- particles
  initParticles() {
    const N = 260;
    const geo = new THREE.BufferGeometry();
    this.petalPos = new Float32Array(N * 3); this.petalData = [];
    for (let i = 0; i < N; i++) this.petalData.push({ x: (Math.random() - 0.5) * 50, y: Math.random() * 22, z: (Math.random() - 0.5) * 50, p: Math.random() * 6, s: 0.5 + Math.random() });
    geo.setAttribute('position', new THREE.BufferAttribute(this.petalPos, 3));
    this.petalMat = new THREE.PointsMaterial({ color: 0xffc9dc, size: 0.11, sizeAttenuation: true, fog: false, transparent: true, depthWrite: false });
    this.petals = new THREE.Points(geo, this.petalMat);
    this.petals.frustumCulled = false;
    this.group.add(this.petals);
    const M = 160;
    const g2 = new THREE.BufferGeometry();
    this.popPos = new Float32Array(M * 3); this.popCol = new Float32Array(M * 3); this.popData = [];
    for (let i = 0; i < M; i++) { this.popData.push({ life: 0, vx: 0, vy: 0, vz: 0 }); this.popPos[i * 3 + 1] = -999; }
    g2.setAttribute('position', new THREE.BufferAttribute(this.popPos, 3));
    g2.setAttribute('color', new THREE.BufferAttribute(this.popCol, 3));
    this.popsMesh = new THREE.Points(g2, new THREE.PointsMaterial({ vertexColors: true, size: 0.13, sizeAttenuation: true, fog: false, transparent: true, depthWrite: false }));
    this.popsMesh.frustumCulled = false;
    this.group.add(this.popsMesh);
    this.popI = 0;
  }
  burst(pos, hex, n, spread = 3.5, up = 2.5) {
    const c = new THREE.Color(hex);
    for (let i = 0; i < n; i++) {
      const k = this.popI = (this.popI + 1) % this.popData.length, d = this.popData[k];
      d.life = 0.5 + Math.random() * 0.4;
      d.vx = (Math.random() - 0.5) * spread; d.vy = Math.random() * up + 0.5; d.vz = (Math.random() - 0.5) * spread;
      this.popPos[k * 3] = pos.x; this.popPos[k * 3 + 1] = pos.y; this.popPos[k * 3 + 2] = pos.z;
      this.popCol[k * 3] = c.r * 1.6; this.popCol[k * 3 + 1] = c.g * 1.6; this.popCol[k * 3 + 2] = c.b * 1.6;
    }
  }
  updateParticles(dt, cam) {
    const P = this.petalPos, c = cam.position;
    for (let i = 0; i < this.petalData.length; i++) {
      const d = this.petalData[i];
      d.p += dt * 2;
      d.y -= dt * (0.7 + d.s * 0.5);
      d.x += dt * (1.1 + Math.sin(d.p) * 0.9); d.z += dt * Math.cos(d.p * 0.7) * 0.8;
      // wrap around the camera so the air is always alive
      let rx = d.x - c.x, rz = d.z - c.z, ry = d.y - c.y;
      if (rx > 25) d.x -= 50; else if (rx < -25) d.x += 50;
      if (rz > 25) d.z -= 50; else if (rz < -25) d.z += 50;
      if (ry < -9) d.y += 22; else if (ry > 13) d.y -= 22;
      P[i * 3] = d.x; P[i * 3 + 1] = d.y; P[i * 3 + 2] = d.z;
    }
    this.petals.geometry.attributes.position.needsUpdate = true;
    const Q = this.popPos;
    for (let i = 0; i < this.popData.length; i++) {
      const d = this.popData[i];
      if (d.life <= 0) continue;
      d.life -= dt; d.vy -= 9 * dt;
      Q[i * 3] += d.vx * dt; Q[i * 3 + 1] += d.vy * dt; Q[i * 3 + 2] += d.vz * dt;
      if (d.life <= 0) Q[i * 3 + 1] = -999;
    }
    this.popsMesh.geometry.attributes.position.needsUpdate = true;
  }

  // ----------------------------------------------------------------- frame
  update(dt) {
    const game = this.game, pl = game.player;
    this.barkT -= dt;
    let maxAware = 0, threat = null, anySee = false;
    for (let i = this.guards.length - 1; i >= 0; i--) {
      const g = this.guards[i];
      // far guards tick cheaply
      const far = Math.abs(g.pos.z - pl.pos.z) > 75 && this.alert === 'calm' && !g.tower;
      if (far) { g.cone.visible = false; g.group.visible = false; continue; }
      g.group.visible = true;
      g.update(dt, pl);
      if (g.dead) { g.remove(); this.guards.splice(i, 1); continue; }
      if (g.sees) anySee = true;
      if (g.aware > maxAware) { maxAware = g.aware; threat = g; }
    }
    // global alert state
    if (this.alert === 'alert') {
      this.alertT += dt;
      if (anySee) { this.seenT = 0; this.lastKnown.copy(pl.pos); } else this.seenT += dt;
      if (this.seenT > 5.5) {
        this.alert = 'search'; this.searchT = 12;
        for (const g of this.guards) if (!g.tower && g.state === 'chase') { g.state = 'search'; g.wait = 5 + Math.random() * 3; g.target = { x: this.lastKnown.x, z: this.lastKnown.z }; g.aware = 0.4; }
        this.guards.find((g) => !g.tower)?.bark('lost');
        game.onEscapeAlert(false);
      } else {
        this.spawnT -= dt;
        if (this.spawnT <= 0) { this.spawnT = 7; this.reinforce(); }
      }
      this.detect = 1;
    } else {
      if (this.alert === 'search') {
        this.searchT -= dt;
        if (this.searchT <= 0) {
          this.alert = 'calm';
          for (const g of this.guards) { if (g.tower) g.aware = 0; else if (g.extra) g.leaving = true; }
          this.guards.find((g) => !g.tower)?.bark('calm');
        }
      }
      this.detect = maxAware;
      // extras drift away once things calm down
      for (let i = this.guards.length - 1; i >= 0; i--) {
        const g = this.guards[i];
        if (g.leaving && g.pos.distanceTo(pl.pos) > 26 && !game.world.los(g.eye.x, g.eye.y, g.eye.z, pl.pos.x, pl.chestY, pl.pos.z)) { g.remove(); this.guards.splice(i, 1); }
      }
    }
    this.threat = threat;
    // heartbeat while being noticed
    if (this.alert !== 'alert' && this.detect > 0.2) {
      this.hbT -= dt;
      if (this.hbT <= 0) { this.hbT = lerp(0.9, 0.32, this.detect); game.audio.heartbeat(this.detect); }
    }
    this.assignSpots(pl);
    this.updateShots(dt);
    this.updateKoban(dt);
    // checkpoints
    for (const c of this.cps) {
      if (!c.on && Math.hypot(c.x - pl.pos.x, c.z - pl.pos.z) < 5 && Math.abs(c.y - pl.pos.y) < 3 && this.alert !== 'alert') { c.on = true; game.onCheckpoint(c); }
    }
  }

  reinforce() {
    const game = this.game, pl = game.player, w = game.world;
    const chasers = this.guards.filter((g) => !g.tower && g.state === 'chase').length;
    const max = clamp(2 + Math.floor(game.def.sentries / 4), 2, 5);
    if (chasers >= max) return;
    // climb up somewhere out of sight near the player, preferably ahead
    for (let tries = 0; tries < 14; tries++) {
      const a = Math.random() * TAU, d = 20 + Math.random() * 14;
      const x = clamp(pl.pos.x + Math.sin(a) * d, -HW + 2, HW - 2), z = clamp(pl.pos.z + Math.cos(a) * d - 6, w.bounds.z0 + 4, w.bounds.z1 - 2);
      const y = w.highest(x, z);
      if (y < 3 || y > 12 || w.isWater(x, z)) continue;
      if (w.los(x, y + 1.6, z, pl.pos.x, pl.chestY, pl.pos.z) && tries < 10) continue;
      const g = new Guard(this, { kind: 'sentry', pts: [[x, z]], facing: 0 });
      g.extra = true; g.state = 'chase'; g.aware = 1;
      this.guards.push(g);
      game.audio.whistle();
      return;
    }
  }

  assignSpots(pl) {
    const list = [];
    for (const g of this.guards) {
      if (!g.lit || !g.group.visible) continue;
      const d = g.pos.distanceTo(pl.pos);
      if (d < (g.tower ? 90 : 55)) list.push([g.tower ? d * 0.5 : d, g]);
    }
    list.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < this.spots.length; i++) {
      const s = this.spots[i], e = list[i];
      if (!e) { s.intensity = 0; continue; }
      const g = e[1];
      s.position.copy(g.eye);
      s.target.position.copy(g.eye).addScaledVector(g.dir, 10);
      s.angle = g.tower ? g.half * 1.05 : g.half * 0.95;
      s.distance = g.tower ? g.range * 1.15 : g.range * 0.95;
      s.penumbra = g.tower ? 0.12 : 0.3;
      s.intensity = g.tower ? 11 : 5;
      s.color.setHex(g.lightHex || 0xffd98a);
    }
  }
}

function makePickupMesh(type, mats) {
  const g = new GeoBuilder();
  if (type === 'stack') {
    for (let i = 0; i < 4; i++) g.box(-0.2 + (i % 2) * 0.03, i * 0.07 - 0.14, -0.13, 0.2 + (i % 2) * 0.03, i * 0.07 - 0.08, 0.13, 0xf2b53a, { glow: 0.7 });
    g.box(-0.03, -0.15, -0.14, 0.03, 0.15, 0.14, 0xc8452f);
  } else if (type === 'shuriken') {
    g.box(-0.3, -0.02, -0.07, 0.3, 0.02, 0.07, 0xdfe4f4, { glow: 0.5 });
    g.box(-0.07, -0.02, -0.3, 0.07, 0.02, 0.3, 0xdfe4f4, { glow: 0.5 });
    g.box(-0.06, -0.03, -0.06, 0.06, 0.03, 0.06, 0x2a2f55);
  } else if (type === 'onigiri') {
    g.cyl(0, -0.16, 0, 0.26, 0.06, 0.36, 3, 0xfff8ee, 0.45);
    g.box(-0.14, -0.17, -0.2, 0.14, 0.0, 0.2, 0x26303a);
  } else if (type === 'smoke') {
    g.blob(0, 0, 0, 0.2, 0.2, 0.2, 0x4a4660, 0.2);
    g.box(-0.02, 0.18, -0.02, 0.02, 0.32, 0.02, 0xe8dcc0);
    g.box(-0.21, -0.04, -0.21, 0.21, 0.04, 0.21, 0xc8452f);
  } else {
    // maneki-neko
    g.box(-0.2, -0.3, -0.16, 0.2, 0.08, 0.16, 0xfff6e6, { glow: 0.5 });
    g.box(-0.18, 0.08, -0.15, 0.18, 0.38, 0.15, 0xfff6e6, { glow: 0.5 });
    g.box(-0.18, 0.38, -0.05, -0.08, 0.5, 0.05, 0xfff6e6, { glow: 0.5 });
    g.box(0.08, 0.38, -0.05, 0.18, 0.5, 0.05, 0xfff6e6, { glow: 0.5 });
    g.box(0.2, 0.05, -0.06, 0.3, 0.45, 0.06, 0xfff6e6, { glow: 0.5 });
    g.box(-0.2, 0.04, -0.17, 0.2, 0.1, 0.17, 0xc8452f);
    g.box(-0.07, -0.08, -0.2, 0.07, 0.06, -0.16, 0xf2b53a, { glow: 1 });
    g.box(-0.1, 0.2, -0.16, -0.04, 0.26, -0.15, 0x221838); g.box(0.04, 0.2, -0.16, 0.1, 0.26, -0.15, 0x221838);
  }
  const m = new THREE.Mesh(g.build(), mats.world);
  m.castShadow = false;
  return m;
}
