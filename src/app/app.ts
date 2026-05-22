import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  // Em componentes standalone, outros componentes usados no template entram em imports.
  imports: [RouterOutlet, Header, Hero, About, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// Componente raiz: é a "casca" inicial que organiza as seções principais da aplicação.
export class App {
  protected readonly title = signal('pedro-portfolio');
}
