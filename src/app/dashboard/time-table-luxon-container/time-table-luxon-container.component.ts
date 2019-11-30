import { Component, OnInit } from '@angular/core';
import { DateTime, Settings} from 'luxon';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  id: number;
  reidLider: ReidLider;
  raidName: RaidName;
  info: string;
  dataTime: string;
  raidComposition: RaidComposition;
}

export interface ReidLider {
  id: number;
  email: string;
  nikName: string;
  name: string;
}

export interface RaidComposition {
  tankNeed: number;
  tankHave: number;
  healNeed: number;
  healHave: number;
  dpsNeed: number;
  dpsHave: number;
}

export interface RaidName {
  id: number;
  reidDifficult: string;
  shortName: string;
  fullname: string;
}

const dataelEments: PeriodicElement[] = [
  {
    id: 1,
    reidLider: {
      id: 11145,
      email: 'roobot@i.ua',
      nikName: 'Aizik',
      name: 'Andrii'
    },
    raidName: {
      id: 2,
      shortName: 'ГС',
      reidDifficult: 'гер',
      fullname: 'Гробница Саргераса'
    },
    raidComposition: {
      tankNeed: 2,
      tankHave: 2,
      healNeed: 5,
      healHave: 2,
      dpsNeed: 10,
      dpsHave: 3,
    },
    dataTime: '2006-01-02T15:04:05-10:00',
    info: 'So, that’s it. Now we have our material table with all the features like sorting, paging and filtering data.'
  },
  {
    id: 100001,
    reidLider: {
      id: 11145,
      email: 'roobot@i.ua',
      nikName: 'Losik',
      name: 'Andrii'
    },
    raidName: {
      id: 2,
      shortName: 'ГС',
      reidDifficult: 'гер',
      fullname: 'Гробница Саргераса'
    },
    raidComposition: {
      tankNeed: 2,
      tankHave: 2,
      healNeed: 5,
      healHave: 2,
      dpsNeed: 10,
      dpsHave: 3,
    },
    dataTime: '2006-01-02T15:04:05-04:00',
    info: 'Ok go go'
  },
  {
    id: 444000,
    reidLider: {
      id: 11145,
      email: 'roobot@i.ua',
      nikName: 'Aizik',
      name: 'Andrii'
    },
    raidName: {
      id: 2,
      shortName: 'АПТ',
      reidDifficult: 'об',
      fullname: 'Гробница Саргераса'
    },
    raidComposition: {
      tankNeed: 2,
      tankHave: 2,
      healNeed: 5,
      healHave: 2,
      dpsNeed: 10,
      dpsHave: 3,
    },
    dataTime: '2006-01-02T15:04:05-07:00',
    info: 'So, that’s it. Now we have our material table with all the features like sorting, paging and filtering data.'
  }
];

@Component({
  selector: 'app-time-table-luxon-container',
  templateUrl: './time-table-luxon-container.component.html',
  styleUrls: ['./time-table-luxon-container.component.css']
})
export class TimeTableLuxonContainerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'dataTime', 'reidLider', 'raidName', 'raidComposition', 'info' ];
  dataSource = new MatTableDataSource(dataelEments);

  dt = DateTime.local();
  currentDayIndex = 0;
  weekData: DateTime[];
  showWeek: boolean;

  constructor() {
    Settings.defaultLocale = 'ru';
   }

  ngOnInit() {
    this.getweekData();
  }


  prevWeek() {
    this.currentDayIndex = this.currentDayIndex - 7;
    this.getweekData();
  }
  nextWeek() {
    this.currentDayIndex = this.currentDayIndex + 7;
    this.getweekData();
  }

  setDay(day) {
    console.log(day.toFormat('yyyy LLL dd'));
  }

  changeViev() {
    this.showWeek = !this.showWeek;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addEvent() {
    console.log('addEvent Log');
  }


  getweekData() {
    this.weekData = [];
    if (this.currentDayIndex < 0 ) {
      for (let i = Math.abs(this.currentDayIndex); i < Math.abs(this.currentDayIndex) + 7; i++) {
        this.weekData.push( this.dt.minus({ days: i }));
      }
    } else {
      for (let i = this.currentDayIndex; i < this.currentDayIndex + 7; i++) {
        this.weekData.push( this.dt.plus({ days: i }));
      }
    }
  }

}
