import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogShowPostsComponent } from './blog-show-posts.component';

describe('BlogShowPostsComponent', () => {
  let component: BlogShowPostsComponent;
  let fixture: ComponentFixture<BlogShowPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogShowPostsComponent ]
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
