import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { ConfirmDialogModel } from '../../models/modal.model';

@Component({
  selector: 'app-comfirmation-modal-material',
  templateUrl: './comfirmation-modal-material.component.html',
  styleUrls: ['./comfirmation-modal-material.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComfirmationModalMaterialComponent implements OnInit {
  message: string;
  title: string;

  constructor(public dialogRef: MatDialogRef<ComfirmationModalMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

