import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeteoData } from '../models/meteo';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Meteo {
  private http = inject(HttpClient);
  private apiKey = 'e8c156e0ff175577c8f24a4554c7cdf3';

  recupererMeteo(nomDeLaVille: string): Observable<MeteoData> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomDeLaVille}&appid=${this.apiKey}&units=metric&lang=fr`;

    return this.http.get<any>(url).pipe(
      tap(brut => console.log('Données reçues de l’API :', brut)),
      map(data => {
        return {
          ville: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidite: data.main.humidity,
          vent: data.wind.speed,
          icon: data.weather[0].icon
        };
      })
    );
  }

}
