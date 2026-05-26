import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'Service Orders App',
    shortDescription:
      'Sistema full stack de ordens de serviço com Flutter, FastAPI, PostgreSQL e Docker.',
    detailedDescription:
      'Mini sistema corporativo de ordens de serviço desenvolvido como estudo full stack. Possui backend em FastAPI com PostgreSQL, API REST documentada com Swagger, frontend em Flutter, filtros por status, cadastro, edição, detalhes, atualização de status, exclusão segura e execução com Docker Compose.',
    highlights: [
      'Frontend em Flutter com listagem, filtros, formulários e detalhes',
      'API REST em FastAPI documentada com Swagger/OpenAPI',
      'Persistência com PostgreSQL, SQLAlchemy e validação com Pydantic',
      'Controle de exclusão permitido apenas para ordens concluídas ou canceladas',
      'Ambiente de execução opcional com Docker Compose'
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Pydantic',
      'Docker',
      'Docker Compose',
      'API REST',
      'Swagger/OpenAPI'
    ],
    images: [
      {
        src: 'images/projects/service-orders/flutter-list.png',
        alt: 'Listagem de ordens de serviço no aplicativo Flutter'
      },
      {
        src: 'images/projects/service-orders/create-order.png',
        alt: 'Cadastro de ordem de serviço'
      },
      {
        src: 'images/projects/service-orders/edit-order.png',
        alt: 'Edição de ordem de serviço'
      },
      {
        src: 'images/projects/service-orders/details-dialog.png',
        alt: 'Modal de detalhes de uma ordem de serviço'
      },
      {
        src: 'images/projects/service-orders/delete-confirmation.png',
        alt: 'Confirmação de exclusão de ordem de serviço'
      },
      {
        src: 'images/projects/service-orders/swagger.png',
        alt: 'Documentação Swagger da API REST'
      }
    ],
    repositoryUrl: 'https://github.com/MorriganDM/service-order-app'
  },
  {
    title: 'Employee Manager System',
    shortDescription:
      'Sistema full-stack para gerenciamento de funcionários, desenvolvido com ASP.NET Core, Angular e SQL Server.',
    detailedDescription:
      'Projeto full-stack criado para praticar desenvolvimento de sistemas corporativos com backend em ASP.NET Core, frontend em Angular e persistência de dados em SQL Server. O foco principal foi consolidar operações CRUD, integração entre camadas e organização do código.',
    highlights: [
      'API REST desenvolvida com ASP.NET Core',
      'Frontend em Angular consumindo dados do backend',
      'Persistência em banco relacional SQL Server',
      'Operações CRUD para gerenciamento de funcionários'
    ],
    technologies: ['ASP.NET Core', 'Angular', 'SQL Server'],
    images: [
      {
        src: 'images/projects/employee-manager/01.png',
        alt: 'Tela do Employee Manager System'
      },
      {
        src: 'images/projects/employee-manager/02.png',
        alt: 'Tela Create Employee do Employee Manager System'
      },
      {
        src: 'images/projects/employee-manager/03.png',
        alt: 'Tela Edit Employee do Employee Manager System'
      },
      {
        src: 'images/projects/employee-manager/04.png',
        alt: 'Tela SWAGGER API do Employee Manager System'
      },
      {
        src: 'images/projects/employee-manager/05.png',
        alt: 'Tela MS SQL Server do Employee Manager System'
      }
      
    ],
    repositoryUrl: 'https://github.com/MorriganDM/employee-manager-system'
  },
  {
    title: 'Portfolio Website',
    shortDescription:
      'Site pessoal e portfólio de projetos desenvolvido em Angular.',
    detailedDescription:
      'Site pessoal desenvolvido em Angular para apresentar projetos, tecnologias, trajetória profissional e links de contato. O projeto centraliza meu portfólio e também serve como exercício prático de frontend, componentização, organização de dados e manutenção de uma aplicação web pessoal.',
    highlights: [
      'Interface responsiva construída com Angular e TypeScript',
      'Cards de projetos com carrossel de imagens e visualização detalhada',
      'Organização de conteúdo em componentes e dados reutilizáveis',
      'Versionamento e publicação do código com Git e GitHub'
    ],
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Git', 'GitHub'],
    images: [],
    repositoryUrl: 'https://github.com/MorriganDM/pedro-portfolio.git'
  },
  {
    title: 'Currency Converter WPF',
    shortDescription:
      'Aplicação desktop em C# e WPF para conversão de moedas utilizando consumo de API externa.',
    detailedDescription:
      'Aplicação desktop criada para praticar desenvolvimento em C#, WPF, requisições HTTP e consumo de dados externos. O projeto realiza conversão de moedas a partir de informações obtidas por uma API externa.',
    highlights: [
      'Interface desktop desenvolvida com WPF',
      'Consumo de API externa',
      'Tratamento e exibição de dados retornados pela API',
      'Organização da lógica de conversão em C#'
    ],
    technologies: ['C#', 'WPF', 'API REST'],
    images: [
      {
        src: 'images/projects/currency-converter/01.png',
        alt: 'Tela do Currency Converter WPF'
      },
      {
        src: 'images/projects/currency-converter/02.png',
        alt: 'Tela do Currency Converter WPF com dropdown aberto'
      }
    ],
    repositoryUrl: 'https://github.com/MorriganDM/currency-converter-wpf'
  },
  {
    title: 'Sistema de Combate com Cartas',
    shortDescription:
      'Projeto freelance privado em Unity/C# com sistemas de gameplay, efeitos configuráveis, passivas, UI e ScriptableObjects.',
    detailedDescription:
      'Projeto freelance privado desenvolvido em Unity e C#, voltado para um sistema de combate baseado em cartas. Atuei na implementação e ajuste de mecânicas de gameplay, efeitos configuráveis, passivas, regras de combate, interface e correção de bugs.',
    highlights: [
      'Sistema de efeitos configuráveis com ScriptableObjects',
      'Implementação de passivas e regras de combate',
      'Correção de bugs em fluxo de batalha e interface',
      'Comunicação direta com cliente para validação de entregas'
    ],
    technologies: ['Unity', 'C#', 'ScriptableObjects'],
    images: [
      {
        src: 'images/projects/unity-card-combat/01.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: 'images/projects/unity-card-combat/02.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: 'images/projects/unity-card-combat/03.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: 'images/projects/unity-card-combat/04.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: 'images/projects/unity-card-combat/05.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: 'images/projects/unity-card-combat/06.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: 'images/projects/unity-card-combat/07.png',
        alt: 'Sistema configurável no Inspector da Unity'
      }
    ],
    isPrivate: true
  }
];
