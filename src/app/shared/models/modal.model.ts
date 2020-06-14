export class ConfirmDialogModel {
    title?: string;
    message?: string;
    btnOkText?: string;
    btnOkClass?: string;
    btnCancelText?: string;
    btnCancelClass?: string;

    constructor(data: Partial<ConfirmDialogModel> = {}) {
      Object.assign(this, data);
    }
  }
