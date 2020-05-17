import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-characters-tile',
  templateUrl: './game-characters-tile.component.html',
  styleUrls: ['./game-characters-tile.component.scss']
})
export class GameCharactersTileComponent implements OnInit {

  @Input() characters: any;  // TODO add type
  @Output() addNewCharacter: EventEmitter<null> = new EventEmitter<null>();
  @Output() editCharacter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  openAddNewCharacterModal() {
    this.addNewCharacter.emit();
  }

  openEditCharacterModal(item: any) {
    this.editCharacter.emit(item);
  }

}
