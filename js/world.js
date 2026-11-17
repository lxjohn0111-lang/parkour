// World: procedural Edo rooftop district + its collision representation.
//
// Collision is "column solids": an axis-aligned XZ rectangle, a bottom height and a
// top surface that is flat, a gable, a hip or a ramp. That is all a city of pitched
// roofs needs, and it makes ground / wall / line-of-sight queries cheap and robust.
import * as THREE from 'three';
import { GeoBuilder, mixHex } from './geo.js';
import { makeRng, clamp, lerp } from './util.js';
import * as P from './props.js';

const CELL = 8;
export const STEP = 0.55;
export const HW = 34; // half width of the playable strip
const CHUNK = 48;
const T_FLAT = 0, T_GABLE_X = 1, T_GABLE_Z = 2, T_HIP = 3, T_RAMP_Z = 5;

export class World {
  constructor(def, pal, mats) {
    this.def = def; this.pal = pal; this.mats = mats;
    this.solids = []; this.grid = new Map();
    this.ropes = []; this.pickups = []; this.guardDefs = []; this.towerDefs = [];
    this.anchors = []; this.checkpoints = []; this.waters = [];
    this.group = new THREE.Group();
    this.chunks = new Map(); this.decals = new Map();
    this.sunDir = new THREE.Vector3(Math.sin(pal.sunAz) * Math.cos(pal.sunEl), Math.sin(pal.sunEl), -Math.cos(pal.sunAz) * Math.cos(pal.sunEl)).normalize();
    this.hit = null;
    this.generate();
  }

  // ------------------------------------------------------------ collision
  addSolid(x0, z0, x1, z1, y0, type, a, b = a, opt = null) {
    const s = { x0, z0, x1, z1, y0, t: type, a, b, cx: (x0 + x1) / 2, cz: (z0 + z1) / 2, hw: (x1 - x0) / 2, hd: (z1 - z0) / 2, rlx: 0, rlz: 0, ceil: false, soft: false, tag: null };
    if (opt) Object.assign(s, opt);
    this.solids.push(s);
    const ix0 = Math.floor((x0 - 1) / CELL), ix1 = Math.floor((x1 + 1) / CELL), iz0 = Math.floor((z0 - 1) / CELL), iz1 = Math.floor((z1 + 1) / CELL);
    for (let ix = ix0; ix <= ix1; ix++) for (let iz = iz0; iz <= iz1; iz++) {
      const k = ((ix + 256) << 12) | (iz + 2048);
      let c = this.grid.get(k);
      if (!c) this.grid.set(k, (c = []));
      c.push(s);
    }
    return s;
  }
  cell(x, z) { return this.grid.get(((Math.floor(x / CELL) + 256) << 12) | (Math.floor(z / CELL) + 2048)); }

  top(s, x, z) {
    switch (s.t) {
      case T_FLAT: return s.a;
      case T_GABLE_X: return s.b - (s.b - s.a) * Math.min(1, Math.abs(z - s.cz) / s.hd);
      case T_GABLE_Z: return s.b - (s.b - s.a) * Math.min(1, Math.abs(x - s.cx) / s.hw);
      case T_HIP: {
        const fz = (s.hd - Math.abs(z - s.cz)) / (s.hd - s.rlz), fx = (s.hw - Math.abs(x - s.cx)) / (s.hw - s.rlx);
        return s.a + (s.b - s.a) * clamp(Math.min(fz, fx), 0, 1);
      }
      case T_RAMP_Z: return s.a + (s.b - s.a) * clamp((z - s.z0) / (s.z1 - s.z0), 0, 1);
    }
    return s.a;
  }

  isWater(x, z) {
    for (const w of this.waters) if (z > w.z0 && z < w.z1 && x > w.x0 && x < w.x1) return true;
    return false;
  }

  // Highest walkable surface at (x,z) not above feetY + step.
  groundAt(x, z, feetY, step = STEP) {
    let best = this.waters.length && this.isWater(x, z) ? -3 : 0;
    this.hit = null;
    const c = this.cell(x, z);
    if (c) for (let i = 0; i < c.length; i++) {
      const s = c[i];
      if (x < s.x0 || x > s.x1 || z < s.z0 || z > s.z1) continue;
      const t = this.top(s, x, z);
      if (t <= feetY + step && t > best) { best = t; this.hit = s; }
    }
    return best;
  }
  highest(x, z) { return this.groundAt(x, z, 1e4, 0); }

  // Lowest ceiling above headY (only solids flagged as ceilings).
  ceilAt(x, z, y) {
    let best = 1e4;
    const c = this.cell(x, z);
    if (c) for (let i = 0; i < c.length; i++) {
      const s = c[i];
      if (!s.ceil || x < s.x0 || x > s.x1 || z < s.z0 || z > s.z1) continue;
      if (s.y0 >= y && s.y0 < best) best = s.y0;
    }
    return best;
  }

  // Push a vertical cylinder out of walls. Returns true and fills out.nx/nz on contact.
  collide(p, r, h, out) {
    let hitAny = false;
    const c = this.cell(p.x, p.z);
    if (!c) return false;
    for (let i = 0; i < c.length; i++) {
      const s = c[i];
      const cx = clamp(p.x, s.x0, s.x1), cz = clamp(p.z, s.z0, s.z1);
      const dx = p.x - cx, dz = p.z - cz, d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue;
      const t = this.top(s, cx, cz);
      if (p.y + STEP >= t || p.y + h <= s.y0) continue;
      let nx, nz;
      if (d2 > 1e-9) {
        const d = Math.sqrt(d2), push = r - d;
        nx = dx / d; nz = dz / d;
        p.x += nx * push; p.z += nz * push;
      } else {
        const a = p.x - s.x0, b = s.x1 - p.x, e = p.z - s.z0, f = s.z1 - p.z;
        const m = Math.min(a, b, e, f);
        nx = 0; nz = 0;
        if (m === a) { p.x = s.x0 - r; nx = -1; } else if (m === b) { p.x = s.x1 + r; nx = 1; }
        else if (m === e) { p.z = s.z0 - r; nz = -1; } else { p.z = s.z1 + r; nz = 1; }
      }
      hitAny = true;
      if (out) { out.nx = nx; out.nz = nz; out.solid = s; out.top = t; }
    }
    return hitAny;
  }

  solidAt(x, y, z) {
    const c = this.cell(x, z);
    if (!c) return false;
    for (let i = 0; i < c.length; i++) {
      const s = c[i];
      if (x < s.x0 || x > s.x1 || z < s.z0 || z > s.z1 || y < s.y0) continue;
      if (y < this.top(s, x, z)) return true;
    }
    return false;
  }
  // Is there a wall face at this point (tall enough to run along / block)?
  wallAt(x, z, y) {
    const c = this.cell(x, z);
    if (!c) return false;
    for (let i = 0; i < c.length; i++) {
      const s = c[i];
      if (s.soft || x < s.x0 || x > s.x1 || z < s.z0 || z > s.z1) continue;
      if (s.y0 < y + 0.6 && this.top(s, x, z) > y + 1.3) return true;
    }
    return false;
  }

  // March a ray; returns hit distance or -1.
  ray(ox, oy, oz, dx, dy, dz, max, step = 0.3) {
    for (let t = step; t < max; t += step) {
      const x = ox + dx * t, y = oy + dy * t, z = oz + dz * t;
      if (y < 0) return t;
      if (this.solidAt(x, y, z)) return t;
    }
    return -1;
  }
  // Clear line between two points?
  los(ax, ay, az, bx, by, bz) {
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    const len = Math.hypot(dx, dy, dz);
    if (len < 0.01) return true;
    const n = Math.ceil(len / 0.35);
    for (let i = 1; i < n; i++) {
      const t = i / n;
      if (this.solidAt(ax + dx * t, ay + dy * t, az + dz * t)) return false;
    }
    return true;
  }
  inShadow(x, y, z) {
    const s = this.sunDir;
    return this.ray(x, y, z, s.x, s.y, s.z, 45, 0.45) > 0;
  }

  // Rope under / near the feet?
  ropeAt(x, z, feetY, step = STEP, down = 0.4) {
    let best = null, bestY = -1e9;
    for (const r of this.ropes) {
      const t = ((x - r.ax) * r.dx + (z - r.az) * r.dz) / (r.len2);
      if (t < 0 || t > 1) continue;
      const px = r.ax + r.dx * t, pz = r.az + r.dz * t;
      if (Math.hypot(x - px, z - pz) > 0.5) continue;
      const y = r.ay + (r.by - r.ay) * t;
      if (y <= feetY + step && y >= feetY - down && y > bestY) { bestY = y; best = r; r._t = t; r._y = y; }
    }
    return best;
  }

  // ------------------------------------------------------------ builders
  G(z) {
    const k = Math.floor(-z / CHUNK);
    let g = this.chunks.get(k);
    if (!g) this.chunks.set(k, (g = new GeoBuilder()));
    return g;
  }
  D(z) {
    const k = Math.floor(-z / CHUNK);
    let g = this.decals.get(k);
    if (!g) this.decals.set(k, (g = new GeoBuilder()));
    return g;
  }

