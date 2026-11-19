import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly language = inject(LanguageService);
  protected readonly copy = computed(() => this.language.copy().hero);
}
