import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { GetGoogleUserInfoAction } from './Store/actions';
import { CoreState } from './Store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store<CoreState>) {  }

  ngOnInit() {
    this.store.dispatch(new GetGoogleUserInfoAction());
  }
}
