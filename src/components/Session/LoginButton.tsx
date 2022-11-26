import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useContextState } from 'src/common/ContextState/ContextState';
import { ActionTypes } from 'src/common/ContextState/Interfaces';
import { googleClientId, refreshToken } from 'src/common/GoogleUtils';
import { useNavigate } from 'react-router-dom';
import { getProfile } from 'src/api/VideoService';
import GoogleIcon from '@mui/icons-material/Google';

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

    getProfile({
      email: res.profileObj.email,
      avatar: res.profileObj.imageUrl,
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
    })
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
    <GoogleLogin
      clientId={googleClientId}
      buttonText='Log in with Google'
      render={renderProps => (
        <div onClick={renderProps.onClick} className='flex cursor-pointer w-full'>
          <div className='mx-auto'>
            <GoogleIcon />
            <button disabled={renderProps.disabled} className='ml-3'>
              {text}
            </button>
          </div>
        </div>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn
    />
  );
};

export default LoginButton;
