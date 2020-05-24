import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPopupJoinComponent } from './event-popup-join.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('EventPopupJoinComponent', () => {
  let component: EventPopupJoinComponent;
  let fixture: ComponentFixture<EventPopupJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPopupJoinComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPopupJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
