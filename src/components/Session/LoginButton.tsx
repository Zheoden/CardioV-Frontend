import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useContextState } from 'src/common/ContextState/ContextState';
import { ActionTypes } from 'src/common/ContextState/Interfaces';
import { refreshToken } from 'src/common/GoogleUtils';
import { useNavigate } from 'react-router-dom';

interface LoginButtonProps {
  className?: string;
  text: string;
}

const LoginButton = (props: LoginButtonProps) => {
  const { className, text } = props;
  const navigate = useNavigate();
  const { contextState, setContextState } = useContextState();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: '245374883444-nh7avbvlhcso77iad3d27mt5fh5on4u1.apps.googleusercontent.com',
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res: any) => {
    console.log('[Login Success] currentUser:', res);
    setContextState({
      type: ActionTypes.SetToken,
      value: res?.accessToken,
    });
    setContextState({
      type: ActionTypes.SetUser,
      value: res?.profileObj,
    });

    refreshToken(res);
    navigate('/');
  };

  const onFailure = (res: unknown) => {
    console.log('[Login Failed] response:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId='245374883444-nh7avbvlhcso77iad3d27mt5fh5on4u1.apps.googleusercontent.com'
        buttonText='Log in with Google'
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} className={className}>
            {text}
          </button>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn
      />
    </div>
  );
};

export default LoginButton;
