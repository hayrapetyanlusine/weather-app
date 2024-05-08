import {Component, inject} from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-city-weather',
  template: `
    @if (canRender()) {
      <div class="special-city-info">
        <div class="main-info">
          <h3 class="city-name">{{ location.name }}</h3>
          <p class="location">{{ location.region }}, {{ location.country }}</p>
          <p class="timestamp">{{ location.localtime }} PM</p>
        </div>

        <div class="weather-info">
          <img class="weather-icon" [src]="current.condition.icon" alt="img"/>
          <p class="temperature"> {{ current.condition.text }} <br/> {{ current.temp_c }} °C</p>
        </div>

        <div class="additional-info">
          <div class="info-item">
            <p>Real feel</p>
            <p>{{ current.feelslike_c }} °C</p>
          </div>
          <div class="info-item">
            <p>Wind</p>
            <p>{{ current.wind_kph }} km/h</p>
          </div>
          <div class="info-item">
            <p>Humidity</p>
            <p>{{ current.humidity }} %</p>
          </div>
        </div>
      </div>
    }
  `,
  standalone: true,
  imports: [],
  styles: `
    :host {
      max-width: 900px;
      width: 100%;

      .special-city-info {
        background: var(--primeryLight);
        color: var(--n-white);
        border-radius: 8px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;
        height: 100%;

        .main-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .city-name {
          font-size: 38px;
          color: var(--orange);
        }

        .location {
          font-size: 24px;
        }

        .timestamp {
          color: var(--n-white);
        }

        .weather-info {
          display: flex;
          align-items: center;
          gap: 20px;

          .weather-icon {
            width: 80px;
            height: 80px;
          }

          .temperature {
            font-size: 36px;
            font-weight: bold;
          }
        }

        .additional-info {
          .info-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 24px;
            padding: 10px 0;
            border-bottom: 1px solid var(--opacityPrimery);

            &:last-child {
              border-bottom: none;
            }
          }
        }

        @media screen and (max-width: 520px) {
          padding: 20px;

          .city-name {
            font-size: 28px;
          }

          .location {
            font-size: 18px;
          }

          .weather-info {
            gap: 10px;

            .weather-icon {
              width: 60px;
              height: 60px;
            }

            .temperature {
              font-size: 26px;
            }
          }

          .additional-info {
            .info-item {
              font-size: 18px;
            }
          }
        }
      }
    }
  `
})
export class CityWeatherComponent {
  weatherService = inject(WeatherService);

  location: any;
  current: any;

  canRender() {
    const weatherData = this.weatherService.countryWeather();

    if (weatherData) {
      this.location = weatherData.location;
      this.current = weatherData.current;
      return true;
    }

    return false;
  }
}
