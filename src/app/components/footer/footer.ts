import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly language = inject(LanguageService);
  protected readonly copy = computed(() => this.language.copy().footer);
  protected readonly email = computed(() => this.language.copy().contact.email);
}
