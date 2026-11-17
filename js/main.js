// NEZUMI — Rooftop Escape. Boot, game state and the frame loop.
import * as THREE from 'three';
import { Gfx, makeWorldMaterial, makeToonMaterial, makeSky } from './gfx.js';
import { World, makeDecalMaterial, makeWaterMaterial } from './world.js';
import { Player } from './player.js';
import { Actors } from './actors.js';
import { Input } from './input.js';
import { AudioSys } from './audio.js';
import { UI } from './ui.js';
import { SDK } from './sdk.js';
import { Save } from './save.js';
import { LEVELS, PALETTES, WRAPS, endlessLevel, dailyLevel } from './config.js';
import { clamp, damp, smooth, todaySeed } from './util.js';

const HINTS = {
  move: ['<kbd>W A S D</kbd> run &nbsp;·&nbsp; <kbd>MOUSE</kbd> look &nbsp;·&nbsp; follow the gold light', 'Left thumb runs · right thumb looks · follow the gold light'],
  jump: ['<kbd>SPACE</kbd> to leap. Keep <kbd>W</kbd> held into a ledge and you will climb it', '<b>LEAP</b> across the gaps. Push into a ledge to climb it'],
  mantle: ['Fell to the street? Crates and awnings are the way back up to the tiles', 'Fell to the street? Crates and awnings are the way back up'],
  sneak: ['Hold <kbd>SHIFT</kbd> to sneak: silent, and much harder to see', '<b>SNEAK</b> toggles a silent crouch that is much harder to see'],
  shadow: ['Stand in a roof\'s shadow and the eye closes. Lanterns reach less far into the dark', 'Stand in a roof\'s shadow and the eye closes'],
  slide: ['Tap <kbd>SHIFT</kbd> at a run to slide · tap it just before a long drop lands to roll', 'Tap <b>SNEAK</b> at a run to slide, or just before landing to roll'],
  tower: ['Fire towers sweep the roofs with a bright beam. Cross behind it, or behind cover', 'Fire towers sweep the roofs. Cross behind the beam'],
  shuriken: ['<kbd>LEFT CLICK</kbd> throws a shuriken: snuff a lantern, or make a noise somewhere else', '<b>STAR</b> throws a shuriken: snuff a lantern or make a distraction'],
  rope: ['Golden lantern lines can be walked. Steep ones are zip lines', 'Golden lantern lines can be walked. Steep ones are zip lines'],
  smoke: ['<kbd>Q</kbd> drops a smoke bomb. The watch loses you at once', '<b>SMOKE</b> drops a smoke bomb. The watch loses you at once'],
  hook: ['Buy the Kaginawa in the Hideout, then press <kbd>E</kbd> while looking at a gold ring', 'Buy the Kaginawa in the Hideout, then tap <b>HOOK</b> near a gold ring'],
  wallrun: ['Jump along a tall wall to run on it · <kbd>SPACE</kbd> again to kick off', 'Jump along a tall wall to run on it · <b>LEAP</b> again to kick off'],
};
const RANK_BONUS = { S: 40, A: 25, B: 15, C: 8, D: 4 };

class Game {
  constructor() {
    this.canvas = document.getElementById('game');
    this.state = 'loading';
    this.over = true;
    this.time = 0;
    this.settings = Save.data.settings;
    this.stats = {};
    this.run = { time: 0, koban: 0, alerts: 0, deaths: 0, cat: false, revived: false, maxFlow: 0, checkpoint: null, started: false };
    this.hp = 100; this.stars = 0; this.smokes = 0; this.invuln = 0; this.calmT = 0;
    this.hookTarget = null; this.hookScanT = 0; this.hintQ = []; this.hintT = 0; this.coinStreak = 0; this.coinT = 0;
    this.fxHurt = 0; this.fxFlash = 0; this.fade = 1; this.fadeTarget = 0; this.fxHidden = 0; this.sat = 1;
    this.endlessDepth = 1; this.adCount = 0;
  }

