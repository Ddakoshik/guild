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
    updateProfileFail,
    addNewCharacter,
    closeAddCharacterModal,
    addNewCharacterSuccess,
    getCharactersFail,
    getCharactersSuccess,
    getCharacters,
    updateCharacter,
    updateCharacterFail,
    updateCharacterSuccess,
    closeEditCharacterModal,
    deleteCharacter,
    deleteCharacterSuccess,
    deleteCharacterFail,
    openDeleteCharacterConfirmationModal,
    closeDeleteCharacterConfirmationModal, addNewCharacterFail
} from '../actions';
import { MatDialog } from '@angular/material/dialog';
import { CharacterModalComponent } from '../../dashboard/components/character-modal/character-modal.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { User, Character } from '../../shared/models/blog.model';
import { CoreState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { selectUserEmail, selectUserProfileData } from '../selectors';
import { of } from 'rxjs';
import { ModalService } from '../../shared/modals/modal.service';
import { ConfirmDialogModel } from '../../shared/models/modal.model';
import { modalConfig } from '../../shared/models/constants';


@Injectable()
export class UserProfileEffects {

    openAddCharacterModal$ = createEffect(() => this.actions$.pipe(
      ofType(openAddCharacterModal),
      mergeMap((action) => {
        const dialogRef = this.dialog.open(CharacterModalComponent, {
          ...modalConfig,
          data: {characterData: null}
        });
        return dialogRef.afterClosed();
      }),
      map((result: any) => {
        if (result === undefined || !result) {
          return closeAddCharacterModal();
        }
        return addNewCharacter({ characterData: result });
      })
    ));

    openEditCharacterModal$ = createEffect(() => this.actions$.pipe(
      ofType(openEditCharacterModal),
      mergeMap((action) => {
        const dialogRef = this.dialog.open(CharacterModalComponent, {
          ...modalConfig,
          data: {characterData: action.characterData}
        });
        return dialogRef.afterClosed();
      }),
      map((result: any) => {
        if (result === undefined || !result) {
          return closeEditCharacterModal();
        }
        return updateCharacter({ characterData: result });
      })
    ));

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
      mergeMap(([action, userProfileData]) => {
        return of(this.db.collection<User>('users').doc(userProfileData.docId).update(action.profileData))
        .pipe(
          map(() => updateProfileSuccess()),
          catchError(error => of(updateProfileFail()))
        );
      })
    ));

    getCharacters$ = createEffect(() => this.actions$.pipe(
      ofType(getCharacters),
      withLatestFrom(this.store$.pipe(select(selectUserEmail))),
      switchMap(([action, authUserEmail]) => {
        return this.db.collection<Character>('characters', ref => ref.where('authUserEmail', '==', authUserEmail))
        .valueChanges({ idField: 'docId'})
        .pipe(
          map((data) => {
          //  console.log(data);
            return getCharactersSuccess({charactersList: data});
          }),
          catchError(() => of(getCharactersFail()))
        );
      })
    ));

    addNewCharacter$ = createEffect(() => this.actions$.pipe(
      ofType(addNewCharacter),
      withLatestFrom(this.store$.pipe(select(selectUserEmail))),
      switchMap(([action, authUserEmail]) => {
        return of(this.db.collection<Character>('characters').add({authUserEmail: authUserEmail, ...action.characterData}))
        .pipe(
          map((data) => {
            return addNewCharacterSuccess();
          }),
          catchError(() => of(addNewCharacterFail()))
        );
      })
    ));

    updateCharacter$ = createEffect(() => this.actions$.pipe(
      ofType(updateCharacter),
      switchMap((action) => {
        return of(this.db.collection<Character>('characters').doc(action.characterData.docId).update(action.characterData))
        .pipe(
          map((data) => {
            return updateCharacterSuccess();
          }),
          catchError(() => of(updateCharacterFail()))
        );
      })
    ));

    deleteCharacter$ = createEffect(() => this.actions$.pipe(
      ofType(deleteCharacter),
      switchMap((action) => {
        return of(this.db.collection<Character>('characters').doc(action.characterData.docId).delete())
        .pipe(
          map((data) => {
            return deleteCharacterSuccess();
          }),
          catchError(() => of(deleteCharacterFail()))
        );
      })
    ));

    openDeleteCharacterConfirmationModal$ = createEffect(() => this.actions$.pipe(
      ofType(openDeleteCharacterConfirmationModal),
      tap((action) => {
        const modalData: ConfirmDialogModel = {
          title: 'Удалить персонажа?',
          message: `Персонаж ${action.characterData.name} будет удален с вашего профиля. Подтвердите удаление.`
        };
        const confirmSubscr = this.modalService.confirmDialog(modalData).subscribe((res) => {
          confirmSubscr.unsubscribe();
          if (res) {
            this.store$.dispatch(deleteCharacter({characterData: action.characterData}));
          } else {
            this.store$.dispatch(closeDeleteCharacterConfirmationModal());
          }
        });

      })), {dispatch: false});









  constructor(
    private actions$: Actions,
    private dialog: MatDialog,
    private db: AngularFirestore,
    private modalService: ModalService,
    private store$: Store<CoreState>
  ) {}
}
