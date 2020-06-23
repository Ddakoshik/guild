import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
