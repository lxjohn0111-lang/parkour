// Weather: each night has its own sky. Rain with lightning, snow, a blossom storm, mist, or clear.
import * as THREE from 'three';

const N = 900;

export class Weather {
  constructor(game) {
    this.game = game;
    this.kind = 'clear';
    const rg = new THREE.BufferGeometry();
    this.rainPos = new Float32Array(N * 6);
    rg.setAttribute('position', new THREE.BufferAttribute(this.rainPos, 3));
    this.rain = new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0xc8d2ff, transparent: true, opacity: 0.42, fog: false, depthWrite: false }));
    this.rain.frustumCulled = false;
    const sg = new THREE.BufferGeometry();
    this.snowPos = new Float32Array(N * 3);
    sg.setAttribute('position', new THREE.BufferAttribute(this.snowPos, 3));
    this.snow = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 0.09, transparent: true, opacity: 0.9, fog: false, depthWrite: false }));
    this.snow.frustumCulled = false;
    this.drops = [];
    for (let i = 0; i < N; i++) this.drops.push({ x: (Math.random() - 0.5) * 44, y: Math.random() * 26 - 6, z: (Math.random() - 0.5) * 44, p: Math.random() * 6 });
    game.scene.add(this.rain, this.snow);
    this.boltT = 8; this.thunderT = -1;
  }

  set(kind) {
    this.kind = kind;
    this.rain.visible = kind === 'rain';
    this.snow.visible = kind === 'snow';
    const A = this.game.actors;
    A.petals.visible = kind !== 'rain' && kind !== 'snow';
    A.petalMat.size = kind === 'blossom' ? 0.16 : 0.11;
    this.game.audio.rain(kind === 'rain');
    this.boltT = 5 + Math.random() * 6;
  }
  // fog and grade tweaks per weather, applied on top of the district palette
  get fogMul() { return { mist: 1.9, rain: 1.35, snow: 1.25 }[this.kind] || 1; }
  get tintMul() { return { rain: 0.86, mist: 0.95, snow: 1.03 }[this.kind] || 1; }

  update(dt, cam) {
    const c = cam.position, k = this.kind;
    if (k === 'rain' || k === 'snow') {
      const P = k === 'rain' ? this.rainPos : this.snowPos;
      for (let i = 0; i < N; i++) {
        const d = this.drops[i];
        if (k === 'rain') { d.y -= dt * 28; d.x += dt * 3; }
        else { d.p += dt; d.y -= dt * 1.6; d.x += Math.sin(d.p) * dt * 0.8; d.z += Math.cos(d.p * 0.7) * dt * 0.6; }
        let rx = d.x - c.x, rz = d.z - c.z;
        if (rx > 22) d.x -= 44; else if (rx < -22) d.x += 44;
        if (rz > 22) d.z -= 44; else if (rz < -22) d.z += 44;
        if (d.y - c.y < -8) d.y += 26;
        if (k === 'rain') {
          const j = i * 6;
          P[j] = d.x; P[j + 1] = d.y; P[j + 2] = d.z;
          P[j + 3] = d.x - 0.1; P[j + 4] = d.y + 0.75; P[j + 5] = d.z;
        } else { P[i * 3] = d.x; P[i * 3 + 1] = d.y; P[i * 3 + 2] = d.z; }
      }
      (k === 'rain' ? this.rain : this.snow).geometry.attributes.position.needsUpdate = true;
    }
    if (k === 'rain') {
      // lightning: a white flash over the city, thunder a moment later
      this.boltT -= dt;
      if (this.boltT <= 0) {
        this.boltT = 7 + Math.random() * 9;
        this.game.fxFlash = Math.max(this.game.fxFlash, 0.55);
        this.thunderT = 0.3 + Math.random() * 1.2;
      }
      if (this.thunderT > 0) { this.thunderT -= dt; if (this.thunderT <= 0) this.game.audio.thunder(); }
    }
  }
}
