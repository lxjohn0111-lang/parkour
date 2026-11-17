// Game data: district palettes, the 12 campaign nights, upgrades, barks.

export const GAME_TITLE = 'NEZUMI';
export const SAVE_KEY = 'nezumi-save-v1';

// One palette per district. Everything in a level is coloured from its palette,
// so each district keeps one coherent time-of-day.
export const PALETTES = [
  {
    key: 'dusk', name: 'Merchant Quarter', jp: '日本橋', time: 'Dusk',
    skyTop: 0x35357f, skyMid: 0x8a6cc0, skyHor: 0xf5a9b4, sun: 0xffd29a, cloudA: 0xffc9c0, cloudB: 0xb98ac4,
    sunAz: 1.0, sunEl: 0.5, sunInt: 3.3, stars: 0.15,
    hemiSky: 0x8f86e8, hemiGround: 0xc58d86, hemiInt: 2.05,
    fog: 0xcfa6cf, fogDensity: 0.0042, ink: 0x221838, tint: [1.02, 1.0, 1.0],
    tile: [0x8d93b8, 0x7f86ad, 0x999fc0], ridge: 0x555a82, under: 0x3d3350,
    plaster: [0xf3e5c6, 0xead7b2, 0xdccbad, 0xf7ecd8], wood: 0x4b3343, woodMid: 0x7c574c, woodLight: 0xa57b5c,
    ground: 0xc9a56e, stone: 0x9a94a8, glow: 0xffc76e, lantern: 0xff8a4a,
    accent: [0x2c3a78, 0xb8343a, 0xe9e2cf, 0x3a6b5c], red: 0xc8452f, gold: 0xf2b53a,
    blossom: [0xf7b9cf, 0xffd3df, 0xe795b7], pine: [0x3b5a52, 0x2e4a48], trunk: 0x5a3f47,
    water: 0x5a67b8, waterHi: 0xb9a9e6, hill: 0x6f8a6a, snow: 0xf4eaf2, far: 0xb7a2cb, farRoof: 0x8f8fb5,
  },
  {
    key: 'moon', name: 'Fukagawa Canals', jp: '深川', time: 'Moonrise',
    skyTop: 0x0c1036, skyMid: 0x232c74, skyHor: 0x5a6fc8, sun: 0xd6e4ff, cloudA: 0x6f84d8, cloudB: 0x2d3880,
    sunAz: -0.9, sunEl: 0.62, sunInt: 2.5, stars: 1,
    hemiSky: 0x5a70d8, hemiGround: 0x4a4580, hemiInt: 2.2,
    fog: 0x3c4a96, fogDensity: 0.0048, ink: 0x0a0a22, tint: [0.98, 1.0, 1.06],
    tile: [0x6272ab, 0x5665a0, 0x6d7db6], ridge: 0x363f74, under: 0x1f2248,
    plaster: [0xccd0ea, 0xbfc4e2, 0xb1b6d6, 0xdadcf0], wood: 0x2d2a4c, woodMid: 0x4e4668, woodLight: 0x7a6c84,
    ground: 0x74749c, stone: 0x6a6f98, glow: 0xffbe62, lantern: 0xff9a4a,
    accent: [0x1f2a66, 0xa8323e, 0xdfe2f2, 0x2f6a78], red: 0xb23a3a, gold: 0xf2b53a,
    blossom: [0xb9a8e6, 0xd6c8f6, 0x9a8ad0], pine: [0x24405a, 0x1b3350], trunk: 0x38304e,
    water: 0x25307c, waterHi: 0x9fb2ff, hill: 0x2f4470, snow: 0xcfd8f6, far: 0x45529e, farRoof: 0x4a5796,
  },
  {
    key: 'festival', name: 'Asakusa Festival', jp: '浅草', time: 'Festival Night',
    skyTop: 0x1a0f3e, skyMid: 0x5b2a7a, skyHor: 0xe8587c, sun: 0xffb074, cloudA: 0xff8a8c, cloudB: 0x7a3a8a,
    sunAz: 0.78, sunEl: 0.55, sunInt: 2.9, stars: 0.6, fire: 1,
    hemiSky: 0x8a56c8, hemiGround: 0xb0546a, hemiInt: 2.1,
    fog: 0x95508f, fogDensity: 0.0046, ink: 0x1a0c2a, tint: [1.04, 0.99, 1.0],
    tile: [0x6f5f9a, 0x62538c, 0x7b6aa6], ridge: 0x40325e, under: 0x2a1c3e,
    plaster: [0xf0dcc2, 0xe6cdb0, 0xd8bea6, 0xf6e6d2], wood: 0x45263a, woodMid: 0x7a4544, woodLight: 0xa86a52,
    ground: 0xb7875e, stone: 0x8a7a98, glow: 0xffb45a, lantern: 0xff5a3c,
    accent: [0xb8343a, 0xd8572e, 0xf2e6cf, 0x5a2f78], red: 0xd8412f, gold: 0xf7c24a,
    blossom: [0xff9fc0, 0xffc2d6, 0xe8709c], pine: [0x3a4a5a, 0x2c3a4e], trunk: 0x4a2f3d,
    water: 0x4a3a8a, waterHi: 0xff9ab4, hill: 0x5a4a78, snow: 0xf2d6e6, far: 0x8a5a98, farRoof: 0x6a4f8a,
  },
  {
    key: 'dawn', name: 'Castle Town', jp: '城下町', time: 'First Light',
    skyTop: 0x3f73b8, skyMid: 0xf0b49c, skyHor: 0xffe2a4, sun: 0xfff0c4, cloudA: 0xfff0d8, cloudB: 0xe8a69a,
    sunAz: -0.95, sunEl: 0.45, sunInt: 3.5, stars: 0,
    hemiSky: 0x92b4ea, hemiGround: 0xe2b48e, hemiInt: 2.15,
    fog: 0xf2cdae, fogDensity: 0.0040, ink: 0x2a2038, tint: [1.02, 1.0, 0.98],
    tile: [0x74849f, 0x687892, 0x8090aa], ridge: 0x46536e, under: 0x3a3548,
    plaster: [0xfff5e2, 0xf6e8cc, 0xecdcc0, 0xfffaf0], wood: 0x4a3a40, woodMid: 0x86604a, woodLight: 0xb48a62,
    ground: 0xdcbc8c, stone: 0xa8a2a8, glow: 0xffd27a, lantern: 0xff8a4a,
    accent: [0x2c4a88, 0xb8343a, 0xf4ecd8, 0x3a7a62], red: 0xc8452f, gold: 0xf2b53a,
    blossom: [0xffc4d2, 0xffdfe6, 0xf2a0b8], pine: [0x41665a, 0x33564e], trunk: 0x5c463e,
    water: 0x6f9ad0, waterHi: 0xfff0c8, hill: 0x86a078, snow: 0xfffaf4, far: 0xe0bfb2, farRoof: 0xa7a2b4,
  },
];

