import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { MainAction,
    LoginWithGoogleAction,
    LoginWithGoogleFailAction,
    LoginWithGoogleSuccessAction,
    LogoutFromPlatformAction,
    LogoutFromPlatformSuccessAction,
    LogoutFromPlatformFailAction } from '../action/main.actions';
import * as firebase from 'firebase/app';


@Injectable()
export class MainEffect {

    constructor(
        private actions$: Actions,
        private _firebaseAuth: AngularFireAuth,
        private router: Router) {}



    @Effect()
    loginWithGoogle$ = this.actions$.pipe(
    ofType<LoginWithGoogleAction>(MainAction.LoginWithGoogle),
    switchMap(() => {
        return Observable.fromPromise(this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())).pipe(
            switchMap((data) => {
                console.log(data.additionalUserInfo.profile);
                this.router.navigate(['/']);
                return [new LoginWithGoogleSuccessAction(data.additionalUserInfo.profile)];
            }),
            catchError(() => of(new LoginWithGoogleFailAction())));
    }));


    @Effect()
    LogoutFromPlatform$ = this.actions$.pipe(
    ofType<LogoutFromPlatformAction>(MainAction.LogoutFromPlatform),
    switchMap(() => {
        return Observable.fromPromise(this._firebaseAuth.auth.signOut()).pipe(
            switchMap(() => {
                this.router.navigate(['/auth']);
                return [new LogoutFromPlatformSuccessAction()];
            }),
            catchError(() => of(new LogoutFromPlatformFailAction())));
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
