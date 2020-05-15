import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EventModel, EventModelId } from '../../../shared/models/event.model';
import { DateTime } from 'luxon';
import { EventPopupAddComponent } from '../../components/event-popup-add/event-popup-add.component';
import { EventPopupJoinComponent } from '../../components/event-popup-join/event-popup-join.component';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss']
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
    const dialogRef = this.dialog.open(EventPopupAddComponent, {
      width: '800px',
      disableClose: true
    });
  }

  isEditEvent(eventId: string) {
    const dialogRef = this.dialog.open(EventPopupAddComponent, {
      width: '800px',
      disableClose: true,
      data: eventId
    });
  }

  changeViev() {
    this.showWeek = !this.showWeek;
  }

  isFilterByDate(date: DateTime) {
    console.log('date', date);
  }

  isAcceptEvent(eventId: string) {
    const dialogRef = this.dialog.open(EventPopupJoinComponent, {
      width: '800px',
      disableClose: true,
      data: eventId
    });
  }



  isDeleteEvent(eventId: string) {
    this.afs.collection('event')
      .doc(eventId)
      .delete()
      .then(function () {
          console.log('Document successfully deleted!');
      }).catch(
          function(error) {
          console.error('Error removing document: ', error);
      });

  }
}
