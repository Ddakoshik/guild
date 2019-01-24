import { Action } from '@ngrx/store';

export enum AuthActionTypes {

  // Auth action
  LoginWithGoogle = '[Auth page] Login With Google',
  LoginWithGoogleSuccess = '[Auth page] Login With Google Success',
  LoginWithGoogleFail = '[Auth page] Login With Google Fail',

  LogoutFromPlatform = '[Main page] Logout From Platform',
  LogoutFromPlatformSuccess = '[Main page] Logout From Platform Success',
  LogoutFromPlatformFail = '[Main page] Logout From Platform Fail',

  GetGoogleUserInfo = '[Auth page] Get User Info',
  GetGoogleUserInfoSuccess = '[Auth page] Get User Info Success',
  GetGoogleUserInfoFail = '[Auth page] Get User Info Fail',

}

export class LoginWithGoogleAction implements Action {
  readonly type = AuthActionTypes.LoginWithGoogle;
}
export class LoginWithGoogleSuccessAction implements Action {
  readonly type = AuthActionTypes.LoginWithGoogleSuccess;
  constructor(public payload ) {}
}
export class LoginWithGoogleFailAction implements Action {
  readonly type = AuthActionTypes.LoginWithGoogleFail;
}

export class LogoutFromPlatformAction implements Action {
  readonly type = AuthActionTypes.LogoutFromPlatform;
}
export class LogoutFromPlatformSuccessAction implements Action {
  readonly type = AuthActionTypes.LogoutFromPlatformSuccess;
}
export class LogoutFromPlatformFailAction implements Action {
  readonly type = AuthActionTypes.LogoutFromPlatformFail;
}

export class GetGoogleUserInfoAction implements Action {
  readonly type = AuthActionTypes.GetGoogleUserInfo;
}
export class GetGoogleUserInfoSuccessAction implements Action {
  readonly type = AuthActionTypes.GetGoogleUserInfoSuccess;
  constructor(public payload ) {}
}
export class GetGoogleUserInfoFailAction implements Action {
  readonly type = AuthActionTypes.GetGoogleUserInfoFail;
}


export type AuthAction =
LoginWithGoogleAction
| LoginWithGoogleSuccessAction
| LoginWithGoogleFailAction
| LogoutFromPlatformAction
| LogoutFromPlatformSuccessAction
| LogoutFromPlatformFailAction
| GetGoogleUserInfoAction
| GetGoogleUserInfoSuccessAction
| GetGoogleUserInfoFailAction;
