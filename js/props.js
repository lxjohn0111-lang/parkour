// Visual building blocks of the city. Everything here only emits triangles into a
// GeoBuilder (collision lives in world.js). Building parts are authored in a local
// frame where the ridge runs along X and the eaves face +Z / -Z.
import { mixHex } from './geo.js';

export const OV = 0.7;      // eave overhang
export const OVE = 0.35;    // gable-end overhang
export const THICK = 0.22;  // roof slab thickness


// ------------------------------------------------------------------- roofs
export function gableRoof(g, hw, hd, h, slope, tile, pal, kink = 0) {
  const xe = hw + OVE, ze = hd + OV;
  const ridgeY = h + slope * hd, eaveY = h - slope * OV;
  const pts = kink > 0
    ? [[ze, eaveY + kink], [ze - 1.7, eaveY + slope * 1.7], [0, ridgeY]]
    : [[ze, eaveY], [0, ridgeY]];
  for (const s of [1, -1]) {
    let dist = 0;
    const total = pts.reduce((a, p, i) => (i ? a + Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) : 0), 0);
    for (let j = 0; j < pts.length - 1; j++) {
      const a = pts[j], b = pts[j + 1];
      const len = Math.hypot(a[0] - b[0], a[1] - b[1]);
      const va = total - dist, vb = total - dist - len;
      dist += len;
      const za = s * a[0], zb = s * b[0];
      g.quadDir([-xe, a[1], za], [xe, a[1], za], [xe, b[1], zb], [-xe, b[1], zb], [0, 1, s * 0.2], tile, 0, 1, [-xe, va, xe, va, xe, vb, -xe, vb]);
      g.quadDir([-xe, a[1] - THICK, za], [xe, a[1] - THICK, za], [xe, b[1] - THICK, zb], [-xe, b[1] - THICK, zb], [0, -1, 0], pal.under);
      for (const e of [1, -1]) {
        g.quadDir([e * xe, a[1], za], [e * xe, a[1] - THICK, za], [e * xe, b[1] - THICK, zb], [e * xe, b[1], zb], [e, 0, 0], pal.ridge);
      }
    }
    const e0 = pts[0];
    g.quadDir([-xe, e0[1] - THICK, s * e0[0]], [xe, e0[1] - THICK, s * e0[0]], [xe, e0[1], s * e0[0]], [-xe, e0[1], s * e0[0]], [0, 0, s], pal.ridge);
  }
  // ridge beam and end ornaments
  g.box(-xe - 0.05, ridgeY - 0.12, -0.22, xe + 0.05, ridgeY + 0.16, 0.22, pal.ridge);
  for (const e of [1, -1]) g.box(e * xe - 0.28, ridgeY - 0.05, -0.3, e * xe + 0.28, ridgeY + 0.42, 0.3, pal.ridge);
  return { ridgeY, eaveY };
}

