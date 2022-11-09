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
    const userEmail = res.profileObj.email;
    const emailDomain: string = userEmail.split('@')[1];

    localStorage.setItem('token', res.tokenId);
    setContextState({
      type: ActionTypes.SetToken,
      value: res?.tokenId,
    });

    if (!emailDomain.match(/.*\.utn\.edu\.ar.*/gim)) {
      setContextState({
        type: ActionTypes.SetUserValidity,
        value: true,
      });
      navigate('/not-authorized');
      return;
    }

    getProfile()
      .then(user => {
        setContextState({
          type: ActionTypes.SetUser,
          value: { firstName: user.firstName, lastName: user.lastName, birthdate: user.birthdate, avatar: user.avatar },
        });
        navigate(contextState.redirectUrl || '/');
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
