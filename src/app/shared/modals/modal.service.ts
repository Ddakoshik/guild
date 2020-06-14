import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { ConfirmDialogModel } from '../models/modal.model';
import { ComfirmationModalMaterialComponent } from './comfirmation-modal-material/comfirmation-modal-material.component';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable()
export class ModalService {

//   constructor(private modalService: NgbModal) { }

//   public confirm(
//     title: string,
//     message: string,
//     btnOkText: string = 'OK',
//     btnCancelText: string = 'Cancel',
//     dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
//     const modalRef = this.modalService.open(ComfirmationModalMaterialComponent, { size: dialogSize });
//     modalRef.componentInstance.title = title;
//     modalRef.componentInstance.message = message;
//     modalRef.componentInstance.btnOkText = btnOkText;
//     modalRef.componentInstance.btnCancelText = btnCancelText;

//     return modalRef.result;
//   }


//   dialogRef: MdDialogRef<ConfirmationDialog>;

//   constructor(public dialog: MdDialog) {}

//   openConfirmationDialog() {
//     this.dialogRef = this.dialog.open(ConfirmationDialog, {
//       disableClose: false
//     });
//     this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"

//     this.dialogRef.afterClosed().subscribe(result => {
//       if(result) {
//         // do confirmation actions
//       }
//       this.dialogRef = null;
//     });
//   }

constructor(public dialog: MatDialog) {
}

confirmDialog(dialogData: ConfirmDialogModel): any {

  const dialogRef = this.dialog.open(ComfirmationModalMaterialComponent, {
    width: '600px',
    disableClose: true,
    data: dialogData
  });

  return dialogRef.afterClosed();
//   return dialogRef.afterClosed().subscribe(dialogResult => {
//     return dialogResult;
//   });
}

}



