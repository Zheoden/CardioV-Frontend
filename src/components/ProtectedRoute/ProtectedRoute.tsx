import { Navigate } from 'react-router-dom';
import { useContextState } from 'src/common/ContextState/ContextState';

const Protected = (props: any) => {
  const { contextState, setContextState } = useContextState();

  const { children } = props;
  if (!contextState.user.token) {
    return <Navigate to='/login' replace />;
  }
  return children;
};
export default Protected;
