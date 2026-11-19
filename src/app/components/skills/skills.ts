import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  private readonly language = inject(LanguageService);
  protected readonly copy = computed(() => this.language.copy().skills);
  protected readonly skillCategories = computed(() => {
    const copy = this.copy();
    return [
      {
        id: 'backend',
        ...copy.backend,
        icon: 'bi bi-server',
        skills: ['Python', 'FastAPI', this.language.copy().hero.restApis, 'C#/.NET', 'ASP.NET Core', 'PostgreSQL', 'SQL Server']
      },
      {
        id: 'web',
        ...copy.web,
        icon: 'bi bi-window-sidebar',
        skills: ['Flutter', 'Dart', 'Angular', 'TypeScript']
      },
      {
        id: 'games',
        ...copy.games,
        icon: 'bi bi-controller',
        skills: ['Unity', 'C#', 'ScriptableObjects']
      },
      {
        id: 'infrastructure',
        ...copy.infrastructure,
        icon: 'bi bi-terminal',
        skills: ['Linux', 'Docker', copy.containers, 'Git', 'GitHub']
      }
    ];
  });
}
