import { Component, OnInit, ChangeDetectionStrategy, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  classOfCharactersConstnt,
  raceOfCharactersConstnt,
  fractionOfCharactersConstnt,
  sexOfCharactersConstnt
} from '../../../shared/models/constants';
import { Character } from '../../../shared/models/blog.model';
import { map } from 'rxjs/internal/operators/map';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterModalComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  characterForm: FormGroup;
  characterData: Character = null;
  classOfCharacters = classOfCharactersConstnt;
  raceOfCharacters = raceOfCharactersConstnt;
  fractionOfCharacters = fractionOfCharactersConstnt;
  sexOfCharacters = sexOfCharactersConstnt;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CharacterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {chracterData: Character}) {
      this.characterData = data.chracterData;
  }

  ngOnInit() {
    this.initForm();
    this.updateFormParams();
  }

  get isEditMod () {
    return !!this.characterData;
  }

  get classControlValue () {
    return this.characterForm.get('classId').value;
  }

  private initForm(): void {
    this.characterForm = this.fb.group({
      name: [this.characterData ? this.characterData.name : '' , [Validators.required]],
      equipmentLevel: [this.characterData ? this.characterData.equipmentLevel : '' , [Validators.required]],
      sexId: [this.characterData ? this.characterData.sexId : '' , [Validators.required]],
      fractionId: [this.characterData ? this.characterData.fractionId : '' , [Validators.required]],
      classId: [this.characterData ? this.characterData.classId : '' , [Validators.required]],
      raceId: [this.characterData ? this.characterData.raceId : '' , [Validators.required]]
    });
  }

  // TODO: not work on update existing character
  updateFormParams () {
    this.subscription.add(
      this.characterForm.get('fractionId').valueChanges.pipe(
        map(val => {
          console.log(val);
          this.raceOfCharacters = [...raceOfCharactersConstnt].filter(char => char.fraction.includes(val));
          console.log(this.raceOfCharacters);
          return val;
        })
      ).subscribe(x => console.log('sub', x))
    );

    /// TODO: fix if user select class and then change
    this.subscription.add(
      this.characterForm.get('classId').valueChanges.pipe().subscribe(x => {
        const classOfChar = Array.from([...classOfCharactersConstnt].filter(classid => classid.id === x)[0].parent);
        let items = [];
        classOfChar.forEach(i => items.push(i));

        this.raceOfCharacters = [...this.raceOfCharacters].filter(char => items.some(i => i === char.id));
      })
    );
  }

  getUrl(iconType: string, iconName: string) {
    return `../../../assets/img/${iconType}/${iconName}`;
  }

  addNewCharacter() {
    if (this.characterForm.valid) {
      const formValue = this.characterForm.value;
      this.dialogRef.close(formValue);
    } else {
      this.characterForm.markAllAsTouched();
    }
  }

  updateCharacter(): void {
    if (this.characterForm.valid) {
      const formValue = this.characterForm.value;
      this.dialogRef.close({...formValue, docId: this.characterData.docId});
    } else {
      this.characterForm.markAllAsTouched();
    }
  }

  updateRoleOrder(data) {
    console.log(data);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
