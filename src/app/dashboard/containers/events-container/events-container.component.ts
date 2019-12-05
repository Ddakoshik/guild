import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EventModel, EventModelId } from '../../../shared/models/event.model';
import { AddEventPopupComponent } from '../../components/add-event-popup/add-event-popup.component';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.css']
})
export class EventsContainerComponent implements OnInit {

  private eventCollection: AngularFirestoreCollection<EventModel>;
  events: Observable<EventModelId[]>;

  showWeek = false;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit() {
    this.eventCollection = this.afs.collection<EventModel>('event');
    this.events = this.eventCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const dataObj = a.payload.doc.data() as EventModel;
        const id = a.payload.doc.id;
        return { id, ...dataObj };
      });
    });
  }

  addEvent() {
    const dialogRef = this.dialog.open(AddEventPopupComponent, {
      width: '550px',
      disableClose: true,
      data: { name: 'Andrii', animal: 'tiger' }
    });
  }

  changeViev() {
    this.showWeek = !this.showWeek;
  }

  isFilterByDate(date: DateTime) {
    console.log('date', date);
  }
}
