import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly language = inject(LanguageService);
  protected readonly copy = computed(() => this.language.copy().header);
}
