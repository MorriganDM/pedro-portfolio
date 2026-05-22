export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  shortDescription: string;
  detailedDescription: string;
  highlights: string[];
  technologies: string[];
  images: ProjectImage[];
  repositoryUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
}