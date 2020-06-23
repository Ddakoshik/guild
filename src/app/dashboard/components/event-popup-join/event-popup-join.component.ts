import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { Observable, Subscription } from 'rxjs';
import { GoogleAuthInfo } from '../../../shared/models/auth.model';
import { raidLocationsConstnt, reidDifficultyArrayConst } from '../../../shared/models/constants';
import { select, Store } from '@ngrx/store';
import { CoreState } from '../../../store/reducers';
import { getCharacters } from '../../../store/actions';
import { selectDPSCharts, selectHealCharts, selectTankCharts } from '../../../store/selectors';
import {map, switchMap, take, tap} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { EventModel } from '../../../shared/models/event.model';

@Component({
  selector: 'app-event-popup-join',
  templateUrl: './event-popup-join.component.html',
  styleUrls: ['./event-popup-join.component.scss']
})
export class EventPopupJoinComponent implements OnInit, OnDestroy {
  insightForm: FormGroup;
  user: GoogleAuthInfo;
  raidLocations = raidLocationsConstnt;
  reidDifficultyArray = reidDifficultyArrayConst;
  subscriptions: Subscription[] = [];

  tanks$: Observable<any>;
  dps$: Observable<any>;
  heals$: Observable<any>;

  private eventCollection: AngularFirestoreCollection<EventModel>;

  constructor(
     private store$: Store<CoreState>,
     private afs: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initForm();
  }

  ngOnInit() {
    this.store$.dispatch(getCharacters());
    this.eventCollection = this.afs.collection<EventModel>('event');

    this.heals$ = this.store$.pipe(select(selectHealCharts)).pipe(map(
      char => {
        console.log('char', char);
        const heals = [];
        char.map((c, index) => {

          if (c.builds.length && char[index].fractionId === this.data.reidLeader.character.fractionId
            && !this.data.raidGroup.some(chr => chr.docId === char[index].docId)) {
            heals.push({
                name: char[index].name,
                className: char[index].className,
                docId: char[index].docId,
                authUserEmail: char[index].authUserEmail
            });
          }
        });
        return heals;
      }
    ));

    this.dps$ = this.store$.pipe(select(selectDPSCharts)).pipe(map(
      char => {
        const dps = [];
        char.map((c, index) => {
          if (c.builds.length && char[index].fractionId === this.data.reidLeader.character.fractionId
            && !this.data.raidGroup.some(chr => chr.docId === char[index].docId)) {
            dps.push({
                name: char[index].name,
                className: char[index].className,
                docId: char[index].docId,
                authUserEmail: char[index].authUserEmail
            });
          }
        });
        return dps;
      }
    ));

     this.tanks$ = this.store$.pipe(select(selectTankCharts)).pipe(map(
       char => {
         const tanks = [];
         char.map((c, index) => {
           if (c.builds.length && char[index].fractionId === this.data.reidLeader.character.fractionId
             && !this.data.raidGroup.some(chr => chr.docId === char[index].docId)) {
             tanks.push({
                 name: char[index].name,
                 className: char[index].className,
                 docId: char[index].docId,
                 authUserEmail: char[index].authUserEmail
             });
           }
         });
          return tanks;
       }
     ));
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

  submit() {

  }

  update() {

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sbs => sbs.unsubscribe());
  }

  addCharacter(char, speck: string) {
    let flag = false;
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
    ).subscribe();
    console.log('addCharacter', speck, char); // TODO: remove console.log
  }
}
