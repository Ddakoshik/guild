import { Component, OnInit } from '@angular/core';
import { DateTime, Settings} from 'luxon';
import { MatTableDataSource } from '@angular/material/table';
import { AddEventPopupComponent } from '../components/add-event-popup/add-event-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { dataelEments, reidDataArrey } from '../../shared/models/constants';
import { EventModel, EventModelId } from '../../shared/models/event.model';

@Component({
  selector: 'app-time-table-luxon-container',
  templateUrl: './time-table-luxon-container.component.html',
  styleUrls: ['./time-table-luxon-container.component.css']
})
export class TimeTableLuxonContainerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'dataTime', 'reidLider', 'raidName', 'raidComposition', 'info'];
  dataSource = new MatTableDataSource(dataelEments);

  reidDataArreyData = reidDataArrey;
  dt = DateTime.local();
  currentDayIndex = 0;
  weekData: DateTime[];
  showWeek: boolean;

  private eventCollection: AngularFirestoreCollection<EventModel>;
  events: Observable<EventModelId[]>;

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

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {
    Settings.defaultLocale = 'ru';
   }

  ngOnInit() {
    this.eventCollection = this.afs.collection<EventModel>('event');
    this.events = this.eventCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const dataObj = a.payload.doc.data() as EventModel;
        const id = a.payload.doc.id;
        return { id, ...dataObj };
      });
    });
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
    const dialogRef = this.dialog.open(AddEventPopupComponent, {
      width: '550px',
      disableClose: true,
      data: { name: 'Andrii', animal: 'tiger' }
    });
    // setTimeout(() => {
    //   dialogRef.close();
    // }, 10000);


    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

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
