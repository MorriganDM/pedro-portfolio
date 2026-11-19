import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly language = inject(LanguageService);
  protected readonly copy = computed(() => this.language.copy().contact);
}
