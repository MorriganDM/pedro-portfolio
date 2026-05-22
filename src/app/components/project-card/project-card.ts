import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  // @Input permite que o componente pai envie um projeto para este card.
  // O "required: true" indica que este componente precisa receber um projeto para funcionar.
  @Input({ required: true }) project!: Project;
}