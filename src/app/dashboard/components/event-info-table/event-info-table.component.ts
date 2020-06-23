import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-event-info-table',
  templateUrl: './event-info-table.component.html',
  styleUrls: ['./event-info-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventInfoTableComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
