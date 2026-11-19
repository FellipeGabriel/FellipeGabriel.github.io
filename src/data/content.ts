export type Lang = 'pt' | 'en';

export const EMAIL = 'goncalvesaraujofellipe@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/gabrielfellipe/';
export const GITHUB = 'https://github.com/FellipeGabriel';
export const REPO = 'https://github.com/FellipeGabriel/FellipeGabriel.github.io';

/** Legendas em monoespaçada das imagens do Webb (objeto · instrumento). São identificadores, iguais em PT e EN. */
export const spaceCaptions = {
  cliffs: '\\ cosmic-cliffs · nircam \\',
  galaxyPair: '\\ ic-2163 · ngc-2207 · miri \\',
  horsehead: '\\ horsehead · nircam \\',
  uranus: '\\ uranus · nircam \\',
  sombrero: '\\ sombrero · miri \\',
} as const;

export const routes = {
  pt: { home: '/pt/', project: (slug: string) => `/pt/projetos/${slug}/` },
  en: { home: '/en/', project: (slug: string) => `/en/projects/${slug}/` },
} as const;

export const ui = {
  pt: {
    htmlLang: 'pt-BR',
    title: 'Fellipe Gabriel, desenvolvedor full stack',
    description:
      'Portfólio de Fellipe Gabriel, desenvolvedor full stack. Node.js, React, TypeScript, PostgreSQL e Python. Projetos: Lyfia e RecuperAVC.',
    skip: 'Pular para o conteúdo',
    nav: { projects: 'Projetos', work: 'Experiência', about: 'Sobre', contact: 'Contato', menu: 'Menu', close: 'Fechar', home: 'Início' },
    otherLang: { code: 'EN', label: 'Read in English' },
    hero: {
      role: 'Desenvolvedor full stack',
      lead: 'Há quase 3 anos desenvolvo software para o mercado financeiro, com Node.js, React, TypeScript, PostgreSQL e Python.',
      word: 'Explorar',
      emailCta: 'Enviar e-mail',
      copy: 'Copiar e-mail',
      copied: 'E-mail copiado',
    },
    projects: {
      heading: 'Projetos',
      lead: 'Dois projetos que você pode abrir agora: um painel público e um app na Google Play. Cada um tem uma página contando como foi feito.',
      howItWasMade: 'Como foi feito',
      word: 'Construir',
    },
    work: {
      heading: 'Experiência',
      education: 'Formação',
    },
    pubs: { heading: 'Publicações' },
    about: {
      heading: 'Sobre',
      body: [
        'Sou desenvolvedor full stack. No trabalho, desenvolvo sistemas internos em todas as camadas: banco de dados, API, interface, testes e deploy.',
        'Na UFPR, uso as mesmas ferramentas em pesquisa de saúde digital. Os dois projetos desta página vieram de lá.',
        'Falo português (nativo), inglês (C1) e alemão (B1).',
      ],
      stackHeading: 'Com o que eu trabalho',
      photoAlt: 'Foto de Fellipe Gabriel',
    },
    contact: {
      heading: 'Contato',
      lead: 'Para falar sobre vagas ou sobre algum dos projetos, o caminho mais rápido é o e-mail.',
      word: 'Conversar',
    },
    footer: {
      credits: 'Imagens: NASA, ESA, CSA, STScI (CC BY 4.0)',
      source: 'Código deste site',
    },
    caseStudy: {
      year: 'Ano',
      kind: 'Tipo',
      role: 'Meu papel',
      stack: 'Stack',
      code: 'Código',
      links: 'Links',
      publications: 'Publicações',
      next: 'Próximo projeto',
      back: 'Voltar aos projetos',
      privateRepo: 'Repositório privado',
    },
    notFound: { title: 'Página não encontrada', body: 'Esse endereço não existe.', back: 'Ir para o início' },
  },
  en: {
    htmlLang: 'en',
    title: 'Fellipe Gabriel, full stack developer',
    description:
      'Portfolio of Fellipe Gabriel, full stack developer. Node.js, React, TypeScript, PostgreSQL, and Python. Projects: Lyfia and RecuperAVC.',
    skip: 'Skip to content',
    nav: { projects: 'Projects', work: 'Experience', about: 'About', contact: 'Contact', menu: 'Menu', close: 'Close', home: 'Home' },
    otherLang: { code: 'PT', label: 'Ler em português' },
    hero: {
      role: 'Full stack developer',
      lead: "I've spent nearly 3 years building software for the financial industry with Node.js, React, TypeScript, PostgreSQL, and Python.",
      word: 'Explore',
      emailCta: 'Send an email',
      copy: 'Copy email',
      copied: 'Email copied',
    },
    projects: {
      heading: 'Projects',
      lead: 'Two projects you can open right now: a public dashboard and an app on Google Play. Each one has a page on how it was built.',
      howItWasMade: 'How it was built',
      word: 'Build',
    },
    work: {
      heading: 'Experience',
      education: 'Education',
    },
    pubs: { heading: 'Publications' },
    about: {
      heading: 'About',
      body: [
        "I'm a full stack developer. At work I build internal systems across the stack: database, API, interface, tests, and deployment.",
        'At UFPR I use the same tools for digital health research. Both projects on this page came out of that work.',
        'I speak Portuguese (native), English (C1), and German (B1).',
      ],
      stackHeading: 'What I work with',
      photoAlt: 'Photo of Fellipe Gabriel',
    },
    contact: {
      heading: 'Contact',
      lead: 'To talk about a role or one of the projects, email is the fastest way to reach me.',
      word: 'Talk',
    },
    footer: {
      credits: 'Images: NASA, ESA, CSA, STScI (CC BY 4.0)',
      source: 'Source code for this site',
    },
    caseStudy: {
      year: 'Year',
      kind: 'Type',
      role: 'My role',
      stack: 'Stack',
      code: 'Code',
      links: 'Links',
      publications: 'Publications',
      next: 'Next project',
      back: 'Back to projects',
      privateRepo: 'Private repository',
    },
    notFound: { title: 'Page not found', body: "This address doesn't exist.", back: 'Go to the home page' },
  },
} as const;

