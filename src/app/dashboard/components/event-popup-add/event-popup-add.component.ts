import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateTime} from 'luxon';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GoogleAuthInfo } from '../../../shared/models/auth.model';
import { Store, select } from '@ngrx/store';
import { CoreState, selectGoogleAuthInfo } from '../../../Store/reducers';
import { raidLocationsConstnt, reidDifficultsArreyConstnt } from '../../../shared/models/constants';
import { EventModel, EventModelId } from '../../../shared/models/event.model';

@Component({
  selector: 'app-event-popup-add',
  templateUrl: './event-popup-add.component.html',
  styleUrls: ['./event-popup-add.component.css']
})
export class EventPopupAddComponent implements OnInit, OnDestroy {

  insightForm: FormGroup;
  insightDetailsCleanText: string;
  editorLimit = 4000;
  user$: Observable<GoogleAuthInfo>;
  user: GoogleAuthInfo;
  subscriptions: Subscription[] = [];

  private eventCollection: AngularFirestoreCollection<EventModel>;
  event$: Observable<EventModel>;
  initialEventState: EventModelId;

  raidLocations = raidLocationsConstnt;
  reidDifficultsArrey = reidDifficultsArreyConstnt;




  minDate = new Date();

  constructor(private afs: AngularFirestore,
              private store$: Store<CoreState>,
              public dialogRef: MatDialogRef<EventPopupAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {    }

  get raidLocetionId() {
    return this.insightForm.get('raidLocetionId');
  }


  ngOnInit() {
    this.user$ = this.store$.pipe(select(selectGoogleAuthInfo));
    this.subscriptions.push(this.user$.subscribe(val => {
      this.user = val;
    }));
    this.initForm();
    if (this.data) {
      this.eventCollection = this.afs.collection<EventModel>('event');
      this.event$ = this.eventCollection.doc<EventModel>(this.data).valueChanges();
      this.subscriptions.push(this.event$.subscribe(val => {
        this.initialEventState = {...val, id: this.data};
        this.initForm();
      }));
    }
  }

  submit(): void {
    const utcFormat = DateTime.fromJSDate(this.insightForm.value.date).toUTC().toISO();
    const raidLocetionData = raidLocationsConstnt.find(obj => obj.id === this.raidLocetionId.value);

    this.afs.collection('event').add(
      {
        ...this.insightForm.value,
        date: utcFormat,
        raidLocetionData: raidLocetionData,
        reidLider: {
          email: this.user.email,
          nikName: 'Aizik',
          name: this.user.displayName
        },
        raidComposition: {
          tankNeed: 2,
          tankHave: 2,
          healNeed: 5,
          healHave: 2,
          dpsNeed: 10,
          dpsHave: 3,
        },
      });
    this.dialogRef.close();
    // this.dialogRef.close({...this.insightForm.value, date: utcFormat });
  }

  update() {
    const utcFormat = DateTime.fromJSDate(this.insightForm.value.date).toUTC().toISO();
    const raidLocetionData = raidLocationsConstnt.find(obj => obj.id === this.raidLocetionId.value);

    this.afs.collection('event').doc(this.initialEventState.id).update(
      {
        ...this.insightForm.value,
        date: utcFormat,
        raidLocetionData: raidLocetionData,
        reidLider: {
          email: this.user.email,
          nikName: 'Aizik',
          name: this.user.displayName
        },
        raidComposition: {
          tankNeed: 2,
          tankHave: 2,
          healNeed: 5,
          healHave: 2,
          dpsNeed: 10,
          dpsHave: 3,
        },
      });
    this.dialogRef.close();
  }






  private initForm(): void {
    this.insightForm = new FormGroup({
      title: new FormControl(this.initialEventState ? this.initialEventState.title : '' , [Validators.required]),
      date: new FormControl(this.initialEventState ? DateTime.fromISO(this.initialEventState.date).toJSDate() : '', [Validators.required]),
      timeStart: new FormControl(this.initialEventState ? this.initialEventState.timeStart : '', [Validators.required]),
      timeEnd: new FormControl(this.initialEventState ? this.initialEventState.timeEnd : ''),
      description: new FormControl(this.initialEventState ? this.initialEventState.description : ''),
      reidLider: new FormControl(this.initialEventState ? this.initialEventState.reidLider : null),
      raidLocetionId: new FormControl(this.initialEventState ? this.initialEventState.raidLocetionId : null),
      reidDifficultId: new FormControl(this.initialEventState ? this.initialEventState.reidDifficultId : ''),
    });
  }

  onTextAreaChanged(data): void {
    this.insightDetailsCleanText = data.text.slice(0, -1);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sbs => sbs.unsubscribe());
  }

}
