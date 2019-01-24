import { AuthActionTypes, AuthAction } from '../actions/auth.actions';


export interface AuthState {
  googleAuthInfo: any;
  userInfo: any;
}


export const initialState = {
  googleAuthInfo: [],
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


export const getGoogleAuthInfo = (state: AuthState) => state.googleAuthInfo;
export const getUserInfo = (state: AuthState) => state.userInfo;
