import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-characters-tile',
  templateUrl: './game-characters-tile.component.html',
  styleUrls: ['./game-characters-tile.component.scss']
})
export class GameCharactersTileComponent implements OnInit {

  @Input() characters: any;  // TODO add type

  constructor() { }

  ngOnInit() {
  }

  addNewCharecter() {
    console.log('open modal and add new charecter');  // TODO add new charecters
  }

}
