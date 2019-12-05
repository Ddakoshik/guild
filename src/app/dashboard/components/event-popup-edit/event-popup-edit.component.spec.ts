import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPopupEditComponent } from './event-popup-edit.component';

describe('EventPopupEditComponent', () => {
  let component: EventPopupEditComponent;
  let fixture: ComponentFixture<EventPopupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPopupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPopupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
