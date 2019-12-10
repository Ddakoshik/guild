import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../../../shared/models/event.model';
import { reidDifficultsArreyConstnt } from '../../../shared/models/constants';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'dataTime', 'reidLider', 'raidName', 'raidComposition', 'info', 'action'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @Input() set data(data: PeriodicElement[]) {
    this.dataSource = new MatTableDataSource(data);
  }
  @Output() isAcceptEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() isEditEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() isDeleteEvent: EventEmitter<string> = new EventEmitter<string>();

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
    this.isAcceptEvent.emit(element.id);
    // TODO nead add (user accept event) mechanism
  }

  editEvent(element) {
    this.isEditEvent.emit(element.id);
  }

  deleteEvent(element) {
    this.isDeleteEvent.emit(element.id);
  }

  reidDifficult(reidDifficultId: number) {
    return reidDifficultsArreyConstnt.find(obj => obj.id === reidDifficultId).name;
  }

}
