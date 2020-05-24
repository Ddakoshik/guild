import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogShowPostsComponent } from './blog-show-posts.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BlogShowPostsComponent', () => {
  let component: BlogShowPostsComponent;
  let fixture: ComponentFixture<BlogShowPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogShowPostsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogShowPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
