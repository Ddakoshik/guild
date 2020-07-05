import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { raidLocationsConstnt, reidDifficultyArrayConst } from '../../../shared/models/constants';
import { select, Store } from '@ngrx/store';
import { CoreState } from '../../../store/reducers';
import { getCharacters, addCharacterToEvent, deleteCharacterFromEvent } from '../../../store/actions';
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
import { Character } from '../../../shared/models/blog.model';

@Component({
  selector: 'app-event-popup-join',
  templateUrl: './event-popup-join.component.html',
  styleUrls: ['./event-popup-join.component.scss']
})
export class EventPopupJoinComponent implements OnInit, OnDestroy {
  insightForm: FormGroup;
  userEmail$: Observable<string>;
  raidLocations = raidLocationsConstnt;
  reidDifficultyArray = reidDifficultyArrayConst;
  subscriptions: Subscription[] = [];

  tanks$: Observable<any>;
  dps$: Observable<any>;
  heals$: Observable<any>;

  eventTanks$: Observable<any>;
  eventHeals$: Observable<any>;
  eventDps$: Observable<any>;
  raidGroup$: Observable<any>;
  useremail: string;

  constructor(
     private store$: Store<CoreState>,
     private afs: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public data: EventModel) {
      console.log(data);
    this.initForm();
  }

  ngOnInit() {

    this.store$.dispatch(getCharacters());
    this.userEmail$ = this.store$.pipe(select(selectUserEmail));
    this.subscriptions.push(
      this.userEmail$.subscribe(user => this.useremail = user)
    );

    this.eventHeals$ = this.store$.pipe(select(selectEventbyIdHeal, this.data.docId)).pipe();
    this.eventTanks$ = this.store$.pipe(select(selectEventbyIdTank, this.data.docId)).pipe();
    this.eventDps$   = this.store$.pipe(select(selectEventbyIdDps, this.data.docId)).pipe();
    this.raidGroup$  = this.store$.pipe(select(selectEventbyId, this.data.docId)).pipe(
      map((Event: EventModel) => Event.raidGroup)
    );

     this.heals$ = combineLatest(this.store$.pipe(select(selectHealCharts)), this.eventHeals$, this.raidGroup$).pipe(map(
        char => this.getCharStructureArray(char, 'healNeed')
     ));

     this.dps$ = combineLatest(this.store$.pipe(select(selectDPSCharts)), this.eventDps$, this.raidGroup$).pipe(map(
        char => this.getCharStructureArray(char, 'dpsNeed')
     ));

     this.tanks$ = combineLatest(this.store$.pipe(select(selectTankCharts)), this.eventTanks$, this.raidGroup$).pipe(map(
         char => this.getCharStructureArray(char, 'tankNeed')

     ));
  }


  getCharStructureArray(char, role: string) {
      const returnCharArray = [];
      char[0].map((c, index) => {
        if (c.builds.length && char[0][index].fractionId === this.data.reidLeader.character.fractionId
          && !this.data.raidGroup.some(chr => chr.docId === char[0][index].docId)) {
            returnCharArray.push({
              name: char[0][index].name,
              className: char[0][index].className,
              docId: char[0][index].docId,
              authUserEmail: char[0][index].authUserEmail
          });
        }
      });

      if (this.data.raidComposition[role] < char[1].length || char[2].some(ch => ch.authUserEmail === this.useremail)) {
        return [];
      }

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

  addCharacterToEvent(character: Character, speck: string) {
    this.store$.dispatch(addCharacterToEvent({character: {...character, role: speck}}));
  }

  deleteFromEvent(character: Character) {
    this.store$.dispatch(deleteCharacterFromEvent({character}));
    
      // TODO: move to store effect
      let flag = false;
      this.subscriptions.push(
          this.afs.collection<Event>('event').doc(this.data.docId).valueChanges().pipe(
              take(1),
              switchMap((val: any) => {
                  const updateRaidGroup = val.raidGroup.filter(x => x.docId !== character.docId);
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
