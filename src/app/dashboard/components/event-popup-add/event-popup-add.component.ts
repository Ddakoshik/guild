import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription, Observable, of } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateTime } from 'luxon';
import { AngularFirestore } from '@angular/fire/firestore';
import { GoogleAuthInfo } from '../../../shared/models/auth.model';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../../../store/reducers';
import {characterRolesConst, raidLocationsConstnt, reidDifficultyArrayConst} from '../../../shared/models/constants';
import { EventModel } from '../../../shared/models/event.model';
import { selectGoogleAuthInfo, selectCharactersList } from '../../../store/selectors';
import { getCharacters } from '../../../store/actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-event-popup-add',
  templateUrl: './event-popup-add.component.html',
  styleUrls: ['./event-popup-add.component.scss']
})
export class EventPopupAddComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  insightForm: FormGroup;
  insightDetailsCleanText: string;
  editorLimit = 4000;
  user$: Observable<GoogleAuthInfo>;
  user: GoogleAuthInfo;

  initialEventState: EventModel;

  raidLocations = raidLocationsConstnt;
  reidDifficultyArray = reidDifficultyArrayConst;
  characterRoles = characterRolesConst;


  charactersList$: Observable<any>;

  role = [];
  minDate = new Date();

  constructor(private afs: AngularFirestore,
              private store$: Store<CoreState>,
              public dialogRef: MatDialogRef<EventPopupAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { eventData: EventModel }) { }

  get raidLocationId() {
    return this.insightForm.get('raidLocationId');
  }


  ngOnInit() {
    this.store$.dispatch(getCharacters());
    this.charactersList$ = this.store$.pipe(select(selectCharactersList));

    this.user$ = this.store$.pipe(select(selectGoogleAuthInfo));
    this.subscriptions.push(this.user$.subscribe(val => {
      this.user = val;
    }));
    this.initForm();
    if (this.data.eventData) {
      this.initialEventState = this.data.eventData;
      this.initForm();
      this.onEditForm();
    }
  }

  submit(): void {
    const utcFormat = DateTime.fromJSDate(this.insightForm.value.date).toUTC().toISO();
    const raidLocationData = raidLocationsConstnt.find(obj => obj.id === this.raidLocationId.value);

    const addNewEvent =  {
        ...this.insightForm.value,
        date: utcFormat,
        raidLocationData: raidLocationData,
        reidLeader: {
          email: this.user.email,
          nikName: this.insightForm.value.character.name,
          name: this.user.displayName,
          role: this.insightForm.value.role,
          character: {...this.insightForm.value.character, role: this.insightForm.get('role').value}
        },
        raidComposition: {
          tankNeed: this.insightForm.value.totalTanks,
          tankHave: this.insightForm.value.role === 'tank' ? 1 : 0,
          healNeed: this.insightForm.value.totalHealers,
          healHave: this.insightForm.value.role === 'heal' ? 1 : 0,
          dpsNeed: this.insightForm.value.totalDpsers,
          dpsHave: this.insightForm.value.role === 'dps' ? 1 : 0,
        },
        raidGroup: [
          {...this.insightForm.value.character, role: this.insightForm.get('role').value}
        ],
      };
    this.dialogRef.close({ ...addNewEvent });
  }

  update() {
    const utcFormat = DateTime.fromJSDate(this.insightForm.value.date).toUTC().toISO();
    const raidLocationData = raidLocationsConstnt.find(obj => obj.id === this.raidLocationId.value);

    const addNewEvent = {
        ...this.insightForm.value,
        date: utcFormat,
        raidLocationData: raidLocationData,
        reidLeader: {
          email: this.user.email,
          nikName: this.insightForm.value.character.name,
          name: this.user.displayName,
          role: this.insightForm.value.role,
          character: {...this.insightForm.value.character, role: this.insightForm.get('role').value}
        },
        raidComposition: {
          tankNeed: this.insightForm.value.totalTanks,
          tankHave: this.insightForm.value.role === 'tank' ? 1 : 0,
          healNeed: this.insightForm.value.totalHealers,
          healHave: this.insightForm.value.role === 'heal' ? 1 : 0,
          dpsNeed: this.insightForm.value.totalDpsers,
          dpsHave: this.insightForm.value.role === 'dps' ? 1 : 0,
        },
        raidGroup: [
          {...this.insightForm.value.character, role: this.insightForm.get('role').value}
        ],
      };
    this.dialogRef.close({ ...addNewEvent, docId: this.initialEventState.docId });
  }

  private initForm(): void {
    this.insightForm = new FormGroup({
      title: new FormControl(this.initialEventState ? this.initialEventState.title : '', [Validators.required]),
      date: new FormControl(this.initialEventState ? DateTime.fromISO(this.initialEventState.date).toJSDate() : '', [Validators.required]),
      timeStart: new FormControl(this.initialEventState ? this.initialEventState.timeStart : '', [Validators.required]),
      timeEnd: new FormControl(this.initialEventState ? this.initialEventState.timeEnd : ''),
      description: new FormControl(this.initialEventState ? this.initialEventState.description : ''),
      reidLeader: new FormControl(this.initialEventState ? this.initialEventState.reidLeader : null),
      raidLocationId: new FormControl(this.initialEventState ? this.initialEventState.raidLocationId : null),
      reidDifficultId: new FormControl(this.initialEventState ? this.initialEventState.reidDifficultId : ''),
      character: new FormControl(this.initialEventState ? this.initialEventState.character : ''),
      role: new FormControl({ value: this.initialEventState ? this.initialEventState.role : '', disabled: true }),
      totalTanks: new FormControl(this.initialEventState ? this.initialEventState.totalTanks : ''),
      totalHealers: new FormControl(this.initialEventState ? this.initialEventState.totalHealers : ''),
      totalDpsers: new FormControl(this.initialEventState ? this.initialEventState.totalDpsers : ''),
    });


    this.subscriptions.push(
      this.insightForm.get('character').valueChanges.pipe(
        map(chr => {
          const activeSpecs = chr.specs.active.map(activechar => activechar.spec);
          this.insightForm.get('role').enable();
           this.role = [...this.characterRoles].filter(role => activeSpecs.includes(role.value));
          return chr;
        })
      ).subscribe()
    );
  }

  onEditForm() {
    this.insightForm.get('role').enable({ onlySelf: true });
    const value = [...this.characterRoles].find(c => c.value === this.initialEventState.role);
    this.role = [value];
    this.insightForm.get('role').setValue(value.value, { onlySelf: true });

    this.charactersList$ = of([this.initialEventState.character]);
    this.insightForm.get('character').setValue(this.initialEventState.character, { onlySelf: true });
  }

  onTextAreaChanged(data): void {
    this.insightDetailsCleanText = data.text.slice(0, -1);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sbs => sbs.unsubscribe());
  }

}
