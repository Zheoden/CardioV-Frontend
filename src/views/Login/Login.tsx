import LoginButton from 'src/components/Session/LoginButton';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-col my-auto p-16 bg-slate-50 shadow-2xl'>
        <h1 className='mx-auto mb-8 text-2xl font-bold font-mono	'>Login</h1>
        <div className='flex flex-row bg-cyan-500 hover:bg-cyan-700 rounded-full py-2 px-4'>
          <GoogleIcon />
          <LoginButton text='Iniciar Sesion' className='ml-3' />
        </div>
      </div>
    </div>
  );
};

export default Login;
