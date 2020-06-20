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

import { Observable, of, Subscription, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterModalComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  raceOfCharacters$: Observable<any>;

  characterForm: FormGroup;
  characterData: Character = null;
  classOfCharacters = classOfCharactersConstnt;
  fractionOfCharacters = fractionOfCharactersConstnt;
  sexOfCharacters = sexOfCharactersConstnt;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CharacterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { chracterData: Character }) {
    this.characterData = data.chracterData;
  }

  ngOnInit() {
    this.initForm();
  }

  get isEditMod() {
    return !!this.characterData;
  }

  get classControlValue() {
    return this.characterForm.get('classId').value;
  }

  private initForm(): void {
    this.characterForm = this.fb.group({
      name: [this.characterData ? this.characterData.name : '', [Validators.required]],
      equipmentLevel: [this.characterData ? this.characterData.equipmentLevel : '', [Validators.required]],
      sexId: [this.characterData ? this.characterData.sexId : '', [Validators.required]],
      fractionId: [this.characterData ? this.characterData.fractionId : '', [Validators.required]],
      classId: [this.characterData ? this.characterData.classId : '', [Validators.required]],
      raceId: [{ value: null, disabled: true }, [Validators.required]],
    });

    if (this.characterData) {
      this.characterForm.get('raceId').enable({ onlySelf: true });
      const value = [...raceOfCharactersConstnt].find(c => c.id == this.characterData.raceId);
      this.raceOfCharacters$ = of([value]);
      this.characterForm.get('raceId').setValue(value, { onlySelf: true });

    } else {
      this.updateFormParams();
    }
  }

  updateFormParams() {

    const fraction$ = this.characterForm.get('fractionId').valueChanges;
    const classId$ = this.characterForm.get('classId').valueChanges;

    this.raceOfCharacters$ = combineLatest([fraction$, classId$])
      .pipe(
        map(i => {
          this.characterForm.get('raceId').enable({ onlySelf: true });
          const sortbyRace = [...raceOfCharactersConstnt].filter(char => char.fraction.includes(i[0]));
          const sortbyClass = [...classOfCharactersConstnt].filter(classid => classid.id === i[1])[0].parent;
          return sortbyRace.filter(char => sortbyClass.some(a => char.id === a));
        })
      );
  }

  getUrl(iconType: string, iconName: string) {
    return `../../../assets/img/${iconType}/${iconName}`;
  }

  addNewCharacter() {
    if (this.characterForm.valid) {
      const formValue = this.characterForm.value;
      const { raceId } = this.characterForm.value;
      this.characterForm.value.raceId = raceId.id;

      this.dialogRef.close(formValue);
    } else {
      this.characterForm.markAllAsTouched();
    }
  }

  updateCharacter(): void {
    if (this.characterForm.valid) {
      const formValue = this.characterForm.value;
      const { raceId } = this.characterForm.value;
      this.characterForm.value.raceId = raceId.id;

      this.dialogRef.close({ ...formValue, docId: this.characterData.docId });
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
