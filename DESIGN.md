---
name: Fellipe Gabriel, portfólio
description: Portfólio bilíngue de um desenvolvedor full stack, montado como uma série de cartazes tipográficos suíços.
colors:
  signal-orange: "#ff4f1a"
  press-ink: "#111111"
  poster-paper: "#e9eaea"
  poster-paper-shade: "#d3d5d6"
  print-cobalt: "#2b44ff"
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
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.45vw, 1.5rem)"
    fontWeight: 450
    lineHeight: 1.38
    fontVariation: "'wdth' 100"
  label:
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
  button-solid-on-orange:
    backgroundColor: "{colors.press-ink}"
    textColor: "{colors.poster-paper}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.25rem"
    height: "3.25rem"
  button-solid-on-ink:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.press-ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.25rem"
    height: "3.25rem"
  button-solid-on-cobalt:
    backgroundColor: "{colors.poster-paper}"
    textColor: "{colors.print-cobalt}"
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

**Creative North Star: "A parede de cartazes"**

Cada seção é um cartaz impresso: um campo de cor chapada ocupa a tela inteira, o título é uma grotesca condensada no tamanho máximo que a largura do cartaz aguenta, e a fotografia entra recortada em retângulo reto, sem moldura. A página se lê como uma sequência de cartazes colados lado a lado. Na home, os projetos ficam literalmente numa parede que corre na horizontal.

O gesto que define o sistema é o texto atravessando a imagem: quando o título cruza a borda de uma foto ou de uma placa de captura de tela, a cor das letras troca exatamente nessa borda. Fora disso, o sistema é seco. Sem raio, sem sombra, sem gradiente, sem ícone decorativo. A hierarquia vem só de escala, peso e largura da fonte.

As imagens do espaço (James Webb) são material de cartaz, não tema. Elas aparecem em cor plena, cortadas no grid, e nunca carregam texto temático.

**Key Characteristics:**
- Um campo de cor por seção, de borda a borda.
- Títulos em Archivo condensada, ajustados por script à largura do cartaz.
- Troca de cor do texto na borda da imagem.
- Zero raio, zero sombra, fios de 2px.
- Rolagem suave com uma parede horizontal fixada para os projetos.

## Colors

Quatro cores chapadas e um cinza de apoio; cada seção escolhe um campo e as outras viram tinta e destaque sobre ele.

### Primary
- **Laranja-sinal** (signal-orange): campo do hero e do contato; destaque sobre preto (anos das publicações, status, título do RecuperAVC). Nunca como cor de texto pequeno sobre papel.

### Secondary
- **Cobalto de impressão** (print-cobalt): campo do cartaz do Lyfia e do cabeçalho do estudo de caso do Lyfia; destaque sobre papel. Sobre cobalto, o único texto é papel.

### Neutral
- **Tinta de prensa** (press-ink): texto sobre laranja e papel; campo das publicações, do cartaz do RecuperAVC e do rodapé.
- **Papel de cartaz** (poster-paper): campo das seções de leitura (Projetos, Experiência, Sobre, corpo dos estudos de caso); texto sobre preto e cobalto. Cinza neutro de propósito: o tom creme foi descartado.
- **Sombra do papel** (poster-paper-shade): fundo de placas enquanto a imagem carrega; trilho da barra de rolagem.

### Named Rules
**The One Field Rule.** Cada seção tem um único campo de cor que vai de borda a borda. Nada de cartões ou caixas coloridas dentro do campo.

**The Field Sets the Ink Rule.** A cor do texto e dos botões é decidida pelo campo: laranja leva tinta, preto leva papel com destaque laranja, papel leva tinta com destaque cobalto, cobalto leva só papel. A barra de navegação segue o campo que está sob ela.

## Typography

**Display Font:** Archivo Variable, eixo de largura 62 (com Archivo e system-ui de reserva)
**Body Font:** Archivo Variable, largura 100
**Label Font:** Archivo Variable, largura 112

**Character:** Uma família só, trabalhada pelo eixo de largura: condensada e pesada no display, normal no texto, um pouco expandida nos rótulos. É o equivalente digital da grotesca de cartaz suíço.

### Hierarchy
- **Display** (900, ajustada à largura do cartaz, entrelinha 0.8, caixa alta): nome no hero, títulos de seção, nomes de projeto, ano das publicações.
- **Headline** (900, largura 62, caixa alta): títulos das partes dos estudos de caso.
- **Title** (800, largura 88): cargo, títulos de publicação.
- **Lead** (450, 34ch no máximo): a frase que abre cada cartaz.
- **Body** (400, 66ch no máximo): texto corrido dos estudos de caso.
- **Label** (650, largura 112, +0.02em): navegação, período, legenda de imagem, rodapé.