export function hipRoof(g, hw, hd, h, rise, tile, pal, kink = 0, ov = OV) {
  let xe = hw + ov, ze = hd + ov;
  const slope = rise / hd;
  let eaveY = h - slope * ov;
  const ridgeY = h + rise;
  const rl = Math.max(0, xe - ze);
  const thick = THICK + (kink > 0 ? 0.08 : 0);
  if (kink > 0) {
    // upturned skirt ring with lifted corners
    const sk = 1.6, y1 = eaveY + slope * sk, y0 = eaveY + kink, yc = y0 + 0.5;
    const xi = xe - sk, zi = ze - sk;
    const ring = (ax, az, bx, bz, iax, iaz, ibx, ibz, dir) => {
      const mx = (ax + bx) / 2, mz = (az + bz) / 2, imx = (iax + ibx) / 2, imz = (iaz + ibz) / 2;
      g.quadDir([ax, yc, az], [mx, y0, mz], [imx, y1, imz], [iax, y1, iaz], dir, tile, 0, 1, [0, sk, 4, sk, 4, 0, 0, 0]);
      g.quadDir([mx, y0, mz], [bx, yc, bz], [ibx, y1, ibz], [imx, y1, imz], dir, tile, 0, 1, [4, sk, 8, sk, 8, 0, 4, 0]);
      g.quadDir([ax, yc, az], [mx, y0, mz], [mx, y0 - thick, mz], [ax, yc - thick, az], [dir[0], 0, dir[2]], pal.ridge);
      g.quadDir([mx, y0, mz], [bx, yc, bz], [bx, yc - thick, bz], [mx, y0 - thick, mz], [dir[0], 0, dir[2]], pal.ridge);
      g.quadDir([ax, yc - thick, az], [bx, yc - thick, bz], [ibx, y1 - thick, ibz], [iax, y1 - thick, iaz], [0, -1, 0], pal.red);
    };
    ring(-xe, ze, xe, ze, -xi, zi, xi, zi, [0, 1, 1]);
    ring(-xe, -ze, xe, -ze, -xi, -zi, xi, -zi, [0, 1, -1]);
    ring(xe, -ze, xe, ze, xi, -zi, xi, zi, [1, 1, 0]);
    ring(-xe, -ze, -xe, ze, -xi, -zi, -xi, zi, [-1, 1, 0]);
    xe = xi; ze = zi; eaveY = y1;
  } else {
    g.quadDir([-xe, eaveY - thick, -ze], [xe, eaveY - thick, -ze], [xe, eaveY - thick, ze], [-xe, eaveY - thick, ze], [0, -1, 0], pal.under);
    g.quadDir([-xe, eaveY - thick, ze], [xe, eaveY - thick, ze], [xe, eaveY, ze], [-xe, eaveY, ze], [0, 0, 1], pal.ridge);
    g.quadDir([-xe, eaveY - thick, -ze], [xe, eaveY - thick, -ze], [xe, eaveY, -ze], [-xe, eaveY, -ze], [0, 0, -1], pal.ridge);
    g.quadDir([xe, eaveY - thick, -ze], [xe, eaveY - thick, ze], [xe, eaveY, ze], [xe, eaveY, -ze], [1, 0, 0], pal.ridge);
    g.quadDir([-xe, eaveY - thick, -ze], [-xe, eaveY - thick, ze], [-xe, eaveY, ze], [-xe, eaveY, -ze], [-1, 0, 0], pal.ridge);
  }
  const L = Math.hypot(ze, ridgeY - eaveY);
  for (const s of [1, -1]) {
    g.quadDir([-xe, eaveY, s * ze], [xe, eaveY, s * ze], [rl, ridgeY, 0], [-rl, ridgeY, 0], [0, 1, s], tile, 0, 1, [-xe, L, xe, L, rl, 0, -rl, 0]);
    g.quadDir([s * xe, eaveY, -ze], [s * xe, eaveY, ze], [s * rl, ridgeY, 0], [s * rl, ridgeY, 0], [s, 1, 0], tile, 0, 1, [-ze, L, ze, L, 0, 0, 0, 0]);
  }
  if (rl > 0.3) {
    g.box(-rl - 0.2, ridgeY - 0.1, -0.22, rl + 0.2, ridgeY + 0.18, 0.22, pal.ridge);
    for (const e of [1, -1]) g.box(e * rl - 0.26, ridgeY, -0.28, e * rl + 0.26, ridgeY + 0.5, 0.28, kink > 0 ? pal.gold : pal.ridge);
  } else {
    g.cyl(0, ridgeY - 0.1, 0, 0.3, 0.05, 0.9, 5, kink > 0 ? pal.gold : pal.ridge);
  }
  return { ridgeY, eaveY: h - slope * ov, rl };
}

