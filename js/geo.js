// GeoBuilder: accumulates flat-shaded, vertex-coloured triangles into one
// BufferGeometry so a whole city chunk renders in a single draw call.
//
// Per-vertex "aFx" = (glow, v, type, u):
//   glow : emissive multiplier (paper windows, lanterns)
//   type : 0 plain, 1 roof tiles, 2 shoji grid, 3 wood planks
//   u, v : pattern coordinates in metres
import * as THREE from 'three';

const _c = new THREE.Color();
const colorCache = new Map();
export function lin(hex) {
  let c = colorCache.get(hex);
  if (!c) {
    _c.setHex(hex);
    c = [_c.r, _c.g, _c.b];
    colorCache.set(hex, c);
  }
  return c;
}
export function mixHex(a, b, t) {
  const ar = (a >> 16) & 255, ag = (a >> 8) & 255, ab = a & 255;
  const br = (b >> 16) & 255, bg = (b >> 8) & 255, bb = b & 255;
  return (Math.round(ar + (br - ar) * t) << 16) | (Math.round(ag + (bg - ag) * t) << 8) | Math.round(ab + (bb - ab) * t);
}

const _v = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();

export class GeoBuilder {
  constructor() {
    this.pos = [];
    this.nor = [];
    this.col = [];
    this.fx = [];
    // Optional local frame: world = origin + rot(local)
    this.ox = 0; this.oy = 0; this.oz = 0;
    this.cos = 1; this.sin = 0;
  }
  get triCount() { return this.pos.length / 9; }

  frame(ox = 0, oy = 0, oz = 0, rotY = 0) {
    this.ox = ox; this.oy = oy; this.oz = oz;
    this.cos = Math.cos(rotY); this.sin = Math.sin(rotY);
    return this;
  }
  _push(x, y, z) {
    const c = this.cos, s = this.sin;
    this.pos.push(this.ox + x * c + z * s, this.oy + y, this.oz - x * s + z * c);
  }

