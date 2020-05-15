import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  profileData: any = null;

  @Input() set userData(data: any) {
    this.profileData = data;
    this.initForm();
    this.updateFormValue();
  }

  constructor() { }

  ngOnInit() {
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
