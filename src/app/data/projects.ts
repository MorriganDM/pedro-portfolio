import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
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
        src: '/images/projects/employee-manager/01.png',
        alt: 'Tela do Employee Manager System'
      },
      {
        src: '/images/projects/employee-manager/02.png',
        alt: 'Tela Create Employee do Employee Manager System'
      },
      {
        src: '/images/projects/employee-manager/03.png',
        alt: 'Tela Edit Employee do Employee Manager System'
      },
      {
        src: '/images/projects/employee-manager/04.png',
        alt: 'Tela SWAGGER API do Employee Manager System'
      },
      {
        src: '/images/projects/employee-manager/05.png',
        alt: 'Tela MS SQL Server do Employee Manager System'
      }
      
    ],
    repositoryUrl: 'https://github.com/MorriganDM/employee-manager-system'
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
        src: '/images/projects/currency-converter/01.png',
        alt: 'Tela do Currency Converter WPF'
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
        src: '/images/projects/unity-card-combat/01.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: '/images/projects/unity-card-combat/02.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: '/images/projects/unity-card-combat/03.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: '/images/projects/unity-card-combat/04.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: '/images/projects/unity-card-combat/05.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: '/images/projects/unity-card-combat/06.png',
        alt: 'Sistema configurável no Inspector da Unity'
      },
      {
        src: '/images/projects/unity-card-combat/07.png',
        alt: 'Sistema configurável no Inspector da Unity'
      }
    ],
    isPrivate: true
  }
];