// ----------------------------------------------------------------- facades
// Emits the body + timber frame + windows for a building of half extents hw x hd, height h.
export function facade(g, dec, hw, hd, h, style, plaster, pal, R, slope) {
  const wood = pal.wood, glow = pal.glow;
  if (style === 'temple') return templeBody(g, dec, hw, hd, h, pal, R);
  const kura = style === 'kura';
  g.box(-hw, 0, -hd, hw, h, hd, plaster, { skip: 'yY' });
  const floors = h > 5.3 ? 2 : 1;
  const fh = h / floors;
  if (kura) {
    // namako band + thick dark window frames
    const band = Math.min(1.7, h * 0.22);
    g.box(-hw - 0.06, 0, -hd - 0.06, hw + 0.06, band, hd + 0.06, pal.ridge, { skip: 'y' });
    g.box(-hw - 0.04, h - 0.5, -hd - 0.04, hw + 0.04, h - 0.25, hd + 0.04, mixHex(plaster, pal.ridge, 0.35), { skip: 'yY' });
    for (const s of [1, -1]) {
      const n = Math.max(1, Math.round(hw / 2.4));
      for (let i = 0; i < n; i++) {
        const x = (-hw + ((i + 0.5) / n) * 2 * hw);
        const y = h * 0.62;
        g.box(x - 0.55, y - 0.6, s * hd - 0.05, x + 0.55, y + 0.6, s * hd + 0.1, wood);
        const lit = R.chance(0.35);
        g.quadDir([x - 0.36, y - 0.42, s * (hd + 0.11)], [x + 0.36, y - 0.42, s * (hd + 0.11)], [x + 0.36, y + 0.42, s * (hd + 0.11)], [x - 0.36, y + 0.42, s * (hd + 0.11)], [0, 0, s], lit ? glow : pal.under, lit ? 1.7 : 0);
      }
    }
    return;
  }
  // gable-end fill up to the roof underside
  for (const e of [1, -1]) {
    g.triDir([e * hw, h, hd], [e * hw, h, -hd], [e * hw, h + slope * hd - 0.04, 0], [e, 0, 0], plaster);
    g.box(e * hw - 0.08, 0, -0.1, e * hw + 0.08, h + slope * hd - 0.2, 0.1, wood, { skip: 'yY' });
    g.box(e * hw - 0.07, 0, -hd - 0.07, e * hw + 0.07, h, -hd + 0.09, wood, { skip: 'yY' });
    g.box(e * hw - 0.07, 0, hd - 0.09, e * hw + 0.07, h, hd + 0.07, wood, { skip: 'yY' });
    g.box(e * hw - 0.06, h - 0.2, -hd, e * hw + 0.06, h, hd, wood, { skip: 'zZ' });
    if (floors === 2) g.box(e * hw - 0.06, fh - 0.1, -hd, e * hw + 0.06, fh + 0.1, hd, wood, { skip: 'zZ' });
    // small round-ish vent / lit window on the gable
    if (R.chance(0.6)) {
      const lit = R.chance(0.5), y = h * 0.72;
      g.quadDir([e * (hw + 0.03), y - 0.45, -0.6], [e * (hw + 0.03), y - 0.45, 0.6], [e * (hw + 0.03), y + 0.45, 0.6], [e * (hw + 0.03), y + 0.45, -0.6], [e, 0, 0], lit ? glow : wood, lit ? 1.6 : 0, lit ? 2 : 3, [-0.6, y - 0.45, 0.6, y - 0.45, 0.6, y + 0.45, -0.6, y + 0.45]);
    }
  }
  const nb = Math.max(2, Math.round((2 * hw) / 2.5));
  const bw = (2 * hw) / nb;
  for (const s of [1, -1]) {
    const zf = s * hd, zo = s * (hd + 0.035);
    // beams
    g.box(-hw, h - 0.22, zf - 0.07, hw, h, zf + 0.07, wood, { skip: 'xX' });
    if (floors === 2) g.box(-hw, fh - 0.1, zf - 0.07, hw, fh + 0.1, zf + 0.07, wood, { skip: 'xX' });
    g.box(-hw, 0, zf - 0.06, hw, 0.22, zf + 0.06, pal.stone, { skip: 'xXy' });
    for (let i = 0; i <= nb; i++) {
      const x = -hw + i * bw;
      if (i > 0 && i < nb) g.box(x - 0.08, 0, zf - 0.065, x + 0.08, h, zf + 0.065, wood, { skip: 'yY' });
    }
    for (let f = 0; f < floors; f++) {
      const y0 = f * fh + (f ? 0.1 : 0.22), y1 = (f + 1) * fh - (f === floors - 1 ? 0.22 : 0.1);
      for (let i = 0; i < nb; i++) {
        const xa = -hw + i * bw + 0.08, xb = xa + bw - 0.16;
        const r = R();
        const q = (ya, yb, hex, gl, type, x0 = xa, x1 = xb) =>
          g.quadDir([x0, ya, zo], [x1, ya, zo], [x1, yb, zo], [x0, yb, zo], [0, 0, s], hex, gl, type, [x0, ya, x1, ya, x1, yb, x0, yb]);
        if (f === 0) {
          if (r < 0.2) {
            // doorway with noren curtain; warm light spills onto the street
            q(y0, y1 - 0.25, mixHex(glow, wood, 0.55), 0.55, 0);
            const nc = R.pick(pal.accent);
            g.box(xa + 0.1, y1 - 1.25, zf + s * 0.1 - 0.02, xb - 0.1, y1 - 0.3, zf + s * 0.1 + 0.02, nc);
            g.box(xa + 0.02, y1 - 0.34, zf + s * 0.1 - 0.04, xb - 0.02, y1 - 0.26, zf + s * 0.1 + 0.04, wood);
            spill(dec, (xa + xb) / 2, zf, s, bw * 0.5, 3.2, glow, 0.22);
          } else if (r < 0.55) {
            q(y0 + 0.55, y1 - 0.2, glow, 1.25, 4);
            q(y0, y0 + 0.55, wood, 0, 3);
            if (r < 0.4) spill(dec, (xa + xb) / 2, zf, s, bw * 0.45, 2.2, glow, 0.13);
          } else if (r < 0.75) {
            q(y0 + 0.7, y1 - 0.3, glow, 1.7, 2);
            q(y0, y0 + 0.7, wood, 0, 3);
            spill(dec, (xa + xb) / 2, zf, s, bw * 0.45, 2.6, glow, 0.16);
          } else {
            q(y0, y1 * 0.42, wood, 0, 3);
          }
        } else {
          if (r < 0.5) q(y0 + 0.45, y1 - 0.4, glow, 1.7, 2, xa + 0.2, xb - 0.2);
          else if (r < 0.7) q(y0 + 0.45, y1 - 0.4, wood, 0, 3, xa + 0.2, xb - 0.2);
          else if (r < 0.8) q(y0 + 0.45, y1 - 0.4, glow, 1.0, 4, xa + 0.2, xb - 0.2);
        }
      }
    }
  }
}

