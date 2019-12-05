import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPopupJoinComponent } from './event-popup-join.component';

describe('EventPopupJoinComponent', () => {
  let component: EventPopupJoinComponent;
  let fixture: ComponentFixture<EventPopupJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPopupJoinComponent ]
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
