import { createSelector } from '@ngrx/store';
import * as fromCoreModule from '../reducers';
import * as fromUserProfile from '../reducers/user-profile.reducer';
import { User, Character } from '../../shared/models/blog.model';
import { classOfCharactersConstnt } from '../../shared/models/constants';





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

export const selectActiveCharts = createSelector(
  selectCharactersList,
  (state: Character[]): any[] => {
    return state.map(chr => {
      const className = classOfCharactersConstnt.find(i => i.id === chr.classId);
      return {
        active: chr.specs.active,
        name: chr.name,
        className: className.name,
        docId: chr.docId,
        fractionId: chr.fractionId
      };
    });
  }
);

export const selectDPSCharts = createSelector(
  selectActiveCharts,
  (state: any): any => {
    return state.map(chr => {
      //console.log(">>>>", chr);
      return {
        name: chr.name,
        docId: chr.docId,
        fractionId: chr.fractionId,
        className: chr.className,
        builds: chr.active.filter(c => c.spec === 'dps')
      };
    });
  }
);

export const selectTankCharts = createSelector(
  selectActiveCharts,
  (state: any): any => {
    return state.map(chr => {
      return {
        name: chr.name,
        docId: chr.docId,
        fractionId: chr.fractionId,
        className: chr.className,
        builds: chr.active.filter(c => c.spec === 'tank')};
    });
  }
);

export const selectHealCharts = createSelector(
  selectActiveCharts,
  (state: any): any => {
    return state.map(chr => {
      return {
        name: chr.name,
        docId: chr.docId,
        fractionId: chr.fractionId,
        className: chr.className,
        builds: chr.active.filter(c => c.spec === 'heal')};
    });
  }
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
