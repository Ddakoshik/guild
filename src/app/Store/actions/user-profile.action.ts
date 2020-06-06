import {createAction, props} from '@ngrx/store';
import { User, Character } from '../../shared/models/blog.model';

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
  props<{characterData: Character}>()
);

export const closeEditCharacterModal = createAction(
  '[UserProfile] Close Edit Character Modal'
);

export const addNewCharacter = createAction(
  '[UserProfile Api] Add New Character',
  props<{characterData: Character}>()
);
export const addNewCharacterSuccess = createAction(
  '[UserProfile] Add New Character Success',
);

export const updateCharacter = createAction(
  '[UserProfile Api] Update Character',
  props<{characterData: Character}>()
);
export const updateCharacterSuccess = createAction(
  '[UserProfile] Update Character Success'
);
export const updateCharacterFail = createAction(
  '[UserProfile] Update Character Fail'
);


export const getCharacters = createAction(
  '[UserProfile Api] Get Characters'
);
export const getCharactersSuccess = createAction(
  '[UserProfile] Get Characters Success',
  props<{charactersList: Character[]}>()
);
export const getCharactersFail = createAction(
  '[UserProfile] Get Characters Fail'
);


export const deleteCharacter = createAction(
  '[UserProfile Api] Delete Character',
  props<{characterData: Character}>()
);
export const deleteCharacterSuccess = createAction(
  '[UserProfile] Delete Character Success'
);
export const deleteCharacterFail = createAction(
  '[UserProfile] Delete Character Fail'
);



