import {Component, inject, input, signal} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {ForecastDay} from "../../../interfaces/interface";
import {DatePipe} from "@angular/common";
import {WeatherService} from "../../../services/weather.service";

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.css'
})
export class DailyForecastComponent {
  dayForecast = input<ForecastDay>();
  weekdayName = input("");
  addInfoOpen = signal(false);

  router = inject(Router);
  weatherService = inject(WeatherService);

  openAdditionalInfo(): void {
    this.addInfoOpen.set(!this.addInfoOpen());
  }

  getWeekdayName() {
    const parsedDate = new Date(this.weekdayName());

    return new DatePipe('en-US').transform(parsedDate, 'EEE');
  }

  seeDetailed(data: any) {
    this.router.navigate(['/hourly'])
      .then(r => {
        this.weatherService.setDailyWeather(data);
        console.log("pass data", data);
      });
  }
}
