---
name: Fellipe Gabriel, portfólio
description: Portfólio bilíngue de um desenvolvedor full stack, montado como uma série de cartazes tipográficos suíços com acabamento de película de cinema.
colors:
  deep-petrol: "#1e3a3c"
  nebula-amber: "#d9a548"
  press-ink: "#16130f"
  poster-paper: "#f1ece2"
  poster-paper-shade: "#ddd6c8"
  lyfia-cream: "#e9d9bb"
  recupera-green: "#94bd3b"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(4.5rem, 1rem + 14vw, 16rem)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.6rem + 2vw, 3.5rem)"
    fontWeight: 900
    lineHeight: 0.9
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 88"
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  lead:
    fontFamily: "Newsreader Variable, Newsreader, Georgia, serif"
    fontSize: "calc(clamp(1.2rem, 1.1rem + 0.45vw, 1.5rem) * 1.08)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  label:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(0.8125rem, 0.78rem + 0.15vw, 0.9rem)"
    fontWeight: 480
    lineHeight: 1.35
  nav:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.78rem + 0.15vw, 0.9rem)"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 112"
rounded:
  none: "0px"
spacing:
  pad: "clamp(16px, 2.6vw, 44px)"
  gutter: "clamp(12px, 1.6vw, 28px)"
  rule: "2px"
components:
  button-solid-on-amber:
    backgroundColor: "{colors.press-ink}"
    textColor: "{colors.nebula-amber}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.25rem"
    height: "3.25rem"
  button-solid-on-ink:
    backgroundColor: "{colors.nebula-amber}"
    textColor: "{colors.press-ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.25rem"
    height: "3.25rem"
  button-solid-on-petrol:
    backgroundColor: "{colors.nebula-amber}"
    textColor: "{colors.press-ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.25rem"
    height: "3.25rem"
  button-outline:
    textColor: "{colors.press-ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.25rem"
    height: "3.25rem"
---

# Design System: Fellipe Gabriel, portfólio

## Overview

**Creative North Star: "A parede de cartazes, filmada"**

Cada seção é um cartaz impresso: um campo de cor chapada ocupa a tela inteira, o título é uma grotesca condensada no tamanho máximo que a largura do cartaz aguenta, e a fotografia entra recortada em retângulo reto, sem moldura. A página se lê como uma sequência de cartazes colados um sobre o outro. Na home, cada projeto é um cartaz próprio, lido de cima para baixo: nome, frase, telas inteiras, fatos e links.

O gesto que define o sistema é o texto atravessando a imagem: quando o título cruza a borda de uma foto ou de uma placa de captura de tela, a cor das letras troca exatamente nessa borda. Fora disso, o sistema é seco. Sem raio, sem sombra, sem gradiente, sem ícone decorativo. A hierarquia vem de escala, peso e largura da fonte, e de três vozes tipográficas com papéis fixos.

Por cima dessa estrutura vai um acabamento de película: cores quentes e contidas, pretos levemente lavados, halação nas luzes das fotos, grão de filme em movimento sobre a página toda e tipografia editorial (uma serifada para a frase de abertura, uma monoespaçada para rótulos e legendas). O acabamento não muda a estrutura; é a textura do papel e da luz.

As fotos são material de cartaz, não tema: cenas de trabalho e de rua em luz baixa (teclado aceso, prédios à noite, rastros de luz, máquina de escrever, café, estrada, mão no celular), escolhidas para conversar com os projetos e com o ofício, nunca para ilustrar um assunto alheio a eles. Fotos sempre com a gradação Halação (`scripts/film-grade.py`); grão animado global; nunca gradiente decorativo. Elas aparecem cortadas no grid e não carregam texto próprio: nada de legenda nem palavra solta sobre a foto; só o título do cartaz, quando o layout pede.

O movimento segue a mesma lógica de cartaz. Na primeira visita da sessão, um carregamento em tinta mostra um contador de 000 a 100 com a foto do hero por dentro dos números; no fim da contagem o campo vira creme com o nome em tinta, e as 12 colunas do grid sobem uma a uma e revelam o hero. Ao rolar, cada seção depois dos projetos se expande de cartaz recortado até a borda, e cada uma tem a sua entrada tipográfica: letras alternadas (Experiência), letras crescendo como barras com varredura em âmbar e anos em odômetro (Publicações), letras deslizando inclinadas (Sobre), letras espalhadas que se montam (Contato). O site termina em creme, no rodapé.

