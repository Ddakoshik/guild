import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap, switchMap, withLatestFrom, catchError } from 'rxjs/operators';
import {
  openAddCharacterModal,
  openEditCharacterModal,
  getUserProfile,
  getUserProfileSuccess,
  getUserProfileFail,
  updateUserProfile,
  updateProfileSuccess,
  updateProfileFail
} from '../actions/user-profile.action';
import { MatDialog } from '@angular/material/dialog';
import { CharacterModalComponent } from '../../dashboard/components/character-modal/character-modal.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Blog, User } from '../../shared/models/blog.model';
import { CoreState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { selectUserEmail, selectUserProfileData } from '../selectors';
import { of } from 'rxjs';

export const modalConfig = {
    width: '800px',
    disableClose: true
};


@Injectable()
export class UserProfileEffects {

    openAddCharacterModal$ = createEffect(() => this.actions$.pipe(
      ofType(openAddCharacterModal),
      tap(() => this.dialog.open(CharacterModalComponent, {
          ...modalConfig
      }))), {dispatch: false});

    openEditCharacterModal$ = createEffect(() => this.actions$.pipe(
      ofType(openEditCharacterModal),
      tap((action) => this.dialog.open(CharacterModalComponent, {
          ...modalConfig,
          data: action.characterData
      }))), {dispatch: false});

    getUserProfile$ = createEffect(() => this.actions$.pipe(
      ofType(getUserProfile),
      withLatestFrom(this.store$.pipe(select(selectUserEmail))),
      switchMap(([action, authUserEmail]) => {
          return this.db.collection<User>('users', ref => ref.where('authUserEmail', '==', authUserEmail))
          .valueChanges({ idField: 'docId'})
          .pipe(
            map((data) => {
              return getUserProfileSuccess({profileData: data[0]});
            }),
            catchError(() => of(getUserProfileFail()))
          );
        })
      ));

    updateUserProfile$ = createEffect(() => this.actions$.pipe(
      ofType(updateUserProfile),
      withLatestFrom(this.store$.pipe(select(selectUserProfileData))),
      tap(([action, userProfileData]) => {
          const data = action.profileData;
          this.db.collection<User>('users').doc(userProfileData.docId).update({...data})
          .then(() => {
            this.store$.dispatch(updateProfileSuccess());
          }).catch(function(error) {
            this.store$.dispatch(updateProfileFail());
            // console.log('Error getting document:', error);
          });
      })), {dispatch: false});


  constructor(
    private actions$: Actions,
    private dialog: MatDialog,
    private db: AngularFirestore,
    private store$: Store<CoreState>
  ) {}
}
