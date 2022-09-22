export interface State {
  loading: Boolean;
  redirectUrl: string;
  userToken: string;
  user: UserState;
}

export interface UserState {
  firstName: string;
  lastName: string;
  birthdate: string;
  avatar: string;
}

export enum ActionTypes {
  SetLoading = 'SET_LOADING',
  SetRedirectURL = 'SET_REDIRECTURL',
  SetToken = 'SET_TOKEN',
  SetUser = 'SET_USER',
}

export interface Actions {
  type: ActionTypes;
  value: any;
}
