import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  BASE_URL = 'https://www.metaweather.com/api/';
  constructor(private http: HttpClient) {
  }

  getLocationWoeid(loc) {
    return this.http.get(this.BASE_URL + 'location/search/?query=' + loc);
  }
  getWeatherOfLocation(locWoeid) {
    return this.http.get(this.BASE_URL + 'location/' + locWoeid);
  }
  getWeatherOfLocationByDate(date: Date, locWoeid) {
    return this.http.get(this.BASE_URL + '/location/' + locWoeid
                          + '/' + date.getFullYear()
                          + '/' + date.getMonth()
                          + '/' + date.getDate()
                        );
  }
}
