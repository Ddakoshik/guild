import { Component, OnInit } from '@angular/core';
import { DateTime, Info } from 'luxon';

@Component({
  selector: 'app-time-table-luxon-container',
  templateUrl: './time-table-luxon-container.component.html',
  styleUrls: ['./time-table-luxon-container.component.css']
})
export class TimeTableLuxonContainerComponent implements OnInit {

  controllDay = 0;
  dt = DateTime.local();
  d = DateTime.fromISO('2014-08-06T13:07:04.054').setLocale('ru');
  weekDays = [];
  constructor() { }

  ngOnInit() {
    console.log(DateTime.DATETIME_FULL);
    console.log('123', DateTime.local());
    console.log(this.dt.minus({days: 7}).toString());
    console.log(this.dt.plus({days: 1}).toString());
    console.log(DateTime.local());
    console.log(DateTime.fromISO('2017-05-15T08:30:00'));
    console.log(this.d.toFormat('LLLL'));
    console.log(this.d.toFormat('MMMM'));
    console.log(this.d.toFormat('ccc'));
    console.log(this.d.toFormat('EEE'));
    console.log(this.d.toFormat('cccc'));
    console.log(this.d.toFormat('EEEE'));
    console.log(Info.months());
    console.log('123', Info.eras('long', { locale: 'ru' }));
    console.log(Info.features());
    console.log(Info.meridiems());
    console.log(Info.monthsFormat());
    console.log(Info.normalizeZone());
    // this.weekDays = Info.weekdays();
    console.log(Info.weekdays());
    console.log(Info.weekdaysFormat());


    this.getWeekArrey(this.controllDay);
  }


  getWeekArrey(controllDay?): void {
    this.weekDays = [];
    if (controllDay < 0) {
      for (let index = controllDay ? controllDay : 0; index < 7 + controllDay; index++) {
        this.weekDays.push(this.dt.minus({days: index}));
      }
    } else {
      for (let index = controllDay ? controllDay : 0; index < 7 + controllDay; index++) {
        this.weekDays.push(this.dt.plus({days: index}));
      }
    }
    console.log('@##########', this.weekDays);
  }
  selectDay(day) {
    console.log(day);
  }
  nextWeek() {
    this.controllDay = this.controllDay +  7;
    this.getWeekArrey(this.controllDay);
  }

}