  addRope(ax, ay, az, bx, by, bz, decor = true) {
    const pal = this.pal, R = this.R;
    const dx = bx - ax, dz = bz - az, len2 = dx * dx + dz * dz, len = Math.sqrt(len2);
    const r = { ax, ay, az, bx, by, bz, dx, dz, len2, len, slope: (by - ay) / len, ux: dx / len, uz: dz / len };
    this.ropes.push(r);
    const g = this.G((az + bz) / 2);
    g.beam(ax, ay - 0.04, az, bx, by - 0.04, bz, 0.09, pal.gold);
    for (const e of [[ax, ay, az], [bx, by, bz]]) {
      const gy = this.highest(e[0], e[2]);
      g.box(e[0] - 0.09, gy - 0.2, e[2] - 0.09, e[0] + 0.09, e[1] + 0.02, e[2] + 0.09, pal.red);
    }
    if (decor) {
      const n = Math.floor(len / 2.4);
      for (let i = 1; i < n; i++) {
        const t = i / n;
        const x = ax + dx * t, y = ay + (by - ay) * t, z = az + dz * t;
        if (i % 2) P.paperLantern(g, x, y - 0.42, z, 0.17, i % 4 === 1 ? pal.lantern : pal.glow, 2.3);
        else g.box(x - 0.02 - Math.abs(r.uz) * 0.16, y - 0.42, z - 0.02 - Math.abs(r.ux) * 0.16, x + 0.02 + Math.abs(r.uz) * 0.16, y - 0.06, z + 0.02 + Math.abs(r.ux) * 0.16, R.pick(pal.accent));
      }
    }
    return r;
  }

  // ----------------------------------------------------------- generation
  generate() {
    const def = this.def, pal = this.pal;
    const R = (this.R = makeRng(def.seed));
    // 1. rows of lots, separated by streets / boulevards / canals
    const rows = (this.rows = []);
    const nRows = def.rows + 1;
    let z = 15;
    for (let i = 0; i < nRows; i++) {
      const depth = i === 0 ? 13 : R.range(11, 15.5);
      let gapKind = 'street';
      if (i > 0 && i < nRows - 1) {
        const r = R();
        if (r < def.feats.c) gapKind = 'canal';
        else if (r < def.feats.c + def.feats.b) gapKind = 'boulevard';
        if (gapKind !== 'street' && rows[i - 1].gapKind !== 'street') gapKind = 'street';
      }
      const gap = gapKind === 'canal' ? 14 : gapKind === 'boulevard' ? R.range(9, 10.5) : R.range(4.1, 5.3);
      rows.push({ i, z1: z, z0: z - depth, gapKind, gap, b: [] });
      z -= depth + gap;
    }
    const goalZ1 = z; // near edge of the goal lot
    // 2. fill rows with buildings
    const fill = (row, xa, xb) => {
      let x = xa, prevH = R.range(4.5, 7);
      while (x < xb - 0.01) {
        let w = R.range(8, 14.5);
        if (xb - (x + w) < 8) w = xb - x;
        const alley = x + w < xb - 0.01 && R.chance(0.3) ? R.range(1.5, 2.2) : 0;
        let h = clamp(prevH + R.range(-2.2, 2.2), 3.5, 8.3), kind = 'machiya';
        if (R.chance(def.feats.k)) { kind = 'kura'; h = R.range(9.6, 11.4); }
        else if (w >= 12.5 && row.i > 0 && R.chance(0.1)) { kind = 'temple'; h = R.range(5.6, 6.4); }
        else if (row.i > 0 && R.chance(0.07)) kind = 'yard';
        else prevH = h;
        row.b.push({ row, x0: x, x1: x + w - alley, z0: row.z0 + R.range(0, 0.7), z1: row.z1 - R.range(0, 0.7), h, kind, axis: R.chance(0.22) ? 'z' : 'x', slope: R.range(0.42, 0.54), path: false, tile: R.pick(pal.tile), plaster: R.pick(pal.plaster) });
        x += w;
      }
    };
    for (const row of rows) {
      if (row.i === 0) {
        fill(row, -HW, -8);
        row.b.push({ row, x0: -8, x1: 8, z0: row.z0, z1: row.z1, h: 6.4, kind: 'machiya', axis: 'x', slope: 0.46, path: true, tile: pal.tile[0], plaster: pal.plaster[0] });
        fill(row, 8, HW);
      } else fill(row, -HW, HW);
    }
    // 3. the golden path: one guaranteed chain of roofs from start to goal.
    // Each night has its own height profile so the runs feel different.
    const prof = def.profile || 'rolling';
    const tgtH = (i) => {
      const t = i / Math.max(1, nRows - 1);
      if (prof === 'ascent') return 4.6 + t * 3.8;
      if (prof === 'descent') return 8.3 - t * 3.8;
      if (prof === 'valley') return 4.5 + Math.abs(t - 0.5) * 7.6;
      if (prof === 'peaks') return 6.2 + Math.sin(t * Math.PI * 3.2) * 2.0;
      return 6.1;
    };
    let pb = rows[0].b.find((b) => b.path);
    const path = (this.path = [{ b: pb, enter: 0 }]);
    for (let i = 0; i < nRows - 1; i++) {
      const next = rows[i + 1], row = rows[i];
      const ov = (b) => Math.min(pb.x1, b.x1) - Math.max(pb.x0, b.x0);
      let cands = next.b.filter((b) => b.kind !== 'yard' && b.kind !== 'kura' && ov(b) >= 5);
      if (!cands.length) {
        const best = next.b.reduce((a, b) => (ov(b) > ov(a) ? b : a));
        best.kind = 'machiya';
        cands = [best];
      }
      const nb = R.pick(cands);
      const lo = Math.max(pb.x0, nb.x0) + 1.6, hi = Math.min(pb.x1, nb.x1) - 1.6;
      const cross = lo < hi ? R.range(lo, hi) : (lo + hi) / 2;
      const special = row.gapKind !== 'street';
      nb.path = true; nb.axis = 'x';
      if (nb.kind === 'temple') pb.h = Math.max(pb.h, nb.h - 0.6);
      else nb.h = special ? clamp(pb.h - R.range(0.2, 1.8), 4.2, 8) : clamp(pb.h + R.range(-1.3, 1.3) + (tgtH(i + 1) - pb.h) * 0.5, Math.max(4.2, pb.h - 2.6), Math.min(8.6, pb.h + 2.0));
      nb.z1 = next.z1; pb.z0 = row.z0;
      path[i].cross = cross;
      path.push({ b: nb, enter: cross });
      pb = nb;
    }
    for (const row of rows) for (let k = 0; k < row.b.length; k++) {
      const b = row.b[k];
      if (!b.path) continue;
      for (const n of [row.b[k - 1], row.b[k + 1]]) if (n && !n.path && n.kind === 'machiya' && n.h > b.h + 2.3) n.h = b.h + R.range(0.6, 2.3);
    }
    // 4. watchtowers take over lots next to the path
    const towerRows = pickSpread(R, def.towers, 2, nRows - 1);
    for (const ri of towerRows) {
      const row = rows[ri];
      const pi = row.b.findIndex((b) => b.path);
      const opts = [row.b[pi - 1], row.b[pi + 1], row.b[pi - 2], row.b[pi + 2]].filter((b) => b && !b.path && b.x1 - b.x0 > 6);
      if (!opts.length) continue;
      const lot = opts[0 | (R() * Math.min(2, opts.length))];
      lot.kind = 'yard'; lot.tower = true;
    }
    // 4b. the job: where the target is
    this.planMission();
    // 5. emit everything
    for (const row of rows) {
      for (const b of row.b) this.emitLot(b);
      this.emitBoundary(row);
    }
    this.emitGoal(goalZ1, path[path.length - 1]);
    for (let i = 0; i < nRows; i++) this.emitStreet(rows[i], rows[i + 1], i === nRows - 1 ? goalZ1 : rows[i + 1].z1);
    this.emitGround(goalZ1);
    this.emitRopes();
    this.emitRoofClutter();
    this.emitSetPieces();
    this.placePickups();
    this.placeGuards();
    this.placeMission();
    this.emitBackdrop(goalZ1);
    // start / bounds
    const sb = rows[0].b.find((b) => b.path);
    this.start = { x: 0, y: this.highest(0, sb.cz) + 0.05, z: sb.cz, yaw: 0 };
    this.checkpoints.unshift({ x: this.start.x, y: this.start.y, z: this.start.z, yaw: 0, start: true });
    this.bounds = { x0: -HW - 0.4, x1: HW + 0.4, z0: goalZ1 - 17.5, z1: 14.4 };
    this.length = Math.abs(this.goal.z - this.start.z);
    this.finish();
  }

