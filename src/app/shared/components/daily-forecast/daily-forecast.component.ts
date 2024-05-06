import {Component, input, signal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ForecastDay} from "../../../interfaces/interface";
import {DatePipe} from "@angular/common";

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

  openAdditionalInfo(): void {
    this.addInfoOpen.set(!this.addInfoOpen());
  }

  getWeekdayName() {
    const parsedDate = new Date(this.weekdayName());

    return new DatePipe('en-US').transform(parsedDate, 'EEE');
  }
}
