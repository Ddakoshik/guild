import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAddPageComponent } from './blog-add-page.component';

describe('BlogAddPageComponent', () => {
  let component: BlogAddPageComponent;
  let fixture: ComponentFixture<BlogAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAddPageComponent ]
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