function templeBody(g, dec, hw, hd, h, pal, R) {
  const iw = hw - 0.9, id = hd - 0.9;
  g.box(-hw, 0, -hd, hw, 0.55, hd, pal.stone, { skip: 'y' });
  g.box(-iw, 0.55, -id, iw, h, id, pal.plaster[3], { skip: 'yY' });
  g.box(-hw, h - 0.55, -hd, hw, h, hd, pal.red, { skip: 'y' });
  g.box(-hw - 0.15, h - 0.2, -hd - 0.15, hw + 0.15, h, hd + 0.15, pal.gold, { skip: 'yY' });
  const nx = Math.max(3, Math.round((2 * hw) / 2.6));
  for (const s of [1, -1]) {
    for (let i = 0; i <= nx; i++) {
      const x = -hw + 0.3 + (i / nx) * (2 * hw - 0.6);
      g.cyl(x, 0.55, s * (hd - 0.3), 0.2, 0.2, h - 1.1, 6, pal.red, 0, false);
      if (i < nx) {
        const xa = x + 0.5, xb = x + (2 * hw - 0.6) / nx - 0.5, z = s * (id + 0.03);
        const mid = Math.abs(i - (nx - 1) / 2) < 0.6;
        g.quadDir([xa, 0.9, z], [xb, 0.9, z], [xb, h - 1.0, z], [xa, h - 1.0, z], [0, 0, s], mid ? pal.wood : pal.glow, mid ? 0 : 1.6, mid ? 3 : 2, [xa, 0.9, xb, 0.9, xb, h - 1, xa, h - 1]);
        if (!mid) spill(dec, (xa + xb) / 2, s * hd, s, 1.2, 3, pal.glow, 0.14);
      }
    }
  }
  const nz = Math.max(2, Math.round((2 * hd) / 2.6));
  for (const e of [1, -1]) for (let i = 1; i < nz; i++) g.cyl(e * (hw - 0.3), 0.55, -hd + 0.3 + (i / nz) * (2 * hd - 0.6), 0.2, 0.2, h - 1.1, 6, pal.red, 0, false);
}

