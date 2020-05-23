import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCharactersTileComponent } from './game-characters-tile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('GameCharactersTileComponent', () => {
  let component: GameCharactersTileComponent;
  let fixture: ComponentFixture<GameCharactersTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCharactersTileComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCharactersTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
