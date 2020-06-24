import { createSelector } from '@ngrx/store';
import * as fromCoreModule from '../reducers';
import * as fromEvents from '../reducers/events.reducer';
import {EventModel} from '../../shared/models/event.model';



export const selectEvents = createSelector(
    fromCoreModule.selectCoreState,
    (state: fromCoreModule.CoreState): fromEvents.State => state.Events
);

export const selectEventsList = createSelector(
    selectEvents,
    (state: fromEvents.State): EventModel[] => state.eventsList
);

export const selectEventbyId = createSelector(
  selectEvents,
  (state: fromEvents.State, docId): EventModel => state.eventsList.find(event => event.docId === docId)
);


export const selectEventbyIdHeal = createSelector(
  selectEvents,
  (state: fromEvents.State, docId) => {
    const Ev: EventModel = state.eventsList.find(event => event.docId === docId);
    return Ev.raidGroup.filter(e => e.role === 'heal');
  }
);

export const selectEventbyIdTank = createSelector(
  selectEvents,
  (state: fromEvents.State, docId) => {
    const Ev: EventModel = state.eventsList.find(event => event.docId === docId);
    return Ev.raidGroup.filter(e => e.role === 'tank');
  }
);

export const selectEventbyIdDps = createSelector(
  selectEvents,
  (state: fromEvents.State, docId) => {
    const Ev: EventModel = state.eventsList.find(event => event.docId === docId);
    return Ev.raidGroup.filter(e => e.role === 'dps');
  }
);
