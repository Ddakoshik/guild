import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../shared/models/blog.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  profileData: User = null;
  isEdit = false;

  @Input() set userData(data: User) {
    if (data) {
      this.profileData = data;
      this.initForm();
      this.updateFormValue();
    }
  }

  @Output() updateUserProfileData: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  updateFormValue(): void {
    const formKeys = Object.keys(this.profileForm.value);
    const control = this.profileForm.controls;
    formKeys.map(key => {
      control[key].setValue(this.profileData[key]);
    });
  }

  updateUserProfile(): void {
    if (this.profileForm.valid) {
      const formValue = this.profileForm.value;
      this.updateEditAndFormState();
      this.updateUserProfileData.emit(formValue);
    }
  }

  private initForm(): void {
    this.profileForm = new FormGroup({
      userNickname: new FormControl({value: '', disabled: !this.isEdit}, Validators.required),
      userEmail: new FormControl({value: '', disabled: !this.isEdit}, Validators.required),
      userAvatarURL: new FormControl({value: '', disabled: !this.isEdit}),
    });
  }

  editProfileData() {
    this.updateEditAndFormState();
  }

  cencelEditProfile() {
    this.updateEditAndFormState();
    this.updateFormValue();
  }

  updateEditAndFormState() {
    this.isEdit = !this.isEdit;
    const action = this.isEdit ? 'enable' : 'disable';
    this.profileForm[action]();
  }

}
