import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { openAddCharacterModal, openEditCharacterModal } from '../actions/user-profile.action';
import { MatDialog } from '@angular/material/dialog';
import { CharacterModalComponent } from '../../dashboard/components/character-modal/character-modal.component';

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

  constructor(
    private actions$: Actions,
    private dialog: MatDialog
  ) {}
}
