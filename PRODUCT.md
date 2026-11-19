# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (saída estática) + GSAP 3.15 (ScrollTrigger, SplitText, Flip) + Lenis para rolagem suave. Transições entre páginas pela View Transitions API. Deploy no GitHub Pages via GitHub Actions, repositório `FellipeGabriel.github.io`. Escolhido pelo usuário em 19/11/2026 entre Astro, Next.js e Vite puro.

## Users

Recrutadores e líderes técnicos que avaliam um candidato a vaga de desenvolvedor full stack, no Brasil e fora dele. Chegam pelo link do LinkedIn, do currículo ou do GitHub, olham por poucos segundos (muitas vezes no celular) e decidem se vale abrir um projeto ou chamar para conversa. Uma parte deles abre o código.

## Product Purpose

Portfólio pessoal de Fellipe Gabriel Gonçalves de Araújo, desenvolvedor full stack em Curitiba. Mostra quem ele é, o cargo que procura (full stack) e dois projetos públicos com prova verificável. Sucesso: a pessoa entende em segundos quem ele é e o que faz, abre um projeto e entra em contato por e-mail ou LinkedIn.

## Positioning

Desenvolvedor full stack com quase 3 anos em produção que também faz pesquisa publicada: um app Android na Google Play com transcrição de fala offline (RecuperAVC) e um painel público de acesso à hemodiálise no SUS com pipeline reprodutível em R (Lyfia), este aceito como full paper em conferência internacional. Poucos candidatos do mesmo nível conseguem mostrar produto publicado e pesquisa aceita ao mesmo tempo.

## Operating Context

- Visitante chega por link direto; não há busca nem login.
- Idioma: português ou inglês conforme o navegador, com seletor manual que persiste.
- Estrutura: home em rolagem longa, com um cartaz vertical por projeto (telas inteiras, sem prender a rolagem) + uma página por projeto contando problema, decisões técnicas e links.
- Contato: e-mail goncalvesaraujofellipe@gmail.com, LinkedIn linkedin.com/in/gabrielfellipe, GitHub github.com/FellipeGabriel. Sem telefone, sem PDF do currículo.

## Capabilities and Constraints

- Cargo-alvo declarado: full stack.
- Projetos: somente Lyfia e RecuperAVC.
- Experiência na TRC Taborda (Desenvolvedor Full Stack, desde mar/2024): só cargo, tipo de trabalho e tecnologias. Proibido: nome do sistema interno, clientes, métricas, número de usuários, boletos, CRMs, discadores, assistente de IA para supervisores, arquitetura interna. "Desenvolvendo software para o mercado financeiro" é a forma permitida de citar o setor.
- Nunca escrever "sozinho", "a primeira plataforma", "load balancer", contagem de PRs ou "1.000+ testes".
- Experiência: "quase 3 anos" (não 3+).
- Aceita qualquer modelo de trabalho; nunca dizer que prefere remoto.
- Idiomas: português nativo, inglês C1, alemão B1.
- Formação: Tecnólogo em Análise e Desenvolvimento de Sistemas, UFPR, out/2022 a dez/2026 (previsão).

## Brand Commitments

Pedidos explícitos do usuário (vinculantes):
- Design criativo, no nível Awwwards: rolagem suave, transições criativas entre seções e páginas. A rolagem lateral fixada dos projetos foi retirada em 19/11/2026 a pedido do usuário, que achou a apresentação cansativa e difícil de ler. Referências: artigo "4 Creative Navigation UI Patterns" (Awwwards) e coleção casperbdv/inspiration.
- Estilo de imagens sólidas combinadas com textos grandes por cima.
- Fotos cinematográficas de boa qualidade, como complemento, nunca como foco, ligadas aos projetos e ao ofício. As imagens do espaço foram retiradas em 19/11/2026 a pedido do usuário, porque podiam sugerir que os projetos envolvem astronomia. Nada de legenda, nome ou palavra solta sobre as fotos.
- Esquema de cores sólido, com uma cor de contraste que complemente as demais.
- Texto direto e informativo. Proibido: frases de efeito, slogans, piadas ou trocadilhos com espaço, clichês ("apaixonado", "proativo", "robusto", "resultados"), barras de habilidade. Todo texto passa pela skill humanizer.
- Foto do usuário: a mesma da landing do RecuperAVC (`src/assets/source/fellipe.*.jpg`, 1080×1076).

## Evidence on Hand

- Lyfia: painel no ar em https://lyfia.pages.dev. Repositório privado (pode ser descrito, sem link). Pipeline em R com targets e renv, SQLite, CNES, SIA/SUS, SIGTAP, IBGE, RIPSA, OpenRouteService; 2017–2024, 5.570 municípios; índice E2SFCA; Moran global e LISA em 450 regiões de saúde (99.999 permutações, Benjamini-Hochberg); validação Spearman −0,60; painel React 19 + TypeScript com mapa próprio em Canvas 2D (JS inicial 369 KB → 95 KB gzip, zoom a 60 fps sem GPU), tabelas virtualizadas (TanStack), estado na URL (Zustand), testes e2e de acessibilidade (Playwright + axe, simulação de daltonismo), recálculo no navegador igual ao R (erro máx. 10⁻⁷), Cloudflare Pages com CSP e SHA-256. Orientação: Prof. Alessandro Brawerman (UFPR).
  - Resumo expandido aprovado no VI CONBRASP 2026.
  - Full paper aceito no ICITS'27: "Mapping Potential Access to Public Hemodialysis in Brazil, 2017 to 2024" (Cusco, 27–29/01/2027; anais Springer LNNS). Escrever "aceito", não "publicado".
- RecuperAVC (TCC): https://play.google.com/store/apps/details?id=com.recuperavc · https://github.com/PauloBayer/recuperavc · landing https://paulobayer.github.io/recuperavc/. Kotlin, Jetpack Compose, MVVM, Room; Whisper.cpp via JNI com build -O3 no NDK e detecção de silêncio; WPM e taxa de erro; testes de fala, arranjo de frases e coordenação motora; claro/escuro/alto contraste, ajuste de fonte, relatórios PDF; publicado e mantido por ele na Google Play (API 36). Feito com Paulo Eduardo Bayer Kresko; dizer só "TCC". Artigo original no XXI CBIS 2026 (Fellipe Gabriel, Paulo Eduardo Bayer Kresko, Alessandro Brawerman).
  - Imagens do app em `src/assets/source/` (celular-home, Avoice, Atapping, Awrite).
- Não há depoimentos, clientes ou números públicos da TRC. Não inventar.
- Fotos: Wikimedia Commons (CC BY-SA 4.0) e Unsplash (Licença Unsplash), créditos no README; sempre conferir a licença e preferir as que permitem modificação, porque todas passam pela gradação de filme.

## Product Principles

1. Prova antes de promessa: cada afirmação aponta para algo que dá para abrir (loja, painel, código, artigo).
2. Em cinco segundos: nome, cargo, o que ele faz e como falar com ele.
3. A criatividade fica no design; o texto informa e para.
4. O que é da TRC fica genérico; o que é público pode ser detalhado.
5. Rápido e acessível mesmo com efeitos: conteúdo visível sem JS, respeito a `prefers-reduced-motion`, navegação por teclado.

## Accessibility & Inclusion

WCAG 2.2 AA: contraste de texto sobre imagem garantido, foco visível, navegação por teclado, `prefers-reduced-motion` desliga rolagem suave e animações longas, `lang` correto por página.
