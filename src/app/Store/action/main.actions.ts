import { Action } from '@ngrx/store';

export enum MainAction {

  // Auth action
  LoginWithGoogle = '[Auth page] Login With Google',
  LoginWithGoogleSuccess = '[Auth page] Login With Google Success',
  LoginWithGoogleFail = '[Auth page] Login With Google Fail',

  LogoutFromPlatform = '[Main page] Logout From Platform',
  LogoutFromPlatformSuccess = '[Main page] Logout From Platform Success',
  LogoutFromPlatformFail = '[Main page] Logout From Platform Fail',

  GetUserInfo = '[Auth page] Get User Info',
  GetUserInfoSuccess = '[Auth page] Get User Info Success',
  GetUserInfoFail = '[Auth page] Get User Info Fail',


  // time meneger page
  AddNewEvent = '[Reid Event page] Add New Event',
  AddNewEventSuccess = '[Reid Event page] Add New Event Success',
  AddNewEventFail = '[Reid Event page] Add New Event Feil',

}

export class LoginWithGoogleAction implements Action {
  readonly type = MainAction.LoginWithGoogle;
}
export class LoginWithGoogleSuccessAction implements Action {
  readonly type = MainAction.LoginWithGoogleSuccess;
  constructor(public payload ) {}
}
export class LoginWithGoogleFailAction implements Action {
  readonly type = MainAction.LoginWithGoogleFail;
}

export class LogoutFromPlatformAction implements Action {
  readonly type = MainAction.LogoutFromPlatform;
}
export class LogoutFromPlatformSuccessAction implements Action {
  readonly type = MainAction.LogoutFromPlatformSuccess;
}
export class LogoutFromPlatformFailAction implements Action {
  readonly type = MainAction.LogoutFromPlatformFail;
}

export class AddNewEventAction implements Action {
  readonly type = MainAction.AddNewEvent;
}
export class AddNewEventSuccessAction implements Action {
  readonly type = MainAction.AddNewEventSuccess;
}
export class AddNewEventFailAction implements Action {
  readonly type = MainAction.AddNewEventFail;
}

export type MainActionType =
LoginWithGoogleAction
| LoginWithGoogleSuccessAction
| LoginWithGoogleFailAction
| LogoutFromPlatformAction
| LogoutFromPlatformSuccessAction
| LogoutFromPlatformFailAction
| AddNewEventAction
| AddNewEventSuccessAction
| AddNewEventFailAction;
