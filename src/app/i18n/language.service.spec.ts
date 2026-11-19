import { APP_BASE_HREF, Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: APP_BASE_HREF, useValue: '/pedro-portfolio/' }]
    });
    location = TestBed.inject(Location);
  });

  afterEach(() => {
    document.documentElement.removeAttribute('lang');
    document.head.querySelector('link[rel="canonical"]')?.remove();
    document.head.querySelector('meta[name="description"]')?.remove();
    document.title = '';
  });

  it('defaults to Brazilian Portuguese at the project site root', () => {
    location.go('/');
    const service = TestBed.inject(LanguageService);

    expect(service.language()).toBe('pt');
    expect(service.copy().hero.headingLead).toBe('Desenvolvedor');
    expect(document.documentElement.lang).toBe('pt-BR');
    expect(document.title).toContain('Desenvolvedor Full Stack');
  });

  it('opens English directly with localized metadata and section links', () => {
    location.go('/en/?ref=portfolio#skills');
    const service = TestBed.inject(LanguageService);

    expect(service.language()).toBe('en');
    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toContain('Full Stack Developer');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain('technical skills');
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://morrigandm.github.io/pedro-portfolio/en/'
    );
    expect(service.href('pt')).toBe('/pedro-portfolio/?ref=portfolio#skills');
    expect(service.sectionHref('about')).toBe('/pedro-portfolio/en/?ref=portfolio#about');
  });

  it('keeps the query and fragment when switching and respects modified link clicks', () => {
    location.go('/?ref=portfolio#projects');
    const service = TestBed.inject(LanguageService);
    const modified = new MouseEvent('click', { ctrlKey: true, cancelable: true });
    service.select(modified, 'en');

    expect(modified.defaultPrevented).toBe(false);
    expect(service.language()).toBe('pt');

    const click = new MouseEvent('click', { cancelable: true });
    service.select(click, 'en');

    expect(click.defaultPrevented).toBe(true);
    expect(service.language()).toBe('en');
    expect(location.path(true)).toMatch(/^\/en\/?\?ref=portfolio#projects$/);
    expect(service.href('pt')).toBe('/pedro-portfolio/?ref=portfolio#projects');
  });
});
