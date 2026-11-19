const pt = {
  header: {
    navigation: 'Navegação principal',
    language: 'Idioma do site',
    projects: 'Projetos',
    about: 'Sobre',
    skills: 'Habilidades',
    contact: 'Contato'
  },
  hero: {
    headingLead: 'Desenvolvedor',
    headingAccent: 'Full Stack',
    description: 'Trabalho no desenvolvimento e na manutenção de aplicações para ERP, com Python e FastAPI no backend, Flutter nas interfaces e integrações via APIs REST.',
    projects: 'Ver projetos',
    currentExperience: 'Experiência atual',
    since: 'Desde',
    june2026: 'junho de 2026',
    workTechnologies: 'Tecnologias no trabalho atual',
    restApis: 'APIs REST',
    experience: 'Ver trajetória'
  },
  about: {
    eyebrow: 'Sobre mim',
    heading: 'Trajetória profissional',
    juniorRole: 'Desenvolvedor de Software Júnior',
    erpExperience: 'Desenvolvo e mantenho aplicações de ERP com Python, FastAPI e Flutter. Integro APIs REST, analiso fluxos de negócio e de dados, investigo bugs e implemento melhorias em bases de código existentes.',
    infrastructure: 'Trabalho com servidores Linux e com aplicações e serviços executados em ambientes com Docker e contêineres.',
    freelanceStart: 'Março',
    dateRangeTo: 'a',
    freelanceEnd: 'abril de 2026',
    freelanceRole: 'Desenvolvedor Unity/C# freelancer',
    client: 'Cliente particular',
    freelanceExperience: 'Implementei sistemas de gameplay para um jogo de combate com cartas, incluindo efeitos configuráveis, habilidades passivas e regras de combate com ScriptableObjects.',
    highlights: 'Formação, idiomas e projetos',
    education: 'Formação',
    degree: 'Licenciatura em Computação pela Universidade Federal Fluminense (UFF), concluída em 2025.',
    languages: 'Idiomas',
    proficiency: 'Português nativo e inglês fluente (C2).',
    projects: 'Projetos e estudos',
    projectExperience: 'Aplicações web e APIs com C#/.NET, ASP.NET Core, Angular e TypeScript, além de prática com PostgreSQL e SQL Server.'
  },
  skills: {
    heading: 'Habilidades',
    description: 'Tecnologias usadas no trabalho, em projetos para clientes e em estudos.',
    backend: {
      title: 'Backend, APIs e dados',
      description: 'Python, FastAPI e APIs REST no trabalho com ERP. C#/.NET, ASP.NET Core, PostgreSQL e SQL Server em projetos.'
    },
    web: {
      title: 'Web e mobile',
      description: 'Desenvolvimento e manutenção com Flutter em ambiente profissional. Angular e TypeScript em projetos web.'
    },
    games: {
      title: 'Jogos',
      description: 'Desenvolvimento freelancer de mecânicas de combate e habilidades passivas para um jogo de cartas.'
    },
    infrastructure: {
      title: 'Infraestrutura e Ferramentas',
      description: 'Uso profissional de servidores Linux e de aplicações e serviços em contêineres com Docker. Versionamento com Git e GitHub.'
    },
    containers: 'Contêineres'
  },
  projects: {
    eyebrow: 'Portfólio',
    heading: 'Projetos em destaque',
    description: 'Projetos para clientes e estudos de desenvolvimento web, desktop e jogos.',
    viewDetails: 'Ver detalhes',
    detailsFor: 'Detalhes de',
    closeDetails: 'Fechar detalhes do projeto',
    highlights: 'Destaques técnicos',
    visitSite: 'Acessar site',
    viewDemo: 'Ver demo',
    repository: 'Repositório',
    privateSource: 'Projeto para cliente — código-fonte privado'
  },
  carousel: {
    images: 'Imagens do projeto',
    enlarge: 'Ampliar imagem do projeto',
    previousImage: 'Imagem anterior',
    nextImage: 'Próxima imagem',
    image: 'Imagem',
    zoom: 'Visualização ampliada da imagem do projeto',
    previous: 'Anterior',
    next: 'Próxima',
    closeZoom: 'Fechar visualização ampliada',
    unavailable: 'Imagens ainda indisponíveis.'
  },
  contact: {
    eyebrow: 'Contato',
    heading: 'Vamos conversar sobre oportunidades, projetos ou colaboração?',
    description: 'Estou aberto a oportunidades como desenvolvedor júnior, especialmente com C#, .NET, Angular, SQL Server, aplicações web, sistemas desktop e projetos Unity/C#.',
    repositories: 'Ver repositórios',
    connect: 'Conectar profissionalmente',
    email: 'E-mail',
    message: 'Enviar mensagem direta'
  },
  footer: {
    role: 'Desenvolvedor C#/.NET, Angular e Unity.',
    credit: 'Portfólio desenvolvido com Angular.'
  }
};

