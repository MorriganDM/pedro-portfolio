import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectCarousel } from '../project-carousel/project-carousel';

@Component({
  selector: 'app-project-card',
  imports: [ProjectCarousel],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;

  isDetailsOpen = false;

  toggleDetails(): void {
    this.isDetailsOpen = !this.isDetailsOpen;
  }
}