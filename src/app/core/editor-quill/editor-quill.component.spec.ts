import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorQuillComponent } from './editor-quill.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EditorQuillComponent', () => {
  let component: EditorQuillComponent;
  let fixture: ComponentFixture<EditorQuillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorQuillComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorQuillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
