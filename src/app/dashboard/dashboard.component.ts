import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogoutFromPlatformAction } from '../store/actions/auth.actions';
import { CoreState } from '../store/reducers';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store$: Store<CoreState>) {  }

  ngOnInit() {

  }

  doLogout() {
    this.store$.dispatch(new LogoutFromPlatformAction());
  }

}
