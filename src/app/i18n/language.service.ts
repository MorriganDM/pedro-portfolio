import { DOCUMENT, Location, PlatformLocation } from '@angular/common';
import { afterNextRender, computed, DestroyRef, inject, Injectable, Injector, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import metadata from './locales.json';
import { MESSAGES } from './messages';

export type Language = keyof typeof metadata.locales;

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly location = inject(Location);
  private readonly platformLocation = inject(PlatformLocation);
  private readonly injector = inject(Injector);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly url = signal(this.location.path(true));

  readonly language = computed<Language>(() => {
    const path = this.url().split(/[?#]/, 1)[0].replace(/\/$/, '');
    return path === '/' + metadata.locales.en.path.replace(/\/$/, '') ? 'en' : 'pt';
  });
  readonly copy = computed(() => MESSAGES[this.language()]);

  constructor() {
    this.updateDocument();
    this.restoreSection();

    const unsubscribe = this.location.onUrlChange(() => {
      const previousLanguage = this.language();
      this.url.set(this.location.path(true));
      if (this.language() !== previousLanguage) {
        this.updateDocument();
        this.restoreSection();
      }
    });
    inject(DestroyRef).onDestroy(unsubscribe);
  }

  href(language: Language): string {
    return this.location.prepareExternalUrl(this.languagePath(language));
  }

  sectionHref(id = ''): string {
    // Use the current pathname so native fragment navigation stays on this document.
    return this.platformLocation.pathname + this.searchAndHash().split('#', 1)[0] + '#' + id;
  }

  select(event: MouseEvent, language: Language): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    if (language !== this.language()) {
      this.location.go(this.languagePath(language));
    }
  }

  private languagePath(language: Language): string {
    return '/' + metadata.locales[language].path + this.searchAndHash();
  }

  private searchAndHash(): string {
    return this.url().match(/[?#].*$/)?.[0] ?? '';
  }

  private restoreSection(): void {
    const id = this.searchAndHash().split('#')[1];
    if (id) {
      afterNextRender(() => this.document.getElementById(id)?.scrollIntoView?.({ behavior: 'instant' }), {
        injector: this.injector
      });
    }
  }

  private updateDocument(): void {
    const locale = metadata.locales[this.language()];
    this.document.documentElement.lang = locale.lang;
    this.title.setTitle(locale.title);
    this.meta.updateTag({ name: 'description', content: locale.description });

    const head = this.document.head;
    const canonical = head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? this.document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = metadata.siteUrl + locale.path;
    if (!canonical.isConnected) {
      head.append(canonical);
    }
  }
}
