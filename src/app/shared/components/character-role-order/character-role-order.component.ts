import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-character-role-order',
  templateUrl: './character-role-order.component.html',
  styleUrls: ['./character-role-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterRoleOrderComponent implements OnInit {


  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];



  @Input() characterRoleOrder;
  @Input() classId;

  @Output() changeRoleOrder: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
}
