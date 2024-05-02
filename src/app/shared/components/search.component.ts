import {Component, inject, OnInit, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {WeatherService} from "../../services/weather.service";
import {debounceTime, filter, map, switchMap} from "rxjs";
import {Suggestion} from "../../interfaces/interface";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-search',
  template: `
    <div class="search-container">
      <img src="../../../assets/svgs/search.svg" alt="search"/>
      <input
        type="search"
        placeholder="Search for city..."
        [formControl]="searchControl"
      >
      @if (shouldShowSuggestions()) {
        <div class="country-suggestions">
          @for (country of countries(); track country.id) {
            <div class="country-suggestion" (click)="getCityWeather(country)">
              <h2>{{ country.name }}</h2>
              <p>{{ country.country }}</p>
            </div>
          }
        </div>
      }
    </div>
  `,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ],
  styles: `
    :host {
      width: 100%;

      .search-container {
        max-width: 1200px;
        width: 100%;
        position: relative;
        margin: 0 auto;
        color: var(--white);

        img {
          position: absolute;
          top: 15px;
          left: 10px;
          width: 20px;
          height: 20px;
          pointer-events: none;
        }

        input[type="search"] {
          padding: 16px 16px 16px 42px;
          width: 100%;
          border-radius: 8px;
          border: 2px solid var(--secondary);
          background: var(--secondaryLight);
          color: var(--white);
          position: relative;
        }

        .country-suggestions {
          border: 1px solid var(--border);
          top: 52px;
          position: absolute;
          left: 0;
          width: 100%;
          background: var(--primery);
          border-radius: 8px;
          z-index: 10;

          .country-suggestion {
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 8px;
            cursor: pointer;
            border-bottom: 1px solid var(--border);
            transition: .4s all;

            p {
              color: var(--gray);
            }

            &:hover {
              background: var(--border);
            }
          }
        }
      }
    }
  `
})
export class SearchComponent implements OnInit {
  weatherService = inject(WeatherService);
  searchControl = new FormControl();

  countries = signal<Suggestion[]>([]);

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      filter(city => city && city.trim() !== ''),
      switchMap((city: string) => {
        return this.weatherService.getCity(city);
      }),
      map((resp: any) => resp as Suggestion[])
    ).subscribe(resp => {
      this.countries.set(resp);
      console.log(resp);
    })
  }

  shouldShowSuggestions() {
    return this.countries().length > 0 && this.searchControl.value.trim().length > 2;
  }

  getCityWeather(country: Suggestion) {
    const {lat, lon} = country;

    this.weatherService.getCurrentWeatherData(`${lat},${lon}`)
      .subscribe((weatherData: any) => {
        this.weatherService.countryWeather.set(weatherData);
        this.countries.set([]);
        this.searchControl.setValue("");
      });
  }
}
