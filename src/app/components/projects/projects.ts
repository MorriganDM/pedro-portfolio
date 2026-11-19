import { Component, computed, inject } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { translateProject } from '../../data/projects.en';
import { LanguageService } from '../../i18n/language.service';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  private readonly language = inject(LanguageService);
  protected readonly copy = computed(() => this.language.copy().projects);
  protected readonly projects = computed(() => {
    const english = this.language.language() === 'en';
    return PROJECTS.map(project => ({
      key: project.title,
      value: english ? translateProject(project) : project
    }));
  });
}
