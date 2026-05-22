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
      title: 'Back-end',
      icon: 'bi bi-server',
      description:
        'Desenvolvimento de APIs, regras de negócio e integração com banco de dados.',
      skills: ['C#', '.NET', 'ASP.NET Core', 'APIs REST', 'SQL Server']
    },
    {
      title: 'Front-end',
      icon: 'bi bi-window-sidebar',
      description:
        'Criação de interfaces web responsivas, componentizadas e conectadas a APIs.',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      title: 'Desktop e jogos',
      icon: 'bi bi-controller',
      description:
        'Experiência com aplicações desktop e sistemas interativos em Unity.',
      skills: ['WPF', 'Unity', 'ScriptableObjects', 'Gameplay Systems']
    },
    {
      title: 'Ferramentas e práticas',
      icon: 'bi bi-tools',
      description:
        'Organização de código, versionamento e boas práticas de desenvolvimento.',
      skills: [
        'Git',
        'GitHub',
        'Visual Studio',
        'VS Code',
        'Programação Orientada a Objetos'
      ]
    }
  ];
}