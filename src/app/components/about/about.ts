import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly language = inject(LanguageService);
  protected readonly copy = computed(() => this.language.copy().about);
  protected readonly hero = computed(() => this.language.copy().hero);
}
