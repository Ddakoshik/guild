import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private afAuth: AngularFireAuth) { }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState
      .pipe(
        take(1),
        map(authState => !!authState),
        tap(auth => {
          if (!auth) {
            this.router.navigate(['/auth']);
          }
        })
      );

  }
}

