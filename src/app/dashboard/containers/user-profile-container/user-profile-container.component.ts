import { Component, OnInit } from '@angular/core';
import { user } from '../../../shared/models/constants';
import { Store } from '@ngrx/store';
import { CoreState } from '../../../store/reducers';
import { openAddCharacterModal, openEditCharacterModal } from '../../../store/actions/user-profile.action';

@Component({
  selector: 'app-user-profile-container',
  templateUrl: './user-profile-container.component.html',
  styleUrls: ['./user-profile-container.component.scss']
})
export class UserProfileContainerComponent implements OnInit {

  characters = [
    {
      name: 'Aizik',
      race: 'ork',
      class: 'paladin'
    },
    {
      name: 'Utumba',
      race: 'ork',
      class: 'shaman'
    }
  ];

  userData = user;

  constructor(private store$: Store<CoreState>) { }

  ngOnInit() {
  }

  openAddNewCharacterModal (): void {
    this.store$.dispatch(openAddCharacterModal());
  }

  openEditCharacterModal (item: any): void {
    this.store$.dispatch(openEditCharacterModal({characterData: item}));
  }

}
