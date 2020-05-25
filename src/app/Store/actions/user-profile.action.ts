import {createAction, props} from '@ngrx/store';
import { User } from '../../shared/models/blog.model';

export const getUserProfile = createAction(
  '[UserProfile Api] Get User Profile'
);

export const getUserProfileSuccess = createAction(
  '[UserProfile] Get User Profile Success',
  props<{profileData: User}>()
);

export const getUserProfileFail = createAction(
  '[UserProfile] Get User Profile Fail'
);

export const updateUserProfile = createAction(
  '[UserProfile Api] Update User Profile',
  props<{profileData: User}>()
);

export const updateProfileSuccess = createAction(
  '[UserProfile] Update User Profile Success'
);

export const updateProfileFail = createAction(
  '[UserProfile] Update User Profile Fail'
);




export const openAddCharacterModal = createAction(
  '[UserProfile Api] Open Add Cgarecter Modal'
);

export const openEditCharacterModal = createAction(
  '[UserProfile Api] Open Edit Cgarecter Modal',
  props<{characterData: any}>()
);