export type Job = {
  role: string;
  org: string;
  period: string;
  lead: string;
  items: string[];
};

export const work: Record<Lang, { jobs: Job[]; education: Job[] }> = {
  pt: {
    jobs: [
      {
        role: 'Desenvolvedor Full Stack',
        org: 'TRC Taborda',
        period: 'mar 2024 – atual',
        lead: 'Desenvolvo sistemas internos na empresa, que atua no mercado financeiro.',
        items: [
          'APIs e serviços em Node.js, TypeScript e Python, com PostgreSQL.',
          'Interfaces e dashboards em React e TypeScript.',
          'Integrações entre sistemas e automação de rotinas de dados.',
          'CI/CD com GitHub Actions e deploy automatizado.',
          'Recursos com IA generativa.',
          'Boas práticas de segurança de aplicações (OWASP).',
        ],
      },
    ],
    education: [
      {
        role: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        org: 'Universidade Federal do Paraná',
        period: 'out 2022 – dez 2026 (previsão)',
        lead: 'Pesquisa em saúde digital com o Prof. Alessandro Brawerman.',
        items: [
          'Lyfia e RecuperAVC, aceitos em três congressos em 2026.',
          'Projetos de disciplina com Docker Compose, como microsserviços em Spring Boot com gateway em Node.js.',
        ],
      },
    ],
  },
  en: {
    jobs: [
      {
        role: 'Full Stack Developer',
        org: 'TRC Taborda',
        period: 'Mar 2024 – Present',
        lead: 'I build internal systems at a company in the financial industry.',
        items: [
          'APIs and services in Node.js, TypeScript, and Python, with PostgreSQL.',
          'Interfaces and dashboards in React and TypeScript.',
          'System integrations and data workflow automation.',
          'CI/CD with GitHub Actions and automated deployment.',
          'Generative AI features.',
          'Application security best practices (OWASP).',
        ],
      },
    ],
    education: [
      {
        role: 'Technologist Degree in Systems Analysis and Development',
        org: 'Federal University of Paraná (UFPR)',
        period: 'Oct 2022 – Dec 2026 (expected)',
        lead: 'Digital health research with Prof. Alessandro Brawerman.',
        items: [
          'Lyfia and RecuperAVC, accepted at three conferences in 2026.',
          'Course projects with Docker Compose, such as Spring Boot microservices behind a Node.js gateway.',
        ],
      },
    ],
  },
};

