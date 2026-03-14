import { Component, inject } from '@angular/core';
import {Meteo} from '../../services/meteo';
import {AsyncPipe, DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-affichage-meteo',
  imports: [AsyncPipe,DecimalPipe],
  templateUrl: './affichage-meteo.html',
  styleUrl: './affichage-meteo.css',
})
export class AffichageMeteo {
  private meteoService = inject(Meteo);
  infos$ = this.meteoService.recupererMeteo('Paris');

  chercher(ville: string) {
    this.infos$ = this.meteoService.recupererMeteo(ville);
  }
}
