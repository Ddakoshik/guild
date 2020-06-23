import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Blog } from '../../../shared/models/blog.model';

@Component({
  selector: 'app-blog-small-card',
  templateUrl: './blog-small-card.component.html',
  styleUrls: ['./blog-small-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogSmallCardComponent implements OnInit {

  @Input() blog: Blog;

  constructor() { }

  ngOnInit() {
  }

}
