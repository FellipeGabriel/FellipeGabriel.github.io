# fellipegabriel.github.io

Portfólio de Fellipe Gabriel, desenvolvedor full stack. Português em `/pt/`, inglês em `/en/`; a raiz escolhe pelo idioma do navegador e lembra a escolha feita no seletor.

## Stack

- [Astro](https://astro.build) gerando HTML estático
- [GSAP](https://gsap.com) (ScrollTrigger e SplitText) e [Lenis](https://lenis.darkroom.engineering) para rolagem e animação
- Transição própria entre páginas (cortina em colunas, `src/scripts/transitions.ts`)
- Archivo (variável, eixo de largura) via Fontsource
- Deploy no GitHub Pages pelo GitHub Actions (`.github/workflows/deploy.yml`)

## Rodar

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde fica cada coisa

- Textos em PT e EN: `src/data/content.ts` e `src/data/projects.ts`
- Seções da home: `src/components/`
- Página de projeto: `src/components/CaseStudy.astro`
- Animações e comportamento: `src/scripts/site.ts`

## Créditos das imagens

Imagens do espaço do telescópio James Webb: NASA, ESA, CSA e STScI, via [ESA/Webb](https://esawebb.org/copyright/) (CC BY 4.0).

- `src/assets/space/cosmic-cliffs.jpg`: Carina Nebula, NIRCam. Crédito: NASA, ESA, CSA, and STScI, J. DePasquale (STScI). https://esawebb.org/images/carinanebula3/
- `src/assets/space/galaxy-pair.jpg`: IC 2163 e NGC 2207. Crédito: NASA, ESA, CSA, STScI. https://esawebb.org/images/weic2426a/
- `src/assets/space/uranus.jpg`: Urano, NIRCam. Crédito: NASA, ESA, CSA, STScI. https://esawebb.org/images/weic2602a/
- `src/assets/space/horsehead.jpg`: Nebulosa Cabeça de Cavalo, NIRCam. Crédito: ESA/Webb, NASA, CSA, K. Misselt (University of Arizona) and A. Abergel (IAS/University Paris-Saclay, CNRS). https://esawebb.org/images/weic2411a/
- `src/assets/space/sombrero.jpg`: Galáxia Sombrero, MIRI. Crédito: NASA, ESA, CSA, STScI. https://esawebb.org/images/weic2427a/

As fotos do site passam pela gradação de filme "Halação" uma vez, antes do build. Os originais ficam em `src/assets/space/raw/`; para regerar as versões gradadas, rode `python3 -m pip install numpy pillow scipy` e depois `python3 scripts/film-grade.py --all` (ajustes por imagem ficam em `PER_IMAGE`, no próprio script).

Capturas de tela e ícones dos projetos (Lyfia e RecuperAVC): do próprio autor. Logo do Google Play: Google LLC.