  emitLot(b) {
    const pal = this.pal, R = this.R;
    b.cx = (b.x0 + b.x1) / 2; b.cz = (b.z0 + b.z1) / 2;
    const W = b.x1 - b.x0, D = b.z1 - b.z0;
    const g = this.G(b.cz), dec = this.D(b.cz);
    if (b.kind === 'yard') return this.emitYard(b, g, dec);
    const rot = b.axis === 'x' ? 0 : Math.PI / 2;
    const hw = b.axis === 'x' ? W / 2 : D / 2, hd = b.axis === 'x' ? D / 2 : W / 2;
    if (b.kind === 'machiya') b.slope = Math.min(b.slope, 3.4 / hd);
    g.frame(b.cx, 0, b.cz, rot); dec.frame(b.cx, 0, b.cz, rot);
    this.addSolid(b.x0, b.z0, b.x1, b.z1, 0, T_FLAT, b.h, b.h, { tag: b });
    if (b.kind === 'machiya') {
      P.facade(g, dec, hw, hd, b.h, 'machiya', b.plaster, pal, R, b.slope);
      const r = P.gableRoof(g, hw, hd, b.h, b.slope, b.tile, pal);
      b.ridgeY = r.ridgeY; b.eaveY = r.eaveY;
      if (b.axis === 'x') {
        b.roof = this.addSolid(b.x0 - P.OVE, b.z0 - P.OV, b.x1 + P.OVE, b.z1 + P.OV, r.eaveY - P.THICK, T_GABLE_X, r.eaveY, r.ridgeY, { tag: b });
        this.addSolid(b.x0 - P.OVE, b.cz - 0.24, b.x1 + P.OVE, b.cz + 0.24, r.ridgeY - 0.3, T_FLAT, r.ridgeY + 0.16);
      } else {
        b.roof = this.addSolid(b.x0 - P.OV, b.z0 - P.OVE, b.x1 + P.OV, b.z1 + P.OVE, r.eaveY - P.THICK, T_GABLE_Z, r.eaveY, r.ridgeY, { tag: b });
        this.addSolid(b.cx - 0.24, b.z0 - P.OVE, b.cx + 0.24, b.z1 + P.OVE, r.ridgeY - 0.3, T_FLAT, r.ridgeY + 0.16);
      }
    } else {
      const temple = b.kind === 'temple';
      const rise = temple ? 2.1 : Math.min(2.6, hd * 0.5);
      const ov = temple ? 1.5 : 0.55;
      P.facade(g, dec, hw, hd, b.h, b.kind, temple ? pal.plaster[3] : pal.plaster[3], pal, R, 0);
      const r = P.hipRoof(g, hw, hd, b.h, rise, temple ? mixHex(b.tile, pal.ridge, 0.25) : b.tile, pal, temple ? 0.3 : 0, ov);
      b.ridgeY = r.ridgeY; b.eaveY = r.eaveY + (temple ? 0.3 : 0);
      const ex = (b.axis === 'x' ? hw : hd) + ov, ez = (b.axis === 'x' ? hd : hw) + ov;
      b.roof = this.addSolid(b.cx - ex, b.cz - ez, b.cx + ex, b.cz + ez, b.eaveY - 0.3, T_HIP, b.eaveY, r.ridgeY, { tag: b, rlx: b.axis === 'x' ? r.rl : 0, rlz: b.axis === 'x' ? 0 : r.rl });
      if (b.kind === 'kura') this.anchors.push({ x: b.cx, y: r.ridgeY + 1.5, z: b.cz, base: r.ridgeY });
    }
    g.frame(); dec.frame();
    if (b.kind === 'kura') this.anchorPole(g, b.cx, b.ridgeY, b.cz);
    // pent-roof awnings on tall street fronts: the way back up from the street
    if (b.kind === 'machiya' && b.h >= 5.3) for (const s of [1, -1]) {
      this.awning(g, b, s, 2.95, 1.05);
      // tall fronts get a second, narrower pent roof so every eave stays within reach
      if (b.h >= 6.3) this.awning(g, b, s, b.h - 2.45, 0.8);
    }
  }

  anchorPole(g, x, y, z) {
    const pal = this.pal;
    g.box(x - 0.05, y, z - 0.05, x + 0.05, y + 1.5, z + 0.05, pal.woodLight, { skip: 'y' });
    g.box(x - 0.24, y + 1.3, z - 0.07, x + 0.24, y + 1.74, z + 0.07, pal.gold, { glow: 1.6 });
    g.box(x - 0.14, y + 1.4, z - 0.08, x + 0.14, y + 1.64, z + 0.08, pal.under);
    g.box(x + 0.05, y + 0.5, z - 0.01, x + 0.6, y + 1.2, z + 0.01, pal.red);
  }

  awning(g, b, s, y, depth) {
    const pal = this.pal;
    const zw = s > 0 ? b.z1 : b.z0, zo = zw + s * depth;
    const x0 = b.x0 + 0.1, x1 = b.x1 - 0.1;
    g.quadDir([x0, y - 0.32, zo], [x1, y - 0.32, zo], [x1, y, zw], [x0, y, zw], [0, 1, s], b.tile, 0, 1, [x0, 1.1, x1, 1.1, x1, 0, x0, 0]);
    g.quadDir([x0, y - 0.5, zo], [x1, y - 0.5, zo], [x1, y - 0.18, zw], [x0, y - 0.18, zw], [0, -1, 0], pal.under);
    g.quadDir([x0, y - 0.5, zo], [x1, y - 0.5, zo], [x1, y - 0.32, zo], [x0, y - 0.32, zo], [0, 0, s], pal.ridge);
    for (const x of [x0, x1]) g.triDir([x, y - 0.5, zo], [x, y - 0.18, zw], [x, y, zw], [x === x0 ? -1 : 1, 0, 0], pal.ridge);
    for (let x = x0 + 0.4; x < x1; x += 2.6) g.beam(x, y - 0.5, zo - s * 0.1, x, y - 1.1, zw, 0.09, pal.wood);
    this.addSolid(x0, Math.min(zw, zo), x1, Math.max(zw, zo), y - 0.5, T_FLAT, y - 0.16, y - 0.16, { soft: true });
  }

  emitYard(b, g, dec) {
    const pal = this.pal, R = this.R;
    const W = b.x1 - b.x0;
    // garden wall with a walkable tiled top
    const wallH = 2.5;
    const wall = (x0, z0, x1, z1) => {
      g.box(x0, 0, z0, x1, wallH, z1, pal.plaster[1], { skip: 'y' });
      g.box(x0 - 0.12, wallH, z0 - 0.12, x1 + 0.12, wallH + 0.16, z1 + 0.12, pal.ridge);
      g.box(x0, 0, z0, x1, 0.5, z1, pal.stone, { skip: 'yY' });
      this.addSolid(x0 - 0.12, z0 - 0.12, x1 + 0.12, z1 + 0.12, 0, T_FLAT, wallH + 0.16);
    };
    wall(b.x0, b.z1 - 0.4, b.x1, b.z1); wall(b.x0, b.z0, b.x1, b.z0 + 0.4);
    if (b.tower) {
      const H = R.range(11.5, 13);
      this.emitTower(g, dec, b.cx, b.cz, H);
      const pbz = this.path.find((p) => p.b.row === b.row);
      this.towerDefs.push({ x: b.cx, z: b.cz, y: H, aimX: (pbz.b.x0 + pbz.b.x1) / 2, aimZ: (pbz.b.z0 + pbz.b.z1) / 2 - 4, range: 46 });
      for (let i = 0; i < 2; i++) P.pine(g, b.cx + (i ? 1 : -1) * (W / 2 - 1.8), 0, b.cz + R.range(-3, 3), R.range(0.8, 1.1), pal, R);
    } else {
      const n = 1 + R.int(0, 1);
      for (let i = 0; i < n; i++) {
        const x = lerp(b.x0 + 2.4, b.x1 - 2.4, n === 1 ? 0.5 : i), zz = b.cz + R.range(-2, 2);
        if (R.chance(0.7)) P.cherry(g, x, 0, zz, R.range(1.05, 1.5), pal, R); else P.pine(g, x, 0, zz, R.range(0.9, 1.2), pal, R);
        this.addSolid(x - 0.25, zz - 0.25, x + 0.25, zz + 0.25, 0, T_FLAT, 2.6);
      }
      P.stoneLantern(g, b.cx + R.range(-1, 1), 0, b.cz + 3, pal, pal.glow);
      P.lightPool(dec, b.cx, 0, b.cz + 3, 2.6, pal.glow, 0.16);
      if (R.chance(0.5)) P.torii(g, b.cx, b.z1 - 1.6, 2.6, 3.3, pal);
    }
  }

