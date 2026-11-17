#!/usr/bin/env python3
"""Build a self-contained web bundle in dist/ (used for the claude.ai artifact).

  dist/index.html  page markup with CSS and fonts inlined (no doctype/head: the host wraps it)
  dist/game.js     all game modules + three.js bundled into one ES module

Usage: python3 tools/build-artifact.py <path to esbuild> <path to three.module.js>
"""
import base64, os, re, subprocess, sys

esbuild, three = sys.argv[1], os.path.abspath(sys.argv[2])
os.makedirs('dist', exist_ok=True)
subprocess.check_call([esbuild, 'js/main.js', '--bundle', '--minify', '--format=esm', '--target=es2020',
                       f'--alias:three={three}', '--outfile=dist/game.js', '--log-level=warning'])

css = open('css/style.css', encoding='utf-8').read()
def font(m):
    data = base64.b64encode(open(os.path.join('css', m.group(1)), 'rb').read()).decode()
    return f"url('data:font/woff2;base64,{data}')"
css = re.sub(r"url\('(\.\./fonts/[^']+)'\)", font, css)

html = open('index.html', encoding='utf-8').read()
body = html[html.index('<body>') + 6: html.index('</body>')]
body = body.replace('<script type="module" src="js/main.js"></script>', '<script type="module" src="game.js"></script>')
assert 'game.js' in body and 'crazygames' not in body.lower()
out = '<title>Nezumi Rooftop Escape</title>\n<style>\n' + css + '\n</style>\n' + body
open('dist/index.html', 'w', encoding='utf-8').write(out)
print('dist/index.html', len(out) // 1024, 'KB;', 'dist/game.js', os.path.getsize('dist/game.js') // 1024, 'KB')
