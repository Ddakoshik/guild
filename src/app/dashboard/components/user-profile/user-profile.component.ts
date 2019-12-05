import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from '../../../shared/models/constants';

export class Profile {
  gameEmail: string;     // string   используется для рассылки уведомлений
  googleAvatarURL: string;
  charecterAvatarURL: string;  // string  если пустой используется googleAvatarURL
  mainCharecters: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  profileData: any = null;

  constructor() { }

  ngOnInit() {
    this.profileData = user;

    this.initForm();
    this.updateFormValue();
  }

  updateFormValue(): void {
    const formKeys = Object.keys(this.profileForm.value);
    const control = this.profileForm.controls;
    formKeys.map(key => {
      control[key].setValue(this.profileData[key]);
    });

    console.log(this.profileForm.value);
  }

  submitForm(): void {
    const formValue = this.profileForm.value;
    console.log(formValue);
  }

  private initForm(): void {
    this.profileForm = new FormGroup({
      gameEmail: new FormControl(''),
      googleAvatarURL: new FormControl(''),
      charecterAvatarURL: new FormControl(''),
      mainCharecters: new FormControl('')
    });
  }
}
