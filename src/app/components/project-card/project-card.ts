import { Component, computed, inject, Input } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { Project } from '../../models/project.model';
import { ProjectCarousel } from '../project-carousel/project-carousel';

@Component({
  selector: 'app-project-card',
  imports: [ProjectCarousel],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  private readonly language = inject(LanguageService);
  protected readonly copy = computed(() => this.language.copy().projects);

  @Input({ required: true }) project!: Project;
}
