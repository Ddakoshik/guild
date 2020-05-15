import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DateTime, Settings} from 'luxon';

@Component({
  selector: 'app-time-table-luxon-container',
  templateUrl: './time-table-luxon-container.component.html',
  styleUrls: ['./time-table-luxon-container.component.scss']
})
export class TimeTableLuxonContainerComponent implements OnInit {

  dt = DateTime.local();
  currentDayIndex = 0;
  weekData: DateTime[];

  @Input() isShowWeek: boolean;
  @Output() filterByDate: EventEmitter<DateTime> = new EventEmitter<DateTime>();

  // buferArrey = [];
  // raidComposition = {
  //   tankNeed: 2,
  //   tankHave: 0,
  //   healNeed: 5,
  //   healHave: 0,
  //   dpsNeed: 4,
  //   dpsHave: 0,
  // };
  // raid = {
  //   tank: [],
  //   heal: [],
  //   dps: []
  // };
  // koef = 1;

  constructor() {
    Settings.defaultLocale = 'ru';
   }

  ngOnInit() {
    this.getweekData();
    // this.createRaid();
  }

  prevWeek() {
    this.currentDayIndex = this.currentDayIndex - 7;
    this.getweekData();
  }
  nextWeek() {
    this.currentDayIndex = this.currentDayIndex + 7;
    this.getweekData();
  }

  setDay(day: DateTime) {
    this.filterByDate.emit(day);
  }



    // setTimeout(() => {
    //   dialogRef.close();
    // }, 10000);


    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  // }

  // createRaid() {

  //   if (this.koef > 3) {
  //     this.koef = 1;
  //   }

  //   const userArrey = this.buferArrey.length ? this.buferArrey : this.reidDataArreyData;

  //   this.fillRaidArrey(userArrey, this.raidComposition, this.raid, this.koef);

  //   console.log('raidArrey', [...this.raid.tank, ...this.raid.heal, ...this.raid.dps]);
  //   console.log('buferArrey', this.buferArrey);
  //   const raidLength = this.raidComposition.dpsNeed + this.raidComposition.healNeed + this.raidComposition.tankNeed;
  //   if ([...this.raid.tank, ...this.raid.heal, ...this.raid.dps].length === raidLength) {
  //     return this.raid;
  //   } else  {
  //     this.koef++;
  //     this.createRaid();
  //   }
  // }

  // fillRaidArrey(usersQueueArrey, raidComposition, raid, koef) {
  //   const userBuferArrey = [...usersQueueArrey];
  //   const noRoleUserArrey = [];
  //   userBuferArrey.forEach(element => {
  //     if (element.tank === koef && raidComposition.tankNeed > raidComposition.tankHave) {
  //       raidComposition.tankHave++;
  //       return raid.tank.push({...element, role: 'tank'});
  //     }
  //     if (element.heal === koef && raidComposition.healNeed > raidComposition.healHave) {
  //       raidComposition.healHave++;
  //       return raid.heal.push({...element, role: 'heal'});
  //     }
  //     if (element.dps === koef && raidComposition.dpsNeed > raidComposition.dpsHave) {
  //       raidComposition.dpsHave++;
  //       return raid.dps.push({...element, role: 'dps'});
  //     }
  //     return noRoleUserArrey.push(element);
  //   });
  //   this.buferArrey = noRoleUserArrey;
  // }

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
