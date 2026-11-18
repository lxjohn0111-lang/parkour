# NEZUMI — Rooftop Escape

A first-person rooftop parkour stealth game for the web, built for CrazyGames.

You are the Rat, a phantom thief in old Edo. Every night ends the same way: with the
magistrate's strongbox under your arm and the whole night watch between you and the kite
that carries you out of the city. Run the tiled roofs, stay out of the lantern light,
and do not get caught.

## Play

* **Every night is a job, then a chase.** Steal a treasure from a guarded roof, assassinate a
  marked official, pickpocket a courier, or light three rebel beacons. The moment the job is
  done the bells ring, the sky burns red and **the Hound** (追手), the shogun's own shinobi, runs
  your exact route after you. Keep moving or he catches you.
* **Tricks and combos.** Mid-air flips (front, back, sideways, doubles), takedowns from behind,
  Death From Above, Leap of Faith into straw carts, slide-unders, wall runs, huge gaps, close
  calls. Every trick feeds a combo with rank stamps (良 NICE → 伝説 LEGENDARY); bank it for score
  and koban, or lose it all to a hit or a botched flip. Big moments drop into slow motion.
* **Never the same night.** 12 campaign nights with different jobs, skyline profiles (ascent,
  descent, valley, peaks) and weather (rain with lightning, snow, blossom storm, mist), plus
  Endless and a Daily Night that roll their own. Two bonus contracts per night.
* **Stealth**: sentries, street patrols and fire-tower lookouts with visible lantern light.
  Stay in a roof's shadow, sneak, snuff lanterns with shuriken, vanish in smoke or straw.
* Three seals per night (Escaped, Ghost, Contracts), a rank, eight upgrade lines in the
  Hideout, and one hidden lucky cat per night.

| Action | Keyboard / mouse | Touch |
| --- | --- | --- |
| Run / look | `W A S D` / mouse | left stick / drag right side |
| Leap, climb, wall kick · flip (again in mid-air) | `Space` | LEAP |
| Sneak, slide, roll | `Shift` (or `C` to toggle) | SNEAK |
| Takedown (close behind a guard) · shuriken | left click or `F` | STRIKE / STAR |
| Smoke bomb | `Q` | SMOKE |
| Grappling hook | `E` or right click | HOOK |
| Back to checkpoint | `R` | pause menu |
| Pause | `Esc` or `P` | II |

## Run it locally

No build step. Serve the folder with any static server and open it:

```bash
npx serve .
```

(ES modules need `http://`, so opening `index.html` straight from disk will not work.)

## Publish on CrazyGames

The ready-to-upload build is in **`crazygames/`** (and the same files zipped as
**`crazygames.zip`**, with `index.html` at the root of the zip). Upload that zip, or the
contents of the folder, as the game build. It is 9 files and about 0.9 MB (320 KB zipped):

| File | |
| --- | --- |
| `index.html` | the page, with the CrazyGames SDK v3 script tag |
| `game.js` | all game code and three.js in one minified script |
| `style.css`, `fonts/` | styles and the two web fonts |
| `LICENSES.txt`, `fonts/OFL-*.txt` | third-party notices |

Rebuild it after changing the game:

```bash
python3 tools/build-crazygames.py
```

(needs Node for `npx esbuild`; pass an esbuild path and a `three/build/three.module.js`
from the `three` npm package as arguments for a smaller build.)

SDK v3 integration lives in `js/sdk.js` and `js/save.js`:

* **Progress is saved with the CrazyGames data module** (`SDK.data.getItem/setItem`), so it
  follows the player's CrazyGames account. Saved: koban, unlocked nights, ranks, seals, lucky
  cats, upgrades, wrist wrap, Endless and Daily bests, settings. Writes are debounced, skipped
  when nothing changed, and flushed when the tab is hidden or closed. Progress a player already
  had in this browser's localStorage is moved into the data module on first launch.
  Without the SDK (ad blocker, other hosts) the game falls back to localStorage.
* `SDK.init()` on boot, `loadingStart` / `loadingStop` around world generation.
* `gameplayStart` / `gameplayStop` on every transition in and out of live play.
* `happytime()` on an S rank or a newly earned seal.
* Midgame ads between runs (next night / retry), never on the very first run.
* Rewarded ads: revive in place once per run, and double the koban on the results screen.
* Audio is muted while an ad plays and follows the platform's mute setting.

Every SDK call is guarded, so the game also runs where the SDK is missing or disabled.

## Project layout

| File | What it does |
| --- | --- |
| `js/main.js` | Boot, game state, frame loop, scoring |
| `js/gfx.js` | Renderer: 3-band toon lighting, depth-based ink outline, bloom, sky |
| `js/world.js` | Procedural district generator and the collision world |
| `js/props.js` | Building parts: roofs, facades, trees, stalls, landmarks |
| `js/geo.js` | Flat-shaded vertex-colour geometry builder |
| `js/player.js` | First-person parkour controller and view-model arms |
| `js/actors.js` | Night watch AI, detection, projectiles, pickups, particles |
| `js/audio.js` | Synthesised sound effects and adaptive music (no audio files) |
| `js/ui.js`, `css/style.css` | HUD, menus, hideout, results |
| `js/config.js` | Palettes, nights, upgrades, guard barks |
| `js/sdk.js`, `js/save.js`, `js/input.js` | CrazyGames SDK wrapper, saves, input |
| `js/touch.js` | Touch joystick (left half) and drag-to-look (right half) |
| `js/mission.js` | Nightly jobs (steal, assassinate, pickpocket, signal) and bonus contracts |
| `js/hunter.js` | The Hound: the pursuer that runs the player's own route |
| `js/combo.js` | Trick combos, rank tiers, banking |
| `js/weather.js` | Rain with lightning, snow, blossom storm, mist |
| `js/diag.js` | Touch diagnostics saved to the artifact's database; inactive outside claude.ai |

## Credits

* [three.js](https://threejs.org) (MIT), bundled in `vendor/three.min.js`.
* Fonts: Oswald and Yuji Syuku, both under the SIL Open Font License 1.1.
  `fonts/brush-subset.woff2` holds only the glyphs the game uses; regenerate it with
  `tools/subset-fonts.py` after changing any Japanese text.
