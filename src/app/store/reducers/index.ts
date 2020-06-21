import * as fromAuth from './auth.reducer';
import * as fromUserProfile from './user-profile.reducer';
import * as fromBlog from './blog.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface CoreState {
    Auth: fromAuth.AuthState;
    UserProfile: fromUserProfile.State;
    Blog: fromBlog.State;
}

export const reducers = {
    Auth: fromAuth.reducer,
    UserProfile: fromUserProfile.reducer,
    Blog: fromBlog.reducer,
};

export const selectCoreState = createFeatureSelector<CoreState>('core');




