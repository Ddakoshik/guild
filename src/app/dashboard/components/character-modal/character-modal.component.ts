import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CharacterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  ngOnInit() {
  }

}
