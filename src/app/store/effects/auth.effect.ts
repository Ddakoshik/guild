import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, take, withLatestFrom } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {
  LoginWithGoogleAction,
  LoginWithGoogleFailAction,
  LoginWithGoogleSuccessAction,
  LogoutFromPlatformAction,
  LogoutFromPlatformSuccessAction,
  LogoutFromPlatformFailAction,
  AuthActionTypes,
  GetGoogleUserInfoAction,
  GetGoogleUserInfoSuccessAction,
  GetGoogleUserInfoFailAction
} from '../actions/auth.actions';
import { select, Store } from '@ngrx/store';
import { CoreState } from '../reducers';
import { selectGoogleAuthInfo } from '../selectors';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly firebaseAuth = inject(AngularFireAuth);
  private readonly store$ = inject(Store<CoreState>);
  private readonly router = inject(Router);

  loginWithGoogle$ = createEffect(() => this.actions$.pipe(
    ofType<LoginWithGoogleAction>(AuthActionTypes.LoginWithGoogle),
    switchMap(() => from(this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())).pipe(
      map((data) => {
        this.router.navigate(['/']);
        return new LoginWithGoogleSuccessAction(data?.additionalUserInfo?.profile ?? data?.user?.providerData?.[0]);
      }),
      catchError(() => of(new LoginWithGoogleFailAction()))
    ))
  ));

  logoutFromPlatform$ = createEffect(() => this.actions$.pipe(
    ofType<LogoutFromPlatformAction>(AuthActionTypes.LogoutFromPlatform),
    switchMap(() => from(this.firebaseAuth.signOut()).pipe(
      map(() => {
        this.router.navigate(['/auth']);
        return new LogoutFromPlatformSuccessAction();
      }),
      catchError(() => of(new LogoutFromPlatformFailAction()))
    ))
  ));

  getGoogleUserInfo$ = createEffect(() => this.actions$.pipe(
    ofType<GetGoogleUserInfoAction>(AuthActionTypes.GetGoogleUserInfo),
    withLatestFrom(this.store$.pipe(select(selectGoogleAuthInfo))),
    switchMap(() => this.firebaseAuth.authState.pipe(
      take(1),
      map((data) => new GetGoogleUserInfoSuccessAction(data?.providerData?.[0] ?? null)),
      catchError(() => of(new GetGoogleUserInfoFailAction()))
    ))
  ));
}
