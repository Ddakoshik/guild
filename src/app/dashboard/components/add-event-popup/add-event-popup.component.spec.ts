import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventPopupComponent } from './add-event-popup.component';

describe('AddEventPopupComponent', () => {
  let component: AddEventPopupComponent;
  let fixture: ComponentFixture<AddEventPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
