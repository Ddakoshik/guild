import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap, mergeMap, take, withLatestFrom } from 'rxjs/operators';
import {
    addNewEvent,
    addNewEventFail,
    addNewEventSuccess,
    closeAddEventModal,
    closeDeleteEventConfirmationModal,
    closeEditEventModal,
    deleteEvent,
    deleteEventFail,
    deleteEventSuccess,
    getEvents,
    getEventsFail,
    getEventsSuccess,
    openAddEventModal,
    openDeleteEventConfirmationModal,
    openEditEventModal,
    updateEvent,
    updateEventFail,
    updateEventSuccess,
    addCharacterToEvent,
    addCharacterToEventFail,
    addCharacterToEventSuccess,
    openAddCharacterToEventModal,
    closeAddCharacterToEventModal,
    deleteCharacterFromEvent,
    deleteCharacterFromEventFail,
    deleteCharacterFromEventSuccess
} from '../actions';
import { selectEventbyId, selectSelectedEvent } from '../selectors';
import { AngularFirestore } from '@angular/fire/firestore';
import { CoreState } from '../reducers';
import { Store, select} from '@ngrx/store';
import { of, EMPTY } from 'rxjs';
import { EventModel } from '../../shared/models/event.model';
import { ConfirmDialogModel } from '../../shared/models/modal.model';
import { ModalService } from '../../shared/modals/modal.service';
import { modalConfig } from '../../shared/models/constants';
import { MatDialog } from '@angular/material/dialog';
import { EventPopupAddComponent } from '../../dashboard/components/event-popup-add/event-popup-add.component';
import { EventPopupJoinComponent } from '../../dashboard/components/event-popup-join/event-popup-join.component';

@Injectable()
export class EventsEffects {

    openAddEventModal$ = createEffect(() => this.actions$.pipe(
        ofType(openAddEventModal),
        mergeMap((action) => {
            const dialogRef = this.dialog.open(EventPopupAddComponent, {
                ...modalConfig,
                data: {eventData: null}
            });
            return dialogRef.afterClosed();
        }),
        map((result: any) => {
            if (result === undefined || !result) {
                return closeAddEventModal();
            }
            return addNewEvent({ eventData: result });
        })
    ));

    openEditEventModal$ = createEffect(() => this.actions$.pipe(
        ofType(openEditEventModal),
        mergeMap((action) => {
            const dialogRef = this.dialog.open(EventPopupAddComponent, {
                ...modalConfig,
                data: {eventData: action.eventData}
            });
            return dialogRef.afterClosed();
        }),
        map((result: any) => {
            if (result === undefined || !result) {
                return closeEditEventModal();
            }
            return updateEvent({ eventData: result });
        })
    ));

    openAddCharacterToEventModal$ = createEffect(() => this.actions$.pipe(
        ofType(openAddCharacterToEventModal),
        mergeMap((action) => {
            const dialogRef = this.dialog.open(EventPopupJoinComponent, {
                ...modalConfig,
                data: action.eventData
            });
            return dialogRef.afterClosed();
        }),
        map((result: any) => {
            if (result === undefined || !result) {
                return closeAddCharacterToEventModal();
            }
            // return updateEvent({ eventData: result });
        })
    ));

    getEvents$ = createEffect(() => this.actions$.pipe(
      ofType(getEvents),
      switchMap((action) => {
        return this.db.collection<EventModel>('event')
        .valueChanges({ idField: 'docId'})
        .pipe(
          map((data) => {
            return getEventsSuccess({eventsList: data});
          }),
          catchError(() => of(getEventsFail()))
        );
      })
    ));

    addNewEvent$ = createEffect(() => this.actions$.pipe(
        ofType(addNewEvent),
        switchMap((action) => {
            return of(this.db.collection<EventModel>('event').add({...action.eventData}))
                .pipe(
                    map((data) => {
                        return addNewEventSuccess();
                    }),
                    catchError(() => of(addNewEventFail()))
                );
        })
    ));

    updateEvent$ = createEffect(() => this.actions$.pipe(
        ofType(updateEvent),
        switchMap((action) => {
            return of(this.db.collection<EventModel>('event').doc(action.eventData.docId).update(action.eventData))
                .pipe(
                    map((data) => {
                        return updateEventSuccess();
                    }),
                    catchError(() => of(updateEventFail()))
                );
        })
    ));


    deleteEvent$ = createEffect(() => this.actions$.pipe(
        ofType(deleteEvent),
        switchMap((action) => {
            return of(this.db.collection<EventModel>('event').doc(action.eventData.docId).delete())
                .pipe(
                    map((data) => {
                        return deleteEventSuccess();
                    }),
                    catchError(() => of(deleteEventFail()))
                );
        })
    ));


    addCharacterToEvent$ = createEffect(() => this.actions$.pipe(
        ofType(addCharacterToEvent),
        withLatestFrom(this.store$.pipe(select(selectSelectedEvent))),
        switchMap(([action, selectedEvent]) => {
            return of(this.db.collection('event').doc(selectedEvent.docId)
                .update({...selectedEvent, raidGroup: [...selectedEvent.raidGroup, action.character]}))
                .pipe(
                    map((data) => {
                        return addCharacterToEventSuccess();
                    }),
                    catchError(() => of(addCharacterToEventFail()))
                );
        })
    ));

    deleteCharacterFromEvent$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCharacterFromEvent),
        withLatestFrom(this.store$.pipe(select(selectSelectedEvent))),
        switchMap(([action, selectedEvent]) => {
            const updateRaidGroup = selectedEvent.raidGroup.filter(val => val.docId !== action.character.docId);
            return of(this.db.collection('event').doc(selectedEvent.docId)
                .update({...selectedEvent, raidGroup: [...updateRaidGroup]}))
                .pipe(
                    map((data) => {
                        return deleteCharacterFromEventSuccess();
                    }),
                    catchError(() => of(deleteCharacterFromEventFail()))
                );
        })
    ));

    openDeleteEventConfirmationModal$ = createEffect(() => this.actions$.pipe(
        ofType(openDeleteEventConfirmationModal),
        tap((action) => {
            const modalData: ConfirmDialogModel = {
                title: 'Удалить событие?',
                message: `Событие "${action.eventData.title}" будет удален. Все игроки получат оповещение об отмене события. Подтвердите удаление события.`
            };
            const confirmSubscr = this.modalService.confirmDialog(modalData).subscribe((res) => {
                confirmSubscr.unsubscribe();
                if (res) {
                    this.store$.dispatch(deleteEvent({eventData: action.eventData}));
                } else {
                    this.store$.dispatch(closeDeleteEventConfirmationModal());
                }
            });

        })), {dispatch: false});

  constructor(
    private actions$: Actions,
    private dialog: MatDialog,
    private db: AngularFirestore,
    private store$: Store<CoreState>,
    private modalService: ModalService
  ) {}
}
