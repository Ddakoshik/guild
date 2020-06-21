import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageContainerComponent } from './main-page-container.component';

describe('MainPageContainerComponent', () => {
  let component: MainPageContainerComponent;
  let fixture: ComponentFixture<MainPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
