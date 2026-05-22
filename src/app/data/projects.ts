import { Project } from '../models/project.model';

// Centraliza os dados dos projetos exibidos no portfólio, separando conteúdo do template.
export const PROJECTS: Project[] = [
  {
    title: 'Employee Manager System',
    shortDescription:
      'Sistema full-stack para gerenciamento de funcionários, desenvolvido com ASP.NET Core, Angular e SQL Server.',
    technologies: ['ASP.NET Core', 'Angular', 'SQL Server'],
    repositoryUrl: 'https://github.com/MorriganDM/employee-manager-system'
  },
  {
    title: 'Currency Converter WPF',
    shortDescription:
      'Aplicação desktop em C# e WPF para conversão de moedas utilizando consumo de API externa.',
    technologies: ['C#', 'WPF', 'API REST'],
    repositoryUrl: 'https://github.com/MorriganDM/currency-converter-wpf'
  },
  {
    title: 'Sistema de Combate com Cartas',
    shortDescription:
      'Projeto freelance privado em Unity/C# com sistemas de gameplay, efeitos configuráveis, passivas, UI e ScriptableObjects.',
    technologies: ['Unity', 'C#', 'ScriptableObjects'],
    isPrivate: true
  }
];
