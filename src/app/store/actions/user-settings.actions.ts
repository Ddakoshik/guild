import { Action } from '@ngrx/store';

export enum UserSettingsActionTypes {

  LoadInformationDetails = '[User Information] Load Information Details',
  LoadInformationDetailsSuccess = '[User Information] Load Information Details Success',
  LoadInformationDetailsFail = '[User Information] Load Information Details Fail',

}

export class LoadInformationDetailsAction implements Action {
  readonly type = UserSettingsActionTypes.LoadInformationDetails;
}
export class LoadInformationDetailsSuccessAction implements Action {
  readonly type = UserSettingsActionTypes.LoadInformationDetailsSuccess;
  constructor(public payload ) {}
}
export class LoadInformationDetailsFailAction implements Action {
  readonly type = UserSettingsActionTypes.LoadInformationDetailsFail;
}


export type UserSettingsActions =
| LoadInformationDetailsAction
| LoadInformationDetailsSuccessAction
| LoadInformationDetailsFailAction;
