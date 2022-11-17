import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { useContextState } from 'src/common/ContextState/ContextState';
import { ActionTypes } from 'src/common/ContextState/Interfaces';
import { googleClientId } from 'src/common/GoogleUtils';

interface LogoutButtonProps {
  className?: string;
  text: string;
}

const LogoutButton = (props: LogoutButtonProps) => {
  const { className, text } = props;
  const { contextState, setContextState } = useContextState();
  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: googleClientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = () => {
    setContextState({
      type: ActionTypes.SetToken,
      value: '',
    });
    setContextState({
      type: ActionTypes.SetUserValidity,
      value: false,
    });
    navigate('/');
  };

  return (
    <div className='flex grow'>
      <GoogleLogout
        clientId={googleClientId}
        buttonText='Log out'
        onLogoutSuccess={onSuccess}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} className={className}>
            {text}
          </button>
        )}
      />
    </div>
  );
};

export default LogoutButton;
