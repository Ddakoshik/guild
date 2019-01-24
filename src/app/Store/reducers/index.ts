import * as fromAuth from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CoreState {
    Auth: fromAuth.AuthState;
}


export const reducers = {
    Auth: fromAuth.reducer
};






export const getUserState = createFeatureSelector('core');
export const getGoogleAuthInfo = createSelector(
    getUserState,
    fromAuth.getGoogleAuthInfo,
);
export const getUserInfo = createSelector(
    getUserState,
    fromAuth.getUserInfo,
);

