import { createSelector } from '@ngrx/store';
import { GoogleAuthInfo } from '../../shared/models/auth.model';
import * as fromCoreModule from '../reducers';
import * as fromUserProfile from '../reducers/user-profile.reducer';
import { User, Character } from '../../shared/models/blog.model';





export const selectUserProfile = createSelector(
    fromCoreModule.selectCoreState,
    (state: fromCoreModule.CoreState): fromUserProfile.State => state.UserProfile
);

export const selectUserProfileData = createSelector(
    selectUserProfile,
    (state: fromUserProfile.State): User => state.userProfileData
);

export const selectCharactersList = createSelector(
    selectUserProfile,
    (state: fromUserProfile.State): Character[] => state.charactersList
);

// export const selectUserProfileDataId = createSelector(
//     selectUserProfileData,
//     (state: User): string => state.docId
// );

// export const selectUserEmail = createSelector(
//     selectGoogleAuthInfo,
//     (state: GoogleAuthInfo): string => state.email
// );

// export const getUserInfo = createSelector(
//     selectAuthState,
//     (state: fromAuth.AuthState) => state.userInfo
// );
