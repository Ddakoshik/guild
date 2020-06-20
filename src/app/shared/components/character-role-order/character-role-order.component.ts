import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { charactersSpecs } from '../../../shared/models/constants';

@Component({
  selector: 'app-character-role-order',
  templateUrl: './character-role-order.component.html',
  styleUrls: ['./character-role-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterRoleOrderComponent implements OnInit, OnChanges {
  @Input() characterRoleOrder: { active: string[], deprecated: string[] };
  @Input() classId;
  @Output() changeRoleOrder: EventEmitter<any> = new EventEmitter<any>();

  active: string[] = [];
  deprecated: string[] = [];
  specArray = charactersSpecs;

  constructor() { }

  ngOnInit() {
    if (this.characterRoleOrder &&
      (this.characterRoleOrder.active.length ||
        this.characterRoleOrder.deprecated.length)) {
      this.active = this.characterRoleOrder.active;
      this.deprecated = this.characterRoleOrder.deprecated;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('classId')) {
      this.active = [...this.specArray[changes.classId.currentValue]];
      this.deprecated = [];
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    this.changeRoleOrder.emit({ active: this.active, deprecated: this.deprecated });
  }

  getUrl(iconType: string, iconName: string) {
    return `../../../assets/img/${iconType}/${iconName}`;
  }

}
