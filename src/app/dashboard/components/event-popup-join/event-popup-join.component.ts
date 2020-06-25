import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { Observable, Subscription } from 'rxjs';
import { raidLocationsConstnt, reidDifficultyArrayConst } from '../../../shared/models/constants';
import { select, Store } from '@ngrx/store';
import { CoreState } from '../../../store/reducers';
import { getCharacters } from '../../../store/actions';
import {
  selectDPSCharts,
  selectEventbyId, selectEventbyIdDps,
  selectEventbyIdHeal, selectEventbyIdTank,
  selectHealCharts,
  selectTankCharts, selectUserEmail
} from '../../../store/selectors';
import { map, switchMap, take } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { EventModel } from '../../../shared/models/event.model';

@Component({
  selector: 'app-event-popup-join',
  templateUrl: './event-popup-join.component.html',
  styleUrls: ['./event-popup-join.component.scss']
})
export class EventPopupJoinComponent implements OnInit, OnDestroy {
  insightForm: FormGroup;
  user$: Observable<any>;
  raidLocations = raidLocationsConstnt;
  reidDifficultyArray = reidDifficultyArrayConst;
  subscriptions: Subscription[] = [];

  tanks$: Observable<any>;
  dps$: Observable<any>;
  heals$: Observable<any>;

  eventTanks$: Observable<any[]>;
  eventHeals$: Observable<any[]>;
  eventDps$: Observable<any[]>;
  raidGroup$: Observable<any[]>;

  private eventCollection: AngularFirestoreCollection<EventModel>;

  constructor(
     private store$: Store<CoreState>,
     private afs: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initForm();
  }

  ngOnInit() {
     this.user$ = this.store$.pipe(select(selectUserEmail));

     this.store$.dispatch(getCharacters());
     this.eventCollection = this.afs.collection<EventModel>('event');

     this.heals$ = this.store$.pipe(select(selectHealCharts)).pipe(map(
        char => this.getCharStructureArray(char)
     ));

     this.dps$ = this.store$.pipe(select(selectDPSCharts)).pipe(map(
        char => this.getCharStructureArray(char)
     ));

     this.tanks$ = this.store$.pipe(select(selectTankCharts)).pipe(map(
         char => this.getCharStructureArray(char)
     ));
     this.eventHeals$ = this.store$.pipe(select(selectEventbyIdHeal, this.data.docId)).pipe();
     this.eventTanks$ = this.store$.pipe(select(selectEventbyIdTank, this.data.docId)).pipe();
     this.eventDps$   = this.store$.pipe(select(selectEventbyIdDps, this.data.docId)).pipe();
     this.raidGroup$  = this.store$.pipe(select(selectEventbyId, this.data.docId)).pipe(
       map((Event: EventModel) => Event.raidGroup)
     );
  }


  getCharStructureArray(char) {
      const returnCharArray = [];
      char.map((c, index) => {
          if (c.builds.length && char[index].fractionId === this.data.reidLeader.character.fractionId
              && !this.data.raidGroup.some(chr => chr.docId === char[index].docId)) {
              returnCharArray.push({
                  name: char[index].name,
                  className: char[index].className,
                  docId: char[index].docId,
                  authUserEmail: char[index].authUserEmail
              });
          }
      });
      return returnCharArray;
  }

  private initForm(): void {
    this.insightForm = new FormGroup({
      title: new FormControl(this.data ? this.data.title : '' , [Validators.required]),
      date: new FormControl(this.data ? DateTime.fromISO(this.data.date).toJSDate() : '', [Validators.required]),
      timeStart: new FormControl(this.data ? this.data.timeStart : '', [Validators.required]),
      timeEnd: new FormControl(this.data ? this.data.timeEnd : ''),

      reidLeader: new FormControl(this.data ? this.data.reidLeader : null),
      raidLocationId: new FormControl(this.data ? this.data.raidLocationId : null),
      reidDifficultId: new FormControl(this.data ? this.data.reidDifficultId : ''),
    });

    this.insightForm.get('title').disable();
    this.insightForm.get('date').disable();
    this.insightForm.get('timeStart').disable();
    this.insightForm.get('timeEnd').disable();

    this.insightForm.get('reidLeader').disable();
    this.insightForm.get('raidLocationId').disable();
    this.insightForm.get('reidDifficultId').disable();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sbs => sbs.unsubscribe());
  }

  addCharacterToEvent(char, speck: string) {
    // TODO: move to store effect
    let flag = false;
    this.subscriptions.push(
    this.afs.collection<Event>('event').doc(this.data.docId).valueChanges().pipe(
        take(1),
        switchMap((val: any) => {
          if (!flag) {
            flag = !flag;
            return this.afs.collection('event')
                .doc(this.data.docId)
                .update({...val, raidGroup: [...val.raidGroup, {...char, role: speck}] });
          }
        })
    ).subscribe());
  }

  deleteFromEvent(char) {
      // TODO: move to store effect
      let flag = false;
      this.subscriptions.push(
          this.afs.collection<Event>('event').doc(this.data.docId).valueChanges().pipe(
              take(1),
              switchMap((val: any) => {
                  const updateRaidGroup = val.raidGroup.filter(x => x.docId !== char.docId)
                  if (!flag) {
                      flag = !flag;
                      return this.afs.collection('event')
                          .doc(this.data.docId)
                          .update({...val, raidGroup: [...updateRaidGroup] });
                  }
              })
          ).subscribe());
  }
}
