import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-page-container',
  templateUrl: './main-page-container.component.html',
  styleUrls: ['./main-page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
