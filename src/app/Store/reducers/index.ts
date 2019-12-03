import * as fromAuth from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GoogleAuthInfo } from '../../shared/models/auth.model';

export interface CoreState {
    Auth: fromAuth.AuthState;
}


export const reducers = {
    Auth: fromAuth.reducer
};






export const selectCoreState = createFeatureSelector<CoreState>('core');


export const selectAuthState = createSelector(
    selectCoreState,
    (state: CoreState): fromAuth.AuthState => state.Auth
);

export const selectGoogleAuthInfo = createSelector(
    selectAuthState,
    (state: fromAuth.AuthState): GoogleAuthInfo => state.googleAuthInfo
);

export const selectUserEmail = createSelector(
    selectGoogleAuthInfo,
    (state: GoogleAuthInfo): string => state.email
);

export const getUserInfo = createSelector(
    selectAuthState,
    (state: fromAuth.AuthState) => state.userInfo
);

