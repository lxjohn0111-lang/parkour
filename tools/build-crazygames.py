#!/usr/bin/env python3
"""Build the CrazyGames upload: crazygames/ (a folder with index.html at its root) and crazygames.zip.

  crazygames/index.html   the page, with the CrazyGames SDK v3 script tag
  crazygames/game.js      every game module and three.js in one minified script
  crazygames/style.css    the stylesheet
  crazygames/fonts/       the two web fonts and their licences
  crazygames/LICENSES.txt third-party notices (three.js, fonts)

Usage:
  python3 tools/build-crazygames.py [path/to/esbuild] [path/to/three/build/three.module.js]

esbuild defaults to `npx esbuild`; three.js defaults to the copy in vendor/ (a three.module.js
from the `three` npm package gives a smaller build because unused parts are dropped).
"""
import os, re, shutil, subprocess, sys, zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'crazygames')
ZIP = os.path.join(ROOT, 'crazygames.zip')
os.chdir(ROOT)

esbuild = sys.argv[1] if len(sys.argv) > 1 else None
three = os.path.abspath(sys.argv[2]) if len(sys.argv) > 2 else os.path.join(ROOT, 'vendor', 'three.min.js')

shutil.rmtree(OUT, ignore_errors=True)
os.makedirs(os.path.join(OUT, 'fonts'))

# 1. one classic script (no modules, no import map): works on every host and browser CrazyGames supports
cmd = ([esbuild] if esbuild else ['npx', '--yes', 'esbuild']) + [
    'js/main.js', '--bundle', '--minify', '--format=iife', '--target=es2020', '--legal-comments=none',
    f'--alias:three={three}', '--outfile=' + os.path.join(OUT, 'game.js'), '--log-level=warning']
subprocess.check_call(cmd)

# 2. stylesheet (font paths now sit next to it)
css = open('css/style.css', encoding='utf-8').read().replace("url('../fonts/", "url('fonts/")
open(os.path.join(OUT, 'style.css'), 'w', encoding='utf-8').write(css)

# 3. fonts and their licences
for f in os.listdir('fonts'):
    if f.endswith('.woff2') or f.endswith('.txt'):
        shutil.copy(os.path.join('fonts', f), os.path.join(OUT, 'fonts', f))

# 4. the page: SDK tag stays, the import map and module entry become one deferred script
html = open('index.html', encoding='utf-8').read()
html = re.sub(r'\s*<script type="importmap">.*?</script>', '', html, flags=re.S)
html = html.replace('<link rel="stylesheet" href="css/style.css">', '<link rel="stylesheet" href="style.css">')
html = html.replace('<script type="module" src="js/main.js"></script>', '<script src="game.js" defer></script>')
assert 'crazygames-sdk-v3.js' in html and 'game.js' in html and 'importmap' not in html and 'js/main.js' not in html
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(html)

# 5. third-party notices
notice = ['NEZUMI uses the following third-party software and fonts.', '',
          '== three.js (MIT License) ==', open(os.path.join('vendor', 'three.LICENSE'), encoding='utf-8').read().strip(), '',
          '== Oswald and Yuji Syuku fonts (SIL Open Font License 1.1) ==', 'See fonts/OFL-Oswald.txt and fonts/OFL-YujiSyuku.txt.', '']
open(os.path.join(OUT, 'LICENSES.txt'), 'w', encoding='utf-8').write('\n'.join(notice))

# 6. the zip, with index.html at its root
if os.path.exists(ZIP):
    os.remove(ZIP)
with zipfile.ZipFile(ZIP, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    for base, _, files in os.walk(OUT):
        for f in sorted(files):
            full = os.path.join(base, f)
            z.write(full, os.path.relpath(full, OUT))

total = sum(os.path.getsize(os.path.join(b, f)) for b, _, fs in os.walk(OUT) for f in fs)
files = sum(len(fs) for _, _, fs in os.walk(OUT))
print(f'crazygames/: {files} files, {total / 1024:.0f} KB · crazygames.zip: {os.path.getsize(ZIP) / 1024:.0f} KB')
