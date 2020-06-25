import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-raid-group-list',
  templateUrl: './raid-group-list.component.html',
  styleUrls: ['./raid-group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaidGroupListComponent implements OnInit {

  tanks: any[] = [];
  heals: any[] = [];
  dps: any[] = [];

  @Input() set chars(data: any[]) {
    this.tanks  = data.filter(x => x.role === 'tank');
    this.heals  = data.filter(x => x.role === 'heal');
    this.dps  = data.filter(x => x.role === 'dps');

  }
  @Input() user: string;
  @Input() event;
  @Output() deletedChar = new EventEmitter();

  constructor() { }

  ngOnInit() {  }

  isCanRemoveCharFromEvent(char: any) {
    return (char.authUserEmail === this.user || this.event.email === this.user);
  }

  delete(char) {
    this.deletedChar.emit(char);
  }

}
