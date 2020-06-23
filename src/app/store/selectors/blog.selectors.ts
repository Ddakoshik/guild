import { createSelector } from '@ngrx/store';
import * as fromCoreModule from '../reducers';
import * as fromBlog from '../reducers/blog.reducer';
import { Blog } from '../../shared/models/blog.model';


export const selectBlog = createSelector(
    fromCoreModule.selectCoreState,
    (state: fromCoreModule.CoreState): fromBlog.State => state.Blog
);

export const selectBlogList = createSelector(
    selectBlog,
    (state: fromBlog.State): Blog[] => state.blogList
);

export const selectShortBlogList = createSelector(
    selectBlog,
    (state: fromBlog.State): Blog[] => {
        return state.blogList.slice(0, 2);
    }
);
