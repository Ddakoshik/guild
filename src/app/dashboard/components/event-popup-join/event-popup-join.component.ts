import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { Observable, Subscription } from 'rxjs';
import { GoogleAuthInfo } from '../../../shared/models/auth.model';
import { raidLocationsConstnt, reidDifficultsArreyConstnt } from '../../../shared/models/constants';

@Component({
  selector: 'app-event-popup-join',
  templateUrl: './event-popup-join.component.html',
  styleUrls: ['./event-popup-join.component.scss']
})
export class EventPopupJoinComponent implements OnInit {
  insightForm: FormGroup;
  user: GoogleAuthInfo;
  raidLocations = raidLocationsConstnt;
  reidDifficultsArrey = reidDifficultsArreyConstnt;
  subscriptions: Subscription[] = [];

  constructor(
    // private store$: Store<CoreState>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initForm();
  }

  ngOnInit() {
    // this.user$ = this.store$.pipe(select(selectGoogleAuthInfo));
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

}
