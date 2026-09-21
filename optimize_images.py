# -*- coding: utf-8 -*-
"""Compress portfolio images: resize covers to 480w, portrait to 800w."""
from pathlib import Path
from PIL import Image

IMG_DIR = Path(r'E:\BANGONG\DB\portfolio\public\images')

# covers displayed at ~64-128px; keep 480w for retina/hover zoom
covers = [
    '823ef8202d4dba036115151c1feb7998.jpg',
    'af691915a1d1bfbd19d47d377d39e6bb.jpg',
    'f5faef255342d0969f2b5270854f2f0e.jpg',
    'ef4cf0b933e1ec3a2ab95ecbd9af24f7.jpg',
]

for name in covers:
    p = IMG_DIR / name
    im = Image.open(p)
    w, h = im.size
    new_w = 480
    new_h = int(h * new_w / w)
    im = im.resize((new_w, new_h), Image.LANCZOS)
    im.save(p, 'JPEG', quality=78, optimize=True)
    print(f'{name}: {w}x{h} -> {new_w}x{new_h}, {p.stat().st_size//1024}KB')

# portrait: displayed at max-w-sm ~384px; keep 800w
p = IMG_DIR / 'portrait.jpg'
im = Image.open(p)
w, h = im.size
new_w = 800
new_h = int(h * new_w / w)
im = im.resize((new_w, new_h), Image.LANCZOS)
im.save(p, 'JPEG', quality=80, optimize=True)
print(f'portrait.jpg: {w}x{h} -> {new_w}x{new_h}, {p.stat().st_size//1024}KB')
