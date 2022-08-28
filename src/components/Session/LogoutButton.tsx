import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useContextState } from 'src/common/ContextState/ContextState';
import { ActionTypes } from 'src/common/ContextState/Interfaces';
import { refreshToken } from 'src/common/GoogleUtils';

const LogoutButton = () => {
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

  const onSuccess = () => {
    console.log('Logout Success');
    setContextState({
      type: ActionTypes.SetToken,
      value: '',
    });
  };

  return (
    <div>
      <GoogleLogout
        clientId='245374883444-nh7avbvlhcso77iad3d27mt5fh5on4u1.apps.googleusercontent.com'
        buttonText='Log out'
        onLogoutSuccess={onSuccess}
        /* render={renderProps => <span>HOLAAAA</span>} */
      />
    </div>
  );
};

export default LogoutButton;
