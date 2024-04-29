import {Component, signal} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.css'
})
export class DailyForecastComponent {
    addInfoOpen = signal(false);

    openAdditionalInfo() {
      this.addInfoOpen.set(!this.addInfoOpen());
    }
}