// Campaign. `rows` drives length, the rest drives pressure.
// feats: b = boulevard chance, c = canal chance (per street), k = tall kura chance.
export const LEVELS = [
  { id: 1, name: 'The Rat Runs', jp: '鼠走る', d: 0, seed: 1101, rows: 8, sentries: 1, patrols: 1, towers: 0, feats: { b: 0, c: 0, k: 0.04 }, par: 0,
    intro: 'The magistrate\'s strongbox is lighter tonight. Cross the rooftops and reach the kite.',
    hints: ['move', 'jump', 'mantle'] },
  { id: 2, name: 'Lantern Light', jp: '提灯', d: 0, seed: 2207, rows: 10, sentries: 4, patrols: 2, towers: 0, feats: { b: 0.12, c: 0, k: 0.06 }, par: 0,
    intro: 'The night watch carries lanterns. Stay out of their light — the shadows are yours.',
    hints: ['sneak', 'shadow', 'slide'] },
  { id: 3, name: 'The Fire Tower', jp: '火の見櫓', d: 0, seed: 3319, rows: 12, sentries: 5, patrols: 2, towers: 2, feats: { b: 0.15, c: 0, k: 0.1 }, par: 0,
    intro: 'Lookouts sweep the tiles from the fire towers. Time your run between the beams.',
    hints: ['tower', 'shuriken', 'rope'] },
  { id: 4, name: 'Low Water', jp: '引き潮', d: 1, seed: 4421, rows: 12, sentries: 5, patrols: 3, towers: 1, feats: { b: 0.1, c: 0.22, k: 0.1 }, par: 0,
    intro: 'Fukagawa. Canals cut the district apart — ride the lantern lines across.',
    hints: ['rope', 'smoke'] },
  { id: 5, name: 'Hook and Line', jp: '鉤縄', d: 1, seed: 5531, rows: 14, sentries: 7, patrols: 3, towers: 2, feats: { b: 0.14, c: 0.22, k: 0.16 }, par: 0,
    intro: 'Gold rings hang from the tall storehouses. A kaginawa hook would make short work of them.',
    hints: ['hook', 'wallrun'] },
  { id: 6, name: 'Moon Over Fukagawa', jp: '深川の月', d: 1, seed: 6647, rows: 15, sentries: 8, patrols: 4, towers: 3, feats: { b: 0.16, c: 0.26, k: 0.14 }, par: 0,
    intro: 'A full moon and a full garrison. Every roof casts a shadow; use them all.',
    hints: [] },
  { id: 7, name: 'Festival Crowd', jp: '祭り', d: 2, seed: 7753, rows: 15, sentries: 8, patrols: 5, towers: 2, feats: { b: 0.3, c: 0.08, k: 0.12 }, par: 0,
    intro: 'Asakusa is strung with lanterns for the festival. Bright streets, long ropes.',
    hints: [] },
  { id: 8, name: 'Red Gate', jp: '赤門', d: 2, seed: 8861, rows: 16, sentries: 10, patrols: 5, towers: 3, feats: { b: 0.26, c: 0.12, k: 0.16 }, par: 0,
    intro: 'They have doubled the watch around the temple. Do not let them corner you.',
    hints: [] },
  { id: 9, name: 'Fireworks', jp: '花火', d: 2, seed: 9973, rows: 18, sentries: 11, patrols: 6, towers: 4, feats: { b: 0.28, c: 0.14, k: 0.18 }, par: 0,
    intro: 'When the sky burns, nobody looks at the tiles. Almost nobody.',
    hints: [] },
  { id: 10, name: 'Under the Keep', jp: '城下', d: 3, seed: 10091, rows: 18, sentries: 12, patrols: 6, towers: 4, feats: { b: 0.18, c: 0.16, k: 0.22 }, par: 0,
    intro: 'The castle town wakes early. The shadows are long, but they are leaving.',
    hints: [] },
  { id: 11, name: 'The Long Chase', jp: '追跡', d: 3, seed: 11117, rows: 20, sentries: 14, patrols: 7, towers: 5, feats: { b: 0.2, c: 0.18, k: 0.22 }, par: 0,
    intro: 'Every constable in Edo knows your name now. Run.',
    hints: [] },
  { id: 12, name: 'First Light', jp: '夜明け', d: 3, seed: 12241, rows: 22, sentries: 16, patrols: 8, towers: 6, feats: { b: 0.22, c: 0.2, k: 0.24 }, par: 0,
    intro: 'One last roofline between you and the harbour. Make it a legend.',
    hints: [] },
];

