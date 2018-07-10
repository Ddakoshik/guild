import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private auth: AngularFireAuth) { }

  canActivate() : Observable<boolean> {


    return this.auth.authState
    .take(1)
    .map(authState => !!authState) 
    .do(auth => !auth ? this.router.navigate(['/auth']) : true);

  }
}
