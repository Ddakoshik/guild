import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import {EventModel} from '../../shared/models/event.model';


export interface State {
    eventsList: EventModel[];
    selectedEvent: EventModel;
}

export const initialState = {
    eventsList: [],
    selectedEvent: null
};

const eventsReducer = createReducer(
  initialState,

  on(actions.getEventsSuccess, (state, action) => ({
     ...state,
     eventsList: [...action.eventsList]
  })),

  on(actions.openAddCharacterToEventModal, (state, action) => ({
    ...state,
    selectedEvent: {...action.eventData}
 })),

  on(actions.closeAddCharacterToEventModal, (state) => ({
    ...state,
    selectedEvent: initialState.selectedEvent
 }))

);

export function reducer(state: State | undefined, action: Action) {
  return eventsReducer(state, action);
}
