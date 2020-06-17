import { AuthActionTypes, AuthAction } from '../actions/auth.actions';
import { GoogleAuthInfo } from '../../shared/models/auth.model';


export interface AuthState {
  googleAuthInfo: GoogleAuthInfo;
  userInfo: any;
}

export const initialState = {
  googleAuthInfo: {uid: null, displayName: null, photoURL: null, email: null},
  userInfo: []
};

export function reducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginWithGoogleSuccess:
      return {
        ...state,
        googleAuthInfo: action.payload

      };
    case AuthActionTypes.GetGoogleUserInfoSuccess:
    return {
      ...state,
      googleAuthInfo: action.payload

    };

    default:
      return state;
  }
}
