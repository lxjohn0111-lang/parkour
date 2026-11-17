// Rendering: one toon material family, one ink-outline post pass, one sky.
// Everything in the world goes through the same 3-band lighting ramp and the
// same depth-based outline so the look stays consistent.
import * as THREE from 'three';

// ---------------------------------------------------------------- materials
let gradientTex = null;
function gradient() {
  if (gradientTex) return gradientTex;
  // dot(N,L) < 0 -> shadow band, 0..0.5 -> half band, > 0.5 -> lit band
  const d = new Uint8Array([0, 0, 0, 255, 0, 0, 0, 255, 150, 150, 150, 255, 255, 255, 255, 255]);
  gradientTex = new THREE.DataTexture(d, 4, 1, THREE.RGBAFormat);
  gradientTex.minFilter = gradientTex.magFilter = THREE.NearestFilter;
  gradientTex.generateMipmaps = false;
  gradientTex.needsUpdate = true;
  return gradientTex;
}

// World material: vertex colours + procedural tile / shoji / plank patterns + per-vertex glow.
export function makeWorldMaterial() {
  const m = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: gradient() });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 aFx;\nvarying vec4 vFx;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvFx = aFx;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec4 vFx;')
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        float fxGlow = vFx.x;
        if (vFx.z > 0.5 && vFx.z < 1.5) {
          // roof tiles: ribs running down the slope + faint courses
          float w = fwidth(vFx.w) / 0.62;
          float f = abs(fract(vFx.w / 0.62) - 0.5) * 2.0;
          float rib = smoothstep(0.62 - w, 0.62 + w, f);
          float fade = 1.0 - smoothstep(0.25, 0.9, w);
          float w2 = fwidth(vFx.y) / 0.9;
          float c = abs(fract(vFx.y / 0.9) - 0.5) * 2.0;
          float course = smoothstep(0.9 - w2, 0.9 + w2, c) * (1.0 - smoothstep(0.1, 0.4, w2));
          diffuseColor.rgb *= 1.0 - 0.2 * rib * fade - 0.1 * course;
          diffuseColor.rgb *= 1.0 + 0.07 * (1.0 - rib) * fade;
        } else if (vFx.z > 1.5 && vFx.z < 2.5) {
          // shoji paper window: dark wooden grid, glowing panes
          vec2 g = abs(fract(vFx.wy / vec2(0.46, 0.52)) - 0.5) * 2.0;
          vec2 fw = fwidth(vFx.wy) / vec2(0.46, 0.52);
          float line = max(smoothstep(0.84 - fw.x, 0.84 + fw.x, g.x), smoothstep(0.86 - fw.y, 0.86 + fw.y, g.y));
          line *= 1.0 - smoothstep(0.3, 0.9, max(fw.x, fw.y));
          diffuseColor.rgb *= 1.0 - 0.8 * line;
          fxGlow *= 1.0 - 0.9 * line;
        } else if (vFx.z > 3.5) {
          // koshi lattice: dense dark slats over a lit interior
          float w = fwidth(vFx.w) / 0.17;
          float f = abs(fract(vFx.w / 0.17) - 0.5) * 2.0;
          float slat = smoothstep(0.42 - w, 0.42 + w, f);
          slat = mix(slat, 0.55, smoothstep(0.3, 0.9, w));
          float rail = step(0.92, abs(fract(vFx.y / 1.1) - 0.5) * 2.0);
          slat = max(slat, rail);
          diffuseColor.rgb *= 1.0 - 0.82 * slat;
          fxGlow *= 1.0 - 0.95 * slat;
        } else if (vFx.z > 2.5) {
          // vertical wood planks
          float w = fwidth(vFx.w) / 0.3;
          float f = abs(fract(vFx.w / 0.3) - 0.5) * 2.0;
          float line = smoothstep(0.8 - w, 0.8 + w, f) * (1.0 - smoothstep(0.3, 0.9, w));
          diffuseColor.rgb *= 1.0 - 0.28 * line;
        }`
      )
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * fxGlow;');
  };
  return m;
}

// Plain toon material for characters, hands, pickups (same ramp, no patterns).
export function makeToonMaterial(opts = {}) {
  return new THREE.MeshToonMaterial({ vertexColors: opts.vertexColors ?? true, gradientMap: gradient(), ...opts });
}

// ---------------------------------------------------------------------- sky
export function makeSky() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    uniforms: {
      uTop: { value: new THREE.Color() },
      uMid: { value: new THREE.Color() },
      uHor: { value: new THREE.Color() },
      uSunCol: { value: new THREE.Color() },
      uCloudA: { value: new THREE.Color() },
      uCloudB: { value: new THREE.Color() },
      uSunDir: { value: new THREE.Vector3(0, 0.3, -1) },
      uSunSize: { value: 0.9994 },
      uStars: { value: 0 },
      uFire: { value: 0 },
      uTime: { value: 0 },
    },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main(){
        vDir = position;
        vec4 p = modelViewMatrix * vec4(position, 0.0);
        gl_Position = projectionMatrix * vec4(p.xyz, 1.0);
        gl_Position.z = gl_Position.w;
      }`,
    fragmentShader: /* glsl */ `
      precision highp float;
      varying vec3 vDir;
      uniform vec3 uTop, uMid, uHor, uSunCol, uCloudA, uCloudB, uSunDir;
      uniform float uSunSize, uStars, uTime, uFire;
      float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
      }
      float fbm(vec2 p){ float a = 0.5, s = 0.0; for(int i=0;i<4;i++){ s += a*noise(p); p = p*2.03 + 11.7; a *= 0.5; } return s; }
      void main(){
        vec3 d = normalize(vDir);
        float h = d.y;
        vec3 col = mix(uHor, uMid, smoothstep(0.0, 0.22, h));
        col = mix(col, uTop, smoothstep(0.16, 0.7, h));
        col = mix(col, uHor * 0.92, smoothstep(0.0, -0.25, h));
        float sd = dot(d, normalize(uSunDir));
        // warm wash around the sun, in soft bands
        col += uSunCol * (pow(max(sd, 0.0), 6.0) * 0.22 + pow(max(sd, 0.0), 40.0) * 0.3);
        // stars
        if (uStars > 0.0 && h > 0.02) {
          vec2 sp = d.xz / (h + 0.35) * 90.0;
          vec2 ip = floor(sp);
          float r = hash(ip);
          float tw = 0.6 + 0.4 * sin(uTime * 2.0 + r * 40.0);
          float st = step(0.985, r) * smoothstep(0.35, 0.0, length(fract(sp) - 0.5)) * tw;
          col += vec3(0.9, 0.92, 1.0) * st * uStars * smoothstep(0.02, 0.3, h);
        }
        // stylised streak clouds: hard edged, two tones
        if (h > 0.0) {
          vec2 cp = d.xz / (h + 0.14);
          cp = cp * vec2(0.55, 1.7) + vec2(uTime * 0.006, 0.0);
          float n = fbm(cp);
          float n2 = fbm(cp + normalize(uSunDir).xz * 0.12 + vec2(0.0, 0.05));
          float m = smoothstep(0.56, 0.575, n) * smoothstep(0.02, 0.14, h) * (1.0 - smoothstep(0.55, 0.9, h));
          vec3 cc = mix(uCloudB, uCloudA, smoothstep(0.52, 0.56, n2));
          col = mix(col, cc, m * 0.92);
        }
        // festival fireworks: radial bursts low over the city (HDR, so they bloom)
        if (uFire > 0.0 && h > 0.05) {
          float az = atan(d.x, -d.z), el = asin(clamp(d.y, -1.0, 1.0));
          for (int i = 0; i < 3; i++) {
            float fi = float(i);
            float tt = uTime * 0.31 + fi * 0.37;
            float id = floor(tt), a = fract(tt);
            vec2 c = vec2(hash(vec2(id, fi + 1.0)) * 2.2 - 1.1, 0.2 + hash(vec2(fi + 5.0, id)) * 0.26);
            vec2 q = vec2((az - c.x) * cos(el), el - c.y);
            float r = length(q), R = 0.2 * (1.0 - exp(-a * 5.0));
            float spoke = smoothstep(0.55, 1.0, cos(atan(q.y, q.x) * 14.0 + fi * 1.7));
            float band = smoothstep(R * 1.04, R * 0.9, r) * smoothstep(R * 0.25, R * 0.9, r);
            vec3 fc = mix(vec3(1.0, 0.45, 0.3), vec3(1.0, 0.85, 0.4), hash(vec2(id, fi + 3.0)));
            fc = mix(fc, vec3(0.55, 1.0, 0.85), step(0.7, hash(vec2(id + 7.0, fi))));
            col += fc * (spoke * band + smoothstep(0.02, 0.0, r) * 0.6) * (1.0 - a) * (1.0 - a) * 3.5 * uFire;
          }
        }
        // sun / moon disc (HDR so it blooms)
        float disc = smoothstep(uSunSize, uSunSize + 0.00012, sd);
        col = mix(col, uSunCol * 3.2, disc);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -1000;
  return mesh;
}

// ------------------------------------------------------------- post process
const FS_VERT = /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

function fsMaterial(frag, uniforms) {
  return new THREE.ShaderMaterial({ vertexShader: FS_VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false });
}

const BRIGHT_FRAG = /* glsl */ `
  precision highp float; varying vec2 vUv; uniform sampler2D tColor; uniform vec2 uTexel; uniform float uThresh;
  vec3 pick(vec2 uv){ vec3 c = min(texture2D(tColor, uv).rgb, vec3(12.0)); float m = max(c.r, max(c.g, c.b)); return c * smoothstep(uThresh, uThresh + 0.6, m); }
  void main(){
    vec3 c = pick(vUv + uTexel*vec2(-1.0,-1.0)) + pick(vUv + uTexel*vec2(1.0,-1.0)) + pick(vUv + uTexel*vec2(-1.0,1.0)) + pick(vUv + uTexel*vec2(1.0,1.0));
    gl_FragColor = vec4(c * 0.25, 1.0);
  }`;
const BLUR_FRAG = /* glsl */ `
  precision highp float; varying vec2 vUv; uniform sampler2D tColor; uniform vec2 uDir;
  void main(){
    vec3 c = texture2D(tColor, vUv).rgb * 0.227;
    c += (texture2D(tColor, vUv + uDir*1.385).rgb + texture2D(tColor, vUv - uDir*1.385).rgb) * 0.316;
    c += (texture2D(tColor, vUv + uDir*3.231).rgb + texture2D(tColor, vUv - uDir*3.231).rgb) * 0.0703;
    gl_FragColor = vec4(c, 1.0);
  }`;
const COPY_FRAG = /* glsl */ `precision highp float; varying vec2 vUv; uniform sampler2D tColor; void main(){ gl_FragColor = vec4(texture2D(tColor, vUv).rgb, 1.0); }`;

const FINAL_FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D tColor, tDepth, tBloomA, tBloomB;
  uniform vec2 uRes;
  uniform float uNear, uFar, uTanHalf, uAspect, uTime, uLine;
  uniform vec3 uFogColor, uInk, uTint;
  uniform float uFogDensity, uOutline, uBloom, uSpeed, uDanger, uHurt, uFade, uHidden, uSat, uFlash;
  float linZ(vec2 uv){ float d = texture2D(tDepth, uv).x; return uNear * uFar / (uFar - d * (uFar - uNear)); }
  vec3 vpos(vec2 uv){ float z = linZ(uv); return vec3((uv * 2.0 - 1.0) * vec2(uAspect * uTanHalf, uTanHalf) * z, -z); }
  float hash(float n){ return fract(sin(n) * 43758.5453); }
  void main(){
    vec3 col = texture2D(tColor, vUv).rgb;
    vec2 px = uLine / uRes;
    vec3 c = vpos(vUv);
    vec3 l = vpos(vUv - vec2(px.x, 0.0)), r = vpos(vUv + vec2(px.x, 0.0));
    vec3 u = vpos(vUv + vec2(0.0, px.y)), d = vpos(vUv - vec2(0.0, px.y));
    float z = -c.z;
    float zmin = min(z, min(min(-l.z, -r.z), min(-u.z, -d.z)));
    // distance fog (skipped on the sky dome)
    float sky = step(uFar * 0.98, z);
    float fog = (1.0 - exp(-pow(z * uFogDensity, 1.35))) * (1.0 - sky);
    col = mix(col, uFogColor, fog);
    // ink outline: how far do the neighbours sit off this pixel's surface plane?
    vec3 dx = abs(r.z - c.z) < abs(c.z - l.z) ? r - c : c - l;
    vec3 dy = abs(u.z - c.z) < abs(c.z - d.z) ? u - c : c - d;
    vec3 n = normalize(cross(dx, dy));
    float pd = max(max(abs(dot(n, l - c)), abs(dot(n, r - c))), max(abs(dot(n, u - c)), abs(dot(n, d - c))));
    float pix = 2.0 * uTanHalf / uRes.y * uLine;
    float e = pd / (zmin * pix);
    float edge = smoothstep(0.32, 0.6, e);
    float efade = 1.0 - smoothstep(70.0, 260.0, zmin);
    float fogNear = 1.0 - exp(-pow(zmin * uFogDensity, 1.35));
    col = mix(col, mix(uInk, uFogColor, fogNear * 0.85), edge * uOutline * (0.25 + 0.75 * efade));
    // bloom
    vec3 bl = texture2D(tBloomA, vUv).rgb * 0.6 + texture2D(tBloomB, vUv).rgb * 0.8;
    col += bl * uBloom;
    // grade: soft knee, tint, saturation
    col *= uTint;
    vec3 k = max(col - 0.82, 0.0);
    col = min(col, 0.82) + (1.0 - exp(-k * 2.2)) * 0.18 / 1.0;
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(lum), col, uSat);
    // screen-space feedback
    vec2 q = vUv - 0.5;
    float rad = length(q * vec2(uAspect, 1.0)) / length(vec2(uAspect, 1.0) * 0.5);
    float vig = smoothstep(0.45, 1.05, rad);
    col *= 1.0 - vig * 0.32;
    col = mix(col, col * vec3(0.55, 0.6, 1.0), vig * uHidden * 0.6);
    col = mix(col, vec3(0.85, 0.06, 0.1), vig * uDanger * 0.55);
    col = mix(col, vec3(0.9, 0.05, 0.08), (0.25 + 0.75 * vig) * uHurt * 0.6);
    // anime speed lines
    if (uSpeed > 0.01) {
      float ang = atan(q.y, q.x * uAspect);
      float seg = floor(ang * 28.6);
      float tt = floor(uTime * 16.0);
      float hh = hash(seg * 13.1 + tt * 7.7);
      float f = abs(fract(ang * 28.6) - 0.5) * 2.0;
      float line = step(0.82, hh) * smoothstep(0.75, 0.2, f) * smoothstep(0.5 + hash(seg + tt) * 0.25, 1.0, rad);
      col += vec3(1.0, 0.97, 0.9) * line * uSpeed * 0.5;
    }
    col = mix(col, vec3(1.0, 0.96, 0.86), uFlash);
    col *= 1.0 - uFade;
    col = pow(max(col, 0.0), vec3(1.0 / 2.2));
    col += (hash(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + uTime) - 0.5) / 255.0;
    gl_FragColor = vec4(col, 1.0);
  }`;

