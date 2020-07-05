import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../../../shared/models/event.model';
import { DateTime } from 'luxon';
import { getEvents,
  openAddEventModal,
  openDeleteEventConfirmationModal,
  openEditEventModal,
  openAddCharacterToEventModal } from '../../../store/actions';
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

  constructor(private store$: Store<CoreState>) { }

  ngOnInit() {
    this.store$.dispatch(getEvents());
    this.eventsList$ = this.store$.pipe(select(selectEventsList));
  }

  addEvent() {
    this.store$.dispatch(openAddEventModal());
  }

  isEditEvent(event: EventModel) {
    this.store$.dispatch(openEditEventModal({eventData: event}));
  }

  changeViev() {
    this.showWeek = !this.showWeek;
  }

  isFilterByDate(date: DateTime) {
    console.log('date', date);
  }

  isAcceptEvent(event: EventModel) {
    this.store$.dispatch(openAddCharacterToEventModal({eventData: event}));
  }

  isDeleteEvent(event: EventModel): void {
    this.store$.dispatch(openDeleteEventConfirmationModal({eventData: event}));
  }
}
