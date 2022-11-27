export interface State {
  loading: Boolean;
  redirectUrl: string;
  userToken: string;
  invalidUser: boolean;
  user: UserState;
}

export interface UserState {
  firstName: string;
  lastName: string;
  birthdate: string;
  avatar: string;
  email: string;
}

export enum ActionTypes {
  SetLoading = 'SET_LOADING',
  SetRedirectURL = 'SET_REDIRECTURL',
  SetToken = 'SET_TOKEN',
  SetUser = 'SET_USER',
  SetUserValidity = 'SET_USER_VALIDITY',
}

export interface Actions {
  type: ActionTypes;
  value: any;
}
