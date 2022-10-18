import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useContextState } from 'src/common/ContextState/ContextState';
import { ActionTypes } from 'src/common/ContextState/Interfaces';
import { googleClientId, refreshToken } from 'src/common/GoogleUtils';
import { useNavigate } from 'react-router-dom';
import { getProfile } from 'src/api/VideoService';

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
        clientId: googleClientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res: any) => {
    localStorage.setItem('token', res.tokenId);
    setContextState({
      type: ActionTypes.SetToken,
      value: res?.tokenId,
    });

    getProfile()
      .then(user => {
        navigate(contextState.redirectUrl || '/');
        setContextState({
          type: ActionTypes.SetUser,
          value: { firstName: user.firstName, lastName: user.lastName, birthdate: user.birthdate, avatar: user.avatar },
        });
      })
      .catch();

    refreshToken(res);
  };

  const onFailure = (res: unknown) => {
    console.log('[Login Failed] response:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={googleClientId}
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