// Additive light pool on the ground in front of a lit opening (local frame: wall at z=zf facing s).
export function spill(dec, x, zf, s, halfW, len, hex, a) {
  const y = 0.05;
  const col = mixHex(0x000000, hex, a * 2.2);
  dec.quadDir([x - halfW, y, zf + s * 0.1], [x + halfW, y, zf + s * 0.1], [x + halfW * 1.9, y, zf + s * len], [x - halfW * 1.9, y, zf + s * len], [0, 1, 0], col);
}

export function lightPool(dec, x, y, z, r, hex, a = 0.2) {
  dec.disc(x, y + 0.05, z, r, 14, mixHex(0x000000, hex, a));
  dec.disc(x, y + 0.06, z, r * 0.55, 12, mixHex(0x000000, hex, a * 1.1));
}

// ------------------------------------------------------------------- props
export function lampPost(g, dec, x, z, pal, side = 1) {
  g.box(x - 0.07, 0, z - 0.07, x + 0.07, 2.7, z + 0.07, pal.wood);
  g.box(x - 0.05, 2.55, z - 0.05, x + 0.05 + side * 0.5, 2.65, z + 0.05, pal.wood);
  const lx = x + side * 0.45;
  g.box(lx - 0.17, 2.0, z - 0.17, lx + 0.17, 2.5, z + 0.17, pal.glow, { glow: 2.6 });
  g.box(lx - 0.2, 2.5, z - 0.2, lx + 0.2, 2.56, z + 0.2, pal.wood);
  g.box(lx - 0.2, 1.95, z - 0.2, lx + 0.2, 2.0, z + 0.2, pal.wood);
  lightPool(dec, lx, 0, z, 3.4, pal.glow, 0.2);
}

export function paperLantern(g, x, y, z, r, hex, glow = 2.4, dark = 0x2a1c2e) {
  g.blob(x, y, z, r, r * 1.25, r, hex, glow);
  g.box(x - r * 0.45, y + r * 1.1, z - r * 0.45, x + r * 0.45, y + r * 1.3, z + r * 0.45, dark);
  g.box(x - r * 0.45, y - r * 1.3, z - r * 0.45, x + r * 0.45, y - r * 1.1, z + r * 0.45, dark);
}

export function stoneLantern(g, x, y, z, pal, glowHex) {
  g.box(x - 0.3, y, z - 0.3, x + 0.3, y + 0.18, z + 0.3, pal.stone);
  g.box(x - 0.12, y + 0.18, z - 0.12, x + 0.12, y + 0.8, z + 0.12, pal.stone);
  g.box(x - 0.26, y + 0.8, z - 0.26, x + 0.26, y + 0.9, z + 0.26, pal.stone);
  g.box(x - 0.2, y + 0.9, z - 0.2, x + 0.2, y + 1.25, z + 0.2, glowHex, { glow: 3.2 });
  g.cyl(x, y + 1.25, z, 0.42, 0.06, 0.34, 4, pal.stone);
}

export function cherry(g, x, y, z, s, pal, R) {
  const lean = R.range(-0.25, 0.25), lz = R.range(-0.25, 0.25), th = 2.6 * s;
  g.beam(x, y, z, x + lean, y + th * 0.55, z + lz, 0.34 * s, pal.trunk);
  g.beam(x + lean, y + th * 0.5, z + lz, x + lean * 2.2, y + th, z + lz * 2.2, 0.26 * s, pal.trunk);
  const tx = x + lean * 2.2, tz = z + lz * 2.2, ty = y + th;
  const n = 4 + R.int(0, 2);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * 6.283 + R.range(-0.4, 0.4), d = (i ? 1.3 : 0) * s * R.range(0.8, 1.2);
    const r = s * R.range(1.2, 1.75);
    if (i) g.beam(tx, ty - 0.3, tz, tx + Math.cos(a) * d, ty + 0.2, tz + Math.sin(a) * d, 0.16 * s, pal.trunk);
    g.blob(tx + Math.cos(a) * d, ty + (i ? R.range(0, 0.7) : 1.0) * s, tz + Math.sin(a) * d, r, r * 0.78, r, pal.blossom[i % 3 === 2 ? 2 : 0], 0, R.range(0, 3), pal.blossom[1]);
  }
}

