import {Component, inject} from '@angular/core';
import {SearchComponent} from "../shared/components/search.component";
import {DailyForecastComponent} from "../shared/components/daily-forecast/daily-forecast.component";
import {CityWeatherComponent} from "../shared/components/city-weather.component";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-weather-today-info',
  standalone: true,
  imports: [
    SearchComponent,
    CityWeatherComponent,
    DailyForecastComponent
  ],
  template: `
    <div class="app-content-wrapper">
      <div class="container">
        <app-search/>

        <div class="city-weather-wrapper">
          <app-city-weather/>

          @if(canRender()) {
            <div class="daily-wrapper">
              @for (forecast of forecasts.forecastday; track forecast) {
                <app-daily-forecast [dayForecast]="forecast" [weekdayName]="forecast.date"/>
              }
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .app-content-wrapper {
      padding: 16px 24px;
      background: var(--primery);

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        .city-weather-wrapper {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          max-width: 1200px;

          .daily-wrapper {
            max-width: 900px;
            width: 100%;
          }

          @media screen and (max-width: 940px) {
            flex-wrap: wrap;
          }
        }

        @media screen and (max-width: 520px) {
          padding: unset;
        }
      }
    }
  `
})
export class WeatherTodayInfoComponent {
  weatherService = inject(WeatherService);

  forecasts: any;

  canRender() {
    const weatherData = this.weatherService.countryWeather();

    if (weatherData) {
      this.forecasts = weatherData.forecast;
      return true;
    }

    return false;
  }
}