  emitTower(g, dec, x, z, H) {
    const pal = this.pal;
    const s = 1.5;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      g.beam(x + sx * (s + 0.5), 0, z + sz * (s + 0.5), x + sx * s, H, z + sz * s, 0.28, pal.wood);
      this.addSolid(x + sx * s - 0.2, z + sz * s - 0.2, x + sx * s + 0.2, z + sz * s + 0.2, 0, T_FLAT, H - 0.2);
    }
    for (let lv = 0; lv < 3; lv++) {
      const y0 = (lv / 3) * (H - 0.4) + 0.3, y1 = ((lv + 1) / 3) * (H - 0.4);
      const k0 = s + 0.5 * (1 - y0 / H), k1 = s + 0.5 * (1 - y1 / H);
      for (const e of [-1, 1]) {
        g.beam(x - k0, y0, z + e * k0, x + k1, y1, z + e * k1, 0.13, pal.woodMid);
        g.beam(x + k0, y0, z + e * k0, x - k1, y1, z + e * k1, 0.13, pal.woodMid);
        g.beam(x + e * k0, y0, z - k0, x + e * k1, y1, z + k1, 0.13, pal.woodMid);
        g.beam(x + e * k0, y0, z + k0, x + e * k1, y1, z - k1, 0.13, pal.woodMid);
        g.beam(x - k1, y1, z + e * k1, x + k1, y1, z + e * k1, 0.16, pal.wood);
        g.beam(x + e * k1, y1, z - k1, x + e * k1, y1, z + k1, 0.16, pal.wood);
      }
    }
    const p = s + 0.45;
    g.box(x - p, H - 0.22, z - p, x + p, H, z + p, pal.woodMid);
    this.addSolid(x - p, z - p, x + p, z + p, H - 0.22, T_FLAT, H, H, { ceil: true });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.box(x + sx * (p - 0.12) - 0.07, H, z + sz * (p - 0.12) - 0.07, x + sx * (p - 0.12) + 0.07, H + 2.5, z + sz * (p - 0.12) + 0.07, pal.wood, { skip: 'yY' });
    for (const e of [-1, 1]) {
      g.box(x - p, H + 0.85, z + e * (p - 0.1) - 0.05, x + p, H + 0.95, z + e * (p - 0.1) + 0.05, pal.red);
      g.box(x + e * (p - 0.1) - 0.05, H + 0.85, z - p, x + e * (p - 0.1) + 0.05, H + 0.95, z + p, pal.red);
    }
    g.frame(x, 0, z, 0);
    P.hipRoof(g, p - 0.1, p - 0.1, H + 2.5, 1.1, pal.tile[1], pal, 0, 0.6);
    g.frame();
    g.cyl(x + 0.6, H + 1.5, z + 0.6, 0.22, 0.3, 0.5, 6, pal.gold); // alarm bell
    P.lightPool(dec, x, 0, z, 3.5, pal.glow, 0.1);
  }

  emitBoundary(row) {
    const pal = this.pal, R = this.R;
    for (const side of [-1, 1]) {
      let zc = row.z1;
      while (zc > row.z0 + 0.01) {
        let d = R.range(8, 13);
        if (zc - d - row.z0 < 6) d = zc - row.z0;
        const depth = R.range(10, 13), h = R.range(11.5, 15);
        const x0 = side < 0 ? -HW - depth : HW, x1 = side < 0 ? -HW : HW + depth;
        const z1 = zc, z0 = zc - d, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
        const g = this.G(cz), dec = this.D(cz);
        const axis = R.chance(0.5);
        const hw = axis ? (x1 - x0) / 2 : d / 2, hd = axis ? d / 2 : (x1 - x0) / 2;
        const slope = Math.min(0.5, 3.2 / hd);
        g.frame(cx, 0, cz, axis ? 0 : Math.PI / 2); dec.frame(cx, 0, cz, axis ? 0 : Math.PI / 2);
        P.facade(g, dec, hw, hd, h, 'machiya', R.pick(pal.plaster), pal, R, slope);
        P.gableRoof(g, hw, hd, h, slope, R.pick(pal.tile), pal);
        g.frame(); dec.frame();
        this.addSolid(x0, z0, x1, z1, 0, T_FLAT, h + 6);
        zc -= d;
      }
    }
  }

  emitGoal(z1, last) {
    const pal = this.pal, R = this.R;
    const pb = last.b;
    const gx = clamp(last.enter, -HW + 12, HW - 12);
    last.cross = gx;
    const hw = 10.5, hd = 7.5, cz = z1 - hd - 0.5;
    const h1 = clamp(pb.h - 0.6, 4.4, 5.6);
    const g = this.G(cz), dec = this.D(cz);
    g.frame(gx, 0, cz, 0); dec.frame(gx, 0, cz, 0);
    P.facade(g, dec, hw, hd, h1, 'temple', 0, pal, R, 0);
    const r1 = P.hipRoof(g, hw, hd, h1, 1.8, mixHex(pal.tile[0], pal.ridge, 0.3), pal, 0.3, 1.5);
    const y2 = h1 + 3.9, hw2 = 5.2, hd2 = 3.4;
    g.box(-hw2, h1 + 0.5, -hd2, hw2, y2, hd2, pal.plaster[3], { skip: 'y' });
    g.box(-hw2 - 0.1, y2 - 0.5, -hd2 - 0.1, hw2 + 0.1, y2, hd2 + 0.1, pal.red, { skip: 'y' });
    for (const s of [1, -1]) for (let i = 0; i < 4; i++) {
      const x = -hw2 + 1.0 + i * ((2 * hw2 - 2.8) / 3);
      g.quadDir([x, h1 + 1.9, s * (hd2 + 0.03)], [x + 0.8, h1 + 1.9, s * (hd2 + 0.03)], [x + 0.8, y2 - 0.8, s * (hd2 + 0.03)], [x, y2 - 0.8, s * (hd2 + 0.03)], [0, 0, s], pal.glow, 1.8, 2, [x, 0, x + 0.8, 0, x + 0.8, 1.3, x, 1.3]);
    }
    const r2 = P.hipRoof(g, hw2, hd2, y2, 1.5, mixHex(pal.tile[0], pal.ridge, 0.3), pal, 0.3, 1.3);
    g.frame(); dec.frame();
    this.addSolid(gx - hw, cz - hd, gx + hw, cz + hd, 0, T_FLAT, h1);
    const e1 = r1.eaveY + 0.3;
    this.addSolid(gx - hw - 1.5, cz - hd - 1.5, gx + hw + 1.5, cz + hd + 1.5, e1 - 0.3, T_HIP, e1, r1.ridgeY, { rlx: r1.rl });
    this.addSolid(gx - hw2, cz - hd2, gx + hw2, cz + hd2, h1, T_FLAT, y2);
    const e2 = r2.eaveY + 0.3;
    this.addSolid(gx - hw2 - 1.3, cz - hd2 - 1.3, gx + hw2 + 1.3, cz + hd2 + 1.3, e2 - 0.3, T_HIP, e2, r2.ridgeY, { rlx: r2.rl });
    for (const sx of [-1, 1]) {
      const cx2 = gx + sx * (hw - 3), zf = z1 - 0.5 + 2.05;
      for (let k = 0; k < 3; k++) {
        const x = cx2 + sx * k * 1.2, top = 1.15 * (3 - k);
        for (let j = 0; j < 3 - k; j++) P.crate(g, x, j * 1.15, zf, 1.15, 1.15, 1.15, pal, R);
        this.addSolid(x - 0.6, zf - 0.58, x + 0.6, zf + 0.58, 0, T_FLAT, top);
      }
    }
    // a central crate stair, so a fall in front of the gate is never a dead end
    {
      const zf = z1 - 0.5 + 2.05;
      for (let k = -2; k <= 2; k++) {
        const n = 3 - Math.abs(k), x = gx + k * 1.2;
        for (let j = 0; j < n; j++) P.crate(g, x, j * 1.15, zf, 1.15, 1.15, 1.15, pal, R);
        this.addSolid(x - 0.6, zf - 0.58, x + 0.6, zf + 0.58, 0, T_FLAT, 1.15 * n);
      }
    }
    // the kite, and a beacon you can read from the first roof
    const ky = r2.ridgeY;
    this.goal = { x: gx, y: ky, z: cz, r: 2.6 };
    g.beam(gx - 0.9, ky, cz, gx, ky + 2.4, cz, 0.08, pal.woodLight);
    g.beam(gx + 0.9, ky, cz, gx, ky + 2.4, cz, 0.08, pal.woodLight);
    const kz = cz + 0.1;
    g.quad([gx, ky + 0.7, kz], [gx + 1.3, ky + 2.2, kz], [gx, ky + 3.7, kz], [gx - 1.3, ky + 2.2, kz], pal.plaster[3], 0.5);
    g.box(gx - 0.5, ky + 1.9, kz + 0.01, gx + 0.5, ky + 2.5, kz + 0.03, pal.red, { glow: 0.9 });
    for (let i = 0; i < 2; i++) {
      const w = i ? 0.5 : 1.3, a = i ? 0.2 : 0.09;
      const col = mixHex(0x000000, pal.gold, a * 2);
      dec.quad([gx - w, ky, cz], [gx + w, ky, cz], [gx + w, ky + 70, cz], [gx - w, ky + 70, cz], col);
      dec.quad([gx, ky, cz - w], [gx, ky, cz + w], [gx, ky + 70, cz + w], [gx, ky + 70, cz - w], col);
      dec.quad([gx + w, ky, cz], [gx - w, ky, cz], [gx - w, ky + 70, cz], [gx + w, ky + 70, cz], col);
      dec.quad([gx, ky, cz + w], [gx, ky, cz - w], [gx, ky + 70, cz - w], [gx, ky + 70, cz + w], col);
    }
    // approach: torii and trees either side, then ordinary lots
    const row = { i: 999, z1, z0: z1 - 16, b: [] };
    for (const side of [-1, 1]) {
      const xa = gx + side * (hw + 4.5);
      P.cherry(g, gx + side * (hw + 2.6), 0, cz + 3, 1.4, pal, R);
      P.cherry(g, gx + side * (hw + 2.9), 0, cz - 4, 1.2, pal, R);
      const lo = side < 0 ? -HW : xa, hi = side < 0 ? xa : HW;
      let x = lo;
      while (hi - x > 6) {
        const w = Math.min(hi - x, R.range(8, 13));
        const ww = hi - (x + w) < 6 ? hi - x : w;
        const b = { row, x0: x, x1: x + ww - 0.01, z0: row.z0 + 1, z1: row.z1 - R.range(0, 1), h: R.range(4.5, 8), kind: 'machiya', axis: 'x', slope: R.range(0.42, 0.52), tile: R.pick(pal.tile), plaster: R.pick(pal.plaster) };
        row.b.push(b);
        this.emitLot(b);
        x += ww;
      }
    }
    this.goalRow = row;
    this.emitBoundary(row);
  }

  emitStreet(row, next, nz1) {
    const pal = this.pal, R = this.R;
    const za = row.z0, zb = nz1, zc = (za + zb) / 2;
    const g = this.G(zc), dec = this.D(zc);
    const kind = row.gapKind;
    row.zc = zc;
    // kido gates closing the street ends
    if (kind !== 'canal') for (const side of [-1, 1]) {
      const x = side * (HW + 0.5);
      g.box(x - 0.14, 0, zb, x + 0.14, 3.3, za, pal.wood, { type: 3 });
      g.box(x - 0.3, 3.3, zb - 0.2, x + 0.3, 3.55, za + 0.2, pal.ridge);
      this.addSolid(x - 0.3, zb, x + 0.3, za, 0, T_FLAT, 30);
    }
    if (kind === 'canal') {
      const wz0 = zb + 2.6, wz1 = za - 2.6;
      this.waters.push({ x0: -HW - 16, x1: HW + 16, z0: wz0, z1: wz1 });
      for (const zz of [wz0, wz1]) {
        const s = zz === wz0 ? 1 : -1;
        g.box(-HW - 16, -1.7, Math.min(zz, zz - s * 0.5), HW + 16, 0.02, Math.max(zz, zz - s * 0.5), pal.stone, { skip: 'y' });
      }
      for (const side of [-1, 1]) g.box(side * (HW + 16) - 0.5, -1.7, wz0, side * (HW + 16) + 0.5, 4, wz1, pal.stone);
      // boats to hop across
      const nb = 2 + R.int(0, 1);
      for (let i = 0; i < nb; i++) {
        const bx = lerp(-HW + 8, HW - 8, (i + R.range(0.2, 0.8)) / nb);
        for (const bz of [zc - 2.1, zc + 2.1]) {
          const x = bx + (bz > zc ? 0 : R.range(-1.5, 1.5));
          g.box(x - 2.4, -0.95, bz - 0.75, x + 2.4, -0.25, bz + 0.75, pal.woodMid, { type: 3 });
          g.box(x - 2.9, -0.7, bz - 0.5, x - 2.4, -0.15, bz + 0.5, pal.wood);
          g.box(x + 2.4, -0.7, bz - 0.5, x + 2.9, -0.15, bz + 0.5, pal.wood);
          if (R.chance(0.5)) P.crate(g, x + R.range(-1, 1), -0.25, bz, 0.8, 0.6, 0.8, pal, R);
          this.addSolid(x - 2.9, bz - 0.75, x + 2.9, bz + 0.75, -1.2, T_FLAT, -0.2);
        }
      }
      // arched bridge, away from the rope crossing
      const px = this.path[row.i].cross;
      const bx = clamp(px + (px > 0 ? -1 : 1) * R.range(14, 22), -HW + 5, HW - 5);
      this.emitBridge(g, bx, zb + 1.2, za - 1.2, zc);
      row.bridgeX = bx;
      for (let i = 0; i < 5; i++) {
        const x = lerp(-HW + 3, HW - 3, (i + R.range(0.1, 0.9)) / 5), zz = R.chance(0.5) ? za - 1.3 : zb + 1.3;
        if (Math.abs(x - bx) < 3.5) continue;
        if (R.chance(0.5)) P.cherry(g, x, 0, zz, R.range(1.0, 1.3), pal, R); else P.lampPost(g, dec, x, zz, pal, R.sign());
      }
      return;
    }
    // ordinary street / boulevard dressing
    const wide = kind === 'boulevard';
    const nLamp = wide ? 5 : 3;
    for (let i = 0; i < nLamp; i++) {
      const x = lerp(-HW + 4, HW - 4, (i + R.range(0.25, 0.75)) / nLamp);
      P.lampPost(g, dec, x, i % 2 ? za - 0.45 : zb + 0.45, pal, R.sign());
    }
    if (wide) {
      const n = 3 + R.int(0, 2);
      for (let i = 0; i < n; i++) {
        const x = lerp(-HW + 6, HW - 6, (i + R.range(0.2, 0.8)) / n), zz = zc + R.range(-1.6, 1.6);
        const r = R();
        if (r < 0.55) {
          const w = R.range(2.6, 3.4), d = 2.2, hgt = R.range(2.4, 2.8);
          P.stall(g, dec, x, zz, w, d, hgt, pal, R);
          this.addSolid(x - w / 2 - 0.2, zz - d / 2 - 0.2, x + w / 2 + 0.2, zz + d / 2 + 0.2, hgt - 0.14, T_FLAT, hgt, hgt, { soft: true });
        } else if (r < 0.8) {
          P.cherry(g, x, 0, zz, R.range(1.1, 1.4), pal, R);
          this.addSolid(x - 0.25, zz - 0.25, x + 0.25, zz + 0.25, 0, T_FLAT, 2.6);
        } else {
          P.umbrella(g, x, 0, zz, 1.3, R.pick(pal.accent), pal);
          g.box(x - 0.9, 0, zz + 0.5, x + 0.9, 0.42, zz + 1.1, pal.red);
        }
      }
      // decorative lantern strings (not walkable: too high and thin)
      for (let i = 0; i < 3; i++) {
        const x = lerp(-HW + 5, HW - 5, (i + R.range(0.1, 0.9)) / 3);
        const ya = Math.min(this.highest(x, za + 0.5), 7) + 0.1, yb = Math.min(this.highest(x, zb - 0.5), 7) + 0.1;
        if (ya < 3 || yb < 3) continue;
        const n2 = 6;
        g.beam(x, ya, za, x, yb, zb, 0.04, pal.wood);
        for (let k = 1; k < n2; k++) P.paperLantern(g, x, lerp(ya, yb, k / n2) - 0.3 - Math.sin((k / n2) * Math.PI) * 0.25, lerp(za, zb, k / n2), 0.15, k % 2 ? pal.lantern : pal.plaster[3], 2.2);
      }
    }
    // crates and barrels against the walls: cover, and steps back to the roofs
    const sides = [[row, za, -1], [next || this.goalRow, zb, 1]];
    for (const [rw, zw, s] of sides) {
      if (!rw) continue;
      for (const b of rw.b) {
        if (b.kind === 'yard') continue;
        const need = b.kind !== 'machiya' || b.h < 5.3;
        if (!need && !R.chance(0.35)) continue;
        const x = R.range(b.x0 + 1.5, b.x1 - 3.4);
        const zwall = s < 0 ? b.z0 : b.z1;
        const temple = b.kind === 'temple';
        // wide temple eaves: stand the stack clear of the overhang, and build it a step higher
        const zz = zwall + (s < 0 ? -1 : 1) * (temple ? 2.05 : 0.62);
        if (temple) {
          P.crate(g, x + 2.4, 0, zz, 1.15, 1.15, 1.15, pal, R); P.crate(g, x + 2.4, 1.15, zz, 1.1, 1.1, 1.1, pal, R); P.crate(g, x + 2.4, 2.25, zz, 1.0, 1.0, 1.0, pal, R);
          this.addSolid(x + 1.82, zz - 0.58, x + 2.98, zz + 0.58, 0, T_FLAT, 3.25);
        }
        P.crate(g, x, 0, zz, 1.15, 1.15, 1.15, pal, R);
        this.addSolid(x - 0.58, zz - 0.58, x + 0.58, zz + 0.58, 0, T_FLAT, 1.15);
        if (b.h > 4.3 || b.kind !== 'machiya') {
          P.crate(g, x + 1.2, 0, zz, 1.15, 1.15, 1.15, pal, R);
          P.crate(g, x + 1.2, 1.15, zz, 1.05, 1.05, 1.05, pal, R);
          this.addSolid(x + 0.62, zz - 0.58, x + 1.78, zz + 0.58, 0, T_FLAT, 2.2);
        }
        if (R.chance(0.6)) P.barrel(g, x - 1.1, 0, zz - (s < 0 ? -1 : 1) * 0.1, 0.4, 0.95, pal);
      }
    }
  }

  emitBridge(g, x, z0, z1, zc) {
    const pal = this.pal, w = 1.7, peak = 1.25;
    for (const [a, b, ya, yb] of [[z0, zc, 0, peak], [zc, z1, peak, 0]]) {
      g.quadDir([x - w, ya, a], [x + w, ya, a], [x + w, yb, b], [x - w, yb, b], [0, 1, 0], pal.woodLight, 0, 3, [0, a, 0.2, a, 0.2, b, 0, b]);
      g.quadDir([x - w, ya - 0.3, a], [x + w, ya - 0.3, a], [x + w, yb - 0.3, b], [x - w, yb - 0.3, b], [0, -1, 0], pal.wood);
      for (const e of [-1, 1]) {
        g.quadDir([x + e * w, ya - 0.3, a], [x + e * w, ya, a], [x + e * w, yb, b], [x + e * w, yb - 0.3, b], [e, 0, 0], pal.red);
        g.beam(x + e * w, ya + 0.9, a, x + e * w, yb + 0.9, b, 0.12, pal.red);
        for (let k = 0; k <= 3; k++) {
          const t = k / 3, zz = lerp(a, b, t), yy = lerp(ya, yb, t);
          g.box(x + e * w - 0.07, yy - 0.3, zz - 0.07, x + e * w + 0.07, yy + 1.05, zz + 0.07, pal.red);
        }
      }
      this.addSolid(x - w, a, x + w, b, -1.5, T_RAMP_Z, ya, yb);
    }
    for (const zz of [z0 + 2.6, z1 - 2.6]) for (const e of [-1, 1]) g.box(x + e * (w - 0.2) - 0.15, -1.7, zz - 0.15, x + e * (w - 0.2) + 0.15, 0.6, zz + 0.15, pal.wood);
  }

  emitGround(goalZ1) {
    const pal = this.pal, rows = this.rows;
    const X = HW + 16;
    let zTop = 60;
    const seg = (z1, z0) => {
      // split long strips so every chunk gets its own ground
      for (let a = z1; a > z0; a -= CHUNK / 2) {
        const b = Math.max(z0, a - CHUNK / 2);
        this.G((a + b) / 2).quad([-X, 0, a], [X, 0, a], [X, 0, b], [-X, 0, b], pal.ground);
      }
    };
    for (const row of rows) {
      if (row.gapKind === 'canal') {
        seg(zTop, row.z0 - 2.6);
        zTop = row.z0 - row.gap + 2.6;
      }
    }
    seg(zTop, goalZ1 - 60);
  }

  emitRopes() {
    const R = this.R, rows = this.rows;
    for (let i = 0; i < this.path.length - 1; i++) {
      const row = rows[i];
      if (row.gapKind === 'street') continue;
      const A = this.path[i].b, B = this.path[i + 1].b, x = this.path[i].cross;
      const az = A.z0 + 1.1, bz = B.z1 - 1.1;
      this.addRope(x, this.highest(x, az) + 0.1, az, x, this.highest(x, bz) + 0.1, bz);
      this.anchorPole(this.G(B.cz), x + 2.2, this.highest(x + 2.2, B.cz), B.cz);
      this.anchors.push({ x: x + 2.2, y: this.highest(x + 2.2, B.cz) + 1.5, z: B.cz, base: this.highest(x + 2.2, B.cz) });
      // bonus lines for other roofs
      let extra = 0;
      for (const a of row.b) {
        if (extra >= 2 || a.path || a.kind === 'yard') continue;
        const cands = rows[i + 1].b.filter((b) => b.kind !== 'yard' && Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0) > 3);
        if (!cands.length || !R.chance(0.6)) continue;
        const b = R.pick(cands);
        const rx = (Math.max(a.x0, b.x0) + Math.min(a.x1, b.x1)) / 2;
        if (Math.abs(rx - x) < 5) continue;
        const ya = this.highest(rx, a.z0 + 1.1) + 0.1, yb = this.highest(rx, b.z1 - 1.1) + 0.1;
        if (yb > ya + 0.4 || ya - yb > 7) continue;
        this.addRope(rx, ya, a.z0 + 1.1, rx, yb, b.z1 - 1.1);
        extra++;
      }
    }
    // zip lines down from the tall storehouses to the path
    for (let i = 1; i < rows.length - 1; i++) for (const k of rows[i].b) {
      if (k.kind !== 'kura' || !R.chance(0.8)) continue;
      const T = this.path[i + 1].b;
      const bx = clamp(k.cx, T.x0 + 1.5, T.x1 - 1.5), bz = T.cz + 0.6;
      const ax = clamp(bx, k.x0 + 1, k.x1 - 1), az = k.z0 - 0.2;
      const ay = this.highest(ax, az) + 0.1, by = this.highest(bx, bz) + 0.12;
      if (ay - by < 1.5 || Math.hypot(ax - bx, az - bz) > 34) continue;
      let ok = true;
      for (let t = 0.08; t < 0.93; t += 0.04) if (this.highest(lerp(ax, bx, t), lerp(az, bz, t)) > lerp(ay, by, t) - 0.25) { ok = false; break; }
      if (ok) this.addRope(ax, ay, az, bx, by, bz);
    }
  }

  emitRoofClutter() {
    const pal = this.pal, R = this.R;
    for (const row of this.rows) for (const b of row.b) {
      if (b.kind !== 'machiya' || b.axis !== 'x' || row.i === 0 || b.noClutter) continue;
      const p = this.path.find((q) => q.b === b);
      const avoid = (x) => p && (Math.abs(x - p.enter) < 2.2 || Math.abs(x - (p.cross ?? 99)) < 2.2);
      const g = this.G(b.cz);
      const W = b.x1 - b.x0;
      // rain barrels on the ridge: cover, and something to vault
      if (R.chance(0.55)) {
        const x = R.range(b.x0 + 1.5, b.x1 - 1.5);
        if (!avoid(x)) {
          const y = b.ridgeY + 0.16;
          g.box(x - 0.55, y - 0.3, b.cz - 0.55, x + 0.55, y + 0.06, b.cz + 0.55, pal.woodMid);
          P.barrel(g, x, y + 0.06, b.cz, 0.42, 0.85, pal);
          g.cyl(x, y + 0.91, b.cz, 0.2, 0.26, 0.24, 6, pal.woodMid);
          this.addSolid(x - 0.5, b.cz - 0.5, x + 0.5, b.cz + 0.5, y - 0.3, T_FLAT, y + 0.92);
        }
      }
      // smoke-vent dormer
      if (W > 9 && R.chance(0.4)) {
        const x = R.range(b.x0 + 2.2, b.x1 - 2.2);
        if (!avoid(x)) {
          const y = b.ridgeY + 0.1;
          g.frame(x, y, b.cz, 0);
          g.box(-0.8, -0.3, -0.55, 0.8, 0.5, 0.55, pal.wood, { type: 3, skip: 'y' });
          P.gableRoof(g, 0.8, 0.55, 0.5, 0.5, b.tile, pal);
          g.frame();
          this.addSolid(x - 1.15, b.cz - 1.25, x + 1.15, b.cz + 1.25, y - 0.3, T_GABLE_X, y + 0.2, y + 0.82);
        }
      }
      // drying deck with hanging cloth: solid cover from one side
      if (W > 10 && R.chance(0.35)) {
        const s = R.sign(), x = R.range(b.x0 + 2.4, b.x1 - 2.4);
        if (!avoid(x)) {
          const zc = b.cz + s * 2.3, top = b.ridgeY - 0.25;
          g.box(x - 1.5, top - 0.14, zc - 1.1, x + 1.5, top, zc + 1.1, pal.woodLight, { type: 3 });
          for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
            const px = x + sx * 1.4, pz = zc + sz * 1.0;
            g.box(px - 0.06, this.highest(px, pz) - 0.1, pz - 0.06, px + 0.06, top + (sz === s ? 1.9 : 0), pz + 0.06, pal.wood, { skip: 'yY' });
          }
          const zl = zc + s * 1.0;
          g.box(x - 1.45, top + 1.82, zl - 0.04, x + 1.45, top + 1.9, zl + 0.04, pal.wood);
          for (let k = 0; k < 3; k++) g.box(x - 1.3 + k * 0.9, top + 0.45 + (k % 2) * 0.25, zl - 0.02, x - 0.55 + k * 0.9, top + 1.82, zl + 0.02, R.pick(pal.accent));
          this.addSolid(x - 1.5, zc - 1.1, x + 1.5, zc + 1.1, top - 0.14, T_FLAT, top, top, { soft: true });
          this.addSolid(x - 1.4, zl - 0.08, x + 1.4, zl + 0.08, top + 0.4, T_FLAT, top + 1.9, top + 1.9, { soft: true });
        }
      }
      // shop sign standing on the street-side eave
      if (R.chance(0.3)) {
        const s = R.sign(), x = R.range(b.x0 + 2, b.x1 - 2);
        if (!avoid(x) && !(p && s < 0)) {
          const zz = (s > 0 ? b.z1 : b.z0) + s * 0.2, y = this.highest(x, zz);
          g.box(x - 1.1, y, zz - 0.07, x + 1.1, y + 1.5, zz + 0.07, pal.woodMid, { type: 3 });
          g.box(x - 0.9, y + 0.3, zz - 0.09, x + 0.9, y + 1.3, zz + 0.09, R.pick(pal.accent));
          g.box(x - 1.2, y + 1.5, zz - 0.12, x + 1.2, y + 1.62, zz + 0.12, pal.ridge);
          this.addSolid(x - 1.1, zz - 0.09, x + 1.1, zz + 0.09, y - 0.2, T_FLAT, y + 1.62, y + 1.62, { soft: true });
        }
      }
    }
  }

  placePickups() {
    const R = this.R, path = this.path, rows = this.rows;
    const add = (type, x, y, z, value = 1) => this.pickups.push({ type, x, y, z, value, taken: false });
    for (let i = 0; i < path.length; i++) {
      const p = path[i], b = p.b;
      const exitX = p.cross;
      const a = p.enter, c = exitX;
      const n = Math.max(1, Math.round(Math.abs(c - a) / 2.8));
      if (i > 0 || true) for (let k = 0; k <= n; k++) {
        const x = lerp(a, c, k / n);
        if (i === 0 && k === 0) continue;
        add('koban', x, this.highest(x, b.cz) + 0.95, b.cz);
      }
      if (i < path.length - 1) {
        const nb = path[i + 1].b;
        const rope = this.ropes.find((r) => Math.abs(r.ax - c) < 0.01 && Math.abs(r.az - (b.z0 + 1.1)) < 0.01);
        if (rope) {
          const m = Math.floor(rope.len / 2.6);
          for (let k = 1; k < m; k++) add('koban', lerp(rope.ax, rope.bx, k / m), lerp(rope.ay, rope.by, k / m) + 1.0, lerp(rope.az, rope.bz, k / m));
        } else if (i % 2 === 0) {
          const za = b.z0 - P.OV, zb = nb.z1 + P.OV, ya = this.highest(c, za + 0.2), yb = this.highest(c, zb - 0.2);
          for (let k = 1; k <= 3; k++) {
            const t = k / 4;
            add('koban', c, lerp(ya, yb, t) + 1.0 + Math.sin(t * Math.PI) * 1.2, lerp(za, zb, t));
          }
        }
        // checkpoint shrine lantern every few roofs
        if (i > 0 && i % 4 === 0) {
          const y = this.highest(p.enter, b.cz);
          this.checkpoints.push({ x: p.enter, y, z: b.cz, yaw: 0 });
          P.stoneLantern(this.G(b.cz), p.enter + 1.4, this.highest(p.enter + 1.4, b.cz + 0.9) - 0.05, b.cz + 0.9, this.pal, 0x8dffd8);
        }
      }
      // supplies beside the path
      if (i > 1 && i % 3 === 0) {
        const x = clamp(a + R.sign() * 3, b.x0 + 1, b.x1 - 1), zz = b.cz + R.sign() * 2.5;
        add(i % 6 === 0 ? 'onigiri' : 'shuriken', x, this.highest(x, zz) + 0.8, zz);
      }
    }
    // risky treasure off the path
    const off = [];
    for (const row of rows) for (const b of row.b) if (!b.path && b.kind !== 'yard' && row.i > 0) off.push(b);
    const nStack = Math.min(off.length, 4 + Math.floor(this.def.rows / 3));
    for (let i = 0; i < nStack; i++) {
      const b = off.splice(Math.floor(R() * off.length), 1)[0];
      add(b.kind === 'kura' && R.chance(0.3) ? 'smoke' : 'stack', b.cx + R.range(-2, 2), this.highest(b.cx, b.cz) + 1.0, b.cz, 5);
    }
    for (const row of rows) if (row.gapKind === 'boulevard' && R.chance(0.8)) add('stack', R.range(-HW + 6, HW - 6), 1.0, row.zc, 5);
    // one lucky cat per night, tucked away
    const far = off.filter((b) => b.row.i > 1 && Math.abs(b.cx) > 14);
    const cb = far.length ? R.pick(far) : off.length ? R.pick(off) : null;
    if (cb) add('cat', cb.cx, this.highest(cb.cx, cb.cz + 2) + 0.55, cb.cz + 2, 25);
  }

  // ------------------------------------------------------------- the job
  // A neighbour of the path roof in row ri that is easy to reach (or the path roof itself).
  jobRoof(ri, offPath = true) {
    const R = this.R, row = this.rows[ri], pi = row.b.findIndex((b) => b.path), pb = row.b[pi];
    const opts = offPath ? [row.b[pi - 1], row.b[pi + 1]].filter((b) => b && b.kind !== 'yard' && !b.tower && !b.job && b.x1 - b.x0 > 7) : [];
    const b = opts.length ? R.pick(opts) : pb;
    if (b !== pb) { b.kind = 'machiya'; b.axis = 'x'; b.h = clamp(pb.h + R.range(-0.5, 1.0), 4.2, 8.6); }
    b.noClutter = true; b.job = true;
    return b;
  }
  planMission() {
    const def = this.def, n = this.rows.length;
    const type = def.mission || 'steal';
    const row = clamp(Math.round(n * 0.45), 2, n - 3);
    const m = (this.mission = { type, row, roofs: [] });
    if (type === 'signal') for (const f of [0.2, 0.33, 0.46]) m.roofs.push(this.jobRoof(clamp(Math.round(n * f), 1, n - 3)));
    else if (type === 'pickpocket') m.roofs.push(this.jobRoof(row, false));
    else m.roofs.push(this.jobRoof(row));
  }
  placeMission() {
    const m = this.mission;
    m.spots = m.roofs.map((b) => {
      const x = b.cx + (m.type === 'signal' ? this.R.range(-2, 2) : 0);
      return { x, y: this.highest(x, b.cz), z: b.cz, b };
    });
    const b = m.roofs[0], ridge = [[b.x0 + 1.6, b.cz], [b.x1 - 1.6, b.cz]];
    if (m.type === 'assassinate') {
      this.guardDefs.push({ kind: 'sentry', role: 'target', pts: ridge, facing: Math.PI });
      this.guardDefs.push({ kind: 'sentry', pts: [[b.x1 - 1.2, b.cz], [b.x0 + 1.2, b.cz]], facing: 0 });
    } else if (m.type === 'pickpocket') {
      this.guardDefs.push({ kind: 'sentry', role: 'courier', pts: ridge, facing: Math.PI });
    } else if (m.type === 'steal') {
      this.guardDefs.push({ kind: 'sentry', pts: [[b.x0 + 1.4, b.cz], [b.cx - 1.6, b.cz]], facing: Math.PI });
      this.guardDefs.push({ kind: 'sentry', pts: [[b.x1 - 1.4, b.cz], [b.cx + 1.6, b.cz]], facing: 0 });
    }
  }

  // -------------------------------------------------------- set pieces
  // Hay carts under leap perches, shimenawa ropes to slide under, billboard walls to wall-run.
  emitSetPieces() {
    const pal = this.pal, R = makeRng(this.def.seed ^ 0x2545f491), rows = this.rows;
    const pieces = this.def.pieces || { hay: 0.4, slide: 0.25, wall: 0.7 };
    this.hayCount = 0;
    for (let i = 1; i < rows.length - 1; i++) {
      const row = rows[i], next = rows[i + 1];
      // Leap of Faith: the tallest roof edge over this street, with straw below
      if (row.gapKind === 'street' && R.chance(pieces.hay)) {
        const cands = [];
        for (const b of row.b) if (b.kind !== 'yard' && b.kind !== 'temple' && !b.job) cands.push({ b, z: b.z0, s: -1 });
        for (const b of next.b) if (b.kind !== 'yard' && b.kind !== 'temple' && !b.job) cands.push({ b, z: b.z1, s: 1 });
        const best = cands.filter((c) => c.b.h >= 6).sort((a, c) => c.b.h - a.b.h)[0];
        if (best) {
          const b = best.b, x = clamp(b.cx + R.range(-2.5, 2.5), b.x0 + 1.4, b.x1 - 1.4);
          const edge = best.z + best.s * (b.kind === 'machiya' ? P.OV : 0.5);
          const y = this.highest(x, best.z + best.s * 0.2);
          const zEnd = edge + best.s * 1.7;
          const g = this.G(zEnd);
          // the perch: a beam out over the street, with a streamer at its tip
          g.box(x - 0.14, y - 0.18, Math.min(best.z, zEnd), x + 0.14, y + 0.02, Math.max(best.z, zEnd), pal.woodLight);
          g.box(x - 0.03, y + 0.02, zEnd - 0.03, x + 0.03, y + 1.3, zEnd + 0.03, pal.wood);
          g.box(x + 0.03, y + 0.75, zEnd - 0.02, x + 0.55, y + 1.25, zEnd + 0.02, pal.gold, { glow: 0.6 });
          this.addSolid(x - 0.16, Math.min(best.z, zEnd), x + 0.16, Math.max(best.z, zEnd), y - 0.2, T_FLAT, y + 0.02);
          // the cart, straw heaped high
          const hz = zEnd, hx = x;
          g.box(hx - 1.25, 0.25, hz - 0.8, hx + 1.25, 0.85, hz + 0.8, pal.woodMid, { type: 3 });
          for (const e of [-1, 1]) g.cyl(hx + e * 0.8, 0, hz + 0.86, 0.38, 0.38, 0.12, 8, pal.wood);
          g.blob(hx, 0.95, hz, 1.25, 0.55, 0.8, 0xe2b65a, 0, 0.3, 0xf3d27a);
          g.blob(hx - 0.5, 1.15, hz + 0.1, 0.7, 0.35, 0.55, 0xf3d27a);
          this.addSolid(hx - 1.25, hz - 0.8, hx + 1.25, hz + 0.8, 0, T_FLAT, 1.35, 1.35, { hay: true });
          this.hayCount++;
        }
      }
      // a billboard wall across a wide street: the wall-run line over the gap
      if (row.gapKind === 'boulevard' && R.chance(pieces.wall)) {
        const pe = this.path[i], side = R.sign();
        const x = clamp(pe.cross + side * 2.4, -HW + 2, HW - 2);
        // keep clear of the crate stacks against both house fronts (they are the way back up)
        const za = row.z0 - 1.4, zb = next.z1 + 1.4;
        const top = Math.max(this.highest(pe.cross, row.z0 + 1), this.highest(pe.cross, next.z1 - 1)) + 3.2;
        const g = this.G((za + zb) / 2);
        g.box(x - 0.12, 2.6, zb, x + 0.12, top, za, pal.woodMid, { type: 3 });
        g.box(x - 0.16, top - 0.2, zb - 0.1, x + 0.16, top + 0.05, za + 0.1, pal.ridge);
        for (const e of [-1, 1]) {
          const xe = x + e * 0.13;
          g.quadDir([xe, top - 2.6, zb + 1.2], [xe, top - 2.6, za - 1.2], [xe, top - 0.6, za - 1.2], [xe, top - 0.6, zb + 1.2], [e, 0, 0], R.pick([pal.red, pal.accent[0], pal.plaster[3]]), 0.15);
        }
        for (const zz of [za - 0.4, zb + 0.4, (za + zb) / 2]) g.box(x - 0.1, 0, zz - 0.1, x + 0.1, 2.7, zz + 0.1, pal.wood);
        this.addSolid(x - 0.12, zb, x + 0.12, za, 2.6, T_FLAT, top);
      }
    }
    // shimenawa ropes across path roofs: slide under, or climb over
    for (let i = 2; i < this.path.length - 2; i++) {
      const pe = this.path[i], b = pe.b;
      if (b.job || b.kind !== 'machiya' || b.axis !== 'x' || !R.chance(pieces.slide)) continue;
      const xa = clamp(Math.min(pe.enter, pe.cross) - 2.6, b.x0 + 0.3, b.x1 - 0.3), xb = clamp(Math.max(pe.enter, pe.cross) + 2.6, b.x0 + 0.3, b.x1 - 0.3);
      const y0 = b.ridgeY + 0.16 + 1.08, g = this.G(b.cz);
      g.box(xa, y0, b.cz - 0.14, xb, y0 + 0.28, b.cz + 0.14, 0xd9c48a);
      for (let x = xa + 0.4; x < xb - 0.2; x += 0.7) g.quadDir([x - 0.1, y0 - 0.45, b.cz + 0.15], [x + 0.1, y0 - 0.45, b.cz + 0.15], [x + 0.1, y0, b.cz + 0.15], [x - 0.1, y0, b.cz + 0.15], [0, 0, 1], 0xffffff, 0.3);
      for (const x of [xa, xb]) { g.box(x - 0.1, b.ridgeY - 0.2, b.cz - 0.1, x + 0.1, y0 + 0.5, b.cz + 0.1, pal.red); this.addSolid(x - 0.1, b.cz - 0.1, x + 0.1, b.cz + 0.1, b.ridgeY - 0.2, T_FLAT, y0 + 0.5); }
      this.addSolid(xa, b.cz - 0.15, xb, b.cz + 0.15, y0, T_FLAT, y0 + 0.28);
    }
  }

  placeGuards() {
    const R = this.R, def = this.def, rows = this.rows, n = rows.length;
    const first = def.id === 1 ? 4 : 2;
    const sr = pickSpread(R, def.sentries, first, n - 1);
    const used = new Set();
    for (const ri of sr) {
      const row = rows[ri];
      const pi = row.b.findIndex((b) => b.path);
      let opts = row.b.filter((b, k) => !used.has(b) && b.kind === 'machiya' && Math.abs(k - pi) <= 2 && (k !== pi || def.id > 1));
      if (!opts.length) continue;
      const onPath = def.id > 2 && R.chance(0.3) && opts.includes(row.b[pi]);
      const b = onPath ? row.b[pi] : R.pick(opts.filter((o) => !o.path).length ? opts.filter((o) => !o.path) : opts);
      used.add(b);
      const pts = b.axis === 'x' ? [[b.x0 + 1.6, b.cz], [b.x1 - 1.6, b.cz]] : [[b.cx, b.z0 + 1.6], [b.cx, b.z1 - 1.6]];
      this.guardDefs.push({ kind: 'sentry', pts, facing: Math.PI });
    }
    const pr = pickSpread(R, def.patrols, 1, n - 1);
    for (const ri of pr) {
      const row = rows[ri];
      if (row.zc === undefined) continue;
      const zz = row.gapKind === 'canal' ? row.z0 - 1.3 : row.zc;
      const a = R.range(-HW + 4, -6), b = R.range(6, HW - 4);
      this.guardDefs.push({ kind: 'patrol', pts: [[a, zz], [b, zz]], facing: 0 });
    }
  }

  emitBackdrop(goalZ1) {
    const pal = this.pal, R = makeRng(this.def.seed ^ 0x5bd1e995);
    const g = new GeoBuilder();
    const zEnd = goalZ1 - 17;
    // carpet of far roofs
    for (let zz = 70; zz > zEnd - 320; zz -= 17) {
      for (let x = -260; x <= 260; x += 17) {
        const inside = Math.abs(x) < HW + 22 && zz < 44 && zz > zEnd - 6;
        if (inside || R.chance(0.16)) continue;
        const d = Math.hypot(x, zz - (zEnd - 380));
        if (d < 150) continue;
        P.farHouse(g, x + R.range(-3, 3), zz + R.range(-3, 3), R.range(9, 14), R.range(8, 12), R.range(4, 9), pal, R);
      }
    }
    // mansion behind the start: where the strongbox came from
    g.box(-HW - 14, 0, 15.2, HW + 14, 12, 18, pal.plaster[1], { skip: 'y' });
    g.box(-HW - 14, 12, 14.9, HW + 14, 12.5, 18.3, pal.ridge);
    g.frame(0, 0, 33, 0);
    g.box(-16, 0, -9, 16, 15, 9, pal.plaster[3], { skip: 'y' });
    P.hipRoof(g, 16, 9, 15, 4.5, pal.tile[1], pal, 0.4, 1.8);
    g.frame();
    for (let i = 0; i < 6; i++) g.box(-13 + i * 5, 6, 23.9, -10.4 + i * 5, 9, 24, pal.glow, { glow: 1.8, type: 2 });
    // landmarks
    P.castle(g, clamp(this.goal.x * 0.5, -20, 20), zEnd - 400, pal);
    const np = 3;
    for (let i = 0; i < np; i++) {
      const side = i % 2 ? 1 : -1;
      P.pagoda(g, side * R.range(70, 150), 0, lerp(-40, zEnd - 120, (i + R.range(0.2, 0.8)) / np), R.range(1.8, 2.6), 5, pal);
    }
    P.pagoda(g, this.goal.x + R.sign() * R.range(34, 48), 0, zEnd - R.range(40, 70), 2.2, 5, pal);
    // far mountain
    g.cyl(-360, -10, zEnd - 1000, 330, 46, 230, 8, pal.far);
    g.cyl(-360, 220, zEnd - 1000, 46, 0, 34, 8, pal.snow);
    g.cyl(-360, 150, zEnd - 1000, 120, 46.5, 70.5, 8, mixHex(pal.far, pal.snow, 0.55), 0, false);
    // outer ground
    g.quad([-1500, -0.06, 500], [1500, -0.06, 500], [1500, -0.06, zEnd - 1500], [-1500, -0.06, zEnd - 1500], mixHex(pal.ground, pal.far, 0.35));
    const m = new THREE.Mesh(g.build(), this.mats.world);
    m.receiveShadow = false; m.castShadow = false; m.frustumCulled = false;
    this.group.add(m);
  }

  finish() {
    for (const [, g] of this.chunks) {
      if (!g.triCount) continue;
      const m = new THREE.Mesh(g.build(), this.mats.world);
      m.castShadow = true; m.receiveShadow = true;
      this.group.add(m);
    }
    for (const [, g] of this.decals) {
      if (!g.triCount) continue;
      const m = new THREE.Mesh(g.build(), this.mats.decal);
      m.renderOrder = 5;
      this.group.add(m);
    }
    if (this.waters.length) {
      const g = new GeoBuilder();
      for (const w of this.waters) g.quad([w.x0, -0.75, w.z1], [w.x1, -0.75, w.z1], [w.x1, -0.75, w.z0], [w.x0, -0.75, w.z0], this.pal.water);
      const m = new THREE.Mesh(g.build(), this.mats.water);
      this.group.add(m);
    }
    this.triCount = 0;
    for (const [, g] of this.chunks) this.triCount += g.triCount;
    this.chunks = null; this.decals = null;
  }

  dispose() {
    this.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.group.removeFromParent();
  }
}