for (const L of LEVELS) L.par = Math.round(L.rows * 4.8 + 4);

export function endlessLevel(depth, seed) {
  const t = Math.min(depth, 14);
  return {
    id: 100 + depth, endless: true, name: `Endless Night ${depth}`, jp: '無限', d: (depth - 1 + (seed % 4)) % 4, seed: (seed * 7919 + depth * 104729) >>> 0,
    rows: 10 + Math.min(12, t), sentries: 4 + t, patrols: 2 + Math.floor(t / 2), towers: 1 + Math.floor(t / 3),
    feats: { b: 0.2, c: 0.18, k: 0.2 }, par: Math.round((10 + Math.min(12, t)) * 4.8 + 4), intro: 'No gate, no dawn. How far can the Rat run?', hints: [],
  };
}

export function dailyLevel(seed) {
  return {
    id: 99, daily: true, name: 'Daily Night', jp: '今宵', d: seed % 4, seed: (seed * 2654435761) >>> 0,
    rows: 16, sentries: 10, patrols: 5, towers: 3, feats: { b: 0.22, c: 0.18, k: 0.18 }, par: 81,
    intro: 'Tonight\'s rooftops, the same for every thief in the city. One night, one best run.', hints: [],
  };
}

export const UPGRADES = [
  { key: 'tabi', name: 'Silent Tabi', jp: '足袋', desc: 'Softer soles. Your footsteps carry less far.', costs: [60, 150, 300] },
  { key: 'cloak', name: 'Shadow Cloak', jp: '影衣', desc: 'Dyed in ink. Watchmen take longer to make you out.', costs: [80, 190, 360] },
  { key: 'vigor', name: 'Iron Body', jp: '鉄身', desc: 'Take more punishment before the cuffs go on.', costs: [70, 170, 320] },
  { key: 'pouch', name: 'Shuriken Pouch', jp: '手裏剣', desc: 'Carry more throwing stars.', costs: [50, 130, 260] },
  { key: 'smoke', name: 'Smoke Bombs', jp: '煙玉', desc: 'Carry more smoke bombs to vanish mid-chase.', costs: [90, 230] },
  { key: 'hook', name: 'Kaginawa', jp: '鉤縄', desc: 'Grappling hook. Latch onto gold rings and fly.', costs: [120, 220, 340] },
  { key: 'charm', name: 'Lucky Charm', jp: 'お守り', desc: 'Koban leap into your hands from further away.', costs: [60, 160] },
  { key: 'wind', name: 'Wind Step', jp: '風足', desc: 'Flow carries you faster and lasts longer.', costs: [100, 240] },
];

