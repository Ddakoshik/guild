import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-raid-group-list',
  templateUrl: './raid-group-list.component.html',
  styleUrls: ['./raid-group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaidGroupListComponent implements OnInit {
  @Input('chars') chars: any[];
  @Input('user') user: string;
  @Input('event') event;
  @Output() deletedChar = new EventEmitter();
  tanks = [];
  heals = [];
  dps = [];
  constructor() { }

  ngOnInit() {
    // console.log('>', this.chars);
    // console.log('U', this.user);
    // console.log('##', this.event);

    this.tanks  = this.chars.filter(x => x.role === 'tank');
    this.heals  = this.chars.filter(x => x.role === 'heal');
    this.dps  = this.chars.filter(x => x.role === 'dps');
  }

  delete(char) {
    this.deletedChar.emit(char);
  }

}
