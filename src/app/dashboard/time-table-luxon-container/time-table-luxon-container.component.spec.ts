import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableLuxonContainerComponent } from './time-table-luxon-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TimeTableLuxonContainerComponent', () => {
  let component: TimeTableLuxonContainerComponent;
  let fixture: ComponentFixture<TimeTableLuxonContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableLuxonContainerComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableLuxonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
