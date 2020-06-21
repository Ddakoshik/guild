import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { User, Character } from '../../shared/models/blog.model';



export interface State {
  userProfileData: User;
  charactersList: Character[];
}

export const initialState = {
  userProfileData: null,
  charactersList: []
};

const userProfileReducer = createReducer(
  initialState,
  on(actions.getUserProfileSuccess, (state, action) => ({
    ...state,
    userProfileData: {...state.userProfileData, ...action.profileData}
  })),

  on(actions.getCharactersSuccess, (state, action) => ({
    ...state,
    charactersList: [...action.charactersList]
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return userProfileReducer(state, action);
}
