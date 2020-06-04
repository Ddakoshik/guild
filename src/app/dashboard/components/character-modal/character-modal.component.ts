import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  classOfCharactersConstnt,
  raceOfCharactersConstnt,
  fractionOfCharactersConstnt,
  sexOfCharactersConstnt
} from '../../../shared/models/constants';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterModalComponent implements OnInit {

  characterForm: FormGroup;
  characterData: any;
  classOfCharacters = classOfCharactersConstnt;
  raceOfCharacters = raceOfCharactersConstnt;
  fractionOfCharacters = fractionOfCharactersConstnt;
  sexOfCharacters = sexOfCharactersConstnt;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CharacterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.characterData = data.chracterData;
      console.log('data', data.chracterData);
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.characterForm = this.fb.group({
      name: [this.characterData ? this.characterData.name : '' , [Validators.required]],
      sex: [this.characterData ? this.characterData.sex.id : '' , [Validators.required]],
      fraction: [this.characterData ? this.characterData.fraction.id : '' , [Validators.required]],
      class: [this.characterData ? this.characterData.class.id : '' , [Validators.required]],
      race: [this.characterData ? this.characterData.race.id : '' , [Validators.required]],
      equipmentLevel: [this.characterData ? this.characterData.equipmentLevel : '' , [Validators.required]],
    });
  }

  getUrl(iconType: string, iconName: string) {
    return `../../../assets/img/${iconType}/${iconName}`;
  }

  // this.testInput = this.fb.group({
  //   hello: [null, { validators: [Validators.required], updateOn: 'blur' }]

  // - Игровой никнейм (Text Input)
  // - Уровень предметов (Text Input)
  // - Игровой клас (Select + Img)
  // - Игровая раса (Select + Img)

}