const en = {
  header: {
    navigation: 'Main navigation',
    language: 'Website language',
    projects: 'Projects',
    about: 'About',
    skills: 'Skills',
    contact: 'Contact'
  },
  hero: {
    headingLead: 'Full Stack',
    headingAccent: 'Developer',
    description: 'I build and maintain ERP applications, using Python and FastAPI for the backend, Flutter for the user interface, and REST APIs for integrations.',
    projects: 'View projects',
    currentExperience: 'Current role',
    since: 'Since',
    june2026: 'June 2026',
    workTechnologies: 'Technologies used in my current role',
    restApis: 'REST APIs',
    experience: 'View experience'
  },
  about: {
    eyebrow: 'About me',
    heading: 'Professional experience',
    juniorRole: 'Junior Software Developer',
    erpExperience: 'I build and maintain ERP applications with Python, FastAPI, and Flutter. I integrate REST APIs, analyze business processes and data flows, investigate bugs, and improve existing codebases.',
    infrastructure: 'I work with Linux servers and with applications and services running in Docker containers.',
    freelanceStart: 'March',
    dateRangeTo: 'to',
    freelanceEnd: 'April 2026',
    freelanceRole: 'Freelance Unity/C# Developer',
    client: 'Private client',
    freelanceExperience: 'I implemented gameplay systems for a card battle game, including configurable effects, passive abilities, and combat rules using ScriptableObjects.',
    highlights: 'Education, languages, and projects',
    education: 'Education',
    degree: 'Degree in Computing Education from Universidade Federal Fluminense (UFF), completed in 2025.',
    languages: 'Languages',
    proficiency: 'Native Portuguese and fluent English (C2).',
    projects: 'Projects and independent study',
    projectExperience: 'I build web applications and APIs with C#/.NET, ASP.NET Core, Angular, and TypeScript, and have hands-on experience with PostgreSQL and SQL Server.'
  },
  skills: {
    heading: 'Skills',
    description: 'Technologies I use at work, in client projects, and in independent study.',
    backend: {
      title: 'Backend, APIs, and data',
      description: 'Python, FastAPI, and REST APIs for ERP development. C#/.NET, ASP.NET Core, PostgreSQL, and SQL Server in projects.'
    },
    web: {
      title: 'Web and mobile',
      description: 'Professional experience building and maintaining Flutter applications. Angular and TypeScript in web projects.'
    },
    games: {
      title: 'Game development',
      description: 'Freelance development of combat mechanics and passive abilities for a card game.'
    },
    infrastructure: {
      title: 'Infrastructure and tools',
      description: 'Professional experience with Linux servers and Docker containers for applications and services. Version control with Git and GitHub.'
    },
    containers: 'Containers'
  },
  projects: {
    eyebrow: 'Portfolio',
    heading: 'Featured projects',
    description: 'Client work and independent projects in web, desktop, and game development.',
    viewDetails: 'View details',
    detailsFor: 'Details for',
    closeDetails: 'Close project details',
    highlights: 'Technical highlights',
    visitSite: 'Visit website',
    viewDemo: 'View demo',
    repository: 'Repository',
    privateSource: 'Client project — private source code'
  },
  carousel: {
    images: 'Project images',
    enlarge: 'Enlarge project image',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    image: 'Image',
    zoom: 'Enlarged project image',
    previous: 'Previous',
    next: 'Next',
    closeZoom: 'Close enlarged image',
    unavailable: 'Images are not available yet.'
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Let’s talk about opportunities, projects, or collaboration.',
    description: 'I’m open to junior developer roles, especially those involving C#, .NET, Angular, SQL Server, web or desktop applications, and Unity/C# projects.',
    repositories: 'Browse repositories',
    connect: 'Connect on LinkedIn',
    email: 'Email',
    message: 'Send a message'
  },
  footer: {
    role: 'C#/.NET, Angular, and Unity developer.',
    credit: 'Portfolio built with Angular.'
  }
} satisfies typeof pt;

export const MESSAGES = { pt, en };
