import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/reducer/main.reducer';
import { LoginWithGoogleAction } from '../Store/action/main.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {  }

  signInWithGoogle() {
    this.store.dispatch(new LoginWithGoogleAction());
  }

}
