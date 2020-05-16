import {createAction, props} from '@ngrx/store';

export const getUserProfile = createAction(
  '[UserProfile Api] Get User Profile'
);

export const getUserProfileSuccess = createAction(
  '[UserProfile] Get User Profile Success',
  props<{payload: any}>()
);

export const getUserProfileFail = createAction(
  '[UserProfile] Get User Profile Fail'
);
