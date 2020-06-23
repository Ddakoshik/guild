import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInfoTableComponent } from './event-info-table.component';

describe('EventInfoTableComponent', () => {
  let component: EventInfoTableComponent;
  let fixture: ComponentFixture<EventInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
