import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../../../shared/models/event.model';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'dataTime', 'reidLider', 'raidName', 'raidComposition', 'info', 'action'];
  dataSource;

  @Input() set data(data: PeriodicElement[]) {
    this.dataSource = new MatTableDataSource(data);
  }

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  acceptEvent(element) {
    // TODO nead add (user accept event) mechanism
  }

  editEvent(element) {
    // TODO add update mechanism in firestore
  }

  deleteEvent(element) {
    // TODO delete event from firestore
  }

}
