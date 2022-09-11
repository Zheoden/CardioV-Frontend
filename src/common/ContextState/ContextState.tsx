import React, { useContext } from 'react';
import { Actions, ActionTypes, State } from './Interfaces';

export const initialState: State = {
  loading: true,
  redirectUrl: '',
  user: {
    token: '',
    email: '',
    familyName: '',
    givenName: '',
    googleId: '',
    imageUrl: '',
  },
};

export const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SetLoading:
      return {
        ...state,
        loading: action.value,
      };
    case ActionTypes.SetRedirectURL:
      return {
        ...state,
        redirectUrl: action.value,
      };
    case ActionTypes.SetToken:
      return {
        ...state,
        user: {
          ...state.user,
          token: action.value,
        },
      };
    case ActionTypes.SetUser:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.value,
        },
      };
    default:
      return state;
  }
};

export const initialContext = {
  contextState: initialState,
  setContextState: (value: Actions) => {},
};

const Cont = React.createContext(initialContext);

export function ContextProvider(props: any) {
  const { children, initial = initialState } = props;
  const [state, dispatch] = React.useReducer(reducer, initial);

  const contextState = state;
  const setContextState = dispatch;

  return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>;
}

export const useContextState = () => useContext(Cont);