export type Publication = {
  year: string;
  venue: string;
  status: string;
  title: string;
  authors?: string;
  project: 'lyfia' | 'recuperavc';
};

export const publications: Record<Lang, Publication[]> = {
  pt: [
    {
      year: '2026',
      venue: "ICITS'27, 10th International Conference on Information Technology & Systems",
      status: 'Full paper aceito',
      title: 'Mapping Potential Access to Public Hemodialysis in Brazil, 2017 to 2024',
      project: 'lyfia',
    },
    {
      year: '2026',
      venue: 'XXI Congresso Brasileiro de Informática em Saúde (CBIS)',
      status: 'Artigo original',
      title: 'RecuperAVC: Plataforma Digital para Monitoramento Longitudinal da Reabilitação Pós-AVC Baseada em Biomarcadores',
      authors: 'Fellipe Gabriel, Paulo Eduardo Bayer Kresko e Alessandro Brawerman',
      project: 'recuperavc',
    },
    {
      year: '2026',
      venue: 'VI Congresso Brasileiro de Saúde Pública (CONBRASP)',
      status: 'Resumo expandido',
      title: 'Desigualdades regionais no acesso à hemodiálise no SUS: análise preliminar e estruturação de um painel de monitoramento',
      authors: 'Fellipe Gabriel e Alessandro Brawerman',
      project: 'lyfia',
    },
  ],
  en: [
    {
      year: '2026',
      venue: "ICITS'27, 10th International Conference on Information Technology & Systems",
      status: 'Full paper, accepted',
      title: 'Mapping Potential Access to Public Hemodialysis in Brazil, 2017 to 2024',
      project: 'lyfia',
    },
    {
      year: '2026',
      venue: '21st Brazilian Congress of Health Informatics (CBIS)',
      status: 'Full paper',
      title: 'RecuperAVC: Plataforma Digital para Monitoramento Longitudinal da Reabilitação Pós-AVC Baseada em Biomarcadores',
      authors: 'Fellipe Gabriel, Paulo Eduardo Bayer Kresko, and Alessandro Brawerman',
      project: 'recuperavc',
    },
    {
      year: '2026',
      venue: '6th Brazilian Congress of Public Health (CONBRASP)',
      status: 'Extended abstract',
      title: 'Desigualdades regionais no acesso à hemodiálise no SUS: análise preliminar e estruturação de um painel de monitoramento',
      authors: 'Fellipe Gabriel and Alessandro Brawerman',
      project: 'lyfia',
    },
  ],
};

export const stack: Record<Lang, { group: string; items: string }[]> = {
  pt: [
    { group: 'Linguagens', items: 'TypeScript, JavaScript, Python, SQL, R, Kotlin' },
    { group: 'Back-end', items: 'Node.js, Fastify, Express, PostgreSQL, Redis, Drizzle ORM, Zod' },
    { group: 'Front-end', items: 'React, Vite, Tailwind CSS, ECharts, Canvas 2D' },
    { group: 'Mobile', items: 'Android, Jetpack Compose, Room, JNI e NDK' },
    { group: 'Dados', items: 'R, targets, SQLite, ETL, estatística espacial' },
    { group: 'Infra e qualidade', items: 'Docker, GitHub Actions, Vitest, Playwright, OWASP' },
  ],
  en: [
    { group: 'Languages', items: 'TypeScript, JavaScript, Python, SQL, R, Kotlin' },
    { group: 'Backend', items: 'Node.js, Fastify, Express, PostgreSQL, Redis, Drizzle ORM, Zod' },
    { group: 'Frontend', items: 'React, Vite, Tailwind CSS, ECharts, Canvas 2D' },
    { group: 'Mobile', items: 'Android, Jetpack Compose, Room, JNI and NDK' },
    { group: 'Data', items: 'R, targets, SQLite, ETL, spatial statistics' },
    { group: 'Infrastructure and quality', items: 'Docker, GitHub Actions, Vitest, Playwright, OWASP' },
  ],
};