**Key Characteristics:**
- Um campo de cor por seção, de borda a borda.
- Títulos em Archivo condensada, ajustados por script à largura do cartaz.
- Troca de cor do texto na borda da imagem.
- Zero raio, zero sombra, fios de 2px.
- Rolagem suave, sem prender a página; cada projeto é um cartaz vertical com as telas inteiras.
- Fotos com gradação de filme, grão animado global, paleta quente.
- Três vozes: Archivo (títulos, navegação, corpo), Newsreader (lead), JetBrains Mono (rótulos).

## Colors

Petróleo e âmbar, mais tinta e papel, todos puxados para o quente e dessaturados como cor de película: papel creme em vez de cinza, carvão quente em vez de preto azulado. Cada seção escolhe um campo e as outras cores viram texto e destaque sobre ele.

Contraste WCAG das combinações permitidas (texto/campo): papel/petróleo 10.34, âmbar/petróleo 5.46, tinta/âmbar 8.31, papel/tinta 15.73, âmbar/tinta 8.31, tinta/papel 15.73, petróleo/papel 10.34, tinta/creme do Lyfia 13.32, tinta/verde do RecuperAVC 8.47. Todas acima de 4.5:1.

### Primary
- **Petróleo profundo** (deep-petrol): campo do hero, do cartaz do Lyfia e do cabeçalho do estudo de caso do Lyfia; destaque sobre papel.

### Secondary
- **Âmbar de nebulosa** (nebula-amber): a cor de contraste. Nome no hero, título do RecuperAVC, anos das publicações, botão sólido sobre petróleo e preto, e o campo inteiro do contato. Nunca como texto sobre papel.

### Neutral
- **Tinta de prensa** (press-ink): texto sobre âmbar e papel; campo das publicações e do cartaz do RecuperAVC; fundo das legendas mono sobre imagem.
- **Papel de cartaz** (poster-paper): campo das seções de leitura, do fim do carregamento e do rodapé; texto sobre petróleo, preto e imagem.
- **Sombra do papel** (poster-paper-shade): fundo de placa enquanto a imagem carrega.

### Placas de projeto
- **Creme do Lyfia** (lyfia-cream) e **verde do RecuperAVC** (recupera-green): fundo da placa de cada projeto, tirados das cores do próprio produto. Só aparecem dentro da placa.

### Named Rules
**The One Field Rule.** Cada seção tem um único campo de cor que vai de borda a borda. Nada de cartões ou caixas coloridas dentro do campo.

**The Field Sets the Ink Rule.** A cor do texto e dos botões é decidida pelo campo: petróleo leva papel com destaque âmbar, âmbar leva tinta, preto leva papel com destaque âmbar, papel leva tinta com destaque petróleo. A barra de navegação segue o campo sob ela.

**The Product Plate Rule.** A placa de um projeto usa a cor do próprio produto, não a do site.

## Typography

**Display Font:** Archivo Variable, eixo de largura 62 (com Archivo e system-ui de reserva), token `--font`
**Body Font:** Archivo Variable, largura 100, token `--font`
**Serif Font:** Newsreader Variable, eixo de peso, regular e itálico (Georgia de reserva), token `--font-serif`
**Mono Font:** JetBrains Mono Variable, eixo de peso, só normal (ui-monospace de reserva), token `--font-mono`

**Character:** A Archivo continua sendo a grotesca de cartaz suíço, trabalhada pelo eixo de largura: condensada e pesada no display, normal no texto, expandida na navegação. A Newsreader é a voz editorial, a frase de abertura dita em tom de legenda de filme. A JetBrains Mono é a voz técnica, a etiqueta de arquivo e a borda da película.

### Onde cada fonte pode aparecer
- **Archivo:** títulos (display e headline), navegação e menu, cargo e títulos de publicação, corpo de texto, botões e links, rodapé. Tudo o que não está listado abaixo.
- **Newsreader:** só a frase de abertura de cada cartaz (`.lead`: hero, abertura de Projetos, cartazes de projeto, Contato, cabeçalho do estudo de caso).
- **JetBrains Mono:** só rótulos (`.label`: período, categoria e número do projeto, status, títulos de grupo, metadados, QR code) e legendas de captura (`.caption`), peso 400 a 500, no tamanho do rótulo.

