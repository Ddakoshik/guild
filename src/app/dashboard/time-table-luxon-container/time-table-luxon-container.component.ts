import { Component, OnInit } from '@angular/core';
import { DateTime, Settings} from 'luxon';
import { MatTableDataSource } from '@angular/material/table';
import { AddEventPopupComponent } from '../components/add-event-popup/add-event-popup.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';

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

const user = {
  email: 'roobot@i.ua', // string  используется для авторизации пользователя как уникальный ключ вместо userId
  gameEmail: 'roobot@i.ua',     // string   используется для рассылки уведомлений
  googleAvatarURL: 'https://lh5.googleusercontent.com/-TMJU-WItpO0/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcBYrbd1nzTgibU02D-6Vo5EOLpTQ/photo.jpg',
  charecterAvatarURL: '',  // string  если пустой используется googleAvatarURL
  mainCharecters: 'Aizik', // string  главный игровой персонаж что и будет на аватарке
  rolePermissions: ['User', 'RaidLider', 'Admin'],   // string[]  акайнт пользователя может обладать такими ролями
  cherecters: [
    {
      gameName: 'Aizik',  // string
      level: 110,         // number
      equipmentLevel: '', // string
      calassName: 'Paladin',
      calssId: 1,  // number создать константу с  енумкой всех класов и от туда вытягивать calassName
      guild: 'Shadow Reinbow',  // string  возможно потом будет реализована привязка к гильдиям
      cherecterDescription: '', // string  описание игрового персонажа
      roles: [
        {
          roleName: 'tank', // string  возможные роли ['rdps', 'mdps', 'heal', 'tank']
          equipmentLevel: '', // string
          prioity: 1  // number   приоритет 1 2 3 4 и 0 (никогда)
        },
        {
          roleName: 'heal', // string
          equipmentLevel: '', // string
          prioity: 2  // number   приоритет 1 2 3 4 и 0 (никогда)
        }
      ]
    },
    {
      gameName: 'Utumba',  // string
      level: 110,         // number
      equipmentLevel: '', // string
      guild: 'Shadow Reinbow'  // string  возможно потом будет реализована привязка к гильдиям
    },
    {
      gameName: 'Aizik',  // string
      level: 110,         // number
      equipmentLevel: '', // string
      calassName: 'Paladin',
      calssId: 1,  // number создать константу с  енумкой всех класов и от туда вытягивать calassName
      guild: 'Shadow Reinbow',  // string  возможно потом будет реализована привязка к гильдиям
      roles: [
        {
          roleName: 'rdps', // string  возможные роли ['rdps', 'mdps', 'heal', 'tank']
          equipmentLevel: '', // string
          prioity: 1  // number   приоритет 1 2 3 4 и 0 (никогда)
        },
        {
          roleName: 'heal', // string
          equipmentLevel: '', // string
          prioity: 2  // number   приоритет 1 2 3 4 и 0 (никогда)
        }
      ]
    },
  ]
};

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

  displayedColumns: string[] = ['id', 'dataTime', 'reidLider', 'raidName', 'raidComposition', 'info'];
  dataSource = new MatTableDataSource(dataelEments);

  dt = DateTime.local();
  currentDayIndex = 0;
  weekData: DateTime[];
  showWeek: boolean;

  defaultOptions: ModalOptions = {
    class: 'modal-big',
    keyboard: false,
    backdrop: true,
    // ignoreBackdropClick: true,
    animated: false
  };

  ref: BsModalRef;

  constructor(private modalService: BsModalService, public dialog: MatDialog) {
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
    // this.ref = this.modalService.show(AddEventPopupComponent, {
    //   ...this.defaultOptions,
    //   initialState: {
    //     name: '12'
    //   }
    // });
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
