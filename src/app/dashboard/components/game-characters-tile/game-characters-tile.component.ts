import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../../shared/models/blog.model';
import {
  fractionOfCharactersConstnt,
  classOfCharactersConstnt,
  raceOfCharactersConstnt,
  sexOfCharactersConstnt
} from '../../../shared/models/constants';
import { FullCharacterModel } from '../../../shared/models/profile.model';

@Component({
  selector: 'app-game-characters-tile',
  templateUrl: './game-characters-tile.component.html',
  styleUrls: ['./game-characters-tile.component.scss']
})
export class GameCharactersTileComponent implements OnInit {

  classOfCharacters = classOfCharactersConstnt;
  raceOfCharacters = raceOfCharactersConstnt;
  fractionOfCharacters = fractionOfCharactersConstnt;
  sexOfCharacters = sexOfCharactersConstnt;
  charactersList: FullCharacterModel[] = [];

  @Input() set characters(data: Character[]) {

    this.charactersList = data.map(val => {
      const item = {
        ...val,
        sex: this.sexOfCharacters.find(x => x.id === val.sexId),
        fraction: this.fractionOfCharacters.find(x => x.id === val.fractionId),
        class: this.classOfCharacters.find(x => x.id === val.classId),
        race: this.raceOfCharacters.find(x => x.id === val.raceId)
      };
      return item;
    });
  }
  @Output() addNewCharacter: EventEmitter<null> = new EventEmitter<null>();
  @Output() editCharacter: EventEmitter<Character> = new EventEmitter<Character>();
  @Output() deleteCharacter: EventEmitter<Character> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  openAddNewCharacterModal() {
    this.addNewCharacter.emit();
  }

  openEditCharacterModal(item: Character) {
    this.editCharacter.emit(item);
  }

  openDeleteCharacterConfirmation(item: Character) {
    this.deleteCharacter.emit(item);
  }

  getUrl(iconType: string, iconName: string) {
    return `../../../assets/img/${iconType}/${iconName}`;
  }

}
