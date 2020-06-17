import * as fromAuth from './auth.reducer';
import * as fromUserProfile from './user-profile.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CoreState {
    Auth: fromAuth.AuthState;
    UserProfile: fromUserProfile.State;
}

export const reducers = {
    Auth: fromAuth.reducer,
    UserProfile: fromUserProfile.reducer,
};

export const selectCoreState = createFeatureSelector<CoreState>('core');




