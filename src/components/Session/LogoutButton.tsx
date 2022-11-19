import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { useContextState } from 'src/common/ContextState/ContextState';
import { ActionTypes } from 'src/common/ContextState/Interfaces';
import { googleClientId } from 'src/common/GoogleUtils';
import GoogleIcon from '@mui/icons-material/Google';

interface LogoutButtonProps {
  className?: string;
  text: string;
  renderIcon?: boolean;
}

const LogoutButton = (props: LogoutButtonProps) => {
  const { className, text, renderIcon } = props;
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
    <GoogleLogout
      clientId={googleClientId}
      buttonText='Log out'
      onLogoutSuccess={onSuccess}
      render={renderProps => (
        <div onClick={renderProps.onClick} className='flex cursor-pointer w-full'>
          <div className='flex flex-row mx-auto'>
            <div className={`${renderIcon ? '' : 'hidden'}`}>
              <GoogleIcon />
            </div>
            <button disabled={renderProps.disabled} className='ml-3'>
              {text}
            </button>
          </div>
        </div>
      )}
    />
  );
};

export default LogoutButton;
