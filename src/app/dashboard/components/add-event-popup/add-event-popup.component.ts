import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateTime, Settings} from 'luxon';

@Component({
  selector: 'app-add-event-popup',
  templateUrl: './add-event-popup.component.html',
  styleUrls: ['./add-event-popup.component.css']
})
export class AddEventPopupComponent implements OnInit {

  insightForm: FormGroup;
  insightDetailsCleanText: string;
  editorLimit = 4000;
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

  constructor(
    public dialogRef: MatDialogRef<AddEventPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    // this.categoriesList = this.settings.InsightCategories;
    // this.categoriesSelect = this.initialState.Categories.map((cat: InsightCategory) => cat);
    // this.files = this.initialState.Files.map((file: InsightFile) => new FileUploaderFile(file));
    this.initForm();
  }

  submit(): void {
    const utcFormat1 = DateTime.fromJSDate(this.insightForm.value.date).toUTC().toISO();
    console.log(utcFormat1);

    const utcFormat2 = DateTime.fromISO(utcFormat1).toLocaleString(DateTime.DATETIME_FULL);
    console.log(utcFormat2);

    console.log(this.insightForm.value);
    // this.uploadedAll = false;
    // this.insightForm.disable();
    // this.action.emit({ action: 'save', data: new InsightCreateModel({...this.insightForm.value, deletedFiles: this.deletedFiles })});
  }

  cancel(): void {
    // if (this.uploadedAll) {
    //   this.action.emit({ action: 'cancel', data: {} });
    // }
  }



  private initForm(): void {
    this.insightForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      location: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      authorName: new FormControl('Andrii'),
      description: new FormControl(''),
    });
  }

  // canDeactivateFromHostListener(): Promise<boolean> | boolean {
  //   return this.uploadedAll;
  // }

  onTextAreaChanged(data): void {
    this.insightDetailsCleanText = data.text.slice(0, -1);
  }



}
