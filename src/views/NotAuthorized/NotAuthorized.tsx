import LogoutButton from 'src/components/Session/LogoutButton';
import GoogleIcon from '@mui/icons-material/Google';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/401-error.json';
import { useEffect } from 'react';
import { useContextState } from 'src/common/ContextState/ContextState';
import { useNavigate } from 'react-router-dom';

const NotAuthorized = () => {
  const { contextState, setContextState } = useContextState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!contextState.invalidUser) {
      navigate('/');
    }
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-col my-auto p-16 bg-slate-50 shadow-2xl'>
        <h1 className='mx-auto mb-8 text-2xl font-bold font-mono'>Not Autorized</h1>
        <Lottie options={defaultOptions} height={400} width={400} />
        <div className='flex flex-row bg-cyan-500 hover:bg-cyan-700 rounded-full py-2 px-4'>
          <GoogleIcon />
          <LogoutButton text='Log Out' className='mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default NotAuthorized;
