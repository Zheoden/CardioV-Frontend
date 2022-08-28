export interface State {
  loading: Boolean;
  user: UserState;
}

export interface UserState extends GoogleUser {
  token: string;
}

export enum ActionTypes {
  SetLoading = 'SET_LOADING',
  SetToken = 'SET_TOKEN',
  SetUser = 'SET_USER',
}

export interface Actions {
  type: ActionTypes;
  value: any;
}

export interface GoogleUser {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
}
