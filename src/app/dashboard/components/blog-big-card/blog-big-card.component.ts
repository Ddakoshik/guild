import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Blog } from '../../../shared/models/blog.model';

@Component({
  selector: 'app-blog-big-card',
  templateUrl: './blog-big-card.component.html',
  styleUrls: ['./blog-big-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogBigCardComponent implements OnInit {

  @Input() blog: Blog;

  constructor() { }

  ngOnInit() {
  }

}
