import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { getBlogs, getBlogsFail, getBlogsSuccess } from '../actions/blog.actions';
import { AngularFirestore } from '@angular/fire/firestore';
import { Blog } from '../../shared/models/blog.model';
import { CoreState } from '../reducers';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable()
export class BlogEffects {

    getBlogs$ = createEffect(() => this.actions$.pipe(
      ofType(getBlogs),
      switchMap((action) => {
        return this.db.collection<Blog>('blog', ref => ref.orderBy('id'))
        .valueChanges({ idField: 'docId'})
        .pipe(
          map((data) => {
            return getBlogsSuccess({blogsList: data});
          }),
          catchError(() => of(getBlogsFail()))
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private db: AngularFirestore,
    private store$: Store<CoreState>
  ) {}
}
