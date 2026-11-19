import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skillCategories: SkillCategory[] = [
    {
      title: 'Backend, APIs e dados',
      icon: 'bi bi-server',
      description:
        'Python, FastAPI e APIs REST no trabalho com ERP. C#/.NET, ASP.NET Core, PostgreSQL e SQL Server em projetos.',
      skills: ['Python', 'FastAPI', 'APIs REST', 'C#/.NET', 'ASP.NET Core', 'PostgreSQL', 'SQL Server']
    },
    {
      title: 'Web e mobile',
      icon: 'bi bi-window-sidebar',
      description:
        'Desenvolvimento e manutenção com Flutter em ambiente profissional. Angular e TypeScript em projetos web.',
      skills: ['Flutter', 'Dart', 'Angular', 'TypeScript']
    },
    {
      title: 'Jogos',
      icon: 'bi bi-controller',
      description:
        'Desenvolvimento freelancer de mecânicas de combate e habilidades passivas para um jogo de cartas.',
      skills: ['Unity', 'C#', 'ScriptableObjects']
    },
    {
      title: 'Infraestrutura e Ferramentas',
      icon: 'bi bi-terminal',
      description:
        'Uso profissional de servidores Linux e de aplicações e serviços em contêineres com Docker. Versionamento com Git e GitHub.',
      skills: ['Linux', 'Docker', 'Contêineres', 'Git', 'GitHub']
    }
  ];
}