  async boot() {
    const ui0 = (p, t) => { document.getElementById('load-fill').style.transform = `scaleX(${p})`; if (t) document.getElementById('load-text').textContent = t; };
    ui0(0.1);
    await Promise.race([SDK.init(), new Promise((r) => setTimeout(r, 3500))]);
    SDK.loadingStart();
    Save.load();
    this.settings = Save.data.settings;
    ui0(0.3, 'Sharpening shuriken…');
    try { await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]); } catch (e) { /* ignore */ }

    this.gfx = new Gfx(this.canvas);
    this.mats = {
      world: makeWorldMaterial(),
      toon: makeToonMaterial(),
      decal: makeDecalMaterial(),
      gold: makeToonMaterial({ vertexColors: false, color: 0xffd060, emissive: 0xffb830, emissiveIntensity: 0.7 }),
      water: null,
    };
    this.scene = new THREE.Scene();
    this.sky = makeSky();
    this.scene.add(this.sky);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    this.sun = new THREE.DirectionalLight(0xffffff, 1);
    this.sun.castShadow = true;
    const sc = this.sun.shadow.camera;
    sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.near = 1; sc.far = 420;
    this.sun.shadow.bias = -0.0006; this.sun.shadow.normalBias = 0.05;
    this.scene.add(this.hemi, this.sun, this.sun.target);

    this.audio = new AudioSys();
    this.ui = new UI(this);
    this.input = new Input(this.canvas, this);
    this.player = new Player(this);
    this.scene.add(this.player.camera, this.player.hookLine);
    this.actors = new Actors(this);
    this.scene.add(this.actors.group);
    this.applySettings(true);
    this.refreshStats();
    this.ui.syncSettings();

    SDK.onAdState = (on) => { this.audio.setDucked(on); };
    SDK.onSettings(() => this.audio.setMuted(SDK.muted));
    this.audio.setMuted(SDK.muted);
    addEventListener('resize', () => this.resize());
    document.addEventListener('visibilitychange', () => { if (document.hidden) { if (this.state === 'playing') this.pause(); this.audio.setDucked(true); } else if (!SDK.adActive) this.audio.setDucked(false); });
    const firstGesture = () => { this.audio.init(); };
    addEventListener('pointerdown', firstGesture, { passive: true });
    addEventListener('keydown', firstGesture);

    ui0(0.6, 'Raising the rooftops…');
    await new Promise((r) => setTimeout(r, 30));
    this.loadWorld(this.nextCampaignLevel());
    ui0(1, 'Ready');
    this.resize();
    this.last = performance.now();
    // warm the shaders up behind the loading card, then reveal the menu
    this.frame(this.last);
    this.toMenu(true);
    SDK.loadingStop();
    requestAnimationFrame((t) => this.loop(t));
  }

  // -------------------------------------------------------------- settings
  applySettings(gfxToo = false) {
    const s = this.settings;
    this.input.sens = s.sens; this.input.invertY = s.invertY;
    this.audio.setVolumes(s.sfx, s.music);
    if (gfxToo) {
      const q = s.quality < 0 ? (SDK.isMobile ? 1 : 2) : s.quality;
      this.gfx.setQuality(q);
      const size = q === 0 ? 1024 : 2048;
      if (this.sun.shadow.mapSize.x !== size) {
        this.sun.shadow.mapSize.set(size, size);
        if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
      }
      this.gfx.fx.uBloom.value = q === 0 ? 0.8 : 1;
    }
  }
  refreshStats() {
    const u = (k) => Save.up(k);
    this.stats = {
      noise: 1 - 0.2 * u('tabi'), detect: 1 - 0.13 * u('cloak'), maxHp: 100 + 25 * u('vigor'),
      starMax: 4 + 2 * u('pouch'), smokeMax: 1 + u('smoke'), hookRange: u('hook') ? 18 + 7 * u('hook') : 0,
      magnet: 2.3 + 1.4 * u('charm'), flowBonus: 0.12 + 0.045 * u('wind'), flowDecay: 1 - 0.25 * u('wind'),
    };
    const w = WRAPS.find((x) => x.key === Save.data.wrap) || WRAPS[0];
    this.player.setWrapColor(w.color);
  }
  resize() {
    this.gfx.resize();
    const cam = this.player.camera;
    cam.aspect = this.canvas.clientWidth / Math.max(1, this.canvas.clientHeight);
    cam.updateProjectionMatrix();
  }

  // ---------------------------------------------------------------- levels
  nextCampaignLevel() { return LEVELS[clamp(Save.data.unlocked, 1, LEVELS.length) - 1]; }
  dailyDef() { const seed = todaySeed(); const d = dailyLevel(seed); d.dailySeed = seed; return d; }
  endlessDef(depth) { this.endlessDepth = depth; if (depth === 1) this.endlessSeed = (Math.random() * 1e9) | 0; const d = endlessLevel(depth, this.endlessSeed); d.depth = depth; return d; }

  loadWorld(def) {
    if (this.world) { this.world.dispose(); if (this.mats.water) this.mats.water.dispose(); }
    this.def = def;
    const pal = (this.pal = PALETTES[def.d]);
    this.mats.water = makeWaterMaterial(pal);
    this.world = new World(def, pal, this.mats);
    this.scene.add(this.world.group);
    // environment
    const su = this.sky.material.uniforms;
    su.uTop.value.setHex(pal.skyTop); su.uMid.value.setHex(pal.skyMid); su.uHor.value.setHex(pal.skyHor);
    su.uSunCol.value.setHex(pal.sun); su.uCloudA.value.setHex(pal.cloudA); su.uCloudB.value.setHex(pal.cloudB);
    su.uSunDir.value.copy(this.world.sunDir); su.uStars.value = pal.stars; su.uFire.value = pal.fire || 0;
    su.uSunSize.value = pal.key === 'moon' || pal.key === 'festival' ? 0.9984 : 0.9991;
    this.hemi.color.setHex(pal.hemiSky); this.hemi.groundColor.setHex(pal.hemiGround); this.hemi.intensity = pal.hemiInt;
    this.sun.color.setHex(pal.sun); this.sun.intensity = pal.sunInt;
    const fx = this.gfx.fx;
    fx.uFogColor.value.setHex(pal.fog); fx.uFogDensity.value = pal.fogDensity; fx.uInk.value.setHex(pal.ink);
    fx.uTint.value.setRGB(pal.tint[0], pal.tint[1], pal.tint[2]);
    this.actors.petalMat.color.setHex(pal.blossom[1]);
    this.actors.build(this.world);
    this.player.reset(this.world.start);
    this.kobanMax = this.world.pickups.filter((p) => p.type === 'koban').length + this.world.pickups.filter((p) => p.type === 'stack').length * 5;
  }

  resetRun() {
    this.run = { time: 0, koban: 0, alerts: 0, deaths: 0, cat: false, revived: false, maxFlow: 0, checkpoint: this.world.checkpoints[0], started: false };
    this.hp = this.stats.maxHp; this.stars = this.stats.starMax; this.smokes = this.stats.smokeMax;
    this.over = false; this.invuln = 0; this.calmT = 0; this.sat = 1; this.fxHurt = 0; this.coinStreak = 0;
    this.player.style = 0;
    const touch = this.input.touch ? 1 : 0;
    this.hintQ = (this.def.hints || []).map((k) => HINTS[k][touch]);
    this.hintT = 2.2;
  }

  async startRun(def, withAd = false) {
    if (this.busy) return;
    this.busy = true;
    this.audio.init();
    this.fadeTarget = 1;
    await wait(360);
    if (withAd) await this.showMidgame();
    const same = this.def && this.def.id === def.id && this.def.seed === def.seed;
    if (!same) this.loadWorld(def);
    else { for (const p of this.world.pickups) { p.taken = false; p.gone = false; p.fly = 0; } const w = this.world; this.actors.build(w); this.player.reset(w.start); }
    this.refreshStats();
    this.resetRun();
    this.ui.clearTransient();
    this.ui.hideScreens();
    this.ui.hud(true);
    this.set('playing');
    this.ui.intro(this.def, this.pal);
    this.ui.set('obj-title', this.def.endless || this.def.daily ? this.def.name.toUpperCase() : `NIGHT ${this.def.id} · ${this.pal.name.toUpperCase()}`);
    this.ui.set('obj-text', 'Reach the kite');
    Save.data.totals.runs++; Save.save();
    this.fadeTarget = 0;
    this.busy = false;
  }

  set(state) {
    this.state = state;
    const playing = state === 'playing';
    this.input.enabled = playing;
    if (playing) { this.input.lock(); SDK.gameplayStart(); this.audio.resume(); }
    else { SDK.gameplayStop(); this.audio.stopLoops(); this.audio.setWind(0); }
    if (state !== 'playing' && state !== 'finale') this.input.unlock();
    this.player.arms.visible = state === 'playing' || state === 'paused' || state === 'failed';
    document.getElementById('kite').classList.toggle('hidden', state !== 'finale');
  }

  pause() {
    if (this.state !== 'playing') return;
    this.set('paused');
    this.ui.show('pause');
  }
  resume() {
    if (this.state !== 'paused') return;
    this.ui.hideScreens();
    this.input.reset();
    this.set('playing');
  }
  onPointerUnlock() { if (this.state === 'playing' && !this.input.touch) this.pause(); }
  onPauseKey() {
    if (this.state === 'playing') this.pause();
    else if (this.state === 'paused' && this.ui.current === 'pause') this.resume();
    else if (['settings', 'shop', 'nights'].includes(this.ui.current)) this.ui.show(this.ui.backTo);
  }
  onRestartKey() { if (this.state === 'playing' && this.run.started) this.respawn(false); }

  async toMenu(first = false) {
    if (!first) { this.fadeTarget = 1; await wait(300); }
    this.over = true;
    this.set('menu');
    this.ui.hud(false); this.ui.clearTransient();
    this.actors.resetAlert();
    this.audio.setMode('menu');
    this.ui.show('menu');
    this.fadeTarget = 0;
  }

  async restartRun(withAd) { await this.startRun(this.def, withAd); }
  async nextRun() {
    let def;
    if (this.def.endless) def = this.endlessDef(this.endlessDepth + 1);
    else def = LEVELS[Math.min(LEVELS.length, this.def.id + 1) - 1];
    await this.startRun(def, true);
  }
  async showMidgame() {
    // natural break between runs; the SDK decides whether an ad is actually due
    this.adCount++;
    if (this.adCount < 2) return;
    await SDK.midgame();
  }

  // Back to the last shrine lantern.
  async respawn(fromFail) {
    if (this.busy) return;
    this.busy = true;
    this.fadeTarget = 1;
    await wait(280);
    const cp = this.run.checkpoint || this.world.checkpoints[0];
    this.player.reset(cp);
    this.actors.resetAlert();
    this.run.deaths++;
    this.hp = this.stats.maxHp; this.over = false; this.sat = 1; this.invuln = 1.5;
    this.stars = Math.max(this.stars, 2);
    this.ui.clearTransient(); this.ui.hideScreens();
    this.input.reset();
    this.set('playing');
    this.fadeTarget = 0;
    this.busy = false;
  }
  async reviveWithAd() {
    if (this.busy || this.run.revived) return;
    this.busy = true;
    const ok = await SDK.rewarded();
    this.busy = false;
    if (!ok) { this.ui.toast('No ad available right now'); return; }
    this.run.revived = true;
    this.actors.resetAlert();
    this.actors.dropSmoke(this.player.pos.x, this.player.pos.y, this.player.pos.z);
    this.hp = this.stats.maxHp; this.over = false; this.sat = 1; this.invuln = 2.5;
    this.smokes = Math.max(this.smokes, 1);
    this.player.frozen = false; this.player.vel.set(0, 0, 0);
    this.ui.hideScreens(); this.input.reset();
    this.set('playing');
  }
  async doubleReward() {
    if (this.busy || !this.lastResult || this.lastResult.doubled) return;
    this.busy = true;
    const ok = await SDK.rewarded();
    this.busy = false;
    if (!ok) { this.ui.toast('No ad available right now'); return; }
    this.lastResult.doubled = true;
    Save.data.koban += this.lastResult.earn;
    Save.save();
    this.audio.buy();
    this.ui.setEarn(this.lastResult.earn * 2);
  }

  // ------------------------------------------------------------ game events
  noise(x, y, z, radius, strength) { this.actors.hear(x, y, z, radius, strength); }
  onStyle(label, pts) { this.ui.stylePop(label, pts); }
  onLand(impact, p) { if (impact > 7) this.actors.burst({ x: p.x, y: p.y + 0.1, z: p.z }, this.pal.tile[2], Math.min(10, Math.round(impact * 0.6)), 3, 1.5); }
  onAlert(first) {
    this.run.alerts++;
    this.ui.banner('発見', 'SPOTTED', 'red');
    this.fxFlash = 0.2;
  }
  onEscapeAlert(bySmoke) {
    this.ui.banner('隠密', 'VANISHED', 'jade');
    this.player.addFlow(0.2, bySmoke ? 80 : 150, 'Gave Them The Slip');
  }
  onCheckpoint(c) {
    this.run.checkpoint = c;
    this.hp = Math.min(this.stats.maxHp, this.hp + 30);
    this.audio.checkpoint();
    this.ui.banner('灯', 'CHECKPOINT', 'jade');
  }
  onPickup(p) {
    const A = this.actors;
    if (p.type === 'koban' || p.type === 'stack') {
      this.run.koban += p.value;
      this.coinStreak = this.coinT > 0 ? this.coinStreak + 1 : 0; this.coinT = 1.2;
      this.audio.coin(this.coinStreak);
      this.player.addFlow(0.012, 0);
      if (p.type === 'stack') { this.ui.stylePop('Koban Stack', 5, true); A.burst(p, 0xf2b53a, 12); }
      else A.burst(p, 0xf2b53a, 3, 2, 2);
    } else if (p.type === 'shuriken') { this.stars = Math.min(this.stats.starMax, this.stars + 3); this.audio.pickup(); this.ui.stylePop('Shuriken', 3, true); this.ui.flashTool('tool-star'); }
    else if (p.type === 'smoke') { this.smokes = Math.min(this.stats.smokeMax, this.smokes + 1); this.run.koban += 3; this.audio.pickup(); this.ui.stylePop('Smoke Bomb', 1, true); this.ui.flashTool('tool-smoke'); }
    else if (p.type === 'onigiri') { this.hp = Math.min(this.stats.maxHp, this.hp + 40); this.audio.pickup(); this.ui.stylePop('Onigiri', 40, true); }
    else if (p.type === 'cat') { this.run.cat = true; this.audio.cat(); this.ui.banner('招き猫', 'LUCKY CAT FOUND', 'gold'); A.burst(p, 0xfff6e6, 20); }
  }
  damage(amount, kind, guard, vel) {
    if (this.over || this.invuln > 0) return;
    this.hp -= amount;
    this.invuln = 0.45; this.calmT = 0;
    this.fxHurt = 1; this.player.shake = 1; this.player.flow *= 0.5;
    this.audio.hurt();
    const p = this.player;
    if (guard) {
      const dx = p.pos.x - guard.pos.x, dz = p.pos.z - guard.pos.z, d = Math.hypot(dx, dz) || 1;
      p.vel.x = (dx / d) * 7; p.vel.z = (dz / d) * 7; p.vel.y = 3.5;
      if (p.state === 'ground' || p.state === 'rope') { p.grounded = false; p.state = 'air'; p.rope = null; p.sliding = false; }
    }
    if (this.hp <= 0) {
      this.hp = 0;
      this.fail(kind === 'fall' ? 'You hit the street hard. The watch found you where you lay.' : kind === 'arrow' ? 'An arrow from the fire tower brought you down.' : 'The night watch has you. Edo will hear of this by morning.');
    }
  }
  onSplash() {
    if (this.over) return;
    this.audio.splash();
    this.actors.burst(this.player.pos, 0xcfe0ff, 16, 4, 4);
    const s = this.player.lastSafe;
    const cp = this.world.isWater(s.x, s.z) ? this.run.checkpoint : { x: s.x, y: s.y, z: s.z, yaw: this.player.yaw };
    this.fxFlash = 0.5;
    this.hp = Math.max(1, this.hp - 12);
    const flow = this.player.flow * 0.3;
    this.player.reset(cp);
    this.player.flow = flow;
    this.ui.toast('The canal is cold. Mind the lantern lines.');
  }
  fail(text) {
    this.over = true;
    this.player.frozen = true;
    this.audio.caught();
    Save.data.totals.caught++; Save.save();
    this.set('failed');
    this.ui.showFailed(!this.run.revived, text);
  }

  finish() {
    if (this.over) return;
    this.over = true;
    const def = this.def, r = this.run, d = Save.data;
    const time = r.time;
    const seals = [true, r.alerts === 0, time <= def.par];
    let rank = 'D';
    if (time <= def.par && r.alerts === 0 && r.deaths === 0) rank = 'S';
    else if (time <= def.par * 1.25 && r.deaths === 0 && r.alerts <= 1) rank = 'A';
    else if (time <= def.par * 1.6 && r.deaths <= 1) rank = 'B';
    else if (r.deaths <= 2) rank = 'C';
    const style = this.player.style;
    const score = Math.max(0, Math.round(style + r.koban * 20 + Math.max(0, def.par * 1.6 - time) * 25 + (r.alerts === 0 ? 1500 : Math.max(0, 600 - 300 * r.alerts)) - r.deaths * 400));
    const key = def.daily ? 'daily' : def.endless ? 'endless' : String(def.id);
    const rec = d.levels[key] || { best: 0, rank: '', seals: [false, false, false], cat: false, score: 0 };
    const order = 'SABCD';
    const newSeals = seals.map((s, i) => s && !rec.seals[i]);
    const newCat = r.cat && !rec.cat;
    const fresh = !def.daily && !def.endless;
    let earn = r.koban + RANK_BONUS[rank] + (fresh ? newSeals.filter(Boolean).length * 15 : 0) + (newCat && fresh ? 25 : 0);
    if (def.endless) earn += def.depth * 6;
    const newBest = !rec.best || time < rec.best;
    if (fresh) {
      rec.best = newBest ? time : rec.best;
      rec.rank = !rec.rank || order.indexOf(rank) < order.indexOf(rec.rank) ? rank : rec.rank;
      rec.seals = rec.seals.map((s, i) => s || seals[i]); rec.cat = rec.cat || r.cat; rec.score = Math.max(rec.score || 0, score);
      d.levels[key] = rec;
      d.unlocked = Math.max(d.unlocked, Math.min(LEVELS.length, def.id + 1));
      if (newCat) d.totals.cats++;
    } else if (def.daily) {
      if (d.daily.seed !== def.dailySeed || !d.daily.best || time < d.daily.best) d.daily = { seed: def.dailySeed, best: time, score };
    } else d.endlessBest = Math.max(d.endlessBest, def.depth);
    d.koban += earn; d.totals.koban += earn;
    Save.save();
    this.lastResult = { def, time, rank, seals, newSeals: fresh ? newSeals : [false, false, false], cat: r.cat, newCat: newCat && fresh, koban: r.koban, kobanMax: this.kobanMax, style, maxFlow: r.maxFlow, alerts: r.alerts, deaths: r.deaths, score, earn, newBest: fresh ? newBest : true, best: rec.best || time, hasNext: def.endless || (fresh && def.id < LEVELS.length), doubled: false };
    // finale: take the kite and glide out over the city
    this.set('finale');
    this.player.frozen = true;
    this.finaleT = 0;
    this.finaleFrom = this.player.camera.position.clone();
    this.audio.win();
    this.ui.clearTransient();
    this.ui.banner('脱出', 'ESCAPED', 'gold');
    if (rank === 'S' || newSeals.some(Boolean)) SDK.happytime();
  }

  // ------------------------------------------------------------------ frame
  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    this.frame(now);
  }

  frame(now) {
    const raw = (now - this.last) / 1000;
    this.last = now;
    const dt = clamp(raw, 0.001, 0.05);
    this.time += dt;
    if (raw < 0.25) this.gfx.trackFrame(raw);
    const p = this.player, A = this.actors, fx = this.gfx.fx;

    if (this.state === 'playing') {
      this.input.poll();
      const steps = dt > 1 / 50 ? 2 : 1;
      for (let i = 0; i < steps; i++) {
        this.step(dt / steps);
        this.input.endFrame();
      }
    } else if (this.state === 'menu') {
      this.menuCam(dt);
    } else if (this.state === 'finale') {
      this.finale(dt);
    } else {
      p.updateCamera(dt, 0, 0);
    }
    A.updateParticles(dt, p.camera);
    this.audio.update(dt);
    this.ui.update(dt);

    // screen feedback
    this.fxHurt = Math.max(0, this.fxHurt - dt * 2.2); this.fxFlash = Math.max(0, this.fxFlash - dt * 1.6);
    this.fade = damp(this.fade, this.fadeTarget, 12, dt);
    const playing = this.state === 'playing';
    const hidden = playing && p.inShadow && A.detect < 0.04 && A.alert === 'calm';
    this.fxHidden = damp(this.fxHidden, hidden ? 1 : 0, 4, dt);
    this.sat = damp(this.sat, this.state === 'failed' ? 0.15 : 1, 3, dt);
    fx.uHurt.value = this.fxHurt; fx.uFlash.value = this.fxFlash; fx.uFade.value = this.fade; fx.uHidden.value = this.fxHidden; fx.uSat.value = this.sat;
    fx.uDanger.value = !playing ? 0 : A.alert === 'alert' ? 0.55 + Math.sin(this.time * 9) * 0.15 : A.detect * 0.75;
    fx.uSpeed.value = playing ? smooth(9.6, 15, Math.hypot(p.vel.x, p.vel.y * 0.6, p.vel.z)) * (0.5 + p.flow * 0.5) + (p.state === 'hook' ? 0.6 : 0) : this.state === 'finale' ? 0.7 : 0;

    // environment follows the camera
    const cam = p.camera;
    this.sky.position.copy(cam.position);
    this.sky.material.uniforms.uTime.value = this.time;
    if (this.mats.water) this.mats.water.uniforms.uTime.value = this.time;
    this.updateSun(cam);
    this.gfx.render(this.scene, cam, this.time);
  }

  step(dt) {
    const p = this.player, A = this.actors, inp = this.input, r = this.run;
    if (!r.started && (inp.moveX || inp.moveZ || inp.jumpPressed)) r.started = true;
    if (r.started && !this.over) r.time += dt;
    this.invuln = Math.max(0, this.invuln - dt); this.coinT -= dt;
    // tools
    if (inp.throwPressed && !this.over) {
      if (this.stars > 0) { this.stars--; p.throwT = 0.3; p.camera.updateMatrixWorld(); A.throwShuriken(p.camera); this.ui.flashTool('tool-star'); }
      else this.audio.deny();
    }
    if (inp.smokePressed && !this.over) {
      if (this.smokes > 0) { this.smokes--; A.dropSmoke(p.pos.x, p.pos.y, p.pos.z); this.ui.flashTool('tool-smoke'); }
      else this.audio.deny();
    }
    p.update(dt, inp);
    A.update(dt);
    r.maxFlow = Math.max(r.maxFlow, p.flow);
    // slow regeneration once things are quiet
    this.calmT = A.alert === 'calm' ? this.calmT + dt : 0;
    if (this.calmT > 6 && this.hp < this.stats.maxHp && !this.over) this.hp = Math.min(this.stats.maxHp, this.hp + dt * 4);
    // music + wind follow the action
    this.audio.setMode(A.alert === 'alert' ? 'chase' : A.alert === 'search' || A.detect > 0.3 ? 'tense' : 'calm');
    this.audio.setWind(clamp((Math.hypot(p.vel.x, p.vel.y, p.vel.z) - 3) / 14, 0, 1));
    // hints
    if (this.hintQ.length) { this.hintT -= dt; if (this.hintT <= 0) { this.ui.hint(this.hintQ.shift(), 6.5); this.hintT = 9; } }
    // hook target
    if (this.stats.hookRange > 0) {
      this.hookScanT -= dt;
      if (this.hookScanT <= 0) { this.hookScanT = 0.12; this.hookTarget = this.findHookTarget(); }
    } else this.hookTarget = null;
    // the kite
    const g = this.world.goal;
    if (!this.over && Math.hypot(g.x - p.pos.x, g.z - p.pos.z) < g.r && Math.abs(p.pos.y - g.y) < 2.5) this.finish();
  }

  findHookTarget() {
    const p = this.player;
    if (p.state === 'hook' || p.hookCd > 0) return null;
    const cam = p.camera.position, d = new THREE.Vector3();
    p.camera.getWorldDirection(d);
    let best = null, bd = Math.cos(0.3);
    for (const a of this.world.anchors) {
      const ax = a.x - cam.x, ay = a.y - cam.y, az = a.z - cam.z, dist = Math.hypot(ax, ay, az);
      if (dist > this.stats.hookRange || dist < 3) continue;
      const dot = (ax * d.x + ay * d.y + az * d.z) / dist;
      if (dot > bd) { bd = dot; best = a; }
    }
    return best;
  }

  finale(dt) {
    const cam = this.player.camera, g = this.world.goal;
    this.finaleT += dt;
    const t = this.finaleT;
    const k = smooth(0, 3.2, t);
    cam.position.set(this.finaleFrom.x + (g.x - this.finaleFrom.x) * Math.min(1, t * 2), this.finaleFrom.y + 2 + k * 16 - t * t * 0.6, this.finaleFrom.z - k * 70 - t * 6);
    cam.rotation.set(-0.22 - k * 0.12, damp(cam.rotation.y, 0, 3, dt), Math.sin(t * 1.3) * 0.05);
    this.player.fov = damp(this.player.fov, 96, 3, dt);
    cam.fov = this.player.fov; cam.updateProjectionMatrix();
    this.player.arms.visible = false;
    if (t > 3.4 && this.state === 'finale') {
      this.set('results');
      this.ui.hud(false);
      this.ui.showResults(this.lastResult);
    }
  }

  menuCam(dt) {
    const cam = this.player.camera, w = this.world;
    const t = this.time * 0.6;
    const span = Math.max(40, w.length * 0.7);
    const z = 10 - ((t * 2.4) % span);
    cam.position.set(Math.sin(t * 0.11) * 13, 15.5 + Math.sin(t * 0.17) * 2.2, z);
    cam.rotation.set(-0.2 + Math.sin(t * 0.13) * 0.04, Math.sin(t * 0.09) * 0.4, 0);
    if (cam.fov !== 68) { cam.fov = 68; cam.updateProjectionMatrix(); this.player.fov = 68; }
  }

  // Keep the shadow map centred ahead of the camera, snapped to texels to stop shimmer.
  updateSun(cam) {
    const dir = this.world.sunDir, sun = this.sun;
    const fwd = new THREE.Vector3();
    cam.getWorldDirection(fwd);
    const cx = cam.position.x + fwd.x * 34, cz = cam.position.z + fwd.z * 34, cy = 4;
    // light-space basis
    const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), dir).normalize();
    const up = new THREE.Vector3().crossVectors(dir, right).normalize();
    const tex = 140 / sun.shadow.mapSize.x;
    const c = new THREE.Vector3(cx, cy, cz);
    const r = Math.round(c.dot(right) / tex) * tex, u = Math.round(c.dot(up) / tex) * tex, d = c.dot(dir);
    c.copy(right).multiplyScalar(r).addScaledVector(up, u).addScaledVector(dir, d);
    sun.target.position.copy(c);
    sun.position.copy(c).addScaledVector(dir, 200);
  }
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const game = new Game();
window.__game = game;
game.boot().catch((e) => {
  console.error(e);
  const t = document.getElementById('load-text');
  if (t) t.textContent = 'Could not start: ' + (e && e.message ? e.message : e);
});
