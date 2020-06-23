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
