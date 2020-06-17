import { createSelector } from '@ngrx/store';
import { GoogleAuthInfo } from '../../shared/models/auth.model';
import * as fromCoreModule from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';




export const selectAuthState = createSelector(
    fromCoreModule.selectCoreState,
    (state: fromCoreModule.CoreState): fromAuth.AuthState => state.Auth
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
