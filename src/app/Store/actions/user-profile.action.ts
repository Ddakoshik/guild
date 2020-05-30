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
  '[UserProfile] Open Add Cgarecter Modal'
);

export const closeAddCharacterModal = createAction(
  '[UserProfile] Close Add Cgarecter Modal'
);

export const openEditCharacterModal = createAction(
  '[UserProfile] Open Edit Cgarecter Modal',
  props<{characterData: any}>()
);

export const closeEditCharacterModal = createAction(
  '[UserProfile] Close Edit Character Modal'
);

export const addNewCharacter = createAction(
  '[UserProfile Api] Add New Character',
  props<{characterData: any}>()
);

export const updateCharacter = createAction(
  '[UserProfile Api] Update Character',
  props<{characterData: any}>()
);




