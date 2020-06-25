import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {EventModel, PeriodicElement} from '../../../shared/models/event.model';
import { reidDifficultyArrayConst } from '../../../shared/models/constants';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUserEmail } from '../../../store/selectors';
import { CoreState } from '../../../store/reducers';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['race', 'id', 'dataTime', 'reidLeader', 'raidName', 'raidComposition', 'info', 'action'];
  dataSource: MatTableDataSource<EventModel>;
  subscriptions: Subscription[] = [];
  useremail: string;

  @Input() set data(data: EventModel[]) {
    this.dataSource = new MatTableDataSource(data);
  }
  @Output() isAcceptEvent: EventEmitter<EventModel> = new EventEmitter<EventModel>();
  @Output() isEditEvent: EventEmitter<EventModel> = new EventEmitter<EventModel>();
  @Output() isDeleteEvent: EventEmitter<EventModel> = new EventEmitter<EventModel>();

  get isShowTable() {
    return this.dataSource.data ? !!this.dataSource.data.length : false;
  }

  constructor(private store$: Store<CoreState>) { }

  ngOnInit() {
    this.subscriptions.push(
      this.store$.pipe(select(selectUserEmail)).subscribe(user => this.useremail = user)
    );
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

  ngOnDestroy() {
    this.subscriptions.forEach(sbs => sbs.unsubscribe());
  }
}