export const WRAPS = [
  { key: 'cream', name: 'Undyed', color: 0xe9dfc8, need: 0 },
  { key: 'vermilion', name: 'Vermilion', color: 0xd8412f, need: 6 },
  { key: 'jade', name: 'Jade', color: 0x3fa387, need: 12 },
  { key: 'gold', name: 'Koban Gold', color: 0xf2b53a, need: 20 },
  { key: 'violet', name: 'Wisteria', color: 0x9a6fe0, need: 28 },
  { key: 'white', name: 'Ghost White', color: 0xffffff, need: 36 },
];

export const BARKS = {
  suspicious: [['何奴だ?', 'Who goes there?'], ['ん? 屋根の上か?', 'Hm? Up on the roof?'], ['物音がしたぞ。', 'I heard something.']],
  spotted: [['曲者だ! 屋根の上だ!', 'Intruder! On the rooftops!'], ['御用だ! 御用だ!', 'Halt! In the name of the law!'], ['あそこだ! 逃がすな!', 'There! Don\'t let them escape!']],
  chase: [['待て!', 'Stop!'], ['囲め!', 'Surround them!'], ['逃がすな!', 'Don\'t let them get away!'], ['回り込め!', 'Cut them off!']],
  lost: [['見失った…', 'Lost them...'], ['どこへ消えた…?', 'Where did they vanish to...?'], ['まだ近くにいるはずだ。', 'They must still be close.']],
  calm: [['気のせいか…', 'Must be my imagination...'], ['ねずみか。', 'Just a rat.'], ['異常なし。', 'All clear.']],
  blind: [['灯りが消えた!', 'My light\'s gone out!'], ['目が!', 'My eyes!']],
  smoke: [['煙だ!', 'Smoke!'], ['何も見えん!', 'I can\'t see a thing!']],
  noise: [['何の音だ?', 'What was that sound?'], ['あっちか?', 'Over there?']],
};

export const RANKS = ['S', 'A', 'B', 'C', 'D'];
