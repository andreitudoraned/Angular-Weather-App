import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input() loc = '';
  locationName = '';
  weather;
  dayFromToday = 3;
  woeid = null;
  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.loc !== '' && this.loc != null) {
      this.weatherService.getLocationWoeid(this.loc).subscribe(resp => {
      const threeDayAheadDate = new Date(Date.now() + 24 * 3 * 60 * 60 * 1000);
      this.weatherService.getWeatherOfLocationByDate(threeDayAheadDate, resp[0].woeid).subscribe( weather => {
        this.weather = weather;
       });
      });
    }

  }
  ngOnChanges(changes: SimpleChanges) {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.dayFromToday = parseInt(param.get('daysFromToday'), 10);
      this.woeid = parseInt(param.get('woeid'), 10);
      if (this.woeid) {
        const threeDayAheadDate = new Date(Date.now() + 24 * this.dayFromToday * 60 * 60 * 1000);
        this.weatherService.getWeatherOfLocationByDate(threeDayAheadDate, this.woeid).subscribe( weather => {
          this.weather = weather;
        });
      }
    });
    if (this.loc !== '' && this.loc != null) {
      this.weatherService.getLocationWoeid(this.loc).subscribe(resp => {
        this.locationName = resp[0].title;
        const threeDayAheadDate = new Date(Date.now() + 24 * 3 * 60 * 60 * 1000);
        this.weatherService.getWeatherOfLocationByDate(threeDayAheadDate, resp[0].woeid).subscribe( weather => {
          this.weather = weather;
        });
      });
    }

  }

}