export function pine(g, x, y, z, s, pal, R) {
  const lean = R.range(-0.5, 0.5);
  const h = 4.2 * s;
  g.beam(x, y, z, x + lean, y + h, z + lean * 0.4, 0.3 * s, pal.trunk);
  const levels = 3;
  for (let i = 0; i < levels; i++) {
    const t = 0.45 + (i / levels) * 0.6;
    const px = x + lean * t + R.range(-0.6, 0.6) * s, pz = z + lean * 0.4 * t + R.range(-0.6, 0.6) * s;
    const r = s * (2.0 - i * 0.45);
    g.cyl(px, y + h * t, pz, r, r * 0.55, 0.55 * s, 7, pal.pine[i % 2]);
  }
}

export function crate(g, x, y, z, w, h, d, pal, R) {
  const c = R.pick([pal.woodMid, pal.woodLight, mixHex(pal.woodMid, pal.wood, 0.4)]);
  g.box(x - w / 2, y, z - d / 2, x + w / 2, y + h, z + d / 2, c, { type: 3, skip: 'y' });
  g.box(x - w / 2 - 0.03, y + h - 0.12, z - d / 2 - 0.03, x + w / 2 + 0.03, y + h, z + d / 2 + 0.03, pal.wood, { skip: 'y' });
}

export function barrel(g, x, y, z, r, h, pal) {
  g.cyl(x, y, z, r * 0.88, r, h, 8, pal.woodLight);
  g.cyl(x, y + h * 0.25, z, r * 0.96, r * 0.98, 0.07, 8, pal.wood, 0, false);
  g.cyl(x, y + h * 0.7, z, r * 1.02, r * 1.02, 0.07, 8, pal.wood, 0, false);
}

// Yatai market stall: a little roofed stand whose roof is a handy stepping stone.
export function stall(g, dec, x, z, w, d, hgt, pal, R) {
  const c = R.pick(pal.accent);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.box(x + sx * (w / 2 - 0.1) - 0.06, 0, z + sz * (d / 2 - 0.1) - 0.06, x + sx * (w / 2 - 0.1) + 0.06, hgt - 0.1, z + sz * (d / 2 - 0.1) + 0.06, pal.wood, { skip: 'yY' });
  g.box(x - w / 2, 0.75, z - d / 2 + 0.15, x + w / 2, 0.9, z + d / 2 - 0.15, pal.woodLight);
  g.box(x - w / 2 - 0.2, hgt - 0.14, z - d / 2 - 0.2, x + w / 2 + 0.2, hgt, z + d / 2 + 0.2, c);
  g.box(x - w / 2 - 0.2, hgt - 0.5, z + d / 2 + 0.16, x + w / 2 + 0.2, hgt - 0.14, z + d / 2 + 0.2, pal.plaster[0]);
  paperLantern(g, x - w / 2 + 0.3, hgt - 0.55, z + d / 2 + 0.3, 0.2, pal.lantern, 2.4);
  paperLantern(g, x + w / 2 - 0.3, hgt - 0.55, z + d / 2 + 0.3, 0.2, pal.lantern, 2.4);
  lightPool(dec, x, 0, z + d / 2 + 0.8, 2.4, pal.lantern, 0.16);
}

export function umbrella(g, x, y, z, r, hex, pal) {
  g.box(x - 0.03, y, z - 0.03, x + 0.03, y + 1.9, z + 0.03, pal.wood, { skip: 'y' });
  g.cyl(x, y + 1.7, z, r, 0.06, 0.4, 10, hex);
}

// Torii gate, centre at x,z, opening along Z.
export function torii(g, x, z, w, h, pal) {
  for (const s of [-1, 1]) g.cyl(x + s * w / 2, 0, z, 0.24, 0.2, h, 7, pal.red, 0, false);
  g.box(x - w / 2 - 0.9, h - 0.05, z - 0.22, x + w / 2 + 0.9, h + 0.3, z + 0.22, pal.red);
  g.box(x - w / 2 - 1.1, h + 0.3, z - 0.28, x + w / 2 + 1.1, h + 0.5, z + 0.28, pal.under);
  g.box(x - w / 2 - 0.3, h - 0.95, z - 0.14, x + w / 2 + 0.3, h - 0.7, z + 0.14, pal.red);
}

