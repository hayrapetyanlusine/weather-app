import { Component } from '@angular/core';

@Component({
  selector: 'app-city-weather',
  template: `
    <div class="special-city-info">
      <h3 class="city-name">New York</h3>
      <p class="location">Armenia :)</p>
      <p class="timestamp">Thu 25/04/24 8:35 PM</p>

      <div class="weather-info">
        <img class="weather-icon" src="" alt="img"/>
        <p class="temperature"> Sunny <br/> 13.8°C</p>
      </div>

      <div class="additional-info">
        <div class="info-item">
          <p>Real feel</p>
          <p>14.1°C</p>
        </div>
        <div class="info-item">
          <p>Wind</p>
          <p>5 km/h</p>
        </div>
        <div class="info-item">
          <p>Humidity</p>
          <p>61%</p>
        </div>
      </div>
    </div>

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
        gap: 16px;

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
      }
    }
  `
})
export class CityWeatherComponent {

}