### Named Rules
**The Fill the Sheet Rule.** O título de seção ocupa a largura do cartaz. O tamanho é medido pelo script (`data-fit`), com um valor em `vw` de reserva sem JavaScript; nunca quebra no meio da palavra.

**The Same Cap Height Rule.** Nomes de projeto que dividem a parede têm a mesma altura de letra. O nome curto é alargado no eixo de largura (125), não aumentado.

## Layout

Grid de 12 colunas com margem lateral `pad` e espaço entre colunas `gutter`. Seções de leitura usam o padrão período ou rótulo (3 colunas), título e texto (4 a 7 colunas), lista (5 colunas). Abaixo de 900px tudo empilha numa coluna.

O hero usa unidades de container (`cqw`) para que o nome e a sua cópia dentro da imagem fiquem alinhados em qualquer largura. A partir de 900px e sem movimento reduzido, a seção de projetos vira uma faixa horizontal fixada: introdução com 58vw e um cartaz de 100vw para cada projeto. Abaixo disso, ou com movimento reduzido, os cartazes ficam empilhados.

Mais espaço acima do título do que abaixo; as seções abrem com `clamp(5rem, 14svh, 10rem)` de respiro.

## Elevation & Depth

Plano. O sistema não usa sombra. A profundidade vem da sobreposição de camadas planas: título sob a placa, placa sobre o campo, cópia do título dentro da placa em outra cor. O único movimento de profundidade é o deslocamento em velocidades diferentes (parallax) das capturas dentro das placas durante a rolagem.

### Named Rules
**The Flat Print Rule.** Nada flutua. Se um elemento precisa se destacar, ele muda de campo, de escala ou de cor, nunca ganha sombra.

## Shapes

Retângulos retos em tudo: placas, botões, menu, capturas. Raio zero. Divisões com fio de 2px na cor do texto do campo; separadores internos de lista com 1px a 25–40% de opacidade. Molduras de celular são bordas pretas de 6px, sem cantos arredondados.

## Components

### Buttons
- **Shape:** retângulo reto (0px), borda de 2px na cor do texto, altura mínima de 3.25rem.
- **Sólido:** fundo e texto definidos pelo campo (tinta sobre laranja e papel, laranja sobre preto, papel sobre cobalto).
- **Contorno:** só a borda, na cor do texto do campo.
- **Hover / Focus:** o contorno se enche com a cor do texto e o texto assume a cor do campo; o sólido esvazia. Foco com contorno de 3px a 4px de distância, na cor atual.

### Links de seta
- Texto em negrito com fio inferior de 2px e seta desenhada em SVG; no hover, o espaçamento entre letras abre.

### Navigation
- Barra fixa no topo em rótulo (650, largura 112). Fundo transparente no topo da página; depois assume o campo sob ela. A seção atual fica marcada com peso 850 e fio de 4px; o hover desenha um fio de 2px da esquerda para a direita. Em telas de até 760px, um botão "Menu" abre um diálogo de tela cheia em laranja com os links em display. O seletor PT/EN fica no fim da barra e no menu.

### Cartaz de projeto (componente-assinatura)
- Campo do projeto, nome em display atravessando a borda de uma placa, placa com capturas reais, bloco de texto embaixo à esquerda (rótulo, lead, três fatos entre fios, links). A cópia do nome dentro da placa usa a cor do campo e desliza junto com o título na rolagem lateral.

### Legenda de crédito
- Rótulo pequeno com o crédito da imagem (NASA, ESA, CSA e STScI). Sobre foto, vai numa faixa de tinta sólida.

## Do's and Don'ts

### Do:
- **Do** dar a cada seção um único campo de cor de borda a borda.
- **Do** ajustar o título de seção à largura do cartaz com `data-fit` e manter um tamanho em `vw` de reserva.
- **Do** usar a troca de cor na borda da imagem quando o texto cruzar uma placa.
- **Do** manter fotos e capturas em retângulos retos, sem moldura, com crédito visível nas imagens do Webb.
- **Do** desligar Lenis, a parede horizontal e as entradas animadas com `prefers-reduced-motion`.

### Don't:
- **Don't** usar raio, sombra, gradiente ou vidro.
- **Don't** colocar rótulo ou sobretítulo pequeno acima de um título; status e categoria vêm depois do título.
- **Don't** usar laranja como texto pequeno sobre papel, nem tinta ou laranja sobre cobalto.
- **Don't** usar frases temáticas ou trocadilhos de espaço; as imagens do Webb são material, não assunto.
- **Don't** dar mais peso visual a um projeto do que ao outro na parede da home.
