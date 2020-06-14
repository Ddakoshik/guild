import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../../shared/models/blog.model';

@Component({
  selector: 'app-game-characters-tile',
  templateUrl: './game-characters-tile.component.html',
  styleUrls: ['./game-characters-tile.component.scss']
})
export class GameCharactersTileComponent implements OnInit {

  @Input() characters: Character[] = [];
  @Output() addNewCharacter: EventEmitter<null> = new EventEmitter<null>();
  @Output() editCharacter: EventEmitter<Character> = new EventEmitter<Character>();
  @Output() deleteCherecer: EventEmitter<Character> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  openAddNewCharacterModal() {
    this.addNewCharacter.emit();
  }

  openEditCharacterModal(item: Character) {
    this.editCharacter.emit(item);
  }

  openDeleteCherecerConfirmation(item: Character) {
    this.deleteCherecer.emit(item);
  }

}
