// The Hound (黒影): the shogun's own shinobi, sent after you the moment the job is done.
// It runs your exact route a few seconds behind you, so it can follow anything you can do:
// every leap, rope and wall. Keep your speed up and it falls back; hesitate and it is on you.
import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { clamp, damp } from './util.js';

const START_GAP = 22;

export class Hunter {
  constructor(game) {
    this.game = game;
    this.trail = [];     // { x, y, z, d } every ~0.3 m of the player's route
    this.len = 0;        // route length so far
    this.active = false;
    this.s = 0;          // the Hound's position along the route
    this.group = this.build();
    this.group.visible = false;
    game.actors.group.add(this.group);
    this.pos = new THREE.Vector3();
    this.reset();
  }

  build() {
    const g = new GeoBuilder();
    const ink = 0x1a1626, ink2 = 0x2a2440, red = 0xd8412f;
    g.box(-0.24, 0.85, -0.14, 0.24, 1.45, 0.14, ink);
    g.box(-0.25, 0.6, -0.16, 0.25, 0.9, 0.16, ink2);
    g.box(-0.26, 0.98, -0.15, 0.26, 1.06, 0.15, red);
    g.box(-0.12, 1.45, -0.12, 0.12, 1.74, 0.12, ink);
    g.box(-0.09, 1.58, -0.125, 0.09, 1.62, -0.11, 0xffe9a8, { glow: 4 }); // eyes through the mask slit
    g.box(-0.04, 0.9, 0.14, 0.04, 1.5, 0.2, 0x9aa4c0);                     // sword on the back
    g.box(-0.12, -0.6, -0.11, -0.02, 0.02, 0.11, ink2);
    g.box(0.02, -0.6, -0.11, 0.12, 0.02, 0.11, ink2);
    const body = new THREE.Mesh(g.build(), this.game.mats.toon);
    const legs = new GeoBuilder();
    legs.box(-0.1, -0.68, -0.11, 0.1, 0.02, 0.11, ink2);
    this.legL = new THREE.Mesh(legs.build(), this.game.mats.toon); this.legL.position.set(-0.12, 0.68, 0);
    this.legR = this.legL.clone(); this.legR.position.x = 0.12;
    // the long red scarf, a strip of segments that trails the head
    this.scarf = [];
    const seg = new THREE.BoxGeometry(0.16, 0.05, 0.42);
    const sm = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xd8412f).multiplyScalar(1.4), fog: false });
    const grp = new THREE.Group();
    grp.add(body, this.legL, this.legR);
    for (let i = 0; i < 5; i++) {
      const m = new THREE.Mesh(seg, sm);
      m.frustumCulled = false;
      this.scarf.push(m);
      this.game.actors.group.add(m);
      m.visible = false;
    }
    grp.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    return grp;
  }

  reset() {
    this.trail.length = 0; this.len = 0; this.active = false; this.s = 0;
    this.stun = 0; this.strikeCd = 0; this.kunaiCd = 3; this.t = 0; this.warned = false; this.shook = false;
    this.lead = 99; this.anim = 0;
    this.group.visible = false;
    for (const m of this.scarf) m.visible = false;
  }

  // Called every step: remember where the player went.
  record(p) {
    const tr = this.trail, last = tr[tr.length - 1];
    if (!last) { tr.push({ x: p.x, y: p.y, z: p.z, d: 0 }); return; }
    const d = Math.hypot(p.x - last.x, p.y - last.y, p.z - last.z);
    if (d < 0.3) return;
    if (d > 6) { // a respawn or a fall into the canal: start a new route, the Hound comes back later
      this.len += 0; tr.length = 0; tr.push({ x: p.x, y: p.y, z: p.z, d: this.len });
      this.s = this.len - START_GAP - 8;
      return;
    }
    this.len += d;
    tr.push({ x: p.x, y: p.y, z: p.z, d: this.len });
    if (tr.length > 4000) tr.splice(0, 1000);
  }

  start() {
    this.active = true;
    this.s = this.len - START_GAP;
    this.t = 0;
  }

  at(s, out) {
    const tr = this.trail;
    if (!tr.length) return out.set(0, -100, 0);
    if (s <= tr[0].d) return out.set(tr[0].x, tr[0].y, tr[0].z);
    let lo = 0, hi = tr.length - 1;
    if (s >= tr[hi].d) return out.set(tr[hi].x, tr[hi].y, tr[hi].z);
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (tr[m].d < s) lo = m; else hi = m; }
    const a = tr[lo], b = tr[hi], k = (s - a.d) / Math.max(1e-6, b.d - a.d);
    return out.set(a.x + (b.x - a.x) * k, a.y + (b.y - a.y) * k, a.z + (b.z - a.z) * k);
  }

  hitTest(p) {
    if (!this.active || !this.group.visible) return false;
    return Math.hypot(p.x - this.pos.x, p.z - this.pos.z) < 0.7 && p.y > this.pos.y && p.y < this.pos.y + 1.9;
  }
  stagger() {
    this.stun = Math.max(this.stun, 1.6);
    this.s -= 3;
    this.game.audio.thunk();
    this.game.onTrick('Hit the Hound', 120);
  }
  blind(x, z) {
    if (!this.active || Math.hypot(x - this.pos.x, z - this.pos.z) > 14) return;
    this.stun = Math.max(this.stun, 3.2);
    this.game.onTrick('Smoke Screen', 100);
  }

  update(dt) {
    if (!this.active) return;
    const game = this.game, pl = game.player, def = game.def;
    this.t += dt; this.strikeCd -= dt; this.kunaiCd -= dt;
    this.lead = this.len - this.s;
    // pace: steady pressure that grows over the chase; rubber band keeps it close behind
    const base = (def.hound || 7.4) + Math.min(2.0, this.t * 0.035);
    let v = base;
    if (this.lead > 16) v += (this.lead - 16) * 0.28;
    if (this.lead < 7) v *= 0.9;
    if (this.stun > 0) { this.stun -= dt; v = 0; }
    this.s = Math.min(this.s + v * dt, this.len - 0.6);
    this.at(this.s, this.pos);
    const visible = this.s >= (this.trail[0] ? this.trail[0].d : 0);
    this.group.visible = visible;
    if (!visible) return;
    // facing: along the route
    const ahead = this.at(Math.min(this.len, this.s + 1.2), new THREE.Vector3());
    const yaw = Math.atan2(-(ahead.x - this.pos.x), -(ahead.z - this.pos.z));
    this.group.position.copy(this.pos);
    this.group.rotation.y = yaw;
    this.anim += dt * (v * 1.7 + 2);
    const sw = Math.sin(this.anim) * (this.stun > 0 ? 0 : 0.9);
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw;
    this.group.rotation.x = this.stun > 0 ? 0.3 : -0.18; // leaning into the run
    // scarf: trailing points behind the head
    for (let i = 0; i < this.scarf.length; i++) {
      const m = this.scarf[i];
      const p = this.at(this.s - 0.35 * (i + 1), new THREE.Vector3());
      m.position.set(p.x, p.y + 1.55 + Math.sin(this.t * 9 + i) * 0.06, p.z);
      m.lookAt(this.pos.x, this.pos.y + 1.55, this.pos.z);
      m.visible = true;
    }
    if (this.stun > 0) return;
    // the strike
    const lead = this.len - this.s;
    if (lead < 2.6 && this.strikeCd <= 0 && !game.over) {
      this.strikeCd = 1.3;
      this.s -= 3.5;
      game.onHoundStrike();
    }
    // kunai from mid range when it has a line on you
    if (lead > 8 && lead < 30 && this.kunaiCd <= 0 && !game.over) {
      const eye = new THREE.Vector3(this.pos.x, this.pos.y + 1.5, this.pos.z);
      if (game.world.los(eye.x, eye.y, eye.z, pl.pos.x, pl.chestY, pl.pos.z)) {
        this.kunaiCd = clamp(4.2 - this.t * 0.02, 2.4, 4.2);
        game.actors.fireArrow(eye, pl, 'kunai');
      } else this.kunaiCd = 0.6;
    }
    // shaking it off pays
    if (lead > 38 && !this.shook) { this.shook = true; game.onTrick('Shook the Hound', 200, true); }
    if (lead < 25) this.shook = false;
  }
}
