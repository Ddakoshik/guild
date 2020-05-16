import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/user-profile.action';


export interface State {
  userProfile: any; // TODO add type of profile
}

export const initialState = {
  userProfile: null,
};

const userProfileReducer = createReducer(
  initialState,
  on(actions.getUserProfileSuccess, (state, action) => ({
    ...state,
    userProfile: action.payload
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return userProfileReducer(state, action);
}
