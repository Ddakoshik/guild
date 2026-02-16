import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBigCardComponent } from './blog-big-card.component';

describe('BlogBigCardComponent', () => {
  let component: BlogBigCardComponent;
  let fixture: ComponentFixture<BlogBigCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogBigCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

