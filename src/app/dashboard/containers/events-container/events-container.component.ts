import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EventModel } from '../../../shared/models/event.model';
import { DateTime } from 'luxon';
import { EventPopupAddComponent } from '../../components/event-popup-add/event-popup-add.component';
import { EventPopupJoinComponent } from '../../components/event-popup-join/event-popup-join.component';
import {getEvents, openAddEventModal, openDeleteEventConfirmationModal, openEditEventModal} from '../../../store/actions';
import { select, Store } from '@ngrx/store';
import { CoreState } from '../../../store/reducers';
import { selectEventsList } from '../../../store/selectors';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss']
})
export class EventsContainerComponent implements OnInit {

  showWeek = false;
  eventsList$: Observable<EventModel[]>;

  constructor(private afs: AngularFirestore,
              public dialog: MatDialog,
              private store$: Store<CoreState>) { }

  ngOnInit() {
    this.store$.dispatch(getEvents());
    this.eventsList$ = this.store$.pipe(select(selectEventsList));


    // this.eventCollection = this.afs.collection<EventModel>('event');
    // this.events = this.eventCollection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const dataObj = a.payload.doc.data() as EventModel;
    //     const id = a.payload.doc.id;
    //     return { id, ...dataObj };
    //   });
    // });
  }

  addEvent() {
    this.store$.dispatch(openAddEventModal());
  }

  isEditEvent(event: EventModel) {
    // const dialogRef = this.dialog.open(EventPopupAddComponent, {
    //   width: '800px',
    //   disableClose: true,
    //   data: event.docId
    // });
    this.store$.dispatch(openEditEventModal({eventData: event}));
  }

  changeViev() {
    this.showWeek = !this.showWeek;
  }

  isFilterByDate(date: DateTime) {
    console.log('date', date);
  }

  isAcceptEvent(event: EventModel) {
    const dialogRef = this.dialog.open(EventPopupJoinComponent, {
      width: '800px',
      disableClose: true,
      data: event
    });
  }



  isDeleteEvent(element: EventModel): void {
    this.store$.dispatch(openDeleteEventConfirmationModal({eventData: element}));
  }
}
