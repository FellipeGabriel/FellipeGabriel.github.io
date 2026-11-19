# fellipegabriel.github.io

Portfólio de Fellipe Gabriel, desenvolvedor full stack. Português em `/pt/`, inglês em `/en/`; a raiz escolhe pelo idioma do navegador e lembra a escolha feita no seletor.

## Stack

- [Astro](https://astro.build) gerando HTML estático
- [GSAP](https://gsap.com) (ScrollTrigger e SplitText) e [Lenis](https://lenis.darkroom.engineering) para rolagem e animação
- View Transitions entre páginas
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
- `src/assets/space/jupiter.jpg`: Júpiter, NIRCam. Crédito: NASA, ESA, Jupiter ERS Team; image processing by Judy Schmidt. https://esawebb.org/images/jupiter-auroras1/
- `src/assets/space/horsehead.jpg`: Nebulosa Cabeça de Cavalo, NIRCam. Crédito: ESA/Webb, NASA, CSA, K. Misselt (University of Arizona) and A. Abergel (IAS/University Paris-Saclay, CNRS). https://esawebb.org/images/weic2411a/
- `src/assets/space/sombrero.jpg`: Galáxia Sombrero, MIRI. Crédito: NASA, ESA, CSA, STScI. https://esawebb.org/images/weic2427a/

Capturas de tela e ícones dos projetos (Lyfia e RecuperAVC): do próprio autor. Logo do Google Play: Google LLC.
