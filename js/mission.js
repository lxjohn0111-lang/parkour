// The job: every night has something to steal, someone to remove, or something to light,
// plus two bonus contracts. Finishing the job starts the escape and lets the Hound loose.
import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { makeRng } from './util.js';

const ITEMS = [['翡翠の印', 'the Jade Seal'], ['将軍の巻物', 'the Shogun\'s Scroll'], ['黄金の鈴', 'the Golden Bell'], ['鬼の面', 'the Red Oni Mask'], ['南蛮時計', 'the Dutch Clock'], ['龍の香炉', 'the Dragon Censer']];
const TARGETS = [['田沼奉行', 'Magistrate Tanuma'], ['黒田代官', 'Intendant Kuroda'], ['鬼瓦組頭', 'Captain Onigawara'], ['越後屋', 'Echigoya the Merchant'], ['大岡与力', 'Inspector Ooka']];
const COURIERS = [['年貢帳', 'the tax ledger'], ['密書', 'the secret letter'], ['蔵の鍵', 'the storehouse key']];

export const CONTRACTS = {
  takedowns: { text: 'Take down 2 guards', ok: (t) => t.takedowns >= 2 },
  air: { text: 'Assassinate from above', ok: (t) => t.airKills >= 1 },
  flips: { text: 'Land 3 flips', ok: (t) => t.flips >= 3 },
  combo: { text: 'Chain a 6-trick combo', ok: (t) => t.bestCombo >= 6 },
  leap: { text: 'Make a Leap of Faith', ok: (t) => t.leaps >= 1, needs: 'hay' },
  snuff: { text: 'Snuff 3 lanterns', ok: (t) => t.snuffs >= 3 },
  koban: { text: 'Carry out 40 koban', ok: (t, g) => g.run.koban >= 40 },
  clean: { text: 'Escape without a scratch', ok: (t) => t.escapeHits === 0, atEnd: true },
  lead: { text: 'Finish 25 m ahead of the Hound', ok: (t, g) => g.hunter.lead >= 25, atEnd: true },
  wall: { text: 'Wall run 3 times', ok: (t) => t.wallruns >= 3 },
  close: { text: 'Survive 2 close calls', ok: (t) => t.closeCalls >= 2 },
};