// n indices spread evenly across [lo, hi) with jitter
function pickSpread(R, n, lo, hi) {
  const out = [];
  if (hi <= lo || n <= 0) return out;
  for (let k = 0; k < n; k++) {
    const t = (k + R.range(0.15, 0.85)) / n;
    out.push(clamp(Math.floor(lo + t * (hi - lo)), lo, hi - 1));
  }
  return out;
}

export function makeDecalMaterial() {
  return new THREE.MeshBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, side: THREE.DoubleSide, fog: false });
}

export function makeWaterMaterial(pal) {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uA: { value: new THREE.Color(pal.water) }, uB: { value: new THREE.Color(pal.waterHi) }, uC: { value: new THREE.Color(pal.skyMid) } },
    vertexShader: /* glsl */ `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `
      precision highp float; varying vec3 vW; uniform float uTime; uniform vec3 uA, uB, uC;
      void main(){
        vec2 p = vW.xz;
        float a = sin(p.x * 0.55 + sin(p.y * 1.7 + uTime * 0.6) * 1.3 + uTime * 0.5);
        float b = sin(p.y * 2.3 - uTime * 0.8 + sin(p.x * 0.4 + uTime * 0.2) * 1.6);
        float w = a * b;
        vec3 col = mix(uA, uC, 0.22 + 0.12 * step(0.1, sin(p.y * 0.9 + a)));
        col = mix(col, uB, step(0.78, w) * 0.85);
        col = mix(col, uA * 0.7, step(0.86, -w) * 0.6);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
}
