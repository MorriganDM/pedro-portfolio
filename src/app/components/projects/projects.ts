import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  // Disponibiliza os dados importados para o template acessar como "projects".
  projects = PROJECTS;
}
