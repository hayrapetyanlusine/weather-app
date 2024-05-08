import {Component, inject, OnInit} from '@angular/core';
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
      gap: 50px;
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
          border-bottom: 1px solid var(--border);
          padding-bottom: 10px;
          gap: 5px;

          &:last-child {
            border-bottom: none;
          }

          .hourly-item-time {
            font-size: 20px;
            color: var(--orange);
          }

          .hourly-item-img {
            display: flex;
            align-items: center;
            gap: 16px;
            max-width: 250px;
            width: 100%;

            img {
              width: 50px;
              height: 50px;
            }

            h3 {
              color: var(--white);
            }

            @media screen and (max-width: 520px) {
              max-width: 180px;

              img {
                width: 30px;
                height: 30px;
              }
            }
          }

          .temp {
            max-width: 56px;
            width: 100%;

            p {
              color: var(--white);
              font-size: 18px;
            }
          }
        }
      }

      @media screen and (max-width: 520px) {
        .hourly-intro-container {
          gap: 10px;

          .come-back {
            width: 25px;
            height: 25px;
          }

          h1 {
            font-size: 24px;
          }
        }
      }
    }
  `
})
export class HourlyComponent implements OnInit {
  router: Router = inject(Router);

  hourlyData: any;

  ngOnInit() {
    const storedData: string | null = localStorage.getItem('dailyWeather');

    this.hourlyData = storedData && JSON.parse(storedData);
  }
}
