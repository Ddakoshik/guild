import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { Observable, Subscription } from 'rxjs';
import { GoogleAuthInfo } from '../../../shared/models/auth.model';
import { raidLocationsConstnt, reidDifficultsArreyConstnt } from '../../../shared/models/constants';
import { EventModelId } from '../../../shared/models/event.model';
import { select, Store } from '@ngrx/store';
import { CoreState } from '../../../store/reducers';
import { getCharacters } from '../../../store/actions/user-profile.action';
import { selectDPSCharts, selectHealCharts, selectTankCharts } from '../../../store/selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-event-popup-join',
  templateUrl: './event-popup-join.component.html',
  styleUrls: ['./event-popup-join.component.scss']
})
export class EventPopupJoinComponent implements OnInit, OnDestroy {
  insightForm: FormGroup;
  user: GoogleAuthInfo;
  raidLocations = raidLocationsConstnt;
  reidDifficultsArrey = reidDifficultsArreyConstnt;
  subscriptions: Subscription[] = [];

  user$: Observable<GoogleAuthInfo>;
  userProfileData$: Observable<any>;
  charactersList$: Observable<any>;
  tanks$: Observable<any>;
  dps$: Observable<any>;
  heals$: Observable<any>;

  constructor(
     private store$: Store<CoreState>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initForm();
  }

  ngOnInit() {
    this.store$.dispatch(getCharacters());

    this.heals$ = this.store$.pipe(select(selectHealCharts)).pipe(map(
      char => {
        const heals = [];
        char.map((c, index) => {
          if (c.builds.length && char[index].fractionId === this.data.reidLider.character.fractionId) {
            heals.push({name: char[index].name, className: char[index].className});
          }
        });
        return heals;
      }
    ));

    this.dps$ = this.store$.pipe(select(selectDPSCharts)).pipe(map(
      char => {
        const dps = [];
        char.map((c, index) => {
          if (c.builds.length && char[index].fractionId === this.data.reidLider.character.fractionId) {
            dps.push({name: char[index].name, className: char[index].className});
          }
        });
        return dps;
      }
    ));

     this.tanks$ = this.store$.pipe(select(selectTankCharts)).pipe(map(
       char => {
         const tanks = [];
         char.map((c, index) => {
           if (c.builds.length && char[index].fractionId === this.data.reidLider.character.fractionId) {
             tanks.push({name: char[index].name, className: char[index].className});
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

      reidLider: new FormControl(this.data ? this.data.reidLider : null),
      raidLocetionId: new FormControl(this.data ? this.data.raidLocetionId : null),
      reidDifficultId: new FormControl(this.data ? this.data.reidDifficultId : ''),
    });

    this.insightForm.get('title').disable();
    this.insightForm.get('date').disable();
    this.insightForm.get('timeStart').disable();
    this.insightForm.get('timeEnd').disable();

    this.insightForm.get('reidLider').disable();
    this.insightForm.get('raidLocetionId').disable();
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
    console.log('addCharacter', speck, char);
  }

}