// Tiered pagoda (pure backdrop / landmark).
export function pagoda(g, x, y, z, s, tiers, pal) {
  let w = 4.2 * s, yy = y;
  for (let i = 0; i < tiers; i++) {
    const hgt = 2.6 * s;
    g.box(x - w / 2, yy, z - w / 2, x + w / 2, yy + hgt, z + w / 2, i % 2 ? pal.plaster[0] : pal.red, { skip: 'y' });
    cone4(g, x, yy + hgt, z, w * 1.05, w * 0.42, 0.95 * s, pal.farRoof);
    yy += hgt + 0.7 * s;
    w *= 0.84;
  }
  g.box(x - 0.1 * s, yy, z - 0.1 * s, x + 0.1 * s, yy + 3.2 * s, z + 0.1 * s, pal.gold, { glow: 0.6 });
}

// Square frustum aligned to the axes (cheap roof for far buildings).
export function cone4(g, x, y, z, r0, r1, h, hex, glow = 0) {
  const a = [[-1, 1], [1, 1], [1, -1], [-1, -1]];
  for (let i = 0; i < 4; i++) {
    const p = a[i], q = a[(i + 1) % 4];
    g.quad([x + p[0] * r0, y, z + p[1] * r0], [x + q[0] * r0, y, z + q[1] * r0], [x + q[0] * r1, y + h, z + q[1] * r1], [x + p[0] * r1, y + h, z + p[1] * r1], hex, glow);
  }
  g.quad([x - r1, y + h, z + r1], [x + r1, y + h, z + r1], [x + r1, y + h, z - r1], [x - r1, y + h, z - r1], hex, glow);
}

// Castle keep on a hill: the landmark the whole escape points towards.
export function castle(g, x, z, pal) {
  g.cyl(x, -4, z, 170, 62, 44, 9, pal.hill);
  g.cyl(x - 60, -4, z + 30, 110, 30, 26, 7, mixHex(pal.hill, pal.far, 0.3));
  let y = 40, w = 26;
  cone4(g, x, y, z, w * 1.25, w, 12, pal.stone);
  y += 12;
  for (let i = 0; i < 4; i++) {
    const hgt = 9 - i * 1.2;
    g.box(x - w, y, z - w, x + w, y + hgt, z + w, pal.snow, { skip: 'y' });
    cone4(g, x, y + hgt, z, w * 1.22, w * 0.7, 3.4, pal.farRoof);
    y += hgt + 3.2;
    w *= 0.74;
  }
  cone4(g, x, y - 0.4, z, w * 1.5, 0.4, 5, pal.farRoof);
  g.box(x - 0.5, y + 4, z - 0.5, x + 0.5, y + 7, z + 0.5, pal.gold, { glow: 0.8 });
}

// Low detail far house.
export function farHouse(g, x, z, w, d, h, pal, R) {
  const wall = R.pick(pal.plaster);
  g.box(x - w / 2, 0, z - d / 2, x + w / 2, h, z + d / 2, mixHex(wall, pal.far, 0.25), { skip: 'y' });
  const rise = d * 0.24, o = 0.6;
  const tile = mixHex(R.pick(pal.tile), pal.farRoof, 0.5);
  g.quad([x - w / 2 - o, h - 0.2, z + d / 2 + o], [x + w / 2 + o, h - 0.2, z + d / 2 + o], [x + w / 2 + o, h + rise, z], [x - w / 2 - o, h + rise, z], tile);
  g.quad([x + w / 2 + o, h - 0.2, z - d / 2 - o], [x - w / 2 - o, h - 0.2, z - d / 2 - o], [x - w / 2 - o, h + rise, z], [x + w / 2 + o, h + rise, z], tile);
  if (R.chance(0.3)) g.box(x - 0.6, h * 0.5, z + d / 2, x + 0.6, h * 0.5 + 1, z + d / 2 + 0.06, pal.glow, { glow: 1.8 });
}
