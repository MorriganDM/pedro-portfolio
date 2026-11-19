import { PROJECTS } from './projects';
import { Project } from '../models/project.model';

type ProjectTitle = (typeof PROJECTS)[number]['title'];
type ProjectTranslation = Pick<Project, 'shortDescription' | 'detailedDescription' | 'highlights'> & {
  title?: string;
  imageAlts: string[];
};

const translations = {
  'Ponto Cego': {
    shortDescription: 'A bilingual editorial blog built for a client with Angular, server-side rendering, and Sanity CMS.',
    detailedDescription:
      'A live editorial blog about technology, law, and society, built for a client. The frontend uses Angular and TypeScript with SCSS styles. Angular and Express handle server-side rendering, and Sanity CMS manages editorial content in Portuguese and English.',
    highlights: [
      'Frontend development with Angular, TypeScript, and SCSS for a client project',
      'Server-side rendering with Angular and Express',
      'Sanity CMS integration for editorial content management',
      'Support for Portuguese and English',
      'Published online with Railway'
    ],
    imageAlts: [
      'Ponto Cego’s English homepage with a headline about technology and a black circular illustration',
      'Ponto Cego’s Portuguese homepage with the headline “Technology is never neutral” and the latest articles',
      'Ponto Cego’s English article listing with search, topic filters, sorting, and a story about Meta in Brazilian elections',
      'Mobile view of an English Ponto Cego article about Meta in Brazilian elections, with a summary and a protest photo'
    ]
  },
  'Service Orders App': {
    shortDescription: 'A full stack service order system built with Flutter, FastAPI, PostgreSQL, and Docker.',
    detailedDescription:
      'A small business application for managing service orders, built as a full stack practice project. It pairs a FastAPI backend and PostgreSQL database with a Flutter frontend. Users can filter by status, create and edit orders, view details, update status, and delete eligible orders. The REST API is documented with Swagger, and the app can run with Docker Compose.',
    highlights: [
      'Flutter frontend with lists, filters, forms, and order details',
      'FastAPI REST API documented with Swagger/OpenAPI',
      'PostgreSQL persistence with SQLAlchemy and Pydantic validation',
      'Deletion restricted to completed or canceled orders',
      'Optional Docker Compose setup'
    ],
    imageAlts: [
      'Service order list in the Flutter app',
      'Form for creating a service order',
      'Form for editing a service order',
      'Service order details dialog',
      'Service order deletion confirmation',
      'Swagger documentation for the REST API'
    ]
  },
  'Employee Manager System': {
    shortDescription: 'A full stack employee management system built with ASP.NET Core, Angular, and SQL Server.',
    detailedDescription:
      'A full stack practice project for building business applications with an ASP.NET Core backend, an Angular frontend, and SQL Server for data storage. It focuses on CRUD operations, integration between layers, and code organization.',
    highlights: [
      'REST API built with ASP.NET Core',
      'Angular frontend that consumes backend data',
      'Relational data storage in SQL Server',
      'CRUD operations for employee management'
    ],
    imageAlts: [
      'Employee list in Employee Manager System',
      'Create Employee form in Employee Manager System',
      'Edit Employee form in Employee Manager System',
      'Swagger API view for Employee Manager System',
      'SQL Server view for Employee Manager System'
    ]
  },
  'Portfolio Website': {
    shortDescription: 'A personal website and project portfolio built with Angular.',
    detailedDescription:
      'My Angular website brings together my projects, technical skills, professional experience, and contact links. It is also a practical exercise in frontend development, component design, data organization, and maintaining a personal web application.',
    highlights: [
      'Responsive interface built with Angular and TypeScript',
      'Project cards with image carousels and detailed views',
      'Content organized into reusable components and data',
      'Version control and code publishing with Git and GitHub'
    ],
    imageAlts: [
      'Portfolio introduction featuring Pedro Nascimento’s work at PrintPress Soluções',
      'Professional experience at PrintPress Soluções and in Unity/C#, plus education, languages, and independent study',
      'Skill categories for backend and data, web and mobile, games, and infrastructure',
      'Project cards and carousels for Ponto Cego, Service Orders App, and Employee Manager System',
      'Contact section with links to GitHub, LinkedIn, and email'
    ]
  },
  'Currency Converter WPF': {
    shortDescription: 'A C# and WPF desktop app that converts currencies using an external API.',
    detailedDescription:
      'A desktop project for practicing C#, WPF, HTTP requests, and working with external data. It calculates currency conversions using rates obtained from an external API.',
    highlights: [
      'Desktop interface built with WPF',
      'Integration with an external API',
      'Processing and display of API data',
      'Currency conversion logic organized in C#'
    ],
    imageAlts: [
      'Currency Converter WPF application window',
      'Currency Converter WPF application with the currency dropdown open'
    ]
  },
  'Sistema de Combate com Cartas': {
    title: 'Card Combat System',
    shortDescription: 'A private Unity/C# freelance project with gameplay systems, configurable effects, passive abilities, UI, and ScriptableObjects.',
    detailedDescription:
      'A private freelance project built with Unity and C# for a card-based combat system. I implemented and refined gameplay mechanics, configurable effects, passive abilities, combat rules, and UI, and fixed bugs.',
    highlights: [
      'Configurable effects system using ScriptableObjects',
      'Passive abilities and combat rules',
      'Bug fixes in battle flow and the user interface',
      'Direct communication with the client to review deliverables'
    ],
    imageAlts: Array<string>(7).fill('Configurable combat system in the Unity Inspector')
  }
} satisfies Record<ProjectTitle, ProjectTranslation>;

export function translateProject(project: (typeof PROJECTS)[number]): Project {
  const translation: ProjectTranslation = translations[project.title];
  return {
    ...project,
    title: translation.title ?? project.title,
    shortDescription: translation.shortDescription,
    detailedDescription: translation.detailedDescription,
    highlights: translation.highlights,
    technologies: project.technologies.map(technology => technology === 'API REST' ? 'REST API' : technology),
    images: project.images.map((image, index) => ({ ...image, alt: translation.imageAlts[index] }))
  };
}
