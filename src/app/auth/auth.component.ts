import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginWithGoogleAction } from '../Store/actions/auth.actions';
import { CoreState } from '../Store/reducers';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor( private store: Store<CoreState> ) { }

  ngOnInit() {  }

  signInWithGoogle() {
    this.store.dispatch(new LoginWithGoogleAction());
  }

}
