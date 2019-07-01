import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  @Input() loc = '';
  weather;
  woeid;
  @Output() isSingleEntryClicked = new EventEmitter<boolean>();
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // this.loc = localStorage.getItem('location');
    // if (this.loc != null) {
    //   this.weatherService.getLocationWoeid(this.loc).subscribe(resp => console.log(resp));
    // }
    console.log(this.loc);
    if (this.loc != null) {
      this.weatherService.getLocationWoeid(this.loc).subscribe(resp => {
        this.woeid = resp[0].woeid;
        this.weatherService.getWeatherOfLocation(this.woeid).subscribe( weather => {
        this.weather = weather;
       });
      });
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.loc !== '' && this.loc != null) {
      this.weatherService.getLocationWoeid(this.loc).subscribe(resp => {
        this.woeid = resp[0].woeid;
        this.weatherService.getWeatherOfLocation(this.woeid).subscribe( weather => {
        this.weather = weather;
       });
      });
    }
  }


}
