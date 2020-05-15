import { Component, OnInit } from '@angular/core';
import { user } from '../../../shared/models/constants';

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

  constructor() { }

  ngOnInit() {
  }

}
