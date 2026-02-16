import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterModalComponent } from './character-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('CharacterModalComponent', () => {
  let component: CharacterModalComponent;
  let fixture: ComponentFixture<CharacterModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterModalComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        MaterialModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

