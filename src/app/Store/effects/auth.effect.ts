import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthAction,
    LoginWithGoogleAction,
    LoginWithGoogleFailAction,
    LoginWithGoogleSuccessAction,
    LogoutFromPlatformAction,
    LogoutFromPlatformSuccessAction,
    LogoutFromPlatformFailAction,
    AuthActionTypes,
    GetGoogleUserInfoAction,
    GetGoogleUserInfoSuccessAction,
    GetGoogleUserInfoFailAction} from '../actions/auth.actions';
import { auth } from 'firebase/app';
import { select, Store } from '@ngrx/store';
import { selectGoogleAuthInfo, CoreState } from '../reducers';


@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private _firebaseAuth: AngularFireAuth,
        private store$: Store<CoreState>,
        private router: Router) {}



    @Effect()
    loginWithGoogle$ = this.actions$.pipe(
    ofType<LoginWithGoogleAction>(AuthActionTypes.LoginWithGoogle),
    switchMap(() => {
        return from(this._firebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())).pipe(
            switchMap((data) => {
                console.log(data.additionalUserInfo.profile);
                this.router.navigate(['/']);
                return [new LoginWithGoogleSuccessAction(data.additionalUserInfo.profile)];
            }),
            catchError(() => of(new LoginWithGoogleFailAction())));
    }));

    @Effect()
    logoutFromPlatform$ = this.actions$.pipe(
    ofType<LogoutFromPlatformAction>(AuthActionTypes.LogoutFromPlatform),
    switchMap(() => {
        return from(this._firebaseAuth.auth.signOut()).pipe(
            switchMap(() => {
                this.router.navigate(['/auth']);
                return [new LogoutFromPlatformSuccessAction()];
            }),
            catchError(() => of(new LogoutFromPlatformFailAction())));
    }));

    @Effect()
    getGoogleUserInfo$ = this.actions$.pipe(
    ofType<GetGoogleUserInfoAction>(AuthActionTypes.GetGoogleUserInfo),
    withLatestFrom(
        this.store$.pipe(select(selectGoogleAuthInfo)),
    ),
    switchMap(([action, googleAuthInfo]) => {
        return this._firebaseAuth.authState.pipe(
            switchMap((data) => {
                return [new GetGoogleUserInfoSuccessAction(data.providerData[0])];
            }),
            catchError(() => of(new GetGoogleUserInfoFailAction())));
    }));


//     @Effect()
//    login:  Observable<Action> = this.actions.ofType(userActions.GOOGLE_LOGIN)

//        .map((action: userActions.GoogleLogin) => action.payload)
//        .switchMap(payload => {
//            return Observable.fromPromise( this.googleLogin() );
//        })
//        .map( credential => {
//            // successful login
//            return new userActions.GetUser();
//        })
//        .catch(err => {
//            return Observable.of(new userActions.AuthError({error: err.message}));
//        });


//    private googleLogin(): firebase.Promise<any> {
//        const provider = new firebase.auth.GoogleAuthProvider();
//        return this.afAuth.auth.signInWithPopup(provider);
//    }



    // signInWithGoogle() {
    //     return this._firebaseAuth.auth.signInWithPopup(
    //       new firebase.auth.GoogleAuthProvider()
    //     )
    //     .then((res) => this.router.navigate(['/']));
    //   }

    // @Effect()
    // reloadEngagement$ = this.actions$.pipe(
    // ofType(EngagementActionTypes.ReLoadEngagement),
    // withLatestFrom(
    //   this.store$.pipe(select(selectEngagement))
    // ),
    // switchMap( ([action, engagement]) => {
    //   return this.engagementApiService.getEngagement({Id: engagement.Id}).pipe(
    //     switchMap((data: Engagement) => {
    //       return [new LoadEngagementSuccessAction(data), new GetEngagementTileStatusesAction()];
    //     }),
    //     catchError(() => of(new LoadEngagementFailAction())));
    // }));


}
