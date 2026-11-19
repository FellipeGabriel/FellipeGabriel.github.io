---
version: 1
slug: "src-pages-pt-index-astro"
primary_target: "src/pages/pt/index.astro"
related_targets: ["src/pages/en/index.astro"]
---

## Scope

Home (/pt/ e /en/) e páginas de projeto (/pt/projetos/<slug>/, /en/projects/<slug>/). Modo: Persuade. Público: recrutadores e líderes técnicos avaliando vaga full stack. Ação: e-mail (copiar ou mailto) e LinkedIn. Prova: painel do Lyfia no ar, app na Google Play, artigos aceitos.

Restrições do usuário (19/11/2026): direção "cartaz suíço" com a imagem Cosmic Cliffs do card sorteado; foto pessoal sem destaque; não destacar Curitiba; home dá peso igual aos dois projetos.

## Direction contract

THESIS: Cada seção é um cartaz tipográfico suíço: campo de cor chapada, título em grotesca condensada enorme e fotografia recortada no grid. Recusa o portfólio escuro com saudação, cards arredondados e ícones de skill.

OWN-WORLD: laranja-sinal #FF4F1A, preto #111111, papel #E9EAEA (papel de cartaz neutro; o #EDEBE6 do card puxava para creme), cobalto #2B44FF. Archivo variável (largura 62 no display, 125 para nomes curtos de projeto para igualar o peso dos cartazes, 100 no texto). Webb em cor plena, cortado em retângulos retos. Texto que troca de cor ao cruzar a borda da imagem. Créditos como legenda de cartaz. Zero raio, zero sombra, fios de 2px.

STORY: Em cinco segundos o visitante lê nome, cargo, stack e o e-mail. Rola para dois cartazes de projeto do mesmo tamanho, abre um estudo de caso, volta e escreve.

FIRST VIEWPORT: campo laranja em toda a tela; bloco Cosmic Cliffs à direita, do topo até ~78% da altura, ~46% da largura. "FELLIPE / GABRIEL" em duas linhas condensadas (~21vw) atravessando o bloco: preto no laranja, papel sobre a imagem. Embaixo à esquerda: cargo, uma frase e o e-mail em bloco preto com Copiar e LinkedIn. Navegação em barra de texto no topo, fixa em todas as seções, com o link da seção atual marcado e o seletor PT/EN no fim (coluna à direita cobriria a imagem do hero e as placas).

FORM: candidato 2 da lista ordenada (cartaz tipográfico suíço), escolhido pelo usuário no lugar do sorteado (3, galeria), herdando a imagem do sorteado. seed:4b1b505a2933ce0f. Interação-assinatura: parede de cartazes em rolagem lateral fixada, com o campo de cor trocando de cartaz para cartaz; transição de página (View Transitions) em que o título do cartaz vira o cabeçalho do estudo de caso.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
