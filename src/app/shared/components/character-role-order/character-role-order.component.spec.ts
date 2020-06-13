import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRoleOrderComponent } from './character-role-order.component';

describe('CharacterRoleOrderComponent', () => {
  let component: CharacterRoleOrderComponent;
  let fixture: ComponentFixture<CharacterRoleOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterRoleOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterRoleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
