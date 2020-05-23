import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAddPageComponent } from './blog-add-page.component';
import { MaterialModule } from '../../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('BlogAddPageComponent', () => {
  let component: BlogAddPageComponent;
  let fixture: ComponentFixture<BlogAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAddPageComponent ],
      imports: [
        MaterialModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
