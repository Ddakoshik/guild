import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Blog } from '../../../shared/models/blog.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { getBlogs } from '../../../store/actions';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../../../store/reducers';
import { selectBlogList } from '../../../store/selectors/blog.selectors';

@Component({
  selector: 'app-blog-page-container',
  templateUrl: './blog-page-container.component.html',
  styleUrls: ['./blog-page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPageContainerComponent implements OnInit {

  private blogCollection: AngularFirestoreCollection<Blog>;
  blogList$: Observable<Blog[]>;

  constructor(private store$: Store<CoreState>, private router: Router) {
  }


  ngOnInit() {
    this.store$.dispatch(getBlogs());
    this.blogList$ = this.store$.pipe(select(selectBlogList));
  }

  addNewPostInBlog() {
    this.router.navigate(['/dashboard/blog/add']);
  }

}
