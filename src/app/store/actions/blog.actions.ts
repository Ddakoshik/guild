import {createAction, props} from '@ngrx/store';
import { Blog } from '../../shared/models/blog.model';


export const getBlogs = createAction(
  '[Blog Api] Get Blogs'
);
export const getBlogsSuccess = createAction(
  '[Blog] Get Blogs Success',
  props<{blogsList: Blog[]}>()
);
export const getBlogsFail = createAction(
  '[Blog] Get Blogs Fail'
);

