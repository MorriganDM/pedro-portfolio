// Define o formato esperado para cada projeto usado na seção de portfólio.
export interface Project {
  title: string;
  shortDescription: string;
  technologies: string[];
  // O ? indica campos opcionais: alguns projetos têm repositório público, outros são privados.
  repositoryUrl?: string;
  isPrivate?: boolean;
}
