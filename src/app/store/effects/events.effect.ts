import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap, mergeMap } from 'rxjs/operators';
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
    updateEventFail, updateEventSuccess
} from '../actions';
import { AngularFirestore } from '@angular/fire/firestore';
import { CoreState } from '../reducers';
import { Store} from '@ngrx/store';
import { of } from 'rxjs';
import { EventModel } from '../../shared/models/event.model';
import { ConfirmDialogModel } from '../../shared/models/modal.model';
import { ModalService } from '../../shared/modals/modal.service';
import { modalConfig } from '../../shared/models/constants';
import { MatDialog } from '@angular/material/dialog';
import { EventPopupAddComponent } from '../../dashboard/components/event-popup-add/event-popup-add.component';

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
