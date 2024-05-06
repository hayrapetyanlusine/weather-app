import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherData} from "../interfaces/interface";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  http: HttpClient = inject(HttpClient);

  countryWeather = signal<WeatherData | undefined>(undefined);

  API_KEY: string = '75b36898c1284f41a32114039240704';
  citySuggestionsURL: string = `https://api.weatherapi.com/v1/search.json?key=${this.API_KEY}&q=`;
  currentCityWeatherURL: string =  `https://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=`;

  getCity (city: string) {
    return this.http.get(this.citySuggestionsURL + city);
  }

  getCurrentWeatherData(coords: string) {
    return this.http.get(`${this.currentCityWeatherURL}${coords}&days=3&aqi=no&alerts=no`);
  }

  setWeatherData(data: any) {
    this.countryWeather.set(data);
  }
}
