export interface Project {
  title: string;
  shortDescription: string;
  detailedDescription: string;
  highlights: string[];
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
}