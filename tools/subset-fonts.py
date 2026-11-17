#!/usr/bin/env python3
"""Rebuild fonts/brush-subset.woff2 with exactly the kanji/kana the game uses.

Usage: python3 tools/subset-fonts.py <path-to-yuji-syuku-japanese-400-normal.woff2>
(needs: pip install fonttools brotli; source font from the @fontsource/yuji-syuku npm package)
"""
import glob, subprocess, sys

chars = set()
for path in glob.glob('js/*.js') + ['index.html']:
    for ch in open(path, encoding='utf-8').read():
        if ord(ch) > 0x2010:
            chars.add(ch)
text = ''.join(sorted(chars))
print(len(text), 'glyphs:', text)
subprocess.check_call([sys.executable, '-m', 'fontTools.subset', sys.argv[1], '--text=' + text,
                       '--flavor=woff2', '--output-file=fonts/brush-subset.woff2', '--layout-features=*'])
