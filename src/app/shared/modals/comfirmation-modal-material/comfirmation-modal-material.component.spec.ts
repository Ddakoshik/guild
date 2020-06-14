import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmationModalMaterialComponent } from './comfirmation-modal-material.component';

describe('ComfirmationModalMaterialComponent', () => {
  let component: ComfirmationModalMaterialComponent;
  let fixture: ComponentFixture<ComfirmationModalMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComfirmationModalMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfirmationModalMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