  // a,b,c : [x,y,z] counter-clockwise when seen from outside.
  tri(a, b, c, hex, glow = 0, type = 0, ua = 0, va = 0, ub = 0, vb = 0, uc = 0, vc = 0) {
    const i = this.pos.length;
    this._push(a[0], a[1], a[2]);
    this._push(b[0], b[1], b[2]);
    this._push(c[0], c[1], c[2]);
    const p = this.pos;
    const ux = p[i + 3] - p[i], uy = p[i + 4] - p[i + 1], uz = p[i + 5] - p[i + 2];
    const vx = p[i + 6] - p[i], vy = p[i + 7] - p[i + 1], vz = p[i + 8] - p[i + 2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1;
    nx /= l; ny /= l; nz /= l;
    const col = lin(hex);
    for (let k = 0; k < 3; k++) {
      this.nor.push(nx, ny, nz);
      this.col.push(col[0], col[1], col[2]);
    }
    this.fx.push(glow, va, type, ua, glow, vb, type, ub, glow, vc, type, uc);
  }

  // Quad a-b-c-d (CCW from outside). uv = [ua,va, ub,vb, uc,vc, ud,vd]
  quad(a, b, c, d, hex, glow = 0, type = 0, uv = null) {
    if (uv) {
      this.tri(a, b, c, hex, glow, type, uv[0], uv[1], uv[2], uv[3], uv[4], uv[5]);
      this.tri(a, c, d, hex, glow, type, uv[0], uv[1], uv[4], uv[5], uv[6], uv[7]);
    } else {
      this.tri(a, b, c, hex, glow, type);
      this.tri(a, c, d, hex, glow, type);
    }
  }

  // Quad whose winding is fixed up automatically so it faces along `dir` (local space).
  quadDir(a, b, c, d, dir, hex, glow = 0, type = 0, uv = null) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    if (nx * dir[0] + ny * dir[1] + nz * dir[2] >= 0) this.quad(a, b, c, d, hex, glow, type, uv);
    else this.quad(a, d, c, b, hex, glow, type, uv ? [uv[0], uv[1], uv[6], uv[7], uv[4], uv[5], uv[2], uv[3]] : null);
  }
  triDir(a, b, c, dir, hex, glow = 0) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    if (nx * dir[0] + ny * dir[1] + nz * dir[2] >= 0) this.tri(a, b, c, hex, glow);
    else this.tri(a, c, b, hex, glow);
  }

  // Axis aligned box from min/max corners. opts: glow, type, top (colour of top face),
  // skip: string containing any of "xXyYzZ" (lower = min face, upper = max face).
  box(x0, y0, z0, x1, y1, z1, hex, opts = null) {
    const glow = opts?.glow || 0, type = opts?.type || 0, skip = opts?.skip || '';
    const top = opts?.top ?? hex;
    const side = (a, b, c, d, hx, u0, u1) => {
      if (type) this.quad(a, b, c, d, hx, glow, type, [u0, a[1], u1, b[1], u1, c[1], u0, d[1]]);
      else this.quad(a, b, c, d, hx, glow);
    };
    if (!skip.includes('Z')) side([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], hex, x0, x1);
    if (!skip.includes('z')) side([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], hex, x1, x0);
    if (!skip.includes('X')) side([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], hex, z1, z0);
    if (!skip.includes('x')) side([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], hex, z0, z1);
    if (!skip.includes('Y')) this.quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], top, glow);
    if (!skip.includes('y')) this.quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], hex, glow);
  }

  // Box centred at (cx,cy,cz) with arbitrary euler rotation.
  rbox(cx, cy, cz, sx, sy, sz, rx, ry, rz, hex, glow = 0) {
    _e.set(rx, ry, rz, 'YXZ');
    _m.compose(_p.set(cx, cy, cz), _q.setFromEuler(_e), _s.set(sx, sy, sz));
    this.mesh(UNIT_BOX, _m, hex, glow);
  }

  // Append any three.js geometry transformed by a matrix (flat shaded).
  mesh(geom, matrix, hex, glow = 0, hexFn = null) {
    const p = geom.attributes.position;
    const idx = geom.index;
    const n = idx ? idx.count : p.count;
    const A = [0, 0, 0], B = [0, 0, 0], C = [0, 0, 0];
    const get = (i, out) => {
      const vi = idx ? idx.getX(i) : i;
      _v.fromBufferAttribute(p, vi);
      if (matrix) _v.applyMatrix4(matrix);
      out[0] = _v.x; out[1] = _v.y; out[2] = _v.z;
    };
    for (let i = 0; i < n; i += 3) {
      get(i, A); get(i + 1, B); get(i + 2, C);
      const h = hexFn ? hexFn((A[1] + B[1] + C[1]) / 3, (A[0] + B[0] + C[0]) / 3, (A[2] + B[2] + C[2]) / 3) : hex;
      this.tri(A, B, C, h, glow);
    }
  }

  // Convenience primitives -------------------------------------------------
  cyl(cx, y0, cz, r0, r1, h, seg, hex, glow = 0, capped = true) {
    const g = cylGeo(seg, capped);
    _m.compose(_p.set(cx, y0 + h / 2, cz), _q.identity(), _s.set(1, h, 1));
    // r0 bottom radius, r1 top radius: scale per-vertex
    const p = g.attributes.position, idx = g.index;
    const A = [0, 0, 0], B = [0, 0, 0], C = [0, 0, 0];
    const get = (i, out) => {
      const vi = idx.getX(i);
      const y = p.getY(vi);
      const r = y > 0 ? r1 : r0;
      out[0] = cx + p.getX(vi) * r; out[1] = y0 + (y + 0.5) * h; out[2] = cz + p.getZ(vi) * r;
    };
    for (let i = 0; i < idx.count; i += 3) {
      get(i, A); get(i + 1, B); get(i + 2, C);
      this.tri(A, B, C, hex, glow);
    }
  }

  blob(cx, cy, cz, rx, ry, rz, hex, glow = 0, rot = 0, hexTop = null) {
    _e.set(0, rot, 0);
    _m.compose(_p.set(cx, cy, cz), _q.setFromEuler(_e), _s.set(rx, ry, rz));
    this.mesh(ICO, _m, hex, glow, hexTop ? (y) => (y > cy + ry * 0.15 ? hexTop : hex) : null);
  }

  disc(cx, y, cz, r, seg, hex, glow = 0) {
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      this.tri([cx, y, cz], [cx + Math.sin(a0) * r, y, cz + Math.cos(a0) * r], [cx + Math.sin(a1) * r, y, cz + Math.cos(a1) * r], hex, glow);
    }
  }

  // Beam between two arbitrary points (square section).
  beam(ax, ay, az, bx, by, bz, w, hex, glow = 0) {
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    const len = Math.hypot(dx, dy, dz);
    if (len < 1e-4) return;
    const yaw = Math.atan2(dx, dz);
    const pitch = -Math.asin(dy / len);
    this.rbox((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2, w, w, len, pitch, yaw, 0, hex, glow);
  }

  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setAttribute('aFx', new THREE.Float32BufferAttribute(this.fx, 4));
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }
}

const UNIT_BOX = new THREE.BoxGeometry(1, 1, 1);
const ICO = new THREE.IcosahedronGeometry(1, 0);
const cylCache = new Map();
function cylGeo(seg, capped) {
  const k = seg * 2 + (capped ? 1 : 0);
  let g = cylCache.get(k);
  if (!g) {
    g = new THREE.CylinderGeometry(1, 1, 1, seg, 1, !capped);
    cylCache.set(k, g);
  }
  return g;
}
