import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import { User } from '@firebase/auth-types';
@Injectable()
export class AuthService {

  private user: Observable<User>;
  public userDetails: User = null;

  constructor(private _firebaseAuth: AngularFireAuth,
      private router: Router) {
      this.user = _firebaseAuth.authState;

  // this.user.subscribe(
  //         (user) => {
  //           if (user) {
  //             this.userDetails = user;
  //             console.log(this.userDetails);
  //             // this.router.navigate(['/dashboard']);
  //           } else {
  //             this.userDetails = null;
  //             // this.router.navigate(['/auth']);
  //           }
  //         }
  //       );
  }


  // signInWithGoogle() {
  //   return this._firebaseAuth.auth.signInWithPopup(
  //     new firebase.auth.GoogleAuthProvider()
  //   )
  //   .then((res) => this.router.navigate(['/']));
  // }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }

  logout() {
      this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/auth']));
    }
}
