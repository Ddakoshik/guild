import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class UserDataResolver implements Resolve<any> {
  constructor(private UDataService: UserDataService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const userdatatest = this.UDataService.getUserdata();
    console.log('email', userdatatest.lk.b.email);
    return this.UDataService.getUserdata();
  }
}
