import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCarousel } from './project-carousel';

describe('ProjectCarousel', () => {
  let component: ProjectCarousel;
  let fixture: ComponentFixture<ProjectCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
