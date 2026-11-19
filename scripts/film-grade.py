"""Gradação de filme 'Halação' para as imagens do Webb.

Uso:
  python3 scripts/film-grade.py ENTRADA.jpg SAIDA.jpg [opções]
  python3 scripts/film-grade.py --all        # regera src/assets/space/*.jpg a partir de raw/

Os raios de bloom, halação e grão foram calibrados para ~1800px de largura e são
multiplicados por largura/1800 (≈1.33 em 2400px). Ajustes por imagem ficam em PER_IMAGE.
"""
import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter, map_coordinates

rng = np.random.default_rng(7)

def lum(x): return x[..., 0]*.2126 + x[..., 1]*.7152 + x[..., 2]*.0722

def curve(x, toe=.08, shoulder=.92, contrast=1.1):
    # curva em S suave, pretos lavados, altas luzes sem estourar
    y = 1/(1+np.exp(-contrast*6*(x-.5)))
    lo, hi = 1/(1+np.exp(contrast*3)), 1/(1+np.exp(-contrast*3))
    y = .45*x + .55*(y-lo)/(hi-lo)
    return toe + y*(shoulder-toe)

def saturate(x, s):
    l = lum(x)[..., None]
    return l + (x-l)*s

def split_tone(x, shadow=(.36, .50, .56), highlight=(.68, .50, .34), amt=.3):
    l = lum(x)[..., None]
    return x + (np.array(shadow)-.5)*amt*(1-l) + (np.array(highlight)-.5)*amt*l

def bloom(x, radius=60, amt=.45):
    b = gaussian_filter(np.clip(x-.55, 0, 1), (radius, radius, 0))
    return 1-(1-x)*(1-b*amt*2)

def halation(x, thr, radius, color, amt):
    m = np.clip((lum(x)-thr)/(1-thr), 0, 1)
    g = gaussian_filter(m, radius)[..., None]*np.array(color)
    return 1-(1-x)*(1-g*amt)

def vignette(x, amt=.5, warm=(.12, .08, .05)):
    h, w, _ = x.shape
    yy, xx = np.mgrid[0:h, 0:w]
    r = np.sqrt(((xx-w/2)/(w/2))**2 + ((yy-h/2)/(h/2))**2)/1.414
    v = np.clip(r**2.2*amt*1.6, 0, 1)[..., None]
    return x*(1-v) + np.array(warm)*v

def chroma_ab(x, px=2.5):
    h, w, _ = x.shape
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    dy, dx = (yy-h/2)/h, (xx-w/2)/w
    out = x.copy()
    for c, k in ((0, 1), (2, -1)):
        out[..., c] = map_coordinates(x[..., c], [yy+dy*px*k*2, xx+dx*px*k*2], order=1, mode='nearest')
    return out

def grain(x, amt=.035, size=.9):
    h, w, _ = x.shape
    n = gaussian_filter(rng.standard_normal((h, w)).astype(np.float32), size)
    n /= n.std()
    l = lum(x)
    return x + (n*amt*(4*l*(1-l)+.25))[..., None]

# Valores do Anexo A, com três ajustes globais depois de conferir as cinco imagens:
# grain .035 -> .018 (aparecia de longe), vignette .5 -> .3 (cantos quase pretos nos recortes),
# halo_r 8 -> 3 (com 8px a halação curta não chegava nas estrelas, só nas áreas claras grandes).
DEFAULTS = dict(toe=.08, shoulder=.92, contrast=1.1, sat=.75, bloom=.45, halation=1.0, halo_r=3.0, vignette=.3, grain=.018)

def grade(x, s=1.0, p=DEFAULTS):
    """s: escala dos raios (largura/1800). p: parâmetros ajustáveis por imagem."""
    x = gaussian_filter(x, (.9, .9, 0))          # película não é nítida como digital
    x = split_tone(saturate(curve(x, p['toe'], p['shoulder'], p['contrast']), p['sat']))
    x = bloom(x, 60*s, p['bloom'])
    x = halation(x, .40, p['halo_r']*s, (1, .22, .06), 1.0*p['halation'])  # halação curta e intensa
    x = halation(x, .50, 50*s, (1, .35, .12), .9*p['halation'])  # halação larga e suave
    x = vignette(x, p['vignette'])
    x = chroma_ab(x)
    return np.clip(grain(x, p['grain'], .9*s), 0, 1)

# Ajustes por imagem (ver README). Só o que difere de DEFAULTS.
PER_IMAGE: dict[str, dict] = {
    # O disco do planeta estourava para creme e perdia o ciano: menos bloom e halação,
    # ombro mais baixo e quase toda a saturação original.
    'uranus.jpg': dict(shoulder=.88, sat=.95, bloom=.1, halation=.35),
}

MAX_W = 2400

def run(src, dst, overrides=None):
    p = {**DEFAULTS, **PER_IMAGE.get(Path(src).name, {}), **(overrides or {})}
    im = Image.open(src).convert('RGB')
    if im.width > MAX_W:
        im = im.resize((MAX_W, int(im.height*MAX_W/im.width)), Image.LANCZOS)
    y = grade(np.asarray(im).astype(np.float32)/255, im.width/1800, p)
    Image.fromarray((y*255+.5).astype(np.uint8)).save(dst, quality=88, optimize=True)
    print(f'{src} -> {dst} ({im.width}x{im.height})', {k: v for k, v in p.items() if DEFAULTS[k] != v} or '')

if __name__ == '__main__':
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('src', nargs='?')
    ap.add_argument('dst', nargs='?')
    ap.add_argument('--all', action='store_true', help='regera todas as imagens de src/assets/space/raw/')
    for k, v in DEFAULTS.items():
        ap.add_argument(f'--{k}', type=float, help=f'padrão {v}')
    a = ap.parse_args()
    ov = {k: getattr(a, k) for k in DEFAULTS if getattr(a, k) is not None}
    if a.all:
        space = Path(__file__).resolve().parent.parent/'src'/'assets'/'space'
        for f in sorted((space/'raw').glob('*.jpg')):
            run(f, space/f.name, ov)
    elif a.src and a.dst:
        run(a.src, a.dst, ov)
    else:
        ap.print_help()
        sys.exit(1)
