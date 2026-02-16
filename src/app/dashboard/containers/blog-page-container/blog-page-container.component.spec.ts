import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageContainerComponent } from './blog-page-container.component';

describe('BlogPageContainerComponent', () => {
  let component: BlogPageContainerComponent;
  let fixture: ComponentFixture<BlogPageContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

