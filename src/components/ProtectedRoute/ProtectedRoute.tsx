import { Navigate } from 'react-router-dom';
import { useContextState } from 'src/common/ContextState/ContextState';
import { ActionTypes } from 'src/common/ContextState/Interfaces';

const Protected = (props: any) => {
  const { contextState, setContextState } = useContextState();

  const { children } = props;
  if (!contextState.userToken) {
    setContextState({
      type: ActionTypes.SetRedirectURL,
      value: window.location.pathname !== 'login' ? window.location.pathname : '/',
    });
    return <Navigate to='/login' replace />;
  }
  if (contextState.invalidUser) {
    return <Navigate to='/not-authorized' replace />;
  }
  return children;
};
export default Protected;
