import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
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
      skills: ['C#', '.NET', 'ASP.NET Core', 'APIs REST', 'SQL Server']
    },
    {
      title: 'Front-end',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      title: 'Desktop e jogos',
      skills: ['WPF', 'Unity', 'ScriptableObjects', 'Gameplay Systems']
    },
    {
      title: 'Ferramentas e práticas',
      skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Programação Orientada a Objetos']
    }
  ];
}