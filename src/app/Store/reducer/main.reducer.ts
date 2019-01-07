import { Action } from '@ngrx/store';
import { MainAction, MainActionType } from '../action/main.actions';


export interface AppState {
  mainPage: {
      Auth: any[];
      Blog: any[];
  };
}


export const initialState = {
  Auth: [],
  Blog: []
};

export function mainReducer(state = initialState, action: MainActionType) {
  switch (action.type) {
    case MainAction.LoginWithGoogleSuccess:
      return {
        ...state,
        Auth: [ action.payload ]

      };

    default:
      return state;
  }
}
