import {Component, inject, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hourly-info',
  standalone: true,
  imports: [
    DatePipe
  ],
  template: `
    <div class="hourly-intro-container">
      <div class="come-back" (click)="router.navigate(['/weather-today'])">
        <img src="../../assets/svgs/come-back.svg" alt="img"/>
      </div>
      <h1>Hourly info of the day</h1>
    </div>

    <div class="hourly-container">
      @for (h of hourlyData; track hourlyData) {
        <div class="hourly-item">
          <div class="hourly-item-time">{{ h.time | date: 'HH:mm' }}</div>

          <div class="hourly-item-img">
            <img [src]="h.condition.icon" alt="img">
            <h3>{{ h.condition.text }}</h3>
          </div>

          <div class="temp">
            <p>{{ h.temp_c }} °C</p>
          </div>
        </div>
      }
    </div>
  `,
  host: {
    "role": "app-hourly-info",
    "class": "container"
  },
  styles: `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: var(--primery);

      .hourly-intro-container {
        display: flex;
        align-items: center;
        gap: 20px;

        .come-back {
          width: 40px;
          height: 40px;
          cursor: pointer;
        }

        h1 {
          color: var(--white);
        }
      }


      .hourly-container {
        max-width: 700px;
        width: 100%;

        .hourly-item {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .hourly-item-time {
            font-size: 20px;
            color: var(--orange);
          }

          .hourly-item-img {
            display: flex;
            align-items: center;
            gap: 16px;

            img {
              width: 50px;
              height: 50px;
            }

            h3 {
              color: var(--white);
            }
          }

          .temp {
            p {
              color: var(--white);
              font-size: 18px;
            }
          }
        }
      }
    }
  `
})
export class HourlyComponent implements OnInit {
  weatherService = inject(WeatherService);
  router = inject(Router);

  hourlyData: any;

  ngOnInit() {
    this.hourlyData = this.weatherService.dailyWeather();
  }

  protected readonly navigator = navigator;
}
