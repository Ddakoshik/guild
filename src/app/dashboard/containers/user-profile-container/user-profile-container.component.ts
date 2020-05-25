import { Component, OnInit } from '@angular/core';
import { user } from '../../../shared/models/constants';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../../../store/reducers';
import {
  openAddCharacterModal,
  openEditCharacterModal,
  getUserProfile,
  updateUserProfile
} from '../../../store/actions/user-profile.action';
import { selectUserProfileData } from '../../../store/selectors';
import { User } from '../../../shared/models/blog.model';
import {Observable} from 'rxjs';

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
  userProfileData$: Observable<User>;

  constructor(private store$: Store<CoreState>) { }

  ngOnInit() {
    this.store$.dispatch(getUserProfile());
    this.userProfileData$ = this.store$.pipe(select(selectUserProfileData));
    // this.loading$ = this.store$.pipe(select(selectLoadingManagement));
  }

  openAddNewCharacterModal (): void {
    this.store$.dispatch(openAddCharacterModal());
  }

  openEditCharacterModal (item: any): void {
    this.store$.dispatch(openEditCharacterModal({characterData: item}));
  }

  updateUserProfileData (userData: User): void {
    this.store$.dispatch(updateUserProfile({profileData: userData}));
  }

}