export class Mission {
  constructor(game) {
    this.game = game;
    this.group = new THREE.Group();
    game.actors.group.add(this.group);
    this.beamMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff5a40).multiplyScalar(1.6), transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
    this.fireMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffa040).multiplyScalar(3), fog: false });
    this.t = 0;
  }

  clear() {
    for (const c of [...this.group.children]) { c.removeFromParent(); if (c.geometry && c.userData.own) c.geometry.dispose(); }
  }

  setup(world, def) {
    this.clear();
    const R = makeRng((def.seed ^ 0x9e3779b9) >>> 0), m = world.mission, mats = this.game.mats;
    this.type = m.type; this.done = false; this.spots = m.spots; this.lit = 0; this.vip = null; this.howDone = '';
    this.marks = [];
    if (this.type === 'steal') {
      this.item = R.pick(ITEMS);
      const s = this.spots[0];
      const g = new GeoBuilder();
      g.box(-0.55, 0, -0.38, 0.55, 0.55, 0.38, 0x7a2b2b);
      g.box(-0.58, 0.55, -0.41, 0.58, 0.7, 0.41, 0x4a1f26);
      g.box(-0.6, 0.18, -0.42, 0.6, 0.28, 0.42, 0xf2b53a, { glow: 0.5 });
      g.box(-0.18, 0.7, -0.14, 0.18, 1.02, 0.14, 0x86e6c8, { glow: 2.2 });
      const chest = new THREE.Mesh(g.build(), mats.world);
      chest.userData.own = true;
      chest.position.set(s.x, s.y, s.z);
      this.group.add(chest);
      this.chest = chest;
      this.addBeam(s.x, s.y, s.z);
    } else if (this.type === 'signal') {
      this.beacons = this.spots.map((s) => {
        const g = new GeoBuilder();
        g.box(-0.08, 0, -0.08, 0.08, 1.6, 0.08, 0x4b3343);
        g.cyl(0, 1.6, 0, 0.18, 0.42, 0.3, 8, 0x2a2a3a);
        const post = new THREE.Mesh(g.build(), mats.world);
        post.userData.own = true;
        post.position.set(s.x, s.y, s.z);
        const fire = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 0), this.fireMat);
        fire.userData.own = true;
        fire.position.set(s.x, s.y + 2.1, s.z);
        fire.visible = false;
        this.group.add(post, fire);
        return { s, fire, lit: false, beam: this.addBeam(s.x, s.y, s.z) };
      });
    } else this.item = R.pick(this.type === 'assassinate' ? TARGETS : COURIERS);
    this.vip = this.game.actors.guards.find((g) => g.role) || null;
    // two bonus contracts, the same every time this night is played
    const pool = Object.keys(CONTRACTS).filter((k) => !(CONTRACTS[k].needs === 'hay' && !world.hayCount));
    this.contracts = [];
    while (this.contracts.length < 2 && pool.length) this.contracts.push(pool.splice(Math.floor(R() * pool.length), 1)[0]);
  }

  // a tall red pillar of light over the job, readable from the far end of the district
  addBeam(x, y, z) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 60, 8, 1, true), this.beamMat);
    m.userData.own = true;
    m.position.set(x, y + 30, z);
    this.group.add(m);
    return m;
  }

  get verb() { return { steal: 'STEAL', assassinate: 'ASSASSINATE', pickpocket: 'PICKPOCKET', signal: 'SIGNAL' }[this.type]; }
  get objective() {
    if (this.done) return 'Escape! Reach the kite';
    if (this.type === 'steal') return `Steal ${this.item[1]}`;
    if (this.type === 'assassinate') return `Assassinate ${this.item[1]}`;
    if (this.type === 'pickpocket') return `Lift ${this.item[1]} from the courier`;
    return `Light the signal beacons (${this.lit}/3)`;
  }
  get brief() {
    if (this.type === 'steal') return `Steal ${this.item[1]} from the rooftops, then get out alive.`;
    if (this.type === 'assassinate') return `${this.item[1]} walks the roofs tonight with a bodyguard. Take him down unseen, or drop on him from above.`;
    if (this.type === 'pickpocket') return `A courier carries ${this.item[1]}. Get behind him and take it without a sound.`;
    return 'The rebels wait for a signal. Light three beacons across the city.';
  }
  // where the HUD marker points
  markerPos(out) {
    if (this.done) { const g = this.game.world.goal; return out.set(g.x, g.y + 3, g.z); }
    if (this.vip) return out.set(this.vip.pos.x, this.vip.pos.y + 3, this.vip.pos.z);
    if (this.type === 'signal') {
      const pl = this.game.player.pos;
      let best = null, bd = 1e9;
      for (const b of this.beacons) if (!b.lit) { const d = Math.hypot(b.s.x - pl.x, b.s.z - pl.z); if (d < bd) { bd = d; best = b; } }
      if (best) return out.set(best.s.x, best.s.y + 2.5, best.s.z);
    }
    const s = this.spots[0];
    return out.set(s.x, s.y + 2, s.z);
  }
  contractState() {
    const g = this.game;
    return this.contracts.map((k) => ({ key: k, text: CONTRACTS[k].text, ok: !!CONTRACTS[k].ok(g.tally, g), atEnd: !!CONTRACTS[k].atEnd }));
  }

  update(dt) {
    this.t += dt;
    const g = this.game, pl = g.player;
    if (this.chest) { this.chest.rotation.y = Math.sin(this.t * 0.8) * 0.15; }
    if (this.beacons) for (const b of this.beacons) if (b.lit) { b.fire.scale.setScalar(1 + Math.sin(this.t * 14 + b.s.x) * 0.15); }
    if (this.done || g.over) return;
    const near = (s, r) => Math.hypot(s.x - pl.pos.x, s.z - pl.pos.z) < r && Math.abs(s.y - pl.pos.y) < 2;
    if (this.type === 'steal' && near(this.spots[0], 1.7)) {
      this.chest.visible = false;
      g.actors.burst({ x: this.spots[0].x, y: this.spots[0].y + 0.8, z: this.spots[0].z }, 0x86e6c8, 24);
      this.complete('steal');
    } else if (this.type === 'signal') {
      for (const b of this.beacons) {
        if (b.lit || !near(b.s, 2)) continue;
        b.lit = true; b.fire.visible = true; b.beam.visible = false;
        this.lit++;
        g.audio.ignite();
        g.actors.burst({ x: b.s.x, y: b.s.y + 2.1, z: b.s.z }, 0xffa040, 20);
        g.noise(b.s.x, b.s.y, b.s.z, 14, 0.7);
        if (this.lit >= 3) this.complete('signal');
        else g.onTrick('Beacon Lit', 120, true);
      }
    } else if (this.vip) {
      const v = this.vip;
      if (v.downT >= 0) { this.complete(this.type === 'assassinate' ? 'kill' : 'courier-down'); return; }
      if (this.type === 'pickpocket') {
        // from behind, while he has no idea you are there
        const dx = pl.pos.x - v.pos.x, dz = pl.pos.z - v.pos.z, d = Math.hypot(dx, dz);
        const fx = -Math.sin(v.yaw), fz = -Math.cos(v.yaw);
        if (d < 1.7 && Math.abs(pl.pos.y - v.pos.y) < 1.4 && (dx * fx + dz * fz) / (d || 1) < 0.15 && v.state !== 'chase' && v.aware < 0.8) {
          v.mark.visible = false; this.vip = null;
          g.onTrick('Pickpocket', 220, true);
          setTimeout(() => { v.barkCd = 0; g.actors.barkT = 0; v.bark('pickpocket'); v.aware = 1; }, 1300);
          this.complete('pickpocket');
        }
      }
    }
  }

  complete(how) {
    if (this.done) return;
    this.done = true; this.howDone = how;
    for (const c of this.group.children) if (c.geometry && c.geometry.type === 'CylinderGeometry') c.visible = false;
    this.game.startEscape(how);
  }
}
