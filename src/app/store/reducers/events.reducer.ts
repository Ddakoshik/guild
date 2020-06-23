import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import {EventModel} from '../../shared/models/event.model';


export interface State {
    eventsList: EventModel[];
}

export const initialState = {
    eventsList: [],
};

const eventsReducer = createReducer(
  initialState,

  on(actions.getEventsSuccess, (state, action) => ({
     ...state,
     eventsList: [...action.eventsList]
  }))

);

export function reducer(state: State | undefined, action: Action) {
  return eventsReducer(state, action);
}
