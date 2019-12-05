import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPopupAddComponent } from './event-popup-add.component';

describe('EventPopupAddComponent', () => {
  let component: EventPopupAddComponent;
  let fixture: ComponentFixture<EventPopupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPopupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