export class Gfx {
  constructor(canvas) {
    this.canvas = canvas;
    const r = (this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false, alpha: false }));
    r.toneMapping = THREE.NoToneMapping;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    r.autoClear = true;
    r.setClearColor(0x000000, 1);
    this.hdr = r.capabilities.isWebGL2 && (r.extensions.has('EXT_color_buffer_float') || r.extensions.has('EXT_color_buffer_half_float'));
    this.quality = 2; // 0 low, 1 medium, 2 high
    this.scale = 1;
    this.w = 2; this.h = 2;

    this.fsScene = new THREE.Scene();
    this.fsCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const tri = new THREE.BufferGeometry();
    tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
    tri.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, 2], 2));
    this.fsMesh = new THREE.Mesh(tri, null);
    this.fsMesh.frustumCulled = false;
    this.fsScene.add(this.fsMesh);

    this.mBright = fsMaterial(BRIGHT_FRAG, { tColor: { value: null }, uTexel: { value: new THREE.Vector2() }, uThresh: { value: this.hdr ? 1.05 : 0.86 } });
    this.mBlur = fsMaterial(BLUR_FRAG, { tColor: { value: null }, uDir: { value: new THREE.Vector2() } });
    this.mCopy = fsMaterial(COPY_FRAG, { tColor: { value: null } });
    this.fx = {
      tColor: { value: null }, tDepth: { value: null }, tBloomA: { value: null }, tBloomB: { value: null },
      uRes: { value: new THREE.Vector2() }, uNear: { value: 0.1 }, uFar: { value: 1000 }, uTanHalf: { value: 1 }, uAspect: { value: 1 },
      uTime: { value: 0 }, uLine: { value: 1 },
      uFogColor: { value: new THREE.Color(0xc9a3cf) }, uInk: { value: new THREE.Color(0x241a3d) }, uTint: { value: new THREE.Color(1, 1, 1) },
      uFogDensity: { value: 0.004 }, uOutline: { value: 0.9 }, uBloom: { value: 1 }, uSpeed: { value: 0 }, uDanger: { value: 0 },
      uHurt: { value: 0 }, uFade: { value: 0 }, uHidden: { value: 0 }, uSat: { value: 1 }, uFlash: { value: 0 },
    };
    this.mFinal = fsMaterial(FINAL_FRAG, this.fx);
    this.rtScene = null;
    this._frameTimes = [];
    this.autoScale = true;
  }

  setQuality(q) {
    this.quality = q;
    this.renderer.shadowMap.enabled = true;
    this.resize(true);
  }

  resize(force = false) {
    const cw = Math.max(2, this.canvas.clientWidth | 0), ch = Math.max(2, this.canvas.clientHeight | 0);
    const cap = [1, 1.25, 1.75][this.quality];
    const pr = Math.min(window.devicePixelRatio || 1, cap) * this.scale;
    const w = Math.max(2, Math.round(cw * pr)), h = Math.max(2, Math.round(ch * pr));
    if (!force && w === this.w && h === this.h) return false;
    this.w = w; this.h = h;
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(w, h, false);
    const type = this.hdr ? THREE.HalfFloatType : THREE.UnsignedByteType;
    const dispose = (t) => t && t.dispose();
    dispose(this.rtScene); [this.q1, this.q2, this.e1, this.e2].forEach(dispose);
    const depthTexture = new THREE.DepthTexture(w, h);
    depthTexture.minFilter = depthTexture.magFilter = THREE.NearestFilter;
    this.rtScene = new THREE.WebGLRenderTarget(w, h, {
      type, depthTexture, depthBuffer: true, samples: this.quality >= 1 ? 4 : 0,
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false,
    });
    const mk = (d) => new THREE.WebGLRenderTarget(Math.max(2, (w / d) | 0), Math.max(2, (h / d) | 0), { type, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter });
    this.q1 = mk(4); this.q2 = mk(4); this.e1 = mk(8); this.e2 = mk(8);
    return true;
  }

  _pass(mat, target) {
    this.fsMesh.material = mat;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.fsScene, this.fsCam);
  }

  render(scene, camera, time) {
    const r = this.renderer, fx = this.fx;
    r.setRenderTarget(this.rtScene);
    r.render(scene, camera);
    // bloom chain
    this.mBright.uniforms.tColor.value = this.rtScene.texture;
    this.mBright.uniforms.uTexel.value.set(1 / this.w, 1 / this.h);
    this._pass(this.mBright, this.q1);
    const blur = (src, dst, dx, dy) => {
      this.mBlur.uniforms.tColor.value = src.texture;
      this.mBlur.uniforms.uDir.value.set(dx, dy);
      this._pass(this.mBlur, dst);
    };
    blur(this.q1, this.q2, 1 / this.q1.width, 0);
    blur(this.q2, this.q1, 0, 1 / this.q1.height);
    this.mCopy.uniforms.tColor.value = this.q1.texture;
    this._pass(this.mCopy, this.e1);
    blur(this.e1, this.e2, 1 / this.e1.width, 0);
    blur(this.e2, this.e1, 0, 1 / this.e1.height);
    // final composite
    fx.tColor.value = this.rtScene.texture;
    fx.tDepth.value = this.rtScene.depthTexture;
    fx.tBloomA.value = this.q1.texture;
    fx.tBloomB.value = this.e1.texture;
    fx.uRes.value.set(this.w, this.h);
    fx.uNear.value = camera.near; fx.uFar.value = camera.far;
    fx.uTanHalf.value = Math.tan((camera.fov * Math.PI) / 360);
    fx.uAspect.value = camera.aspect;
    fx.uTime.value = time % 1000;
    fx.uLine.value = Math.max(1, this.h / 760);
    this._pass(this.mFinal, null);
  }

  // Adaptive resolution: keep the frame time healthy on weak GPUs.
  trackFrame(dt) {
    if (!this.autoScale) return;
    const ft = this._frameTimes;
    ft.push(dt);
    if (ft.length < 90) return;
    const avg = ft.reduce((a, b) => a + b, 0) / ft.length;
    ft.length = 0;
    if (avg > 1 / 40 && this.scale > 0.55) { this.scale = Math.max(0.55, this.scale - 0.12); this.resize(true); }
    else if (avg < 1 / 58 && this.scale < 1) { this.scale = Math.min(1, this.scale + 0.06); this.resize(true); }
  }
}
