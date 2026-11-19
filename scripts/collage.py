"""Gera os SVGs de colagem do site (bordas rasgadas e curvas de nível).

Uso: python3 scripts/collage.py        (precisa de numpy, scipy e contourpy)

Saída em public/collage/:
  tear-N-top.svg     máscara do cartaz de cima: opaco acima de uma borda rasgada
  tear-N-bottom.svg  máscara do cartaz de baixo: opaco abaixo de outra borda rasgada
  contours.svg       curvas de nível finas, traço cor papel (a opacidade fica no CSS)
"""
from pathlib import Path

import contourpy
import numpy as np
from scipy.ndimage import gaussian_filter, gaussian_filter1d

OUT = Path(__file__).resolve().parent.parent / 'public' / 'collage'
W, H = 1000, 100  # viewBox das máscaras; esticadas com preserveAspectRatio="none"


def torn_edge(seed, mid, amp):
    """Borda de papel rasgado: ondulação larga + dentes médios + fibras finas."""
    rng = np.random.default_rng(seed)
    n = 420
    x = np.linspace(0, W, n)
    wave = gaussian_filter1d(rng.standard_normal(n), 38, mode='wrap')
    teeth = gaussian_filter1d(rng.standard_normal(n), 5, mode='wrap')
    fiber = rng.standard_normal(n) * (rng.random(n) < .35)
    y = wave / np.abs(wave).max() * amp + teeth / np.abs(teeth).max() * amp * .35 + fiber * amp * .07
    # alguns rasgos mais fundos, como onde o papel resistiu
    for c in rng.choice(n, 4, replace=False):
        y += amp * .55 * rng.choice((-1, 1)) * np.exp(-((np.arange(n) - c) / rng.uniform(3, 9)) ** 2)
    return x, mid + y


def mask_svg(x, y, side):
    # sai do canto (0,0) ou (0,H), vai até o outro canto e volta pela borda, da direita para a esquerda
    edge = ' L'.join(f'{a:.1f},{b:.1f}' for a, b in zip(x[::-1], y[::-1]))
    base = 0 if side == 'top' else H
    d = f'M0,{base} L{W},{base} L{edge} Z'
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="none">'
            f'<path d="{d}" fill="#000"/></svg>\n')


def contours_svg(seed=11, w=1600, h=1000, levels=16):
    """Curvas de nível de um relevo inventado (soma de morros gaussianos + ruído suave)."""
    rng = np.random.default_rng(seed)
    gy, gx = np.mgrid[0:h:4, 0:w:4].astype(float)
    z = np.zeros_like(gx)
    for _ in range(9):
        cx, cy = rng.uniform(0, w), rng.uniform(0, h)
        s = rng.uniform(120, 360)
        z += rng.uniform(.5, 1.2) * np.exp(-(((gx - cx) ** 2 + (gy - cy) ** 2) / (2 * s * s)))
    z += gaussian_filter(rng.standard_normal(gx.shape), 18) * 6
    gen = contourpy.contour_generator(gx, gy, z)
    paths = []
    for lv in np.linspace(z.min(), z.max(), levels + 2)[1:-1]:
        for line in gen.lines(lv):
            if len(line) < 12:
                continue
            line = line[::3]  # simplifica: um ponto a cada ~12px
            paths.append('M' + ' L'.join(f'{a:.0f},{b:.0f}' for a, b in line))
    body = ''.join(f'<path d="{p}"/>' for p in paths)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" preserveAspectRatio="xMidYMid slice">'
            f'<g fill="none" stroke="#f1ece2" stroke-width="1.1" stroke-linejoin="round" vector-effect="non-scaling-stroke">'
            f'{body}</g></svg>\n')


if __name__ == '__main__':
    OUT.mkdir(parents=True, exist_ok=True)
    for i, seed in ((1, 3), (2, 8)):
        x, y = torn_edge(seed, mid=42, amp=14)
        (OUT / f'tear-{i}-top.svg').write_text(mask_svg(x, y, 'top'), encoding='utf-8', newline='\n')
        x, y = torn_edge(seed + 100, mid=70, amp=12)
        (OUT / f'tear-{i}-bottom.svg').write_text(mask_svg(x, y, 'bottom'), encoding='utf-8', newline='\n')
    (OUT / 'contours.svg').write_text(contours_svg(), encoding='utf-8', newline='\n')
    for f in sorted(OUT.iterdir()):
        print(f.name, f.stat().st_size, 'bytes')
