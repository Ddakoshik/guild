import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {EventModel, PeriodicElement} from '../../../shared/models/event.model';
import { reidDifficultyArrayConst } from '../../../shared/models/constants';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'dataTime', 'reidLeader', 'raidName', 'raidComposition', 'info', 'action'];
  dataSource: MatTableDataSource<EventModel>;

  @Input() set data(data: EventModel[]) {
    this.dataSource = new MatTableDataSource(data);
  }
  @Output() isAcceptEvent: EventEmitter<EventModel> = new EventEmitter<EventModel>();
  @Output() isEditEvent: EventEmitter<EventModel> = new EventEmitter<EventModel>();
  @Output() isDeleteEvent: EventEmitter<EventModel> = new EventEmitter<EventModel>();

  get isShowTable() {
    return this.dataSource.data ? !!this.dataSource.data.length : false;
  }

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  acceptEvent(element) {
    this.isAcceptEvent.emit(element);
  }

  editEvent(element) {
    this.isEditEvent.emit(element);
  }

  deleteEvent(element) {
    this.isDeleteEvent.emit(element);
  }

  reidDifficult(reidDifficultId: number) {
    return reidDifficultyArrayConst.find(obj => obj.id === reidDifficultId).name;
  }

}
