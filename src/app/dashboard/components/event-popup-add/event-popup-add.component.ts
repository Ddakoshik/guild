import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateTime} from 'luxon';
import { AngularFirestore } from '@angular/fire/firestore';
import { GoogleAuthInfo } from '../../../shared/models/auth.model';
import { Store, select } from '@ngrx/store';
import { CoreState, selectGoogleAuthInfo } from '../../../Store/reducers';

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

  // allowedFileExtensions = AllowedFileExtensions;
  // uploadedAll = true;
  // categoriesList: Array<InsightCategory>;
  // files: FileUploaderFile[];
  // categoriesSelect: InsightCategory[];
  // deletedFiles: number[] = [];

  // @Input() currentUser: User;
  // @Input() clientId: User;
  // @Input() startUpload: User;
  // @Input() settings: AppSettings;
  @Input() initialState: any;
  // @Output() action: EventEmitter<any> = new EventEmitter();

  // get tags(): Tag[] {
  //   return this.categoriesSelect.map(item => new Tag({
  //     id: item.Id,
  //     name: item.Name
  //   }));
  // }

  minDate = new Date();

  constructor(private afs: AngularFirestore,
              private store$: Store<CoreState>,
              public dialogRef: MatDialogRef<EventPopupAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {    }


  ngOnInit() {
    this.user$ = this.store$.pipe(select(selectGoogleAuthInfo));
    this.subscriptions.push(this.user$.subscribe(val => {
      this.user = val;
    }));
    this.initForm();
  }

  submit(): void {
    const utcFormat = DateTime.fromJSDate(this.insightForm.value.date).toUTC().toISO();
    // const utcFormat2 = DateTime.fromISO(utcFormat).toLocaleString(DateTime.DATETIME_FULL);

    this.afs.collection('event').add(
      {
        ...this.insightForm.value,
        date: utcFormat,
        reidLider: {
          email: this.user.email,
          nikName: 'Aizik',
          name: this.user.displayName
        },
        raidName: {
          id: 2,
          shortName: 'ГС',
          reidDifficult: 'гер',
          fullname: 'Гробница Саргераса'
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






  private initForm(): void {
    this.insightForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl(''),
      description: new FormControl(''),
      location: new FormControl(''),
      raidName: new FormControl(''),
      raidLiderName: new FormControl(''),
    });
  }

  onTextAreaChanged(data): void {
    this.insightDetailsCleanText = data.text.slice(0, -1);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sbs => sbs.unsubscribe());
  }

}