### Hierarchy
- **Display** (Archivo 900, ajustada à largura do cartaz, entrelinha 0.8, caixa alta): nome no hero, títulos de seção, nomes de projeto, ano das publicações.
- **Headline** (Archivo 900, largura 62, caixa alta): títulos das partes dos estudos de caso.
- **Title** (Archivo 800, largura 88): cargo, títulos de publicação.
- **Lead** (Newsreader 400, 34ch no máximo): a frase que abre cada cartaz.

- **Body** (Archivo 400, 66ch no máximo): texto corrido dos estudos de caso.
- **Label** (JetBrains Mono 480): período, categoria, número do projeto, status, metadados, legenda de captura.
- **Nav** (Archivo 650, largura 112, +0.02em): navegação e rodapé.

### Named Rules
**The Fill the Sheet Rule.** O título de seção ocupa a largura do cartaz. O tamanho é medido pelo script (`data-fit`), com um valor em `vw` de reserva sem JavaScript; nunca quebra no meio da palavra.

**The Same Cap Height Rule.** Nomes de projeto têm a mesma altura de letra. O nome curto é alargado no eixo de largura (125), não aumentado.

**The Bare Photo Rule.** Nada de texto que nomeia ou comenta a foto (legenda, palavra solta, identificador). A foto fala sozinha; o crédito fica no rodapé e no README.

## Layout

Grid de 12 colunas com margem lateral `pad` e espaço entre colunas `gutter`. Seções de leitura usam o padrão período ou rótulo (3 colunas), título e texto (4 a 7 colunas), lista (5 colunas). Abaixo de 900px tudo empilha numa coluna.

O hero usa unidades de container (`cqw`) para que o nome e a sua cópia dentro da imagem fiquem alinhados em qualquer largura. A seção de projetos abre com uma foto de borda a borda e segue com um cartaz por projeto, empilhados na vertical, sem prender a rolagem. A placa de capturas mostra as telas inteiras, sem corte, e tem altura limitada à da tela para caber de uma vez.

Mais espaço acima do título do que abaixo; as seções abrem com `clamp(5rem, 14svh, 10rem)` de respiro.

## Elevation & Depth

Plano. O sistema não usa sombra. A profundidade vem da sobreposição de camadas planas: título sob a placa, placa sobre o campo, cópia do título dentro da placa em outra cor, cartaz rasgado sobre a foto. O único movimento de profundidade é o deslocamento em velocidades diferentes (parallax) das capturas dentro das placas e da foto atrás das bordas rasgadas durante a rolagem.

### Película
- **Gradação "Halação":** toda foto passa por `scripts/film-grade.py` antes do build (originais em `src/assets/photos/raw/`): curva em S com pretos lavados, saturação a ~75%, sombras para o petróleo e luzes para o âmbar, bloom, halação vermelho-alaranjada nas luzes, separação de cor nas bordas, vinheta quente e grão fino. Nunca `filter` em CSS.
- **Grão animado global** (`FilmGrain.astro`): uma camada fixa de ruído em `overlay` que muda de posição 8 vezes por segundo (só `transform`). Fica abaixo do carregamento (z 200) e da cortina de transição (z 300). A opacidade segue o campo sob a navegação para o grão ter o mesmo peso em todos (papel 0.26, tinta 0.22, petróleo 0.10, âmbar 0.07): visível de perto, invisível de longe.
- **Oscilação de projetor:** opacidade de 0.97 a 1 em `steps`, só nas imagens grandes (hero, abertura de Projetos, Contato).
- Grão, oscilação e parallax ficam desligados com `prefers-reduced-motion`.

### Named Rules
**The Flat Print Rule.** Nada flutua. Se um elemento precisa se destacar, ele muda de campo, de escala ou de cor, nunca ganha sombra.

## Shapes

Retângulos retos em tudo: placas, botões, menu, capturas. Raio zero. Divisões com fio de 2px na cor do texto do campo; separadores internos de lista com 1px a 25–40% de opacidade. Molduras de celular são bordas pretas de 6px, sem cantos arredondados. A única borda irregular do sistema é a borda rasgada da colagem.

### Colagem
Só dois recursos, os dois gerados por `scripts/collage.py` (SVG próprio, nada de imagem de terceiros):
- **Borda rasgada** (`Tear.astro`): na passagem de Projetos para Experiência (rastros de luz) e de Sobre para Contato (teclas de máquina de escrever), uma faixa mostra a foto por trás do cartaz de cima arrancado. Duas máscaras SVG (`mask-image` e `-webkit-mask-image`) recortam as cores dos dois campos; por baixo de cada borda, a mesma máscara deslocada alguns pixels mostra a fibra do papel (papel sobre campos escuros, sombra do papel sobre papel).
- **Linhas de mapa** (`public/collage/contours.svg`): curvas de nível finas, cor papel a 35%, só no cartaz do Lyfia que fica sobre foto (o bloco "Próximo projeto: Lyfia", sobre a estrada na floresta). Ecoam o mapa do produto sem cobrir a placa de captura.

