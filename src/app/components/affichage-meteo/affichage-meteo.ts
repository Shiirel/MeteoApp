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

  getBackground(temp: number, desc: string): string {
      if (desc.includes('pluie') || desc.includes('orage')) {
        return 'linear-gradient(135deg, #636e72, #2d3436)';
      }
      if (temp > 20) {
        return 'linear-gradient(135deg, #fbc531, #e17055)';
      }
      if (temp < 5) {
        return 'linear-gradient(135deg, #74b9ff, #00cec9)';
      }
      return 'linear-gradient(135deg, #a29bfe, #6c5ce7)';
    }
}
