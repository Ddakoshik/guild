import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class UserDataResolver implements Resolve<any> {
  constructor(private UDataService: UserDataService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.UDataService.getPost(route.paramMap.get('id'));
  }
}
