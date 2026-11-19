import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PROJECTS } from './data/projects';
import { translateProject } from './data/projects.en';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    TestBed.inject(Location).go('/');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('switches both ways in place and retains the project list and current slide', async () => {
    TestBed.inject(Location).go('/#projects');
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const heading = page.querySelector('h1');
    const cards = page.querySelectorAll<HTMLElement>('.project-card');
    const image = cards[0].querySelector<HTMLImageElement>('img');
    const english = page.querySelector<HTMLAnchorElement>('a[hreflang="en"]')!;
    const portuguese = page.querySelector<HTMLAnchorElement>('a[hreflang="pt-BR"]')!;

    expect(heading?.textContent).toContain('Desenvolvedor Full Stack');
    expect(cards).toHaveLength(6);
    expect(cards[0].querySelector('h3')?.textContent).toBe('Ponto Cego');
    expect(english.getAttribute('href')).toBe('/en/#projects');

    cards[0].querySelector<HTMLButtonElement>('button[aria-label="Próxima imagem"]')!.click();
    await fixture.whenStable();
    expect(image?.getAttribute('src')).toContain('ponto-cego/02.png');

    english.click();
    await fixture.whenStable();
    expect(heading?.textContent).toContain('Full Stack Developer');
    expect(page.querySelectorAll('.project-card')).toHaveLength(6);
    expect(cards[0]).toBe(page.querySelector('.project-card'));
    expect(image?.alt).toContain('Portuguese homepage');
    expect(image?.getAttribute('src')).toContain('ponto-cego/02.png');
    expect(english.getAttribute('aria-current')).toBe('page');
    expect(cards[5].querySelector('h3')?.textContent).toBe('Card Combat System');

    portuguese.click();
    await fixture.whenStable();
    expect(heading?.textContent).toContain('Desenvolvedor Full Stack');
    expect(portuguese.getAttribute('aria-current')).toBe('page');
    expect(cards[5].querySelector('h3')?.textContent).toBe('Sistema de Combate com Cartas');
    expect(image?.alt).toContain('em português');
  });

  it('preserves each project’s assets and destinations in the English version', () => {
    for (const project of PROJECTS) {
      const translated = translateProject(project);

      expect(translated.images.map(({ src }) => src)).toEqual(project.images.map(({ src }) => src));
      expect(translated.images.every(({ alt }) => typeof alt === 'string' && alt.trim().length > 0)).toBe(true);
      expect(translated.liveUrl).toBe(project.liveUrl);
      expect(translated.repositoryUrl).toBe(project.repositoryUrl);
      expect(translated.highlights).toHaveLength(project.highlights.length);
      expect(translated.isPrivate).toBe(project.isPrivate);
    }
  });
});
