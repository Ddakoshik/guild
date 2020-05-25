import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/user-profile.action';
import { User } from '../../shared/models/blog.model';



export interface State {
  userProfileData: User;
}

export const initialState = {
  userProfileData: null,
};

const userProfileReducer = createReducer(
  initialState,
  on(actions.getUserProfileSuccess, (state, action) => ({
    ...state,
    userProfileData: {...state.userProfileData, ...action.profileData}
  })),

  // on(actions.updateWbsCodeEngagementsManage, (state, action) => {
  //   return {
  //     ...state,
  //     UpdateWbsCode: action.data
  //   };
  // }),
);

export function reducer(state: State | undefined, action: Action) {
  return userProfileReducer(state, action);
}
