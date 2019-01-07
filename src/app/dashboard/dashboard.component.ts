import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/reducer/main.reducer';
import { LogoutFromPlatformAction } from '../Store/action/main.actions';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<AppState>) {  }

  ngOnInit() {

  }

  doLogout() {
    this.store.dispatch(new LogoutFromPlatformAction());
  }

}
