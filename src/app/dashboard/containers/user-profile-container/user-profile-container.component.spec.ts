import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileContainerComponent } from './user-profile-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UserProfileContainerComponent', () => {
  let component: UserProfileContainerComponent;
  let fixture: ComponentFixture<UserProfileContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileContainerComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
