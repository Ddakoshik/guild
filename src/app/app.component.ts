import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { GetGoogleUserInfoAction } from './store/actions';
import { CoreState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store$: Store<CoreState>) {  }

  ngOnInit() {
    this.store$.dispatch(new GetGoogleUserInfoAction());
  }
}
