import {Routes} from '@angular/router';
import {WeatherTodayInfoComponent} from "./pages/weather-today-info.component";
import {NotFoundComponent} from "./pages/not-found.component";

export const routes: Routes = [
  {path: '', redirectTo: '/weather-today', pathMatch: 'full'},
  {path: 'weather-today', component: WeatherTodayInfoComponent},
  {
    path: 'hourly',
    loadComponent: () => {
      return import('./pages/hourly.component').then(
        (m) => m.HourlyComponent
      );
    },
  },
  {path: '**', component: NotFoundComponent}
];
