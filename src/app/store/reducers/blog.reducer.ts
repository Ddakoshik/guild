import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/blog.actions';
import { Blog } from '../../shared/models/blog.model';


export interface State {
  blogList: Blog[];
}

export const initialState = {
  blogList: [],
};

const blogReducer = createReducer(
  initialState,

  on(actions.getBlogsSuccess, (state, action) => ({
    ...state,
    blogList: [...action.blogsList]
  }))

);

export function reducer(state: State | undefined, action: Action) {
  return blogReducer(state, action);
}
