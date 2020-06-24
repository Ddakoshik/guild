import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidGroupListComponent } from './raid-group-list.component';

describe('RaidGroupListComponent', () => {
  let component: RaidGroupListComponent;
  let fixture: ComponentFixture<RaidGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