## Components

### Buttons
- **Shape:** retângulo reto (0px), borda de 2px na cor do texto, altura mínima de 3.25rem.
- **Sólido:** fundo e texto definidos pelo campo (tinta com texto âmbar sobre âmbar, petróleo sobre papel, âmbar com texto tinta sobre petróleo e preto).
- **Contorno:** só a borda, na cor do texto do campo.
- **Hover / Focus:** o contorno se enche com a cor do texto e o texto assume a cor do campo; o sólido esvazia. Foco com contorno de 3px a 4px de distância, na cor atual.

### Links de seta
- Texto em negrito com fio inferior de 2px e seta desenhada em SVG; no hover, o espaçamento entre letras abre.

### Navigation
- Barra fixa no topo em rótulo (650, largura 112). Fundo transparente no topo da página; depois assume o campo sob ela. A seção atual fica marcada com peso 850 e fio de 4px; o hover desenha um fio de 2px da esquerda para a direita. Em telas de até 760px, um botão "Menu" abre um diálogo de tela cheia em âmbar com os links em display. O seletor PT/EN fica no fim da barra e no menu.

### Cartaz de projeto (componente-assinatura)
- Campo do projeto, lido de cima para baixo: nome em display com número e tipo em mono à direita; frase em serifada; placa na cor do produto com as capturas inteiras (painel e celular do Lyfia lado a lado, três telas do RecuperAVC com o QR code); três fatos entre fios à esquerda e links à direita. Nada de texto sobre as capturas. Na entrada, as letras do nome sobem, a placa se revela de cima para baixo e as telas sobem em sequência.

### Links de loja e código
- Google Play com o logo oficial, GitHub com o símbolo em SVG, endereço web com seta. No RecuperAVC, um QR code em SVG (tinta sobre papel) leva à loja; só aparece a partir de 900px.

### Imagem com título
- Abertura de Projetos e bloco "Próximo projeto": foto de borda a borda com o título em display por cima; textos menores ficam em blocos de tinta sólida.

### Rodapé
- Campo papel com o nome em tinta (800): o site abre e fecha em creme.

## Do's and Don'ts

### Do:
- **Do** dar a cada seção um único campo de cor de borda a borda.
- **Do** ajustar o título de seção à largura do cartaz com `data-fit` e manter um tamanho em `vw` de reserva.
- **Do** usar a troca de cor na borda da imagem quando o texto cruzar uma placa.
- **Do** manter fotos e capturas em retângulos retos, sem moldura; o crédito das fotos fica no rodapé, em uma linha, e por extenso no README.
- **Do** passar toda foto pela gradação Halação (`scripts/film-grade.py`) e regerar a partir de `raw/`; manter o grão animado global sobre a página.
- **Do** escolher fotos que conversem com os projetos e com o ofício (trabalho, cidade, estrada, escrita), em luz baixa.
- **Do** desligar Lenis, o carregamento, as entradas animadas, o grão, a oscilação e o parallax com `prefers-reduced-motion`.
- **Do** dar a cada seção uma entrada própria dentro da mesma gramática (máscara, varredura, escala), nunca a mesma animação repetida.

### Don't:
- **Don't** usar raio, sombra, gradiente decorativo ou vidro.
- **Don't** aplicar `filter` de cor em CSS nas fotos; a gradação é feita uma vez, na pré-produção.
- **Don't** usar outros recursos de colagem além da borda rasgada e das linhas de mapa.
- **Don't** usar a serifada ou a mono fora dos lugares listados em Typography.
- **Don't** colocar rótulo ou sobretítulo pequeno acima de um título; status e categoria vêm depois do título.
- **Don't** usar âmbar como texto sobre papel, nem tinta sobre petróleo.
- **Don't** usar imagens que sugiram um assunto que não é o do trabalho (espaço, ciência alheia aos projetos); as fotos são material, não assunto.
- **Don't** pôr legenda, palavra solta ou nome sobre as fotos.
- **Don't** cortar ou cobrir as capturas dos projetos.
- **Don't** dar mais peso visual a um projeto do que ao outro.
