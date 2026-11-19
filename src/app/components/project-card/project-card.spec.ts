import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard } from './project-card';
import { Project } from '../../models/project.model';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    const project: Project = {
      title: 'Test project',
      shortDescription: 'A project used by the component test.',
      detailedDescription: 'Details used by the component test.',
      highlights: [],
      technologies: [],
      images: [],
    };
    fixture.componentRef.setInput('project', project);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
