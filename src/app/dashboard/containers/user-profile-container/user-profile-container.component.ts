import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../../../store/reducers';
import {
  openAddCharacterModal,
  openEditCharacterModal,
  getUserProfile,
  updateUserProfile,
  getCharacters,
  openDeleteCharacterConfirmationModal
} from '../../../store/actions';
import { selectUserProfileData, selectCharactersList } from '../../../store/selectors';
import { User, Character } from '../../../shared/models/blog.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile-container',
  templateUrl: './user-profile-container.component.html',
  styleUrls: ['./user-profile-container.component.scss']
})
export class UserProfileContainerComponent implements OnInit {

  userProfileData$: Observable<User>;
  charactersList$: Observable<Character[]>;

  constructor(private store$: Store<CoreState>) { }

  ngOnInit() {
    this.store$.dispatch(getUserProfile());
    this.store$.dispatch(getCharacters());
    this.userProfileData$ = this.store$.pipe(select(selectUserProfileData));
    this.charactersList$ = this.store$.pipe(select(selectCharactersList));
    // this.loading$ = this.store$.pipe(select(selectLoadingManagement));
  }

  updateUserProfileData(userData: User): void {
    this.store$.dispatch(updateUserProfile({ profileData: userData }));
  }

  openAddNewCharacterModal(): void {
    this.store$.dispatch(openAddCharacterModal());
  }

  openEditCharacterModal(item: Character): void {
    this.store$.dispatch(openEditCharacterModal({ characterData: item }));
  }

  deleteCharacter(item: Character): void {
    this.store$.dispatch(openDeleteCharacterConfirmationModal({ characterData: item }));
  }

}
