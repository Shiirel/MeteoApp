import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {AffichageMeteo} from './components/affichage-meteo/affichage-meteo';


@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet,Header,Footer,AffichageMeteo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-meteo');
}
