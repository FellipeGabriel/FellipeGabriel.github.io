# fellipegabriel.github.io

Portfólio de Fellipe Gabriel, desenvolvedor full stack. Português em `/pt/`, inglês em `/en/`; a raiz escolhe pelo idioma do navegador e lembra a escolha feita no seletor.

## Stack

- [Astro](https://astro.build) gerando HTML estático
- [GSAP](https://gsap.com) (ScrollTrigger e SplitText) e [Lenis](https://lenis.darkroom.engineering) para rolagem e animação
- Transição própria entre páginas (cortina em colunas, `src/scripts/transitions.ts`)
- Archivo (variável, eixo de largura), Newsreader e JetBrains Mono via Fontsource
- Gradação de filme das fotos (`scripts/film-grade.py`) e SVGs de colagem (`scripts/collage.py`), gerados antes do build com Python
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

## Créditos das fotos

As fotos passam pela gradação de filme "Halação" uma vez, antes do build. Os originais ficam em `src/assets/photos/raw/`; para regerar as versões gradadas, rode `python3 -m pip install numpy pillow scipy` e depois `python3 scripts/film-grade.py --all` (ajustes por imagem ficam em `PER_IMAGE`, no próprio script). As versões gradadas das fotos CC BY-SA são distribuídas sob a mesma licença.

- `laptop-keyboard.jpg` (hero, carregamento, imagem de compartilhamento): "Keyboard in dark", The indian dev, CC BY-SA 4.0. https://commons.wikimedia.org/wiki/File:Keyboard_in_dark.png
- `office-night.jpg` (abertura de Projetos): "Münster, LVM -- 2017 -- 9301-7", Dietmar Rabich, CC BY-SA 4.0. https://commons.wikimedia.org/wiki/File:M%C3%BCnster,_LVM_--_2017_--_9301-7.jpg
- `city-traffic.jpg` (borda rasgada antes de Experiência): Caleb George, Licença Unsplash. https://unsplash.com/photos/URmkfvtK3Qw
- `typewriter-keys.jpg` (borda rasgada antes de Contato): Sergey Zolkin, Licença Unsplash. https://unsplash.com/photos/E0Spm6XXn2Y
- `coffee.jpg` (Contato): Karl Fredrickson, Licença Unsplash. https://unsplash.com/photos/TYIzeCiZ_60
- `forest-road.jpg` (próximo projeto: Lyfia): Tirza van Dijk, Licença Unsplash. https://unsplash.com/photos/aGx7X1VmFIY
- `phone-hands.jpg` (próximo projeto: RecuperAVC): timothy muza, Licença Unsplash. https://unsplash.com/photos/6VjPmyMj5KM

Capturas de tela e ícones dos projetos (Lyfia e RecuperAVC): do próprio autor. Logo do Google Play: Google LLC.
