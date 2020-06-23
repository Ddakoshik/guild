import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CoreState } from '../../../store/reducers';
import { Blog } from '../../../shared/models/blog.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectShortBlogList } from '../../../store/selectors/blog.selectors';
import { getBlogs } from '../../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-container',
  templateUrl: './main-page-container.component.html',
  styleUrls: ['./main-page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageContainerComponent implements OnInit {

  selectShortBlogList$: Observable<Blog[]>;

  constructor(private store$: Store<CoreState>, private router: Router) {
  }


  ngOnInit() {
    this.store$.dispatch(getBlogs());
    this.selectShortBlogList$ = this.store$.pipe(select(selectShortBlogList));
  }


  joinRaid(): void {
    this.router.navigate(['/dashboard/timeanons']);  // TODO: move in effect and after redirect open creat event modal
  }

  ceateRaid(): void {
    this.router.navigate(['/dashboard/timeanons']); // TODO: move in effect
  }

}
